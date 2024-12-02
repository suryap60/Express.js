let user ="Surya"
const auth = (req,res,next)=>{
    const data = req.body.user
    console.log(data)
    if(!data){
        res.send("Create a User")
        return;
    }
    if(user == data){
        res.send("Welcome to our Website")
        return;
    }else{
        res.send("login here")
    }
    next()
}
export default auth