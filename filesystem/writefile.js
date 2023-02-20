const fs=require('fs')

const newObject={
    name: 'Anitha',
    age:22,
    email:'anitha@gnail.com'
};

fs.writeFile('./ccvg.json',JSON.stringify(newObject),err=>{
    if(err){
        console.log(err);
    }else{
        console.log("File has been Created Successfully!!");
    }
})