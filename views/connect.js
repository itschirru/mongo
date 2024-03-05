const mongo=require("mongoose")
url="mongodb://localhost:27017/login";
const createConnection=()=>
{
    console.log("connected");
    return mongo.connect(url)
};
module.exports=createConnection;