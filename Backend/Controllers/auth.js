import pool from "../db.js";
import bcrypt from 'bcrypt';

export const register=async (req,res) => {
    try {
        //1.validate the request body
        if(
            !req.body ||
            typeof req.body !== "object" ||
            Array.isArray(req.body)
        ){
            return res.status(400).json({
                message:"Invalid request body"
            });
        }
        //2.extract the registration fields
        const {full_name,email,password}=req.body;
        //3.validate fiels data types
        if(
            typeof full_name !=="string" ||
            typeof email !=="string"||
            typeof password !=="string"
        ){
            return res.status(400).json({
                message:"Kindly check and ensure you have the correct values"
            })
        }
        //4.normalize the name and email
        const normalizedFullName=full_name.trim();
        const normalizedEmail=email.toLowerCase().trim();
    
      
        //5.check required fields
        if(!normalizedFullName|| !normalizedEmail ||!password){
            return res.status(400).json({
                message:"All fields required for signup"
            })
        }
        //6.validate email format
         const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if(!emailPattern.test(normalizedEmail)){
            return res.status(400).json({
                message:"Please provide a valid email address"
            })
          }
console.log("Password received",JSON.stringify(password));
console.log("Password length",password.length);
console.log("Validation result",password.length<8);



          //lets check passlength
          if(password.length < 8){
            return res.status(400).json({
                message:"Password must be 8+ characters"
            })
          }
          //7 hash the password
        const hashedPassword=await bcrypt.hash(password,12)
        const result=await pool.query(
            `INSERT INTO users(full_name,email,password)
            VALUES($1,$2,$3) RETURNING full_name,email`,[normalizedFullName,normalizedEmail,hashedPassword]);
            return res.status(201).json({
                message:`${normalizedFullName} created successfully`,
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