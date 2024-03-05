const server=require("express");
const app=server()
const mon=require("./connect.js");
const PORT=process.env.PORT||7000;

const action=async()=>{
    try{
        await mon();
        app.listen(PORT,()=>{
            console.log(`${PORT} connection is done`)
        })
    }
    catch(error){
        console.log("error")
    }
}
action()