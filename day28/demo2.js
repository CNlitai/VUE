var promise = new Promise(function (resolve, reject) {
  resolve('OK');
  throw new Error('test')
})
promise
.then(function(value) {
  console.log(value)
})
.catch(function(error) {
  console.log(error)
})
