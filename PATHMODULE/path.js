
const path =require('path')



const emailTemplates = path.resolve(__dirname, "../views/emailTemplates/");

const emailFilePath = path.join(emailTemplates, '${mailData.type}.pug');

console.log(emailTemplates)

console.log(emailFilePath)

 console.log('Direction: '+path.dirname('C:/Node.js/PATHMODULE/path.js'));
console.log('Extname :'+path.extname('C:/Node.js/PATHMODULE/path.js'));
console.log('Basename: '+path.basename('C:/Node.js/PATHMODULE/path.js'));
console.log(path.parse('C:/Node.js/PATHMODULE/path.js'));