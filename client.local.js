var wstun = require("./wstun/index.js");

reverse_client = new wstun.client_reverse();
wstunHost = 'ws://localhost:5000';
console.log({
    pid: process.pid,
    port: process.env.PORT || 5000
})
reverse_client.start(process.env.PORT || 5001, wstunHost, 'localhost:4114');