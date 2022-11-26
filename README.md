# sqlite_test
## build failed

## 1.init: `pnpm i`
## 2.start(success): `pnpm start`:
> ![](https://github.com/v9u/sqlite_test/blob/main/start_failed.png)

## 3.build(failed): `pnpm build`:
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
> ![](https://github.com/v9u/sqlite_test/blob/main/buld_failed.png)


## fix build failed(from https://github.com/electron-userland/electron-builder/issues/6933#issuecomment-1213438889):
> open file `C:\Users\Administrator\AppData\Local\pnpm\global\5\.pnpm\registry.npmmirror.com+pnpm@7.17.0\node_modules\pnpm\bin\pnpm.cjs`, replace `#!/usr/bin/env node` with `#!node`,
