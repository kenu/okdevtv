const express = require('express')
const router = express.Router()
const { marked } = require('marked')
const { JSDOM } = require('jsdom')
const createDOMPurify = require('dompurify')
const fs = require('fs')

// Initialize DOMPurify
const window = new JSDOM('').window
const DOMPurify = createDOMPurify(window)
router.all('{/*splat}', function (req, res) { 
  const path = req.params.splat
  if (path.length < 2) {
    path.push(path[0])
  }
  const mdPath = path.join('/')
  const filePath = './public/md/' + mdPath + '.md'
  if (fs.existsSync(filePath)) {
    fs.readFile(filePath, function (err, data) {
      if (err) {
        throw err
      }
      const rawHtml = marked(data.toString())
      const sanitizedHtml = DOMPurify.sanitize(rawHtml)
      const html = setBody(sanitizedHtml, path)
      res.send(html)
    })
  } else {
    res
      .status(404) // HTTP status 404: NotFound
      .send('Not found')
  }
})

function extractDescription(html) {
  const match = html.match(/<p>(.*?)<\/p>/s)
  if (match) {
    const text = match[1].replace(/<[^>]*>/g, '').trim()
    return text.length > 150 ? text.substring(0, 150) + '...' : text
  }
  return 'OKdevTV - 개발자를 위한 기술 문서'
}

function setBody(data, path) {
  const folder = '/md/' + path[2] + '/'
  const html = data.replace(/img src="images/g, 'img src="' + folder + 'images')
  const description = extractDescription(html)
  const template = fs.readFileSync(__dirname + '/template-mib.html').toString()
  const htmlTag = template
    .replace(/__path3__/g, path[1])
    .replace(/__uri__/g, path.join('/'))
    .replace(/__description__/g, description)
    .replace(/__html__/, html)
  return htmlTag
}
module.exports = router
