const fsP=require('fs').promises;
const path=require('path')

const call=async ()=>{
    try{
    var data=await fsP.readFile(path.join(__dirname,"SayHello.txt"),'utf-8')
    console.log(data);
    // write in a file
    await fsP.writeFile(path.join(__dirname,'sample.txt'),"sample text for testing the code this was writen by using  async file operation");

    await fsP.appendFile(path.join(__dirname,'sample.txt'),"\n Thankyou");
    }catch(err){
        console.error(err)
    }
}
call()