// we need EventEmitter 
const EventEmitter = require('events');
const emitter = new EventEmitter();

// delclaring or registering the event 

emitter.on('messgeLogged', (args_event) => {
    console.log(`the argumetn passed in the emitter ${args_event}`);
});

// calling or invoking or rasing the event 

emitter.emit('messageLog', { id: 101, url: 'https://www.url.com' });