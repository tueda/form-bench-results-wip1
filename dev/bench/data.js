window.BENCHMARK_DATA = {
  "lastUpdate": 1756916424832,
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
          "id": "a105dcf84129d07d93af6a52068f3230773e2f87\n",
          "message": "fix: resolves #646 for euler sums without arguments.\n\n",
          "timestamp": "2025-08-14T17:38:53+02:00\n",
          "url": "https://github.com/form-dev/form/commit/a105dcf84129d07d93af6a52068f3230773e2f87\n"
        },
        "date": 1756916424470,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "trace (form/Linux-ARM64)",
            "value": 3.101,
            "unit": "s",
            "range": "+- 0.007",
            "extra": "OS: Ubuntu 24.04.2 LTS\nCPU: Neoverse-N2, 4 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (tform -w2/Linux-ARM64)",
            "value": 1.632,
            "unit": "s",
            "range": "+- 0.012",
            "extra": "OS: Ubuntu 24.04.2 LTS\nCPU: Neoverse-N2, 4 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (tform -w4/Linux-ARM64)",
            "value": 0.884,
            "unit": "s",
            "range": "+- 0.011",
            "extra": "OS: Ubuntu 24.04.2 LTS\nCPU: Neoverse-N2, 4 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (form/Linux-X64)",
            "value": 3.969,
            "unit": "s",
            "range": "+- 0.067",
            "extra": "OS: Ubuntu 24.04.3 LTS\nCPU: AMD EPYC 7763 64-Core Processor, 2 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (tform -w2/Linux-X64)",
            "value": 2.347,
            "unit": "s",
            "range": "+- 0.029",
            "extra": "OS: Ubuntu 24.04.3 LTS\nCPU: AMD EPYC 7763 64-Core Processor, 2 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (tform -w4/Linux-X64)",
            "value": 2.218,
            "unit": "s",
            "range": "+- 0.021",
            "extra": "OS: Ubuntu 24.04.3 LTS\nCPU: AMD EPYC 7763 64-Core Processor, 2 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          }
        ]
      },
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
          "id": "2e1b84e51fe2096d7e9dc07ff5ede303f0bcf2ab\n",
          "message": "fix: many small bug fixes related to the evaluation of the floating point functions. In particular:\n- this resolves #646\n- this resolves #683\n\ntest: added a test for the evaluation of every float function.\n\n",
          "timestamp": "2025-08-14T18:08:41+02:00\n",
          "url": "https://github.com/form-dev/form/commit/2e1b84e51fe2096d7e9dc07ff5ede303f0bcf2ab\n"
        },
        "date": 1756916280483,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "trace (form/Linux-ARM64)",
            "value": 3.126,
            "unit": "s",
            "range": "+- 0.011",
            "extra": "OS: Ubuntu 24.04.2 LTS\nCPU: Neoverse-N2, 4 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (tform -w2/Linux-ARM64)",
            "value": 1.651,
            "unit": "s",
            "range": "+- 0.008",
            "extra": "OS: Ubuntu 24.04.2 LTS\nCPU: Neoverse-N2, 4 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (tform -w4/Linux-ARM64)",
            "value": 0.904,
            "unit": "s",
            "range": "+- 0.026",
            "extra": "OS: Ubuntu 24.04.2 LTS\nCPU: Neoverse-N2, 4 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (form/Linux-X64)",
            "value": 3.974,
            "unit": "s",
            "range": "+- 0.052",
            "extra": "OS: Ubuntu 24.04.3 LTS\nCPU: AMD EPYC 7763 64-Core Processor, 2 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (tform -w2/Linux-X64)",
            "value": 2.434,
            "unit": "s",
            "range": "+- 0.025",
            "extra": "OS: Ubuntu 24.04.3 LTS\nCPU: AMD EPYC 7763 64-Core Processor, 2 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (tform -w4/Linux-X64)",
            "value": 2.355,
            "unit": "s",
            "range": "+- 0.051",
            "extra": "OS: Ubuntu 24.04.3 LTS\nCPU: AMD EPYC 7763 64-Core Processor, 2 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "jodavies\n",
            "email": "jodavies@users.noreply.github.com\n",
            "username": "jodavies\n"
          },
          "committer": {
            "name": "jodavies\n",
            "email": "jodavies@users.noreply.github.com\n",
            "username": "jodavies\n"
          },
          "id": "9ebc2e211a8af1959e7c13d9353bd7e55e5b7e44\n",
          "message": "perf: tform: remove default-enabled compare count\n\nFor scripts which are dominated by level-0 sorting, counting the compares\n(and not even printing the result) leads to a large performance impact.\n\nDisable the counting by default.\n\nThe per-thread counter still leads to a performance impact, though it is\nsmaller.\n\n",
          "timestamp": "2025-08-21T19:34:35+01:00\n",
          "url": "https://github.com/form-dev/form/commit/9ebc2e211a8af1959e7c13d9353bd7e55e5b7e44\n"
        },
        "date": 1756915945284,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "trace (form/Linux-ARM64)",
            "value": 3.13,
            "unit": "s",
            "range": "+- 0.01",
            "extra": "OS: Ubuntu 24.04.2 LTS\nCPU: Neoverse-N2, 4 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (tform -w2/Linux-ARM64)",
            "value": 1.6,
            "unit": "s",
            "range": "+- 0.004",
            "extra": "OS: Ubuntu 24.04.2 LTS\nCPU: Neoverse-N2, 4 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (tform -w4/Linux-ARM64)",
            "value": 0.827,
            "unit": "s",
            "range": "+- 0.006",
            "extra": "OS: Ubuntu 24.04.2 LTS\nCPU: Neoverse-N2, 4 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (form/Linux-X64)",
            "value": 4.285,
            "unit": "s",
            "range": "+- 0.157",
            "extra": "OS: Ubuntu 24.04.3 LTS\nCPU: AMD EPYC 7763 64-Core Processor, 2 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (tform -w2/Linux-X64)",
            "value": 2.334,
            "unit": "s",
            "range": "+- 0.041",
            "extra": "OS: Ubuntu 24.04.3 LTS\nCPU: AMD EPYC 7763 64-Core Processor, 2 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (tform -w4/Linux-X64)",
            "value": 1.905,
            "unit": "s",
            "range": "+- 0.035",
            "extra": "OS: Ubuntu 24.04.3 LTS\nCPU: AMD EPYC 7763 64-Core Processor, 2 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Josh Davies\n",
            "email": "jodavies@users.noreply.github.com\n",
            "username": "Josh Davies\n"
          },
          "committer": {
            "name": "jodavies\n",
            "email": "jodavies@users.noreply.github.com\n",
            "username": "jodavies\n"
          },
          "id": "e8602de8a433279a2ffa8cf3049915a8cce95739\n",
          "message": "test: add float example from the Madrid workshop\n\n",
          "timestamp": "2025-08-29T10:01:38+01:00\n",
          "url": "https://github.com/form-dev/form/commit/e8602de8a433279a2ffa8cf3049915a8cce95739\n"
        },
        "date": 1756916336151,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "trace (form/Linux-ARM64)",
            "value": 3.113,
            "unit": "s",
            "range": "+- 0.016",
            "extra": "OS: Ubuntu 24.04.2 LTS\nCPU: Neoverse-N2, 4 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (tform -w2/Linux-ARM64)",
            "value": 1.583,
            "unit": "s",
            "range": "+- 0.008",
            "extra": "OS: Ubuntu 24.04.2 LTS\nCPU: Neoverse-N2, 4 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (tform -w4/Linux-ARM64)",
            "value": 0.825,
            "unit": "s",
            "range": "+- 0.004",
            "extra": "OS: Ubuntu 24.04.2 LTS\nCPU: Neoverse-N2, 4 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (form/Linux-X64)",
            "value": 4.04,
            "unit": "s",
            "range": "+- 0.05",
            "extra": "OS: Ubuntu 24.04.3 LTS\nCPU: AMD EPYC 7763 64-Core Processor, 2 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (tform -w2/Linux-X64)",
            "value": 2.142,
            "unit": "s",
            "range": "+- 0.031",
            "extra": "OS: Ubuntu 24.04.3 LTS\nCPU: AMD EPYC 7763 64-Core Processor, 2 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (tform -w4/Linux-X64)",
            "value": 1.778,
            "unit": "s",
            "range": "+- 0.029",
            "extra": "OS: Ubuntu 24.04.3 LTS\nCPU: AMD EPYC 7763 64-Core Processor, 2 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          }
        ]
      },
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
        "date": 1756915322890,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "trace (form/Linux-ARM64)",
            "value": 3.079,
            "unit": "s",
            "range": "+- 0.009",
            "extra": "OS: Ubuntu 24.04.2 LTS\nCPU: Neoverse-N2, 4 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (tform -w2/Linux-ARM64)",
            "value": 1.589,
            "unit": "s",
            "range": "+- 0.003",
            "extra": "OS: Ubuntu 24.04.2 LTS\nCPU: Neoverse-N2, 4 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (tform -w4/Linux-ARM64)",
            "value": 0.82,
            "unit": "s",
            "range": "+- 0.004",
            "extra": "OS: Ubuntu 24.04.2 LTS\nCPU: Neoverse-N2, 4 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (form/Linux-X64)",
            "value": 3.958,
            "unit": "s",
            "range": "+- 0.053",
            "extra": "OS: Ubuntu 24.04.3 LTS\nCPU: AMD EPYC 7763 64-Core Processor, 2 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (tform -w2/Linux-X64)",
            "value": 2.161,
            "unit": "s",
            "range": "+- 0.035",
            "extra": "OS: Ubuntu 24.04.3 LTS\nCPU: AMD EPYC 7763 64-Core Processor, 2 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (tform -w4/Linux-X64)",
            "value": 1.8,
            "unit": "s",
            "range": "+- 0.025",
            "extra": "OS: Ubuntu 24.04.3 LTS\nCPU: AMD EPYC 7763 64-Core Processor, 2 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          }
        ]
      }
    ]
  }
}
