const fs=require('fs')
console.log(fs.existsSync('/.new'))
fs.mkdir('./new',(err)=>{
    if(err)throw err 
    console.log("created")
    
    console.log(fs.existsSync('/.new'))
    fs.rmdir('./new',(err)=>{
    if(err)throw err
    console.log("deleted")
})
})


