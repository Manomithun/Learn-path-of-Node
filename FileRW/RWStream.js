const fs=require('fs')
const path=require('path')
const rs=fs.createReadStream(path.join(__dirname,'story.txt'),'utf-8')
const ws=fs.createWriteStream(path.join(__dirname,'storycopy.txt'))
// rs.on('data',(datachunk)=>{
//     ws.write(datachunk)
// })
rs.pipe(ws)