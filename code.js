const os=require("os");
const path=require("path")
console.log(os.version())
console.log(os.type())
console.log(os.homedir())
console.log(__dirname,__filename)
console.log(path.dirname(__filename))
console.log("basename")
console.log(path.basename(__filename))
console.log(path.parse(__filename))