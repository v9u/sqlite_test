const { app, BrowserWindow, ipcRenderer,contextBridge } = require('electron')

contextBridge.exposeInMainWorld(
	'electron',
	{
			insertData: (data) => ipcRenderer.invoke('insert-data',data)
	}
)