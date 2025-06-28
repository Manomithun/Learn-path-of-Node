const {myfunc,mystring}=require('./module1')
const https=require('http')
const PORT=3000
const server=https.createServer((req,res)=>{
    res.writeHead(200,{'content-Type' :'text/plain'})
    res.write(mystring)
    myfunc()
    res.end()
})
server.listen(PORT,()=>{
     console.log(`Server is running on http://localhost:${PORT}`)
})
