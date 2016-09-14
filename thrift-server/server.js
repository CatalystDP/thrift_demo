'use strict';
const thrift = require('thrift');
const HelloMethod=require('../gen-nodejs/HelloMethod');
const hello_type=require('../gen-nodejs/hello_types');

let HelloMethodImpl={
    sayHello:function(helloMsg,callback){
        console.log('say hello from ',helloMsg.name);
        callback(null);
    }
};//HelloMethod接口实现

let server=thrift.createServer(HelloMethod,HelloMethodImpl);
server.listen(10000);