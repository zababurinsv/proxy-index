let wstun = require("./wstun/index.js");

reverse_client = new wstun.client_reverse();
wstunHost = 'ws://tunnel-reverse.herokuapp.com';
console.log({
    pid: process.pid,
    port: process.env.PORT || 5001
})
reverse_client.start('5001', wstunHost, 'localhost:4114');