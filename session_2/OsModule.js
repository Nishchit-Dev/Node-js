const os = require('os')

var totalRAM = os.totalmem();

var freeRAM = os.freemem();

console.log("total ram :", (totalRAM / (1024 * 1024 * 1024)));
console.log("free ram :", (freeRAM / (1024 * 1024 * 1024)));