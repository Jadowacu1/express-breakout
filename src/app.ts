import  express  from "express";
import dotenv from "dotenv";

dotenv.config()
const app = express();

const port:any =process.env.PORT || 2000;

// get , put, delete, post

//
app.get("/",(req,res)=>{
    res.send("This is my first Express server");
})

// setting listening port
app.listen(port,()=>{
    console.log("Server is running on port:", port);
})
