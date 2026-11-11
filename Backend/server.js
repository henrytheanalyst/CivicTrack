import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from 'dotenv';
dotenv.config();

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(morgan("dev"));
app.use(cors());

const port=Number(process.env.PORT || 3000);

app.listen(port,()=>{
    console.log(`Server up and running on port ${port}`);
    
})