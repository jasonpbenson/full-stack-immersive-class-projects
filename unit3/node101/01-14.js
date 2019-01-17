//native js applicable to Node.js
const x = 1;
console.log(x);

//non-native (host) elements not applicable to Node.js:
//console.log(window);
//console.log('body');
//document.querySelector()

const os = require('os');

const cpus = os.cpus();
console.log(cpus);

const freeMem = os.freemem();
console.log(freeMem);

const networkInt = os.networkInterfaces();
console.log(networkInt);

//Node.js can fetch modules using npm (like pip for python)
