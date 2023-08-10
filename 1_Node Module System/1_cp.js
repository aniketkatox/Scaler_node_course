// Child process is a node module used to create sub process within a script.
// you can perfrom different tasks with your script by just using some methods.

const cp = require('child_process')
//cp.execSync('gnome-calculator')

console.log('output ' + cp.execSync('node demo.js'))

// const output = cp.execSync('node demo.js');
// console.log(output.toString());