import express from 'express'
import auth from './assets/auth.js'


const app =express()
app.use(express.json())

app.use('/user',auth)

app.get('/get',()=>{
    console.log('get method is working')
})

app.listen(3003,()=>{
    console.log('server is executed in http:localhost:4004')
})