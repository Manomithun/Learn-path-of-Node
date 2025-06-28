const url=require('url')
const fsp=require('fs').promises;
const call=(req,res)=>{
res.writeHead(200,{'content-Type':'text/html'})
const path=url.parse(res.url).pathname;
switch(path){
    case '/index.html':
        routingfunc('index.html',res)
        break;
    case '/login.html':
        routingfunc('login.html',res)
        break;
    default:
        res.writeHead(404)
        res.write("file not found");
        res.end();    
      
}
}
async function routingfunc(path,res){
   await fsp.readFile(path,null,(err,data)=>{
        if(err){
            res.write("page Not Found")
            
        }
        else{
            res.write(data)
        }
        res.end()
    })
}
module.exports={call}