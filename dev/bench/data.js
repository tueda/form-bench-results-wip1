window.BENCHMARK_DATA = {
  "lastUpdate": 1756939564540,
  "repoUrl": "https://github.com/tueda/form-bench-results-wip1",
  "entries": {
    "FORM Benchmark": [
      {
        "commit": {
          "author": {
            "name": "vermaseren\n",
            "email": "t68@nikhef.nl\n",
            "username": "vermaseren\n"
          },
          "committer": {
            "name": "vermaseren\n",
            "email": "t68@nikhef.nl\n",
            "username": "vermaseren\n"
          },
          "id": "468610a4180717b9f790569f9d63c923c376517f\n",
          "message": "Changed header of TestPartitions to remove a compiler warning\n\n",
          "timestamp": "2017-07-11T10:42:23+02:00\n",
          "url": "https://github.com/form-dev/form/commit/468610a4180717b9f790569f9d63c923c376517f\n"
        },
        "date": 1756939564232,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "trace (form/Linux-ARM64)",
            "value": 3.019,
            "unit": "s",
            "range": "+- 0.019",
            "extra": "OS: Ubuntu 24.04.2 LTS\nCPU: Neoverse-N2, 4 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (tform -w2/Linux-ARM64)",
            "value": 1.617,
            "unit": "s",
            "range": "+- 0.004",
            "extra": "OS: Ubuntu 24.04.2 LTS\nCPU: Neoverse-N2, 4 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (tform -w4/Linux-ARM64)",
            "value": 0.879,
            "unit": "s",
            "range": "+- 0.011",
            "extra": "OS: Ubuntu 24.04.2 LTS\nCPU: Neoverse-N2, 4 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (form/Linux-X64)",
            "value": 4.099,
            "unit": "s",
            "range": "+- 0.061",
            "extra": "OS: Ubuntu 24.04.3 LTS\nCPU: AMD EPYC 7763 64-Core Processor, 2 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (tform -w2/Linux-X64)",
            "value": 2.155,
            "unit": "s",
            "range": "+- 0.018",
            "extra": "OS: Ubuntu 24.04.3 LTS\nCPU: AMD EPYC 7763 64-Core Processor, 2 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (tform -w4/Linux-X64)",
            "value": 1.938,
            "unit": "s",
            "range": "+- 0.02",
            "extra": "OS: Ubuntu 24.04.3 LTS\nCPU: AMD EPYC 7763 64-Core Processor, 2 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "vermaseren\n",
            "email": "t68@nikhef.nl\n",
            "username": "vermaseren\n"
          },
          "committer": {
            "name": "vermaseren\n",
            "email": "t68@nikhef.nl\n",
            "username": "vermaseren\n"
          },
          "id": "e90089463972bea7202397f8dcaba42f67ab33ea\n",
          "message": "Fixed issue #273. Sometimes a dollar could not become an index in a trace4.\n\n",
          "timestamp": "2018-03-21T13:29:54+01:00\n",
          "url": "https://github.com/form-dev/form/commit/e90089463972bea7202397f8dcaba42f67ab33ea\n"
        },
        "date": 1756939513602,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "trace (form/Linux-ARM64)",
            "value": 3.023,
            "unit": "s",
            "range": "+- 0.007",
            "extra": "OS: Ubuntu 24.04.2 LTS\nCPU: Neoverse-N2, 4 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (tform -w2/Linux-ARM64)",
            "value": 1.631,
            "unit": "s",
            "range": "+- 0.004",
            "extra": "OS: Ubuntu 24.04.2 LTS\nCPU: Neoverse-N2, 4 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (tform -w4/Linux-ARM64)",
            "value": 0.88,
            "unit": "s",
            "range": "+- 0.006",
            "extra": "OS: Ubuntu 24.04.2 LTS\nCPU: Neoverse-N2, 4 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (form/Linux-X64)",
            "value": 4.02,
            "unit": "s",
            "range": "+- 0.101",
            "extra": "OS: Ubuntu 24.04.3 LTS\nCPU: AMD EPYC 7763 64-Core Processor, 2 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (tform -w2/Linux-X64)",
            "value": 2.17,
            "unit": "s",
            "range": "+- 0.015",
            "extra": "OS: Ubuntu 24.04.3 LTS\nCPU: AMD EPYC 7763 64-Core Processor, 2 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (tform -w4/Linux-X64)",
            "value": 1.896,
            "unit": "s",
            "range": "+- 0.02",
            "extra": "OS: Ubuntu 24.04.3 LTS\nCPU: AMD EPYC 7763 64-Core Processor, 2 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ben Ruijl\n",
            "email": "benruyl@gmail.com\n",
            "username": "Ben Ruijl\n"
          },
          "committer": {
            "name": "Ben Ruijl\n",
            "email": "benruyl@gmail.com\n",
            "username": "Ben Ruijl\n"
          },
          "id": "77ee4eab218ff75bbc2f8e52a2d53efd06159fdf\n",
          "message": "Fixed issue #272\n\nFixed two issues that were caused by considering the coefficient\nas a variable in two separate places:\n\n- During term sorting\n- During the collection of all variables\n\n",
          "timestamp": "2018-04-03T17:14:49+02:00\n",
          "url": "https://github.com/form-dev/form/commit/77ee4eab218ff75bbc2f8e52a2d53efd06159fdf\n"
        },
        "date": 1756939508214,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "trace (form/Linux-ARM64)",
            "value": 2.996,
            "unit": "s",
            "range": "+- 0.006",
            "extra": "OS: Ubuntu 24.04.2 LTS\nCPU: Neoverse-N2, 4 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (tform -w2/Linux-ARM64)",
            "value": 1.59,
            "unit": "s",
            "range": "+- 0.004",
            "extra": "OS: Ubuntu 24.04.2 LTS\nCPU: Neoverse-N2, 4 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (tform -w4/Linux-ARM64)",
            "value": 0.863,
            "unit": "s",
            "range": "+- 0.002",
            "extra": "OS: Ubuntu 24.04.2 LTS\nCPU: Neoverse-N2, 4 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (form/Linux-X64)",
            "value": 4.077,
            "unit": "s",
            "range": "+- 0.074",
            "extra": "OS: Ubuntu 24.04.3 LTS\nCPU: AMD EPYC 7763 64-Core Processor, 2 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (tform -w2/Linux-X64)",
            "value": 2.2,
            "unit": "s",
            "range": "+- 0.031",
            "extra": "OS: Ubuntu 24.04.3 LTS\nCPU: AMD EPYC 7763 64-Core Processor, 2 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (tform -w4/Linux-X64)",
            "value": 1.944,
            "unit": "s",
            "range": "+- 0.029",
            "extra": "OS: Ubuntu 24.04.3 LTS\nCPU: AMD EPYC 7763 64-Core Processor, 2 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "vermaseren\n",
            "email": "t68@nikhef.nl\n",
            "username": "vermaseren\n"
          },
          "committer": {
            "name": "vermaseren\n",
            "email": "t68@nikhef.nl\n",
            "username": "vermaseren\n"
          },
          "id": "a1da4b86840abcce8ee2131514aed9f21ea3eaa3\n",
          "message": "Fixed issue #277. Was a bug in transform adding arguments.\n\n",
          "timestamp": "2018-04-11T10:15:23+02:00\n",
          "url": "https://github.com/form-dev/form/commit/a1da4b86840abcce8ee2131514aed9f21ea3eaa3\n"
        },
        "date": 1756939516932,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "trace (form/Linux-ARM64)",
            "value": 3.018,
            "unit": "s",
            "range": "+- 0.011",
            "extra": "OS: Ubuntu 24.04.2 LTS\nCPU: Neoverse-N2, 4 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (tform -w2/Linux-ARM64)",
            "value": 1.602,
            "unit": "s",
            "range": "+- 0.004",
            "extra": "OS: Ubuntu 24.04.2 LTS\nCPU: Neoverse-N2, 4 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (tform -w4/Linux-ARM64)",
            "value": 0.868,
            "unit": "s",
            "range": "+- 0.004",
            "extra": "OS: Ubuntu 24.04.2 LTS\nCPU: Neoverse-N2, 4 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (form/Linux-X64)",
            "value": 4.033,
            "unit": "s",
            "range": "+- 0.047",
            "extra": "OS: Ubuntu 24.04.3 LTS\nCPU: AMD EPYC 7763 64-Core Processor, 2 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (tform -w2/Linux-X64)",
            "value": 2.203,
            "unit": "s",
            "range": "+- 0.041",
            "extra": "OS: Ubuntu 24.04.3 LTS\nCPU: AMD EPYC 7763 64-Core Processor, 2 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (tform -w4/Linux-X64)",
            "value": 1.965,
            "unit": "s",
            "range": "+- 0.02",
            "extra": "OS: Ubuntu 24.04.3 LTS\nCPU: AMD EPYC 7763 64-Core Processor, 2 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Takahiro Ueda\n",
            "email": "tueda@st.seikei.ac.jp\n",
            "username": "Takahiro Ueda\n"
          },
          "committer": {
            "name": "Takahiro Ueda\n",
            "email": "tueda@st.seikei.ac.jp\n",
            "username": "Takahiro Ueda\n"
          },
          "id": "cc3cbd09b7f1cf12c98172c720a4bc42bae03c8b\n",
          "message": "Revert \"slight improvement to SplitMerge, based on timsort. Makes mincer > 1.5% faster.\"\n\nThis reverts commit 88a9a99e4661a7fe6c181c7482bdc445a9b790e3.\n\n",
          "timestamp": "2018-04-25T11:06:26+09:00\n",
          "url": "https://github.com/form-dev/form/commit/cc3cbd09b7f1cf12c98172c720a4bc42bae03c8b\n"
        },
        "date": 1756938889752,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "trace (form/Linux-ARM64)",
            "value": 3.005,
            "unit": "s",
            "range": "+- 0.008",
            "extra": "OS: Ubuntu 24.04.2 LTS\nCPU: Neoverse-N2, 4 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (tform -w2/Linux-ARM64)",
            "value": 1.59,
            "unit": "s",
            "range": "+- 0.003",
            "extra": "OS: Ubuntu 24.04.2 LTS\nCPU: Neoverse-N2, 4 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (tform -w4/Linux-ARM64)",
            "value": 0.861,
            "unit": "s",
            "range": "+- 0.002",
            "extra": "OS: Ubuntu 24.04.2 LTS\nCPU: Neoverse-N2, 4 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (form/Linux-X64)",
            "value": 4.05,
            "unit": "s",
            "range": "+- 0.063",
            "extra": "OS: Ubuntu 24.04.3 LTS\nCPU: AMD EPYC 7763 64-Core Processor, 2 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (tform -w2/Linux-X64)",
            "value": 2.194,
            "unit": "s",
            "range": "+- 0.026",
            "extra": "OS: Ubuntu 24.04.3 LTS\nCPU: AMD EPYC 7763 64-Core Processor, 2 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (tform -w4/Linux-X64)",
            "value": 1.947,
            "unit": "s",
            "range": "+- 0.034",
            "extra": "OS: Ubuntu 24.04.3 LTS\nCPU: AMD EPYC 7763 64-Core Processor, 2 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "vermaseren\n",
            "email": "t68@nikhef.nl\n",
            "username": "vermaseren\n"
          },
          "committer": {
            "name": "vermaseren\n",
            "email": "t68@nikhef.nl\n",
            "username": "vermaseren\n"
          },
          "id": "19a2da2928d45026b58e0c7c751c970856cb3915\n",
          "message": "Added MINALLOC in fsizes.h\n\n",
          "timestamp": "2018-05-14T17:28:58+02:00\n",
          "url": "https://github.com/form-dev/form/commit/19a2da2928d45026b58e0c7c751c970856cb3915\n"
        },
        "date": 1756938907999,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "trace (form/Linux-ARM64)",
            "value": 3.038,
            "unit": "s",
            "range": "+- 0.009",
            "extra": "OS: Ubuntu 24.04.2 LTS\nCPU: Neoverse-N2, 4 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (tform -w2/Linux-ARM64)",
            "value": 1.627,
            "unit": "s",
            "range": "+- 0.007",
            "extra": "OS: Ubuntu 24.04.2 LTS\nCPU: Neoverse-N2, 4 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (tform -w4/Linux-ARM64)",
            "value": 0.912,
            "unit": "s",
            "range": "+- 0.008",
            "extra": "OS: Ubuntu 24.04.2 LTS\nCPU: Neoverse-N2, 4 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (form/Linux-X64)",
            "value": 3.97,
            "unit": "s",
            "range": "+- 0.042",
            "extra": "OS: Ubuntu 24.04.3 LTS\nCPU: AMD EPYC 7763 64-Core Processor, 2 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (tform -w2/Linux-X64)",
            "value": 2.408,
            "unit": "s",
            "range": "+- 0.107",
            "extra": "OS: Ubuntu 24.04.3 LTS\nCPU: AMD EPYC 7763 64-Core Processor, 2 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (tform -w4/Linux-X64)",
            "value": 2.205,
            "unit": "s",
            "range": "+- 0.069",
            "extra": "OS: Ubuntu 24.04.3 LTS\nCPU: AMD EPYC 7763 64-Core Processor, 2 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "vermaseren\n",
            "email": "t68@nikhef.nl\n",
            "username": "vermaseren\n"
          },
          "committer": {
            "name": "vermaseren\n",
            "email": "t68@nikhef.nl\n",
            "username": "vermaseren\n"
          },
          "id": "f94c1c8eb0d1b01ac40b31a63fec7cbe2ae70387\n",
          "message": "Added <filename> option in print \"...\" statement (in the place of +f)\n\n",
          "timestamp": "2018-05-14T21:52:23+02:00\n",
          "url": "https://github.com/form-dev/form/commit/f94c1c8eb0d1b01ac40b31a63fec7cbe2ae70387\n"
        },
        "date": 1756938921971,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "trace (form/Linux-ARM64)",
            "value": 2.985,
            "unit": "s",
            "range": "+- 0.013",
            "extra": "OS: Ubuntu 24.04.2 LTS\nCPU: Neoverse-N2, 4 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (tform -w2/Linux-ARM64)",
            "value": 1.636,
            "unit": "s",
            "range": "+- 0.012",
            "extra": "OS: Ubuntu 24.04.2 LTS\nCPU: Neoverse-N2, 4 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (tform -w4/Linux-ARM64)",
            "value": 0.91,
            "unit": "s",
            "range": "+- 0.004",
            "extra": "OS: Ubuntu 24.04.2 LTS\nCPU: Neoverse-N2, 4 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (form/Linux-X64)",
            "value": 4.01,
            "unit": "s",
            "range": "+- 0.036",
            "extra": "OS: Ubuntu 24.04.3 LTS\nCPU: AMD EPYC 7763 64-Core Processor, 2 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (tform -w2/Linux-X64)",
            "value": 2.227,
            "unit": "s",
            "range": "+- 0.048",
            "extra": "OS: Ubuntu 24.04.3 LTS\nCPU: AMD EPYC 7763 64-Core Processor, 2 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (tform -w4/Linux-X64)",
            "value": 2.015,
            "unit": "s",
            "range": "+- 0.024",
            "extra": "OS: Ubuntu 24.04.3 LTS\nCPU: AMD EPYC 7763 64-Core Processor, 2 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ben Ruijl\n",
            "email": "benruyl@gmail.com\n",
            "username": "Ben Ruijl\n"
          },
          "committer": {
            "name": "GitHub\n",
            "email": "noreply@github.com\n",
            "username": "GitHub\n"
          },
          "id": "e8c97981ac4f7ac6d80006a2dff562c951f8c7ab\n",
          "message": "Merge pull request #281 from spj101/divmod\n\nAddress issue #278\n",
          "timestamp": "2018-05-30T12:28:44+02:00\n",
          "url": "https://github.com/form-dev/form/commit/e8c97981ac4f7ac6d80006a2dff562c951f8c7ab\n"
        },
        "date": 1756938916882,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "trace (form/Linux-ARM64)",
            "value": 2.947,
            "unit": "s",
            "range": "+- 0.009",
            "extra": "OS: Ubuntu 24.04.2 LTS\nCPU: Neoverse-N2, 4 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (tform -w2/Linux-ARM64)",
            "value": 1.622,
            "unit": "s",
            "range": "+- 0.015",
            "extra": "OS: Ubuntu 24.04.2 LTS\nCPU: Neoverse-N2, 4 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (tform -w4/Linux-ARM64)",
            "value": 0.906,
            "unit": "s",
            "range": "+- 0.006",
            "extra": "OS: Ubuntu 24.04.2 LTS\nCPU: Neoverse-N2, 4 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (form/Linux-X64)",
            "value": 4.028,
            "unit": "s",
            "range": "+- 0.049",
            "extra": "OS: Ubuntu 24.04.3 LTS\nCPU: AMD EPYC 7763 64-Core Processor, 2 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (tform -w2/Linux-X64)",
            "value": 2.286,
            "unit": "s",
            "range": "+- 0.054",
            "extra": "OS: Ubuntu 24.04.3 LTS\nCPU: AMD EPYC 7763 64-Core Processor, 2 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (tform -w4/Linux-X64)",
            "value": 2.098,
            "unit": "s",
            "range": "+- 0.025",
            "extra": "OS: Ubuntu 24.04.3 LTS\nCPU: AMD EPYC 7763 64-Core Processor, 2 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jos Vermaseren\n",
            "email": "t68@nikhef.nl\n",
            "username": "Jos Vermaseren\n"
          },
          "committer": {
            "name": "Jos Vermaseren\n",
            "email": "t68@nikhef.nl\n",
            "username": "Jos Vermaseren\n"
          },
          "id": "5577c6d25ece410e6ae78f699b5eaaf0d6358eba\n",
          "message": "Fixed the sprintf calls in the .cc files. Now uses snprintf.\n\n",
          "timestamp": "2022-11-11T12:03:35+01:00\n",
          "url": "https://github.com/form-dev/form/commit/5577c6d25ece410e6ae78f699b5eaaf0d6358eba\n"
        },
        "date": 1756939496190,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "trace (form/Linux-ARM64)",
            "value": 2.96,
            "unit": "s",
            "range": "+- 0.018",
            "extra": "OS: Ubuntu 24.04.2 LTS\nCPU: Neoverse-N2, 4 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (tform -w2/Linux-ARM64)",
            "value": 1.707,
            "unit": "s",
            "range": "+- 0.008",
            "extra": "OS: Ubuntu 24.04.2 LTS\nCPU: Neoverse-N2, 4 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (tform -w4/Linux-ARM64)",
            "value": 0.93,
            "unit": "s",
            "range": "+- 0.028",
            "extra": "OS: Ubuntu 24.04.2 LTS\nCPU: Neoverse-N2, 4 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (form/Linux-X64)",
            "value": 4.013,
            "unit": "s",
            "range": "+- 0.039",
            "extra": "OS: Ubuntu 24.04.3 LTS\nCPU: AMD EPYC 7763 64-Core Processor, 2 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (tform -w2/Linux-X64)",
            "value": 2.493,
            "unit": "s",
            "range": "+- 0.025",
            "extra": "OS: Ubuntu 24.04.3 LTS\nCPU: AMD EPYC 7763 64-Core Processor, 2 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (tform -w4/Linux-X64)",
            "value": 2.298,
            "unit": "s",
            "range": "+- 0.014",
            "extra": "OS: Ubuntu 24.04.3 LTS\nCPU: AMD EPYC 7763 64-Core Processor, 2 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Takahiro Ueda\n",
            "email": "tueda@st.seikei.ac.jp\n",
            "username": "Takahiro Ueda\n"
          },
          "committer": {
            "name": "Takahiro Ueda\n",
            "email": "tueda@st.seikei.ac.jp\n",
            "username": "Takahiro Ueda\n"
          },
          "id": "9a149d4b8d3ace374f385095f8efd9dc32e9466f\n",
          "message": "fix: delete -> delete[] in testPerm()\n\n",
          "timestamp": "2022-11-12T19:18:19+09:00\n",
          "url": "https://github.com/form-dev/form/commit/9a149d4b8d3ace374f385095f8efd9dc32e9466f\n"
        },
        "date": 1756939064609,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "trace (form/Linux-ARM64)",
            "value": 3.035,
            "unit": "s",
            "range": "+- 0.026",
            "extra": "OS: Ubuntu 24.04.2 LTS\nCPU: Neoverse-N2, 4 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (tform -w2/Linux-ARM64)",
            "value": 1.733,
            "unit": "s",
            "range": "+- 0.007",
            "extra": "OS: Ubuntu 24.04.2 LTS\nCPU: Neoverse-N2, 4 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (tform -w4/Linux-ARM64)",
            "value": 0.974,
            "unit": "s",
            "range": "+- 0.045",
            "extra": "OS: Ubuntu 24.04.2 LTS\nCPU: Neoverse-N2, 4 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (form/Linux-X64)",
            "value": 4.007,
            "unit": "s",
            "range": "+- 0.057",
            "extra": "OS: Ubuntu 24.04.3 LTS\nCPU: AMD EPYC 7763 64-Core Processor, 2 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (tform -w2/Linux-X64)",
            "value": 2.608,
            "unit": "s",
            "range": "+- 0.035",
            "extra": "OS: Ubuntu 24.04.3 LTS\nCPU: AMD EPYC 7763 64-Core Processor, 2 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (tform -w4/Linux-X64)",
            "value": 2.442,
            "unit": "s",
            "range": "+- 0.025",
            "extra": "OS: Ubuntu 24.04.3 LTS\nCPU: AMD EPYC 7763 64-Core Processor, 2 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Takahiro Ueda\n",
            "email": "tueda@st.seikei.ac.jp\n",
            "username": "Takahiro Ueda\n"
          },
          "committer": {
            "name": "Takahiro Ueda\n",
            "email": "tueda@st.seikei.ac.jp\n",
            "username": "Takahiro Ueda\n"
          },
          "id": "d5f9d3331e8a2a96e44412cf8835cdeece743c61\n",
          "message": "build: disable some gcc compier warnings\n\nAdd --enable-extra-warning option to the configure script. By default,\nit is disabled to suppress some gcc warnings:\n\n* -Wno-misleading-indentation. This is because, for the short term, it\n  seems unfeasible to clearly rewrite FORM source code (by hand) unless\n  we introduce some automatization with formatters, linters or static\n  analyzers.\n\n* -Wno-stringop-overflow. It seems to give many false positives (though\n  there may be some true positives).\n\nStop using obsolete macros when autoconf>=2.70 is used.\n\nImprove the handling of i486 (Pentium) processors on old 32-bit systems\n(-march=i486).\n\nax_check_compile_flag.m4 (GPL-3.0-or-later) is taken from:\n  autoconf-archive/autoconf-archive@7f56aaa (v2014.10.15)\n\nResolve #416\n\n",
          "timestamp": "2022-11-12T22:52:39+09:00\n",
          "url": "https://github.com/form-dev/form/commit/d5f9d3331e8a2a96e44412cf8835cdeece743c61\n"
        },
        "date": 1756939055673,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "trace (form/Linux-ARM64)",
            "value": 2.995,
            "unit": "s",
            "range": "+- 0.008",
            "extra": "OS: Ubuntu 24.04.2 LTS\nCPU: Neoverse-N2, 4 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (tform -w2/Linux-ARM64)",
            "value": 1.679,
            "unit": "s",
            "range": "+- 0.011",
            "extra": "OS: Ubuntu 24.04.2 LTS\nCPU: Neoverse-N2, 4 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (tform -w4/Linux-ARM64)",
            "value": 0.928,
            "unit": "s",
            "range": "+- 0.031",
            "extra": "OS: Ubuntu 24.04.2 LTS\nCPU: Neoverse-N2, 4 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (form/Linux-X64)",
            "value": 4.025,
            "unit": "s",
            "range": "+- 0.053",
            "extra": "OS: Ubuntu 24.04.3 LTS\nCPU: AMD EPYC 7763 64-Core Processor, 2 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (tform -w2/Linux-X64)",
            "value": 2.542,
            "unit": "s",
            "range": "+- 0.041",
            "extra": "OS: Ubuntu 24.04.3 LTS\nCPU: AMD EPYC 7763 64-Core Processor, 2 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (tform -w4/Linux-X64)",
            "value": 2.336,
            "unit": "s",
            "range": "+- 0.019",
            "extra": "OS: Ubuntu 24.04.3 LTS\nCPU: AMD EPYC 7763 64-Core Processor, 2 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jos Vermaseren\n",
            "email": "t68@nikhef.nl\n",
            "username": "Jos Vermaseren\n"
          },
          "committer": {
            "name": "Jos Vermaseren\n",
            "email": "t68@nikhef.nl\n",
            "username": "Jos Vermaseren\n"
          },
          "id": "b2887a7e1b687a6846942eb641b47baf474155cc\n",
          "message": "Specified the file use in the print statement better.\n\n",
          "timestamp": "2022-11-15T10:35:49+01:00\n",
          "url": "https://github.com/form-dev/form/commit/b2887a7e1b687a6846942eb641b47baf474155cc\n"
        },
        "date": 1756938972205,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "trace (form/Linux-ARM64)",
            "value": 3.005,
            "unit": "s",
            "range": "+- 0.01",
            "extra": "OS: Ubuntu 24.04.2 LTS\nCPU: Neoverse-N2, 4 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (tform -w2/Linux-ARM64)",
            "value": 1.701,
            "unit": "s",
            "range": "+- 0.014",
            "extra": "OS: Ubuntu 24.04.2 LTS\nCPU: Neoverse-N2, 4 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (tform -w4/Linux-ARM64)",
            "value": 0.93,
            "unit": "s",
            "range": "+- 0.025",
            "extra": "OS: Ubuntu 24.04.2 LTS\nCPU: Neoverse-N2, 4 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (form/Linux-X64)",
            "value": 4.035,
            "unit": "s",
            "range": "+- 0.057",
            "extra": "OS: Ubuntu 24.04.3 LTS\nCPU: AMD EPYC 7763 64-Core Processor, 2 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (tform -w2/Linux-X64)",
            "value": 2.584,
            "unit": "s",
            "range": "+- 0.044",
            "extra": "OS: Ubuntu 24.04.3 LTS\nCPU: AMD EPYC 7763 64-Core Processor, 2 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (tform -w4/Linux-X64)",
            "value": 2.335,
            "unit": "s",
            "range": "+- 0.012",
            "extra": "OS: Ubuntu 24.04.3 LTS\nCPU: AMD EPYC 7763 64-Core Processor, 2 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Frédéric Chapoton\n",
            "email": "chapoton@unistra.fr\n",
            "username": "Frédéric Chapoton\n"
          },
          "committer": {
            "name": "Takahiro Ueda\n",
            "email": "tueda@users.noreply.github.com\n",
            "username": "Takahiro Ueda\n"
          },
          "id": "bfc7e33e7aa9af6c95afd53b0a9d777e48242fde\n",
          "message": "fix some typos in sources\n\n",
          "timestamp": "2022-12-03T15:15:14+09:00\n",
          "url": "https://github.com/form-dev/form/commit/bfc7e33e7aa9af6c95afd53b0a9d777e48242fde\n"
        },
        "date": 1756939061824,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "trace (form/Linux-ARM64)",
            "value": 3.06,
            "unit": "s",
            "range": "+- 0.012",
            "extra": "OS: Ubuntu 24.04.2 LTS\nCPU: Neoverse-N2, 4 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (tform -w2/Linux-ARM64)",
            "value": 1.726,
            "unit": "s",
            "range": "+- 0.017",
            "extra": "OS: Ubuntu 24.04.2 LTS\nCPU: Neoverse-N2, 4 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (tform -w4/Linux-ARM64)",
            "value": 0.943,
            "unit": "s",
            "range": "+- 0.031",
            "extra": "OS: Ubuntu 24.04.2 LTS\nCPU: Neoverse-N2, 4 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (form/Linux-X64)",
            "value": 4.027,
            "unit": "s",
            "range": "+- 0.059",
            "extra": "OS: Ubuntu 24.04.3 LTS\nCPU: AMD EPYC 7763 64-Core Processor, 2 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (tform -w2/Linux-X64)",
            "value": 2.641,
            "unit": "s",
            "range": "+- 0.049",
            "extra": "OS: Ubuntu 24.04.3 LTS\nCPU: AMD EPYC 7763 64-Core Processor, 2 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (tform -w4/Linux-X64)",
            "value": 2.474,
            "unit": "s",
            "range": "+- 0.039",
            "extra": "OS: Ubuntu 24.04.3 LTS\nCPU: AMD EPYC 7763 64-Core Processor, 2 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Takahiro Ueda\n",
            "email": "t.ueda.od@juntendo.ac.jp\n",
            "username": "Takahiro Ueda\n"
          },
          "committer": {
            "name": "jodavies\n",
            "email": "jodavies@users.noreply.github.com\n",
            "username": "jodavies\n"
          },
          "id": "e1289acb4dc2db65fff62335aa5126ac98c5a67f\n",
          "message": "ci: summarize files for distribution\n\n",
          "timestamp": "2025-05-30T09:02:47+01:00\n",
          "url": "https://github.com/form-dev/form/commit/e1289acb4dc2db65fff62335aa5126ac98c5a67f\n"
        },
        "date": 1756938760378,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "trace (form/Linux-ARM64)",
            "value": 3.016,
            "unit": "s",
            "range": "+- 0.013",
            "extra": "OS: Ubuntu 24.04.2 LTS\nCPU: Neoverse-N2, 4 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (tform -w2/Linux-ARM64)",
            "value": 1.623,
            "unit": "s",
            "range": "+- 0.013",
            "extra": "OS: Ubuntu 24.04.2 LTS\nCPU: Neoverse-N2, 4 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (tform -w4/Linux-ARM64)",
            "value": 0.875,
            "unit": "s",
            "range": "+- 0.009",
            "extra": "OS: Ubuntu 24.04.2 LTS\nCPU: Neoverse-N2, 4 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (form/Linux-X64)",
            "value": 4.037,
            "unit": "s",
            "range": "+- 0.057",
            "extra": "OS: Ubuntu 24.04.3 LTS\nCPU: AMD EPYC 7763 64-Core Processor, 2 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (tform -w2/Linux-X64)",
            "value": 2.378,
            "unit": "s",
            "range": "+- 0.027",
            "extra": "OS: Ubuntu 24.04.3 LTS\nCPU: AMD EPYC 7763 64-Core Processor, 2 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (tform -w4/Linux-X64)",
            "value": 2.313,
            "unit": "s",
            "range": "+- 0.019",
            "extra": "OS: Ubuntu 24.04.3 LTS\nCPU: AMD EPYC 7763 64-Core Processor, 2 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Takahiro Ueda\n",
            "email": "t.ueda.od@juntendo.ac.jp\n",
            "username": "Takahiro Ueda\n"
          },
          "committer": {
            "name": "jodavies\n",
            "email": "jodavies@users.noreply.github.com\n",
            "username": "jodavies\n"
          },
          "id": "da92dc84687ab1b60616f06b133522e050c217d2\n",
          "message": "fix: ensure moebius_ works even when char is unsigned\n\nUse SBYTE for signed 1-byte integers to avoid issues in environments\nwhere char defaults to unsigned, e.g., ARM64 Linux.\n\n",
          "timestamp": "2025-05-30T09:02:47+01:00\n",
          "url": "https://github.com/form-dev/form/commit/da92dc84687ab1b60616f06b133522e050c217d2\n"
        },
        "date": 1756938775501,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "trace (form/Linux-ARM64)",
            "value": 3.002,
            "unit": "s",
            "range": "+- 0.018",
            "extra": "OS: Ubuntu 24.04.2 LTS\nCPU: Neoverse-N2, 4 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (tform -w2/Linux-ARM64)",
            "value": 1.626,
            "unit": "s",
            "range": "+- 0.011",
            "extra": "OS: Ubuntu 24.04.2 LTS\nCPU: Neoverse-N2, 4 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (tform -w4/Linux-ARM64)",
            "value": 0.894,
            "unit": "s",
            "range": "+- 0.006",
            "extra": "OS: Ubuntu 24.04.2 LTS\nCPU: Neoverse-N2, 4 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (form/Linux-X64)",
            "value": 4.008,
            "unit": "s",
            "range": "+- 0.038",
            "extra": "OS: Ubuntu 24.04.3 LTS\nCPU: AMD EPYC 7763 64-Core Processor, 2 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (tform -w2/Linux-X64)",
            "value": 2.345,
            "unit": "s",
            "range": "+- 0.045",
            "extra": "OS: Ubuntu 24.04.3 LTS\nCPU: AMD EPYC 7763 64-Core Processor, 2 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (tform -w4/Linux-X64)",
            "value": 2.292,
            "unit": "s",
            "range": "+- 0.023",
            "extra": "OS: Ubuntu 24.04.3 LTS\nCPU: AMD EPYC 7763 64-Core Processor, 2 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Takahiro Ueda\n",
            "email": "t.ueda.od@juntendo.ac.jp\n",
            "username": "Takahiro Ueda\n"
          },
          "committer": {
            "name": "jodavies\n",
            "email": "jodavies@users.noreply.github.com\n",
            "username": "jodavies\n"
          },
          "id": "2149c96752f7f4ea8fd12e0f0b4bfdbf80c9fe09\n",
          "message": "ci: build arm64-linux binaries\n\nReady to be published.\n\n",
          "timestamp": "2025-05-30T09:02:47+01:00\n",
          "url": "https://github.com/form-dev/form/commit/2149c96752f7f4ea8fd12e0f0b4bfdbf80c9fe09\n"
        },
        "date": 1756938779663,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "trace (form/Linux-ARM64)",
            "value": 2.993,
            "unit": "s",
            "range": "+- 0.014",
            "extra": "OS: Ubuntu 24.04.2 LTS\nCPU: Neoverse-N2, 4 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (tform -w2/Linux-ARM64)",
            "value": 1.627,
            "unit": "s",
            "range": "+- 0.011",
            "extra": "OS: Ubuntu 24.04.2 LTS\nCPU: Neoverse-N2, 4 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (tform -w4/Linux-ARM64)",
            "value": 0.89,
            "unit": "s",
            "range": "+- 0.008",
            "extra": "OS: Ubuntu 24.04.2 LTS\nCPU: Neoverse-N2, 4 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (form/Linux-X64)",
            "value": 3.993,
            "unit": "s",
            "range": "+- 0.065",
            "extra": "OS: Ubuntu 24.04.3 LTS\nCPU: AMD EPYC 7763 64-Core Processor, 2 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (tform -w2/Linux-X64)",
            "value": 2.33,
            "unit": "s",
            "range": "+- 0.035",
            "extra": "OS: Ubuntu 24.04.3 LTS\nCPU: AMD EPYC 7763 64-Core Processor, 2 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (tform -w4/Linux-X64)",
            "value": 2.273,
            "unit": "s",
            "range": "+- 0.026",
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
          "id": "6615abf44854aa312074cd687fe234595d43a7ef\n",
          "message": "Print backtrace on Terminate\n\nIf enabled, use eu-addr2line or addr2line to print a stack trace on\ncrash, for easier debugging of long-running job crashes.\n\nThis builds FORM with -g -fno-omit-frame-pointer, which leads to a\nperformance penalty of about 1%.\n\nFor this reason, the feature is disabled by default.\n\n",
          "timestamp": "2025-06-09T19:28:50+01:00\n",
          "url": "https://github.com/form-dev/form/commit/6615abf44854aa312074cd687fe234595d43a7ef\n"
        },
        "date": 1756938434166,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "trace (form/Linux-ARM64)",
            "value": 3.062,
            "unit": "s",
            "range": "+- 0.023",
            "extra": "OS: Ubuntu 24.04.2 LTS\nCPU: Neoverse-N2, 4 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (tform -w2/Linux-ARM64)",
            "value": 1.615,
            "unit": "s",
            "range": "+- 0.01",
            "extra": "OS: Ubuntu 24.04.2 LTS\nCPU: Neoverse-N2, 4 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (tform -w4/Linux-ARM64)",
            "value": 0.876,
            "unit": "s",
            "range": "+- 0.005",
            "extra": "OS: Ubuntu 24.04.2 LTS\nCPU: Neoverse-N2, 4 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (form/Linux-X64)",
            "value": 3.94,
            "unit": "s",
            "range": "+- 0.11",
            "extra": "OS: Ubuntu 24.04.3 LTS\nCPU: AMD EPYC 7763 64-Core Processor, 2 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (tform -w2/Linux-X64)",
            "value": 2.342,
            "unit": "s",
            "range": "+- 0.027",
            "extra": "OS: Ubuntu 24.04.3 LTS\nCPU: AMD EPYC 7763 64-Core Processor, 2 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (tform -w4/Linux-X64)",
            "value": 2.313,
            "unit": "s",
            "range": "+- 0.02",
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
          "id": "a976801c2ab7022c723276a456fa6ac1644b2774\n",
          "message": "Add On/Off option \"backtrace\"\n\nThis is on by default for both form and vorm.\n\n",
          "timestamp": "2025-06-09T19:28:50+01:00\n",
          "url": "https://github.com/form-dev/form/commit/a976801c2ab7022c723276a456fa6ac1644b2774\n"
        },
        "date": 1756938709607,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "trace (form/Linux-ARM64)",
            "value": 3.076,
            "unit": "s",
            "range": "+- 0.018",
            "extra": "OS: Ubuntu 24.04.2 LTS\nCPU: Neoverse-N2, 4 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (tform -w2/Linux-ARM64)",
            "value": 1.649,
            "unit": "s",
            "range": "+- 0.013",
            "extra": "OS: Ubuntu 24.04.2 LTS\nCPU: Neoverse-N2, 4 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (tform -w4/Linux-ARM64)",
            "value": 0.888,
            "unit": "s",
            "range": "+- 0.015",
            "extra": "OS: Ubuntu 24.04.2 LTS\nCPU: Neoverse-N2, 4 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (form/Linux-X64)",
            "value": 3.956,
            "unit": "s",
            "range": "+- 0.048",
            "extra": "OS: Ubuntu 24.04.3 LTS\nCPU: AMD EPYC 7763 64-Core Processor, 2 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (tform -w2/Linux-X64)",
            "value": 2.255,
            "unit": "s",
            "range": "+- 0.027",
            "extra": "OS: Ubuntu 24.04.3 LTS\nCPU: AMD EPYC 7763 64-Core Processor, 2 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (tform -w4/Linux-X64)",
            "value": 2.171,
            "unit": "s",
            "range": "+- 0.052",
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
          "id": "660cdb024897699cd5e74465cd68ff1d658330b6\n",
          "message": "Swap Terminate for a macro which inserts file, line, function info.\n\nSlightly more useful information is given in case of a crash outside\nof a debugger.\n\n",
          "timestamp": "2025-06-09T19:28:50+01:00\n",
          "url": "https://github.com/form-dev/form/commit/660cdb024897699cd5e74465cd68ff1d658330b6\n"
        },
        "date": 1756938764383,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "trace (form/Linux-ARM64)",
            "value": 2.973,
            "unit": "s",
            "range": "+- 0.007",
            "extra": "OS: Ubuntu 24.04.2 LTS\nCPU: Neoverse-N2, 4 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (tform -w2/Linux-ARM64)",
            "value": 1.628,
            "unit": "s",
            "range": "+- 0.012",
            "extra": "OS: Ubuntu 24.04.2 LTS\nCPU: Neoverse-N2, 4 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (tform -w4/Linux-ARM64)",
            "value": 0.9,
            "unit": "s",
            "range": "+- 0.009",
            "extra": "OS: Ubuntu 24.04.2 LTS\nCPU: Neoverse-N2, 4 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (form/Linux-X64)",
            "value": 3.978,
            "unit": "s",
            "range": "+- 0.081",
            "extra": "OS: Ubuntu 24.04.3 LTS\nCPU: AMD EPYC 7763 64-Core Processor, 2 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (tform -w2/Linux-X64)",
            "value": 2.445,
            "unit": "s",
            "range": "+- 0.025",
            "extra": "OS: Ubuntu 24.04.3 LTS\nCPU: AMD EPYC 7763 64-Core Processor, 2 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (tform -w4/Linux-X64)",
            "value": 2.428,
            "unit": "s",
            "range": "+- 0.026",
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
          "id": "ea8c9cde42126387e735744b64a83dea43daad44\n",
          "message": "Resolve valgrind error on some platforms.\n\n",
          "timestamp": "2025-06-09T19:40:49+01:00\n",
          "url": "https://github.com/form-dev/form/commit/ea8c9cde42126387e735744b64a83dea43daad44\n"
        },
        "date": 1756938731338,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "trace (form/Linux-ARM64)",
            "value": 3.046,
            "unit": "s",
            "range": "+- 0.005",
            "extra": "OS: Ubuntu 24.04.2 LTS\nCPU: Neoverse-N2, 4 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (tform -w2/Linux-ARM64)",
            "value": 1.622,
            "unit": "s",
            "range": "+- 0.006",
            "extra": "OS: Ubuntu 24.04.2 LTS\nCPU: Neoverse-N2, 4 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (tform -w4/Linux-ARM64)",
            "value": 0.896,
            "unit": "s",
            "range": "+- 0.042",
            "extra": "OS: Ubuntu 24.04.2 LTS\nCPU: Neoverse-N2, 4 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (form/Linux-X64)",
            "value": 3.898,
            "unit": "s",
            "range": "+- 0.084",
            "extra": "OS: Ubuntu 24.04.3 LTS\nCPU: AMD EPYC 7763 64-Core Processor, 2 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (tform -w2/Linux-X64)",
            "value": 2.283,
            "unit": "s",
            "range": "+- 0.032",
            "extra": "OS: Ubuntu 24.04.3 LTS\nCPU: AMD EPYC 7763 64-Core Processor, 2 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (tform -w4/Linux-X64)",
            "value": 2.213,
            "unit": "s",
            "range": "+- 0.025",
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
          "id": "eee135977b5fb766c8e019cf251668bc61d285fe\n",
          "message": "check: add test which uses color.h\n\nRun the color.h example as a test. Fetch color.h and put it in formlib.\n\nReorganise the \"forcer\", \"checkpoint\" and \"multithreaded\" tests into the \"extra\"\ndir, along with the \"color\" test.\n\nRun the extra tests in the valgrind and coverage runs. Some tests are disabled\nunder valgrind and thus also under coverage.\n\nFix the multithreaded test patches settings such that it runs under vorm, tvorm\nand tvorm -w2 (now that they print warnings if these settings are implicitly\nadjusted).\n\n",
          "timestamp": "2025-06-09T19:40:49+01:00\n",
          "url": "https://github.com/form-dev/form/commit/eee135977b5fb766c8e019cf251668bc61d285fe\n"
        },
        "date": 1756938739442,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "trace (form/Linux-ARM64)",
            "value": 3.053,
            "unit": "s",
            "range": "+- 0.012",
            "extra": "OS: Ubuntu 24.04.2 LTS\nCPU: Neoverse-N2, 4 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (tform -w2/Linux-ARM64)",
            "value": 1.623,
            "unit": "s",
            "range": "+- 0.01",
            "extra": "OS: Ubuntu 24.04.2 LTS\nCPU: Neoverse-N2, 4 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (tform -w4/Linux-ARM64)",
            "value": 0.887,
            "unit": "s",
            "range": "+- 0.012",
            "extra": "OS: Ubuntu 24.04.2 LTS\nCPU: Neoverse-N2, 4 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (form/Linux-X64)",
            "value": 3.958,
            "unit": "s",
            "range": "+- 0.06",
            "extra": "OS: Ubuntu 24.04.3 LTS\nCPU: AMD EPYC 7763 64-Core Processor, 2 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (tform -w2/Linux-X64)",
            "value": 2.445,
            "unit": "s",
            "range": "+- 0.021",
            "extra": "OS: Ubuntu 24.04.3 LTS\nCPU: AMD EPYC 7763 64-Core Processor, 2 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (tform -w4/Linux-X64)",
            "value": 2.387,
            "unit": "s",
            "range": "+- 0.037",
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
          "id": "cb2cf8f30a12ccb29aef3a4f898b2a68e88f3f25\n",
          "message": "fix: various problems in poly's inverse_\n\nThe denominator of the first arg was ignored, leading to incorrect results for,\neg, inverse_(x^4-1/2,x^2). Keep it, to multiply the final result.\n\nThe input content is not removed by FORM. Remove it locally, and divide out of\nthe final result.\n\nImprove the existence check of the inverse: first check the gcd of input\nprimitives is 1. Then, if not working in Modulus mode, attempt further\nprimes if an inverse is not found over the first.\n\nAdd some special cases to provide agreement with MMA's PolynomialExtendedGCD.\n\n",
          "timestamp": "2025-06-10T13:53:07+01:00\n",
          "url": "https://github.com/form-dev/form/commit/cb2cf8f30a12ccb29aef3a4f898b2a68e88f3f25\n"
        },
        "date": 1756938750326,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "trace (form/Linux-ARM64)",
            "value": 3.169,
            "unit": "s",
            "range": "+- 0.018",
            "extra": "OS: Ubuntu 24.04.2 LTS\nCPU: Neoverse-N2, 4 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (tform -w2/Linux-ARM64)",
            "value": 1.659,
            "unit": "s",
            "range": "+- 0.005",
            "extra": "OS: Ubuntu 24.04.2 LTS\nCPU: Neoverse-N2, 4 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (tform -w4/Linux-ARM64)",
            "value": 0.901,
            "unit": "s",
            "range": "+- 0.008",
            "extra": "OS: Ubuntu 24.04.2 LTS\nCPU: Neoverse-N2, 4 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (form/Linux-X64)",
            "value": 4.05,
            "unit": "s",
            "range": "+- 0.117",
            "extra": "OS: Ubuntu 24.04.3 LTS\nCPU: AMD EPYC 7763 64-Core Processor, 2 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (tform -w2/Linux-X64)",
            "value": 2.322,
            "unit": "s",
            "range": "+- 0.022",
            "extra": "OS: Ubuntu 24.04.3 LTS\nCPU: AMD EPYC 7763 64-Core Processor, 2 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (tform -w4/Linux-X64)",
            "value": 2.276,
            "unit": "s",
            "range": "+- 0.029",
            "extra": "OS: Ubuntu 24.04.3 LTS\nCPU: AMD EPYC 7763 64-Core Processor, 2 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Andreas Maier\n",
            "email": "amaier@ifae.es\n",
            "username": "Andreas Maier\n"
          },
          "committer": {
            "name": "jodavies\n",
            "email": "jodavies@users.noreply.github.com\n",
            "username": "jodavies\n"
          },
          "id": "e495af30d7699f087e7a3a162a15ef961a7520a5\n",
          "message": "Add tests for warning when vetoing parallel execution due to dollar variable assignment\n\n",
          "timestamp": "2025-08-06T13:56:20+01:00\n",
          "url": "https://github.com/form-dev/form/commit/e495af30d7699f087e7a3a162a15ef961a7520a5\n"
        },
        "date": 1756917116360,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "trace (form/Linux-ARM64)",
            "value": 3.089,
            "unit": "s",
            "range": "+- 0.013",
            "extra": "OS: Ubuntu 24.04.2 LTS\nCPU: Neoverse-N2, 4 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (tform -w2/Linux-ARM64)",
            "value": 1.671,
            "unit": "s",
            "range": "+- 0.012",
            "extra": "OS: Ubuntu 24.04.2 LTS\nCPU: Neoverse-N2, 4 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (tform -w4/Linux-ARM64)",
            "value": 0.915,
            "unit": "s",
            "range": "+- 0.012",
            "extra": "OS: Ubuntu 24.04.2 LTS\nCPU: Neoverse-N2, 4 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (form/Linux-X64)",
            "value": 4.018,
            "unit": "s",
            "range": "+- 0.07",
            "extra": "OS: Ubuntu 24.04.3 LTS\nCPU: AMD EPYC 7763 64-Core Processor, 2 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (tform -w2/Linux-X64)",
            "value": 2.382,
            "unit": "s",
            "range": "+- 0.051",
            "extra": "OS: Ubuntu 24.04.3 LTS\nCPU: AMD EPYC 7763 64-Core Processor, 2 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (tform -w4/Linux-X64)",
            "value": 2.228,
            "unit": "s",
            "range": "+- 0.026",
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
          "id": "2099e07cf6b3da6768522487ae0e23a26e234aa0\n",
          "message": "test: update test with dollar-var moduleoption\n\nAvoid the now-default parallel veto warning in test 615.\n\n",
          "timestamp": "2025-08-06T15:15:10+01:00\n",
          "url": "https://github.com/form-dev/form/commit/2099e07cf6b3da6768522487ae0e23a26e234aa0\n"
        },
        "date": 1756916999873,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "trace (form/Linux-ARM64)",
            "value": 3.081,
            "unit": "s",
            "range": "+- 0.018",
            "extra": "OS: Ubuntu 24.04.2 LTS\nCPU: Neoverse-N2, 4 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (tform -w2/Linux-ARM64)",
            "value": 1.661,
            "unit": "s",
            "range": "+- 0.008",
            "extra": "OS: Ubuntu 24.04.2 LTS\nCPU: Neoverse-N2, 4 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (tform -w4/Linux-ARM64)",
            "value": 0.898,
            "unit": "s",
            "range": "+- 0.008",
            "extra": "OS: Ubuntu 24.04.2 LTS\nCPU: Neoverse-N2, 4 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (form/Linux-X64)",
            "value": 4.087,
            "unit": "s",
            "range": "+- 0.073",
            "extra": "OS: Ubuntu 24.04.3 LTS\nCPU: AMD EPYC 7763 64-Core Processor, 2 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (tform -w2/Linux-X64)",
            "value": 2.423,
            "unit": "s",
            "range": "+- 0.017",
            "extra": "OS: Ubuntu 24.04.3 LTS\nCPU: AMD EPYC 7763 64-Core Processor, 2 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (tform -w4/Linux-X64)",
            "value": 2.307,
            "unit": "s",
            "range": "+- 0.015",
            "extra": "OS: Ubuntu 24.04.3 LTS\nCPU: AMD EPYC 7763 64-Core Processor, 2 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Vitaly Magerya\n",
            "email": "magv@tx97.net\n",
            "username": "Vitaly Magerya\n"
          },
          "committer": {
            "name": "jodavies\n",
            "email": "jodavies@users.noreply.github.com\n",
            "username": "jodavies\n"
          },
          "id": "f63dcf4753f9321039a942b13807e50abed805a9\n",
          "message": "Simplify 32-bit detection using stdint.h\n\n",
          "timestamp": "2025-08-07T10:14:03+01:00\n",
          "url": "https://github.com/form-dev/form/commit/f63dcf4753f9321039a942b13807e50abed805a9\n"
        },
        "date": 1756916702961,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "trace (form/Linux-ARM64)",
            "value": 3.115,
            "unit": "s",
            "range": "+- 0.012",
            "extra": "OS: Ubuntu 24.04.2 LTS\nCPU: Neoverse-N2, 4 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (tform -w2/Linux-ARM64)",
            "value": 1.642,
            "unit": "s",
            "range": "+- 0.008",
            "extra": "OS: Ubuntu 24.04.2 LTS\nCPU: Neoverse-N2, 4 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (tform -w4/Linux-ARM64)",
            "value": 0.889,
            "unit": "s",
            "range": "+- 0.005",
            "extra": "OS: Ubuntu 24.04.2 LTS\nCPU: Neoverse-N2, 4 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (form/Linux-X64)",
            "value": 4.011,
            "unit": "s",
            "range": "+- 0.046",
            "extra": "OS: Ubuntu 24.04.3 LTS\nCPU: AMD EPYC 7763 64-Core Processor, 2 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (tform -w2/Linux-X64)",
            "value": 2.448,
            "unit": "s",
            "range": "+- 0.028",
            "extra": "OS: Ubuntu 24.04.3 LTS\nCPU: AMD EPYC 7763 64-Core Processor, 2 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (tform -w4/Linux-X64)",
            "value": 2.329,
            "unit": "s",
            "range": "+- 0.033",
            "extra": "OS: Ubuntu 24.04.3 LTS\nCPU: AMD EPYC 7763 64-Core Processor, 2 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Vitaly Magerya\n",
            "email": "magv@tx97.net\n",
            "username": "Vitaly Magerya\n"
          },
          "committer": {
            "name": "jodavies\n",
            "email": "jodavies@users.noreply.github.com\n",
            "username": "jodavies\n"
          },
          "id": "6210e9e0c8dd5095ea73a5a637dd153deba53347\n",
          "message": "Return int, not WORD, for error codes and the like\n\nAlso, drop declarations of some non-existing functions, and\nchange a few (but not all) of the functions that always succeed\nto void.\n\n",
          "timestamp": "2025-08-07T10:14:03+01:00\n",
          "url": "https://github.com/form-dev/form/commit/6210e9e0c8dd5095ea73a5a637dd153deba53347\n"
        },
        "date": 1756916794116,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "trace (form/Linux-ARM64)",
            "value": 3.057,
            "unit": "s",
            "range": "+- 0.009",
            "extra": "OS: Ubuntu 24.04.2 LTS\nCPU: Neoverse-N2, 4 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (tform -w2/Linux-ARM64)",
            "value": 1.653,
            "unit": "s",
            "range": "+- 0.009",
            "extra": "OS: Ubuntu 24.04.2 LTS\nCPU: Neoverse-N2, 4 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (tform -w4/Linux-ARM64)",
            "value": 0.902,
            "unit": "s",
            "range": "+- 0.012",
            "extra": "OS: Ubuntu 24.04.2 LTS\nCPU: Neoverse-N2, 4 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (form/Linux-X64)",
            "value": 3.966,
            "unit": "s",
            "range": "+- 0.04",
            "extra": "OS: Ubuntu 24.04.3 LTS\nCPU: AMD EPYC 7763 64-Core Processor, 2 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (tform -w2/Linux-X64)",
            "value": 2.375,
            "unit": "s",
            "range": "+- 0.041",
            "extra": "OS: Ubuntu 24.04.3 LTS\nCPU: AMD EPYC 7763 64-Core Processor, 2 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (tform -w4/Linux-X64)",
            "value": 2.236,
            "unit": "s",
            "range": "+- 0.03",
            "extra": "OS: Ubuntu 24.04.3 LTS\nCPU: AMD EPYC 7763 64-Core Processor, 2 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Vitaly Magerya\n",
            "email": "magv@tx97.net\n",
            "username": "Vitaly Magerya\n"
          },
          "committer": {
            "name": "jodavies\n",
            "email": "jodavies@users.noreply.github.com\n",
            "username": "jodavies\n"
          },
          "id": "83399b19aece4fe0c277fbe3ae7e6992c0636a15\n",
          "message": "Drop Malloc() in favour of Malloc1()\n\n",
          "timestamp": "2025-08-07T10:14:03+01:00\n",
          "url": "https://github.com/form-dev/form/commit/83399b19aece4fe0c277fbe3ae7e6992c0636a15\n"
        },
        "date": 1756916868307,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "trace (form/Linux-ARM64)",
            "value": 3.075,
            "unit": "s",
            "range": "+- 0.01",
            "extra": "OS: Ubuntu 24.04.2 LTS\nCPU: Neoverse-N2, 4 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (tform -w2/Linux-ARM64)",
            "value": 1.661,
            "unit": "s",
            "range": "+- 0.006",
            "extra": "OS: Ubuntu 24.04.2 LTS\nCPU: Neoverse-N2, 4 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (tform -w4/Linux-ARM64)",
            "value": 0.904,
            "unit": "s",
            "range": "+- 0.013",
            "extra": "OS: Ubuntu 24.04.2 LTS\nCPU: Neoverse-N2, 4 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (form/Linux-X64)",
            "value": 4.038,
            "unit": "s",
            "range": "+- 0.046",
            "extra": "OS: Ubuntu 24.04.3 LTS\nCPU: AMD EPYC 7763 64-Core Processor, 2 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (tform -w2/Linux-X64)",
            "value": 2.4,
            "unit": "s",
            "range": "+- 0.03",
            "extra": "OS: Ubuntu 24.04.3 LTS\nCPU: AMD EPYC 7763 64-Core Processor, 2 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (tform -w4/Linux-X64)",
            "value": 2.317,
            "unit": "s",
            "range": "+- 0.022",
            "extra": "OS: Ubuntu 24.04.3 LTS\nCPU: AMD EPYC 7763 64-Core Processor, 2 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Vitaly Magerya\n",
            "email": "magv@tx97.net\n",
            "username": "Vitaly Magerya\n"
          },
          "committer": {
            "name": "jodavies\n",
            "email": "jodavies@users.noreply.github.com\n",
            "username": "jodavies\n"
          },
          "id": "8f0bcb66ad8d1f817e103b8d46859250048c50a6\n",
          "message": "Convert explicitly inside declare.h functions\n\nThis helps to reduce diagnostics reported by -Wconversion.\n\n",
          "timestamp": "2025-08-07T10:14:03+01:00\n",
          "url": "https://github.com/form-dev/form/commit/8f0bcb66ad8d1f817e103b8d46859250048c50a6\n"
        },
        "date": 1756916917827,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "trace (form/Linux-ARM64)",
            "value": 3.123,
            "unit": "s",
            "range": "+- 0.031",
            "extra": "OS: Ubuntu 24.04.2 LTS\nCPU: Neoverse-N2, 4 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (tform -w2/Linux-ARM64)",
            "value": 1.683,
            "unit": "s",
            "range": "+- 0.013",
            "extra": "OS: Ubuntu 24.04.2 LTS\nCPU: Neoverse-N2, 4 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (tform -w4/Linux-ARM64)",
            "value": 0.917,
            "unit": "s",
            "range": "+- 0.008",
            "extra": "OS: Ubuntu 24.04.2 LTS\nCPU: Neoverse-N2, 4 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (form/Linux-X64)",
            "value": 4.023,
            "unit": "s",
            "range": "+- 0.083",
            "extra": "OS: Ubuntu 24.04.3 LTS\nCPU: AMD EPYC 7763 64-Core Processor, 2 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (tform -w2/Linux-X64)",
            "value": 2.35,
            "unit": "s",
            "range": "+- 0.031",
            "extra": "OS: Ubuntu 24.04.3 LTS\nCPU: AMD EPYC 7763 64-Core Processor, 2 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (tform -w4/Linux-X64)",
            "value": 2.256,
            "unit": "s",
            "range": "+- 0.021",
            "extra": "OS: Ubuntu 24.04.3 LTS\nCPU: AMD EPYC 7763 64-Core Processor, 2 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Vitaly Magerya\n",
            "email": "magv@tx97.net\n",
            "username": "Vitaly Magerya\n"
          },
          "committer": {
            "name": "jodavies\n",
            "email": "jodavies@users.noreply.github.com\n",
            "username": "jodavies\n"
          },
          "id": "ae5a02eac7bdd79394ab2a100a6866e4cf360f4b\n",
          "message": "Use stdint.h types instead of INT{16,32,64}\n\n",
          "timestamp": "2025-08-07T10:14:03+01:00\n",
          "url": "https://github.com/form-dev/form/commit/ae5a02eac7bdd79394ab2a100a6866e4cf360f4b\n"
        },
        "date": 1756916969433,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "trace (form/Linux-ARM64)",
            "value": 3.096,
            "unit": "s",
            "range": "+- 0.012",
            "extra": "OS: Ubuntu 24.04.2 LTS\nCPU: Neoverse-N2, 4 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (tform -w2/Linux-ARM64)",
            "value": 1.678,
            "unit": "s",
            "range": "+- 0.009",
            "extra": "OS: Ubuntu 24.04.2 LTS\nCPU: Neoverse-N2, 4 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (tform -w4/Linux-ARM64)",
            "value": 0.912,
            "unit": "s",
            "range": "+- 0.016",
            "extra": "OS: Ubuntu 24.04.2 LTS\nCPU: Neoverse-N2, 4 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (form/Linux-X64)",
            "value": 4.141,
            "unit": "s",
            "range": "+- 0.09",
            "extra": "OS: Ubuntu 24.04.3 LTS\nCPU: AMD EPYC 7763 64-Core Processor, 2 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (tform -w2/Linux-X64)",
            "value": 2.4,
            "unit": "s",
            "range": "+- 0.032",
            "extra": "OS: Ubuntu 24.04.3 LTS\nCPU: AMD EPYC 7763 64-Core Processor, 2 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (tform -w4/Linux-X64)",
            "value": 2.308,
            "unit": "s",
            "range": "+- 0.017",
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
        "date": 1756938704291,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "trace (form/Linux-ARM64)",
            "value": 3.098,
            "unit": "s",
            "range": "+- 0.015",
            "extra": "OS: Ubuntu 24.04.2 LTS\nCPU: Neoverse-N2, 4 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (tform -w2/Linux-ARM64)",
            "value": 1.597,
            "unit": "s",
            "range": "+- 0.004",
            "extra": "OS: Ubuntu 24.04.2 LTS\nCPU: Neoverse-N2, 4 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (tform -w4/Linux-ARM64)",
            "value": 0.824,
            "unit": "s",
            "range": "+- 0.009",
            "extra": "OS: Ubuntu 24.04.2 LTS\nCPU: Neoverse-N2, 4 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (form/Linux-X64)",
            "value": 4.052,
            "unit": "s",
            "range": "+- 0.075",
            "extra": "OS: Ubuntu 24.04.3 LTS\nCPU: AMD EPYC 7763 64-Core Processor, 2 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (tform -w2/Linux-X64)",
            "value": 2.169,
            "unit": "s",
            "range": "+- 0.045",
            "extra": "OS: Ubuntu 24.04.3 LTS\nCPU: AMD EPYC 7763 64-Core Processor, 2 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          },
          {
            "name": "trace (tform -w4/Linux-X64)",
            "value": 1.823,
            "unit": "s",
            "range": "+- 0.014",
            "extra": "OS: Ubuntu 24.04.3 LTS\nCPU: AMD EPYC 7763 64-Core Processor, 2 cores (4 threads)\nMemory: 15.6GiB\ngcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0\nflint 3.3.1, gmp 6.3.0, mpfr 4.2.1, zlib 1.3, zstd 1.5.5"
          }
        ]
      }
    ]
  }
}
