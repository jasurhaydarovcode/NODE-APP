// ************** FS METHODS ************** //

const fs = require('fs')
const path = require('path')

// ! mdkir file create

// fs.mkdir(path.join(__dirname, 'folder'), {}, (err) => {
//     if(err) throw err
//     console.log('File Created');
// })

// !create file

// fs.writeFile(path.join(__dirname, 'folder', 'hello.txt'), 'Hello World', (err) => {
//     if(err) throw err
//     console.log('File Created');
// })

// ! append file

// fs.appendFile(path.join(__dirname, 'folder', 'hello.txt'), '\nSalom Dunyo', (err) => {
//     if(err) throw err
//     console.log('File Created');
// })

// ! read file

// fs.readFile(path.join(__dirname, 'folder', 'hello.txt'), 'utf8', (err, data) => {
//     if(err) throw err
//     console.log(data);
// })

// ! rename file

// fs.rename(
//     path.join(__dirname, 'folder', 'hello.txt'), 
//     path.join(__dirname, 'folder', 'main.txt'),
//     (err) => {
//         if(err) throw err
//         console.log('File Renamed');
//     }
// )