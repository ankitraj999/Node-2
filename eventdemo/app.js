const eve=require('events');
//declaration
const emitter=new eve.EventEmitter()

//rgister the listener
emitter.on('message',function(msg){
    console.log('in event listner ',msg)

})

emitter.emit('message',{id:1,name:'ankit'})

