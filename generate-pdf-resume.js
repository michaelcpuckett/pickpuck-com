var fs = require('fs');
var pdf = require('html-pdf');


module.exports = function () {
    var html = fs.readFileSync('./phantom/index.html', 'utf8');
    var options = {
        format: 'Letter',
        "base": "file:///Users/mpuckett/sites/pickpuck-com/phantom/",
        "border": {
            "top": ".85in",            // default is 0, units: mm, cm, in, px
            "right": ".85in",
            "bottom": ".85in",
            "left": ".85in"
        }
    };
    pdf.create(html, options).toFile('./public/michael_puckett_resume.pdf', function(err, res) {
          if (err) return console.log(err);
          console.log(res);
        });
}
