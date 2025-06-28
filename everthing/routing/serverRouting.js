const http=require('http')
const {call}=require('./app.js')
const PORT=3000
const server=http.createServer(call);
server.listen(PORT,()=>{
    console.log("Success fully server open")
})