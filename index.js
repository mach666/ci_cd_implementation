const EXPRESS=require('express')
const APP=EXPRESS()
const PORT=process.env.PORT||8000

APP.get('/',(req,res)=>{
    res.send("This is get request at CI&CD implmentation with CD automated via HEROKU after gui approach")
})
APP.get('/post',(req,res)=>{
    res.send("This is second api call")
})

APP.listen(PORT,()=>{
    console.log(`Server is listeninig on port:${PORT}`)
})

module.exports=APP