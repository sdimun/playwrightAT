# Playwright Task

This task contains end-to-end test for the [Veeam website](https://www.veeam.com/) using [Playwright](https://playwright.dev/).

## 📂 Project Structure
.
├───node_modules
│   ├───.bin
│   ├───@playwright
│   │   └───test
│   ├───@types
│   │   └───node
│   │       ├───assert
│   │       ├───compatibility
│   │       ├───dns
│   │       ├───fs
│   │       ├───readline
│   │       ├───stream
│   │       ├───timers
│   │       ├───ts5.1
│   │       │   └───compatibility
│   │       ├───ts5.6
│   │       │   └───compatibility
│   │       └───ts5.7
│   │           └───compatibility
│   ├───playwright
│   │   ├───lib
│   │   │   ├───common
│   │   │   ├───isomorphic
│   │   │   ├───loader
│   │   │   ├───matchers
│   │   │   ├───plugins
│   │   │   ├───reporters
│   │   │   │   └───versions
│   │   │   ├───runner
│   │   │   ├───third_party
│   │   │   ├───transform
│   │   │   └───worker
│   │   └───types
│   ├───playwright-core
│   │   ├───bin
│   │   ├───lib
│   │   │   ├───cli
│   │   │   ├───client
│   │   │   ├───generated
│   │   │   ├───protocol
│   │   │   ├───remote
│   │   │   ├───server
│   │   │   │   ├───android
│   │   │   │   ├───bidi
│   │   │   │   │   └───third_party
│   │   │   │   ├───chromium
│   │   │   │   ├───codegen
│   │   │   │   ├───dispatchers
│   │   │   │   ├───electron
│   │   │   │   ├───firefox
│   │   │   │   ├───har
│   │   │   │   ├───recorder
│   │   │   │   ├───registry
│   │   │   │   ├───trace
│   │   │   │   │   ├───recorder
│   │   │   │   │   ├───test
│   │   │   │   │   └───viewer
│   │   │   │   ├───utils
│   │   │   │   │   └───image_tools
│   │   │   │   └───webkit
│   │   │   ├───third_party
│   │   │   ├───utils
│   │   │   │   └───isomorphic
│   │   │   ├───utilsBundleImpl
│   │   │   └───vite
│   │   │       ├───htmlReport
│   │   │       ├───recorder
│   │   │       │   └───assets
│   │   │       └───traceViewer
│   │   │           └───assets
│   │   └───types
│   └───undici-types
├───playwright-report
├───test-results
├───tests
│   └───pages
└───tests-examples
