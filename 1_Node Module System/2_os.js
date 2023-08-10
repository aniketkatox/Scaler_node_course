const os = require('os')

console.log(os.arch())  //architecture (x64)
console.log(os.platform())  //linux

console.log(os.networkInterfaces())
console.log(os.cpus())

console.log(os.totalmem())
console.log(os.freemem())