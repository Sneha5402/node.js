const EventEmitter=require ('events');
const emitter = new EventEmitter();

emitter.on('msgLogged',function(){
    console.log('Listerener called');
})
emitter.emit('msgLogged');