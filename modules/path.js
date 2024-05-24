//PATH
const path = require('path')

// console.log(__dirname);
// console.log(__filename);

// file name
console.log(path.basename(__filename));

// directory name
console.log(path.dirname(__filename));

// file extension
console.log(path.extname(__filename));

// create path object
const pathObj = path.parse(__filename);
console.log(pathObj);
