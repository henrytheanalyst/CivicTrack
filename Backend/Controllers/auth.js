import pool from "../db.js";
import bcrypt from 'bcrypt';
export const register=async (req,res) => {
    try {
        const body=req.body || {}
        const {full_name,email,password}=body;
        if(
            typeof full_name !=="string" ||
            typeof email !=="string"||
            typeof password !=="string"
        ){
            return res.status(400).json({
                message:"KIndly check and ensure you have the correct values"
            })
        }
        
        const normarlizedFullName=full_name.trim();
        const normarlizedEmail=email.toLowerCase().trim();
        if(!normarlizedFullName|| !normarlizedEmail ||!password){
            return res.status(400).json({
                message:"All fields required for signup"
            })
        }
        const hashedPassword=await bcrypt.hash(password,12)
        const result=await pool.query(
            `INSERT INTO users(full_name,email,password)
            VALUES($1,$2,$3) RETURNING full_name,email`,[normarlizedFullName,normarlizedEmail,hashedPassword]);
            res.status(201).json({
                message:`${normarlizedFullName} created successfully`,
                data:result.rows[0]
            })
    } catch (error) {  
        console.log(error);
           
        if(error.code ==="23505"){
            return res.status(409).json({
                message:"Account already exists"
            })
        }
        res.status(500).json({
            message:"Problem encountered in registration",
        })
    }
}