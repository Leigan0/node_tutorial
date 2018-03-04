// every action on a computer is an event - like when a connection is made or a file is opened
// objects in node can fire events
// Node.js has a built in module, call Events, where you can create-, fire-, and listen for- your own events

//all event properties and methods are an instance of an EventEmitter object. To be able to access
//these properties and methods, create an EventEmitter object:

var events = require('events');
var eventEmitter = new events.EventEmitter()

//create an event handler:

var myEventHandler = function () {
  console.log('I hear a scream!');
}

//Assign the event handler to an event:
eventEmitter.on('scream', myEventHandler);

//fire the 'scream' event:
eventEmitter.emit('scream')
