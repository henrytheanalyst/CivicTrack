import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from 'dotenv';
import pool from "./db.js";
dotenv.config();


const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(morgan("dev"));
app.use(cors());

import AuthRoutes from './Routes/authRoutes.js';

app.get('/test',async(req,res)=>{
    try {
        const result=await pool.query(`SELECT NOW()`);
        res.status(200).json({
            message:"Database connection successful",
            time:result.rows[0].now
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message:"Connection not established"
        })
        
    }
    
});

app.use('/civictrack',AuthRoutes);
const port=Number(process.env.PORT || 3000);

app.listen(port,()=>{
    console.log(`Server up and running on port ${port}`);
    
})