var express = require('express');
var router = express.Router();
const { marked } = require('marked');
var fs = require('fs');
router.all('*', function (req, res) {
    var path = req.baseUrl.split('/');
    if (path.length < 4) {
        path.push(path[2]);
    }
    var mdPath = path.slice(2).join('/');
    var filePath = './public/md/' + mdPath + '.md';
    if (fs.existsSync(filePath)) {
        fs.readFile(filePath, function (err, data) {
            if (err) {
                throw err;
            }
            var html = setBody(marked(data.toString()), path);
            res.send(html);
        });
    } else {
        res.status(404) // HTTP status 404: NotFound
            .send('Not found');
    }
});

function setBody(data, path) {
    const folder = '/md/' + path[2] + '/';
    const html = data.replace(/img src="images/g, 'img src="' + folder + 'images');
    const template = fs.readFileSync(__dirname + '/template-mib.html').toString();
    const htmlTag = template.replace(/__path3__/g, path[3])
        .replace(/__uri__/g, path.join('/'))
        .replace(/__html__/, html);
    return htmlTag;
}
module.exports = router;
