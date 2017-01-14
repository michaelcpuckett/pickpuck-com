var fs = require('fs');
var pdf = require('html-pdf');
var html = fs.readFileSync('./index.html', 'utf8');
var options = { format: 'Letter',
"base": "file:///Users/mpuckett/sites/pickpuck-com/public/",
"border": {
    "top": ".85in",            // default is 0, units: mm, cm, in, px
    "right": ".85in",
    "bottom": ".85in",
    "left": ".85in"
  } };

pdf.create(html, options).toFile('./resume.pdf', function(err, res) {
  if (err) return console.log(err);
  console.log(res); // { filename: '/app/businesscard.pdf' }
});
