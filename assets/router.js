// import express from 'express'



let userName ="Anu"
const router = (req,res,next)=>{

    const data = req.body.user
    console.log(data)
    if(!data){
        res.send('Enter a Name')
    }
    if(userName != data){
        res.send('Please Login')
    }else{
        res.send('Welcome to our Website')
    }
    next()
}
export default router