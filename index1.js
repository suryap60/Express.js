import express from 'express'
import router from './router/router.js'


const app = express()

app.use(express.json())

app.use('/users',router)


app.listen(4005,()=>{
    console.log('Server is excuted in http://localhost:4005')
})