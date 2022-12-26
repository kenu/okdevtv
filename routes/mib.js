const express = require('express');
const router = express.Router();
const { marked } = require('marked');
const fs = require('fs');
router.all('*', function (req, res) {
    const path = req.baseUrl.split('/');
    if (path.length < 4) {
        path.push(path[2]);
    }
    const mdPath = path.slice(2).join('/');
    const filePath = './public/md/' + mdPath + '.md';
    if (fs.existsSync(filePath)) {
        fs.readFile(filePath, function (err, data) {
            if (err) {
                throw err;
            }
            const html = setBody(marked(data.toString()), path);
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
