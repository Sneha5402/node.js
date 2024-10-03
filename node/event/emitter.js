// const EventEmitter=require ('events');
// const emitter = new EventEmitter();

// emitter.on('msgLogged',function(){
//     console.log('Listerener called');
// })
// emitter.emit('msgLogged');


const EventEmitter = require('events');

// Create a new instance of EventEmitter
const myEmitter = new EventEmitter();

// Register a listener for the 'greet' event
myEmitter.on('greet', (name) => {
  console.log(`Hello, ${name}!`);
});

// Register another listener for the 'greet' event
myEmitter.on('greet', (name) => {
  console.log(`${name}, welcome to the event emitter demo!`);
});

// Emit the 'greet' event
myEmitter.emit('greet', 'Alice');

// Register a one-time listener for the 'bye' event
myEmitter.once('bye', (name) => {
  console.log(`Goodbye, ${name}! This will only run once.`);
});

// Emit the 'bye' event twice
myEmitter.emit('bye', 'sneha');  // Listener will be called
myEmitter.emit('bye', 'sneha');  // Listener won't be called
