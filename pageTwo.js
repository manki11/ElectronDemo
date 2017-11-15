const remote= require('electron').remote;
const main= remote.require('./index.js');

var button= document.getElementById('index');
button.addEventListener('click', () => {
    var window= remote.getCurrentWindow();
    main.openWindow('index');
    window.close();
}, false);