let wstun = require("./wstun/index.js");
let fs = require('fs');
console.log('~~~~~~ process ~~~~~~', {
    port: process.env.PORT || 5000,
    pid:  process.pid
})
reverse_server = new wstun.server_reverse();
reverse_server.start(process.env.PORT || 5000);

