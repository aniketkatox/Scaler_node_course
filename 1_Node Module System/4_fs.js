const fs = require('fs')

// //reading a file

// let fileContent = fs.readFileSync('f1.txt')
// console.log('Data of file 1-> ' + fileContent)

// //writing in a file

// // If the file name that is passed doesn't exists then a new file will be created with it's
// // name and the data will be written on that file

// fs.writeFileSync('f2.txt' , 'This is file 2')
// console.log('File has been written')

// //append a file
// //appendFileSync method adds new data to a previously written file
// fs.appendFileSync('f3.txt' , 'This is updated data')
// console.log('File has been updated')

// //delete a file
// fs.unlinkSync('f2.txt')
// console.log('File has been deleted')

// Directories

//create a directory
fs.mkdirSync('myDirectory')

//check the content inside of a directory
let folderPath = '/home/aniket/Desktop/THE ULTIMATE NODE COURSE/1_Node Module System/myDirectory'
let folderContent = fs.readdirSync(folderPath)
console.log("Folder Content ", folderContent)

//check whether a directory exists or not
let doesExist = fs.existsSync('myDirectory')
console.log(doesExist)

//remove directory
fs.rmdirSync('myDirectory')
console.log("Directory has been removed")