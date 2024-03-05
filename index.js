const server=require('express')
const ejs=require('ejs')
const app=server()
const body=rerquire("body-parser");
const db=require('mongoose')
db.connect("mongodb://localhost:27017/login",{
    useNewUrlParser:true,
    useUnifiedTopology:true

});
const schema={
    name:String,
    roll:String,
    password:Number
}
const model=db.model('user',login)
app.set("view engige","ejs")
app.use(body.urlencoded({
    extended:true
}));