const fs = require('graceful-fs')
const data = fs.readFileSync('./d.txt', 'utf8')
const dl = data.split('\n')
const i = 0
for (let idx in dl) {
  if (dl.hasOwnProperty(idx)) {
    const obj = getJson(dl[idx])
    const row =
      '{ "index" : { "_index": "cs", "_type": "record", "_id": ' +
      i++ +
      '} }\n' +
      JSON.stringify(obj) +
      '\n'
    if (!obj.service_type || i == 1) {
      continue
    }
    fs.appendFile('myfile.txt', row, (err) => {
      if (err && err.code === 'EEXIST') {
        console.error('myfile already exists')
        return
      } else {
        throw err
      }
    })
  }
}

function getJson(line) {
  const scheme = [
    'service_type',
    'pcode',
    'pname',
    'afcode',
    'afname',
    'pcategory',
    'date',
    'srtype',
    'cat1',
    'cat2',
    'cat3code',
    'cat3',
    'md_id',
    'act_cnt',
    'cs_content',
  ]
  const l = line.replace(/\r/g, '')
  const arr = l.split('\t')
  const t = {}
  for (idx in arr) {
    t[scheme[idx]] = arr[idx]
  }
  const content = t.cs_content
  if (t.cs_content) {
    const carray = content.split('>')
    t.cat4 = carray[0].split('<')[1]
    t.cat5 =
      carray[1] && carray[1].indexOf('<') > -1
        ? carray[1].split('<')[1]
        : carray[1]
  }
  const d = t.date
  const d2 = t.date
    ? d.substring(0, 4) + '-' + d.substring(4, 6) + '-' + d.substring(6, 8)
    : '2017-01-01'
  t.timestamp = new Date(d2)
  return t
}
