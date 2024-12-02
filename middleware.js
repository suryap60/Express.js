import express from 'express'

const app = express()
app.use(express.json())

let user ="Surya"
app.use((req,res,next)=>{
    const data =req.body.name
    console.log(data)
    if(!data){
        res.send('Enter a name')
        return;
    }
    if(user.name === data){
        // next()
        
        res.send('Welcome to Our WebSite')
        return;
    }else{
        res.send('Please Login')
    }
    next()
})

app.get('/get',(req,res)=>{
    // res.send('Welcome to Our WebSite')
    console.log("welcome new page")
})

app.listen(4002,()=>{
    console.log('server running on port http://localhost:4002')
})