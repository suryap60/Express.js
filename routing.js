import express from 'express'
import router from './assets/router.js'


const app= express()

app.use(express.json())

app.get('/',(req,res)=>{
    res.send('get a data')
})

app.post('/post',(req,res)=>{
    res.send('get a  Post Data')
})
app.get('/random.text',(req,res)=>{
    res.send('random.text')
})

app.get('/ab?cd', (req, res) => {
    res.send('ab?cd')
  })

//   MiddleWare Function

let user = "Surya"

app.use('/get',(req,res,next)=>{
    const data = req.body.user;
    if(!data){
        res.send('Enter a name')
    }
    if(user !=data){
        res.send('Please login')
        console.log(user)
    }
    else{
        res.send('Welcome to our WebSite')
    }
    next()
})

app.use('/user',router)

app.use('/get',()=>{
    console.log('middleware function successfull')
})




app.listen(3033,()=>{
    console.log('Server is running in http://localhost:3033')
})