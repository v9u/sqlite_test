# sqlite_test
## build failed

## 1.init: `pnpm i`
## 2.start: `pnpm start`
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
