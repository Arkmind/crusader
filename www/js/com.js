const ipc = require('electron').ipcRenderer


ipc.send('connexion', {
  name : "connexion",
  data : "User is now connected to the ipc"
})

ipc.on('message', (evt, arg) => {

})
