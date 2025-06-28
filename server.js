const http=require('http')
const PORT=3000
const fs=require('fs')
const server=http.createServer((req,res)=>{
    res.writeHead(200,{'content':'type\html'})
    fs.readFile('./index.html',(err,data)=>{
        if(err){
            res.writeHead(404)
            res.write("Page Not found")
        }else{
            res.write(data)
           
            console.log("file readed successfully")
        }
         res.end()
    })
})

server.listen(PORT,()=>{
     console.log(`Server is running on http://localhost:${PORT}`)
})