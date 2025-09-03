window.BENCHMARK_DATA = {
  "lastUpdate": 1756913500180,
  "repoUrl": "https://github.com/tueda/form-bench-results-wip1",
  "entries": {
    "FORM Benchmark": [
      {
        "commit": {
          "author": {
            "name": "cbmarini\n",
            "email": "cbmarinissen@gmail.com\n",
            "username": "cbmarini\n"
          },
          "committer": {
            "name": "cbmarini\n",
            "email": "79157484+cbmarini@users.noreply.github.com\n",
            "username": "cbmarini\n"
          },
          "id": "e3eeea38a20c7564de1c5402643656b0812068a4\n",
          "message": "feat: #startfloat and Format floatprecision syntax\n- #StartFloat <precision>(b/d), MZV = <weight>, with precision either in bits (b) or digits (d).\n- Format floatprecision <precision>(b/d).\n\nfix: PrintFloat\n- PrintFloat returns correct number of characters and proper Mathematica format\n- Trailing zeroes in floats are also removed when precision set by Format floatprecision is less then precision of #startfloat.\n\ntest: updated and expanded float tests for new syntax\n\ndoc: updated manual for #StartFloat syntax and added entries/documentation for #startfloat, #endfloat, evaluate, tofloat, torational and format floatprecision.\n\n",
          "timestamp": "2025-08-29T11:30:51+02:00\n",
          "url": "https://github.com/form-dev/form/commit/e3eeea38a20c7564de1c5402643656b0812068a4\n"
        },
        "date": 1756913499606,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "trace (form/Linux-ARM64)",
            "value": 3.09,
            "unit": "s",
            "range": 0.008,
            "extra": "OS: Ubuntu 24.04.2 LTS\nCPU: Neoverse-N2, 4 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (tform -w2/Linux-ARM64)",
            "value": 1.602,
            "unit": "s",
            "range": 0.004,
            "extra": "OS: Ubuntu 24.04.2 LTS\nCPU: Neoverse-N2, 4 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (tform -w4/Linux-ARM64)",
            "value": 0.833,
            "unit": "s",
            "range": 0.006,
            "extra": "OS: Ubuntu 24.04.2 LTS\nCPU: Neoverse-N2, 4 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (form/Linux-X64)",
            "value": 3.97,
            "unit": "s",
            "range": 0.054,
            "extra": "OS: Ubuntu 24.04.3 LTS\nCPU: AMD EPYC 7763 64-Core Processor, 2 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (tform -w2/Linux-X64)",
            "value": 2.148,
            "unit": "s",
            "range": 0.063,
            "extra": "OS: Ubuntu 24.04.3 LTS\nCPU: AMD EPYC 7763 64-Core Processor, 2 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (tform -w4/Linux-X64)",
            "value": 1.796,
            "unit": "s",
            "range": 0.025,
            "extra": "OS: Ubuntu 24.04.3 LTS\nCPU: AMD EPYC 7763 64-Core Processor, 2 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          }
        ]
      }
    ]
  }
}
