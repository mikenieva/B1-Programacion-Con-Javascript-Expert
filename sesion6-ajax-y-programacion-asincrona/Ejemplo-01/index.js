console.log('Starting App');

setTimeout(() => {
  console.log('Inside of callback')
}, 2000);

setTimeout(() => {
  console.log('another callback');
}, 0)

console.log('Finishing up');
