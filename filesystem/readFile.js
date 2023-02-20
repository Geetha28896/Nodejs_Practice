const { json } = require('express')
const fs=require('fs')

//function is a call back function
fs.readFile('./employee.json',function(err,jsonString){
    //console.log(req.body);
    if(err){
     console.log(err)
    }else{
        console.log("Employee Details : "+jsonString)
        
        //parse the string to a json to js Object
try{
        const data=JSON.parse(jsonString)
        console.log("Address of the json obj : "+data.address );
}catch{
    console.log("Error Parsing Json: ",err);
}
    }
})

//using strinify

// const newObject={
//     name: 'Anitha',
//     age:22,
//     email:'anitha@gnail.com'
// };

// const jsonString=JSON.stringify(newObject);
// console.log("stringify object: "+jsonString);

