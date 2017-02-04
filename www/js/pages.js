var pages = require('./../core/pages.js')

document.getElementById("addout").addEventListener("click", function (e) {
  animations.writePopup(pages.getPage('out'))
  animations.openPopup();
})

document.getElementById("cog").addEventListener("click", function (e) {
  animations.writePopup(pages.getPage('config'))
  animations.openPopup();
})
