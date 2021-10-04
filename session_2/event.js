//  first letter of EventEmitter indicate the class
// class is a container of related method and properties

// here EventEmitter is a Class
const EventEmitter = require('events');
// and emitter is a object of Class
const emitter = new EventEmitter();

// mostly we use `emit` and `on`

// register a listener for event  
// first arg is like id 

emitter.on('messageLogged', () => {
    console.log("listener called")
});
emitter.on('hello', () => {
    console.log("hello is called")
})


// emit is used to call the event 
emitter.emit("hello")
    // arg identify the event 
emitter.emit("messageLogged");