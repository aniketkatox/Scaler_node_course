const path = require('path')

let ext = path.extname('/home/aniket/Desktop/THE ULTIMATE NODE COURSE/1_Node Module System/f1.txt')
let baseName = path.basename('/home/aniket/Desktop/THE ULTIMATE NODE COURSE/1_Node Module System/f1.txt')

console.log(ext)
console.log(baseName)

console.log(__filename)
console.log(__dirname)