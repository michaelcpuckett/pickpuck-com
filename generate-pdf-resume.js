var fs = require('fs');
var pdf = require('html-pdf');


module.exports = function () {
    var html = fs.readFileSync('./phantom/index.html', 'utf8');
    var options = {
        format: 'Letter',
        "base": 'file://' + __dirname + "/phantom/",
        "border": {
            "top": ".65in",            // default is 0, units: mm, cm, in, px
            "right": ".5in",
            "bottom": ".5in",
            "left": ".65in"
        }
    };
    pdf.create(html, options).toFile('./public/michael_puckett_resume.pdf', function(err, res) {
          if (err) return console.log(err);
          console.log(res);
        });
}
