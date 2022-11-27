# pnpm install sqlite3 demo, for electron project 

## 1.edit `.npmrc` file(ref:https://www.electron.build/index.html#note-for-pnpm):
```
node-linker=hoisted
public-hoist-pattern=*
shamefully-hoist=true
```
## 2.init: `pnpm i`,
## 3.dev: `pnpm start`
## 4.build: `pnpm build`


# error and fix:
### 1. No such file or directory:  "../../../../[folder]/nothing.c"
>fix: path too long! use short path

### 2. `node_modules\pnpm\bin\pnpm.cjs: %1 is not a valid Win32 application.`:
```
PS F:\t\db_test> pnpm build

> db_test@1.0.9 build F:\t\db_test
> electron-builder

  • electron-builder  version=23.6.0 os=10.0.19044
  • loaded configuration  file=package.json ("build" field)
rch=x64
  ⨯ cannot execute  cause=fork/exec C:\Users\Administrator\AppData\Local\pnpm\global\5\.pnpm\registry.npmmirror.com+pnpm@7.17.0\node_modules\pnpm\bin\pnpm.cjs: %1 is not a valid Win32 application.
                    command='C:\Users\Administrator\AppData\Local\pnpm\global\5\.pnpm\registry.npmmirror.com+pnpm@7.17.0\node_modules\pnpm\bin\pnpm.cjs' rebuild sqlite3@5.1.2

                    workingDir=
 ELIFECYCLE  Command failed with exit code 1.
PS F:\t\db_test>

```

> fix :(ref: https://github.com/electron-userland/electron-builder/issues/6933#issuecomment-1213438889):
> open file `C:\Users\Administrator\AppData\Local\pnpm\global\5\.pnpm\registry.npmmirror.com+pnpm@7.17.0\node_modules\pnpm\bin\pnpm.cjs`, replace `#!/usr/bin/env node` with `#!node`


>note: use `const sqlite3 = require('sqlite3')`, no `import sqlite3 from 'sqlite3'`
