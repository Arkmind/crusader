const fs = require('fs')

var pages = {

  getPage: function(name) {
    var body = fs.readFileSync('./www/pages/' + name + '.html', 'utf8');
    return body;
  }

}

module.exports = pages;
