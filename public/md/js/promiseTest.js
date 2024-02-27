function testFunction() {
  return new Promise(function (resolve, reject) {
    resolve('test1', 'test2')
  })
}

function run() {
  testFunction()
    .then(function (e) {
      console.log(arguments)
    })
    .catch(function (err) {
      console.log(err)
    })
}

async function run2() {
  try {
    const response = await testFunction()
    console.log(response) // test1
  } catch (err) {
    console.log(err)
  }
}

run()
run2()
