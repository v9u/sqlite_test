// index.js

const { app, BrowserWindow, ipcMain } = require('electron')

const sq3 = require('sqlite3')

const sqlite3 = sq3.verbose()
const path = require('path')
const dbpath = path.join(app.getPath('userData'), 'sq3-996007.db')
    console.log('dbpath:', dbpath)
    let db = new sqlite3.Database(dbpath)

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win

function createWindow() {
    // 创建浏览器窗口。
    win = new BrowserWindow({
        width: 800, height: 600, webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })

    win.loadFile('index.html')
    win.webContents.openDevTools()

    win.on('closed', () => {
       
        win = null
    })
    
    ipcMain.handle('insert-data', async (e, data) => {
        const result = await new Promise((resolve, reject) => {
            try {
                if(!db){
                     db = new sqlite3.Database(dbpath)
                }
                db.serialize(() => {
                    db.run("create table test(data varchar(20))", () => {
                        db.run(`insert into test values('${data}')`, () => {
                            db.all("select * from test", (err, res) => {
                                if (err) {
                                    console.error('insert err:', err)
                                    resolve({success:false,msg:err.message})
                                } else {
                                    console.log('insert result:', JSON.stringify(res))
                                    resolve({success:true,data:res})
                                }

                            })
                        })
                    })
                })
            } catch (e) {
                console.error('insert data catch:', e)
                resolve({success:false,msg:`insert data catch:${e.message}`})
            }
        })
        return { result, dbpath }
    })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
    db?.close();
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (win === null) {
        createWindow()
    }
})