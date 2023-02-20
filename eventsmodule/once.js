const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
let m = 0;
myEmitter.once('event', () => {
  console.log(++m);//one time only it will on
});
myEmitter.emit('event');
// Prints: 1
myEmitter.emit('event');
// Ignored