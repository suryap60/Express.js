import express from 'express'
const router = express.Router()

const users=[
    {id:1, name:"Surya" , place:"Malappuram"},
    {id:2, name:"Avinash", place:"Calicut"},
    {id:3, name:"Jasi", place:"valanchery"},
    {id:4, name:"Shifla", place:"Calicut"}
]

router.get('/:id',(req,res)=>{
   const id =parseInt(req.params.id)

//    console.log(id)
   const user = users.find((firstUser)=>id == firstUser.id)
//    console.log(user)
   if(user){
    res.send({message:'user ne kitty',user})
    return
   }
   else{
    res.send({message:'user ne kittila',user})
   }
})

router.get('/',(req,res)=>{
    const userInfo =req.query.name
    console.log(userInfo)
    const user =users.find((userDetails)=>userInfo == userDetails.name)
    if(!user){
        res.send({message:"Not Found",user})
        return
    }
    res.send({message:'Found the User',user})
    
})

export default router