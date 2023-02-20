const os =require('os');
console.log('Architech '+os.arch());
console.log(os.platform());
console.log(os.version());


const circle=require('./oscustomer.js');
console.log(circle.area(4));