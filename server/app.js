const express=require("express");
const app=express();

require("dotenv").config();
const port=8000;

app.listen(port,()=>{
    console.log(`Server is running on port number ${port}`);
})