let promise = new Promise(function(resolve, reject) {
  console.log('Promise')
  resolve()
});

promise.then(function() {
  console.log('Resloved.');
});

console.log('Hi!')