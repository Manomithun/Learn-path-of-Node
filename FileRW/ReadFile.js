const fs=require('fs')
const path=require('path')
fs.readFile(path.join(__dirname,'hello.txt'),'utf-8',(err,data)=>{
  if(err)throw err;
  console.log(data);
}
)
fs.writeFile(path.join(__dirname,'sayHello.txt'),"Hello buddy",(err)=>{
    if(err)throw err
    console.log("Written Succesfully");
    fs.appendFile(path.join(__dirname,'sayHello.txt'),"\t How are you",(err)=>{
        if(err)throw err
        console.log("Appended sussfully")
    })
    fs.rename(path.join(__dirname,'sayHello.txt'),path.join(__dirname,'SayHello.txt'),(err)=>{
        if(err)throw err
        console.log("rename Succes fully")
    })
})