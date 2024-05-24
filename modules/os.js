// ************** OS METHODS ************** //

/*
 OS === Operating System, Yani web saytdan biror bir dastur yuklab olmoxchi bo'lganimizda
        
 operatsion sistemamizga mos bo'lgan formatni ko'rsatadi 

 windows dan saytga kirilganda .exe formatni automatik ko'rsatadi
*/

const os = require('os')

// ! platform
console.log(os.platform())

// ! Arch
console.log(os.arch())

// ! CPU Cores
console.log(os.cpus())

// ! Free Memory
console.log(os.freemem())
// 1-byte = 8-bit
// console.log((1123536896/8)/1024/1024); mathematic

// ! Total Memory
console.log(os.totalmem())

// ! Up Time
console.log(os.uptime())

// =============== and other methods===================

// ! Home Dir
console.log(os.homedir())

// ! Temp Dir
console.log(os.tmpdir())

// ! Type
console.log(os.type())

// ! ipconfig
console.log(os.networkInterfaces())