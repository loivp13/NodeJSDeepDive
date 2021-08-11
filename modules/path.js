const path = require('path')

//seperator
console.log(path.sep)

//join and normalize path
const filePath = path.join('/level1', 'level2', 'path.js')
console.log(filePath)

//get the base(end) of the path
const base = path.basename (filePath);
console.log(base)

//return absolute path
const absolute = path.resolve(__dirname,'level1','level2','path.js')
console.log(absolute)