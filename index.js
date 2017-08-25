'use strict';
// const ws = require('./ws');

const Ultron = require('./ws/node_modules/ultron' );

var EventEmitter = require('events').EventEmitter; 
var events = new EventEmitter();
// var ultron = new Ultron(events);


function foo(params) {
    console.log('----------',params);
}
// ultron
    // .on('foo', foo);



events.on('foo', foo);
// events.on('foo', foo);
// events.removeListener('foo', foo);


events.emit('foo','-x-');

// events.emit('foo');


console.log('----------', events.listeners('foo')[0]);