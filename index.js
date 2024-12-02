import express from 'express'

const app = express()





app.use(express.json())
//getmethod
app.get('/',(req,res)=>{
    res.send(users)
})
//postmethod
app.post('/post',(req,res)=>{
    const name =req.body
    users.push(name)
    res.send(users)
})
//put method
let users =['surya','miya','pinky']
app.put('/put',(req,res)=>{
    const name =req.body
    users.pop(name)
    res.send(users)
})

//delete method
let array =['surya','miya','pinky']
app.delete('/delete',(req,res)=>{
    const name =req.body
    array.pop(name)
    res.send(array)
})
//

app.listen(4040,()=>{
    console.log('server is running on http://localhost4040')
})