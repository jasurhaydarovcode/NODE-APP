const EventEmitter = require('events')

class Emitter extends EventEmitter {}

const emitter = new Emitter()

emitter.on('connect', () => {
    console.log('Server connected');
})

emitter.on('hi', (name) => {
    console.log('Hello' + ' ' + name);
})

emitter.emit('connect')
emitter.emit('hi', 'Jasur')