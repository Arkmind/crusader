const remote = require('electron').remote;

let toggle = true;

var animations = {

  openPopup: function() {
    var popup = document.getElementById('popup');
    var containt = document.getElementById('containt');
    popup.style.zIndex = '999';
    popup.style.opacity = '1';
    containt.style.opacity = "0.8";
    containt.style.zIndex = "998";
  },

  closePopup: function() {
    var popup = document.getElementById('popup');
    var containt = document.getElementById('containt');
    popup.style.zIndex = '-1';
    popup.style.opacity = '0';
    containt.style.opacity = "0";
    containt.style.zIndex = "-1";
  },

  writePopup: function(body) {
    var popup = document.getElementById('popup');
    popup.innerHTML = body;
  }

}

document.getElementById("min").addEventListener("click", function (e) {
  var window = remote.getCurrentWindow();
  window.minimize();
  console.log('[TYPE] minimize');
});

document.getElementById("rest").addEventListener("click", function (e) {
  var window = remote.getCurrentWindow();
  if (!window.isMaximized()) {
    window.maximize();
    console.log('[TYPE] maximize');
  } else {
    window.unmaximize();
    console.log('[TYPE] unmaximize');
  }
});

document.getElementById("close").addEventListener("click", function (e) {
  var window = remote.getCurrentWindow();
  window.close();
});

document.getElementById("containt").addEventListener("click", function (e) {
  animations.closePopup();
})

document.getElementById('toggle').addEventListener("click", function (e) {
  var after = document.getElementById('after');
  if(toggle) {
    after.style.marginLeft = '20px';
    after.style.background = '#67252d';
    toggle = false;
  } else {
    after.style.marginLeft = '0px';
    after.style.background = '#254b67';
    toggle = true;
  }
})
