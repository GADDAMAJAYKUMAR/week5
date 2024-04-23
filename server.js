const express=required('express')
const app=express();
app.listen(4500,()=>{
    console.log("server started");
});
app.get('/hello',(req,res)=>{
    res.send("hello received get request")
});
