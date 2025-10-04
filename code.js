    const { app, BrowserWindow } = require('electron');
    const path = require('path');

    function createWindow() {
      const win = new BrowserWindow({
        width: 1200,
        height: 800,
        webPreferences: { nodeIntegration: true, contextIsolation: false },
        frame: false, // Removes default window frame for custom title bar
      });
      win.loadURL('http://localhost:3000'); // Or build and load dist
    }

    app.whenReady().then(createWindow);
    app.on('window-all-closed', () => { if (process.platform !== 'darwin') app.quit(); });
    