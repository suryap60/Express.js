// const express =require('express')
import express from 'express'

const app =express()
app.use(express.json())

const user =[]

app.get('/get',(req,res)=>{
    res.send('Data Received Successfully')
    // res.sendFile(path.join(__dirname,"index.html"))
})

app.post('/post',(req,res)=>{
    const data =req.body
    user.push(data)
    res.send(user)

})

let datas =["file1","file2","file3"]
app.put('/put',(req,res)=>{
    const file =req.body
    datas.pop(file)
    res.send(datas)

})


app.listen(4041,()=>{
    console.log(`server running on port htp://localhost:4041`)
})
