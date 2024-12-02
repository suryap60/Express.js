import express from 'express'
 const routes = express.Router()

 let users=[
    {id:1,name:"Surya",place:"Malappuram"},
    {id:2,name:"Shahana",place:"Valanchery"},
    {id:3,name:"Avinash",place:"Kozhikode"},
    
 ]

 routes.get('/:id',(req,res,next)=>{
    const userId = parseInt(req.params.id)
    const user = users.find((userInfo)=>userId == userInfo.id)
    console.log(user)
    if(!user){
        res.send({message:'Please Login'})
    }
    res.send({message:"Welcome to Our Site",user})
    next()
 })

 routes.get('/',(req,res,next)=>{
    const userInfo = req.query.name
    const user = users.find((details)=>userInfo == details.name)
    if(!user){
        res.send({message:'Please Login'})
    }
    res.send({message:'Welcome To Our Site',user})
    next()
 })

 export default routes