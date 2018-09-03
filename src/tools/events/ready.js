const { globalShortcut } = require('electron')

export default function (mainWindow) {
  globalShortcut.register('CommandOrControl+D', () => {
    console.log('CommandOrControl+D is pressed')

    mainWindow.webContents.send('ping', 'whoooooooh1!')
  })
}
