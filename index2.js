import express from 'express'
import route from './router/route.js'

const app = express()

app.use(express.json())

app.use('/users',route)

app.listen(2002,()=>{
    console.log(`Server is running on http://localhost:2002`)
})