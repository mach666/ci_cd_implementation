const EXPRESS=require('express')
const APP=EXPRESS()
const PORT=8000

APP.get('/',(req,res)=>{
    res.send("This is get request at CI&CD implmentation")
})

APP.listen(PORT,()=>{
    console.log(`Server is listeninig on port:${PORT}`)
})

module.exports=APP