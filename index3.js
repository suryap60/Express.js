import express from 'express'
const app = express()

app.use(express.json())

// app.use(express.static('public'))

app.use(express.static('image'))

app.listen(2001,()=>{
    console.log('Server is running on http://localhost:2001')
})