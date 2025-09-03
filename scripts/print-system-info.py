import platform
import subprocess
import sys
import tempfile
from pathlib import Path

import cpuinfo
import distro
import psutil


def get_pretty_os_name() -> str:
    """Returns a human-readable name for the current operating system."""
    if sys.platform.startswith("linux"):
        return distro.name(pretty=True)
    else:
        return platform.system()


def bytes_to_human(n: int) -> str:
    """Convert `n` bytes into a human-readable size string.

    >>> bytes_to_human(10000)
    '9.8KiB'
    >>> bytes_to_human(100001221)
    '95.4MiB'
    """
    # http://code.activestate.com/recipes/578019
    symbols = ("Ki", "Mi", "Gi", "Ti", "Pi", "Ei", "Zi", "Yi")
    prefix = {}
    for i, s in enumerate(symbols):
        prefix[s] = 1 << (i + 1) * 10
    for s in reversed(symbols):
        if n >= prefix[s]:
            value = float(n) / prefix[s]
            return f"{value:.1f}{s}"
    return f"{n}"


def run_c_code(code: str, options: list[str] = None) -> str:
    """Compile and run C code, return stdout."""
    if options is None:
        options = []
    with tempfile.TemporaryDirectory() as temp_dir:
        temp_path = Path(temp_dir)
        c_file = temp_path / "prog.c"
        exe_file = temp_path / "prog.exe"

        c_file.write_text(code)
        try:
            subprocess.run(
                ["gcc", str(c_file), "-o", str(exe_file)] + options, check=True
            )
            return subprocess.check_output([str(exe_file)], text=True).strip()
        except subprocess.CalledProcessError:
            return "none"


pretty_os_name = get_pretty_os_name()

cpu_brand = cpuinfo.get_cpu_info()["brand_raw"]
cpu_count = psutil.cpu_count(logical=False)
logical_cpu_count = psutil.cpu_count(logical=True)

total_memory = psutil.virtual_memory().total

gcc_version = subprocess.run(
    ["gcc", "--version"], capture_output=True, text=True, check=True
).stdout.splitlines()[0]

flint_version = run_c_code(
    """
    #include <flint/flint.h>
    #include <stdio.h>

    int main() {
        printf("%s\\n", flint_version);
        return 0;
    }
    """,
    ["-lflint"],
)

gmp_version = run_c_code(
    """
    #include <gmp.h>
    #include <stdio.h>

    int main() {
        printf("%s\\n", gmp_version);
        return 0;
    }
    """,
    ["-lgmp"],
)

mpfr_version = run_c_code(
    """
    #include <mpfr.h>
    #include <stdio.h>

    int main() {
        printf("%s\\n", mpfr_version);
        return 0;
    }
    """,
    ["-lmpfr"],
)

zlib_version = run_c_code(
    """
    #include <stdio.h>
    #include <zlib.h>

    int main() {
        printf("%s\\n", zlib_version);
        return 0;
    }
    """,
    ["-lz"],
)

zstd_version = run_c_code(
    """
    #include <stdio.h>
    #include <zstd.h>

    int main() {
        printf("%s\\n", ZSTD_versionString());
        return 0;
    }
    """,
    ["-lzstd"],
)

print(
    f"""\
OS: {pretty_os_name}
CPU: {cpu_brand}, {cpu_count} cores ({logical_cpu_count} threads)
Memory: {bytes_to_human(total_memory)}B
{gcc_version}
flint {flint_version}, \
gmp {gmp_version}, \
mpfr {mpfr_version}, \
zlib {zlib_version}, \
zstd {zstd_version}\
"""
)
