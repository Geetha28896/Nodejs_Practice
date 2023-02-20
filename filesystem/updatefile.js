const { json } = require('express')
const fs=require('fs')


// fs.readFile('./employee.json',function(err,jsonString){
//     //console.log(req.body);
//     if(err){
//      console.log(err)
//     }else{

//         try{
//             const data=JSON.parse(jsonString);
//             console.log(data.address)
        
//         }catch(err){
//             console.log("Error Parsing JSON",err);
//         }
//     }
// });

//readfileSync used by here


function jsonReader(filePath,cb){//cb- call back function 
    fs.readFile(filePath,'utf-8',(err,fileData)=>{
        if(err){
            return cb && cb(err);
        }
        try{
            const Object = JSON.parse(fileData);
            return cb && cb(null,object);
        }catch(err){
            return cb && cb(err);
        }
    });
}

const object={
    id: 101,
    firstName:'John',
    lastName: 'deo',
    email: 'john@gmail.com',
    phone_number: '6668697098'

};

//stringify method used to print the obj
// const jsonString=JSON.stringify(object);
// console.log(jsonString);
        
fs.writeFile('./addemp.json',JSON.stringify(object,null,2),err=>{
    if(err){
        console.log(err);
    }else{
        console.log('File has been Updated Successfully');
    }
})

jsonReader('./employee.json',JSON.stringify(data),err=>{
    if(err){
        console.log(err);
    }else{
        data.id+=1;
        fs.writeFile('./employee.json',JSON.stringify(data),err=>{
            if(err){
                console.log(err);
            }
        })
    }
})
    