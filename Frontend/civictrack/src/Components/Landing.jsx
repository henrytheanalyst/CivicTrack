import { useState } from 'react';
import axios from 'axios';
import './Landing.css';

function Landing(){
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [fullname,setFullName]=useState("")
    const [mode,setMode]=useState("login");
    const [showPassword,setShowPassword]=useState(false);
    const [msg,setMsg]=useState("");
    const [msgType,setMsgType]=useState("");
    const [loading,setLoading]=useState(false);

    async function handleSubmit(e){
        e.preventDefault();
        setMsg("");
        setMsgType("");
        setLoading(true);
        try {  
            if(mode === "signup"){
                const response=await axios.post(
                    "http://localhost:3000/civictrack/register",
                    {    
                        full_name: fullname,
                        email: email,
                        password:password
                    }
                )
                setMsg(response.data.message);
                setMsgType("success")
                setMode('login');
                setEmail("");
                setFullName("");
                setPassword("")
            }
            else{
                const response=await axios.post(
                     "http://localhost:3000/civictrack/login",
                       {    
                        email: email,
                        password:password
                    }
                )
                const token=response.data.token;
                localStorage.setItem("authToken",token)//key then value
                  setMsg(response.data.message);
                setMsgType("success")
            }
        } catch (error) {
            setMsg(error.response?.data?.message || "We are experiencing a technical error")
            setMsgType("error")
        }
        finally{
            setLoading(false)
        }

    
        
    }
    return(
       <section className="landing">
         <form className='form' onSubmit={handleSubmit}>
            {msg && (
                <div className={`msg ${msgType}`}>
                    {msg}
                </div>
            )}
            <h1>{mode === 'login'?"Welcome Back":"JOIN YOUR COMMUNITY"}</h1>
            <h2>{mode === "login"?"Sign in to CivicTrack":"Create your account"}</h2>
            <p className='subtitle'>{mode === "login"?"Continue making a difference in your neighborhood":"Start reporting issues and help build a better city"}</p>
            {mode === "signup" && (
                <div className="box">
                    <label htmlFor="fullname">Full Name</label>
                    <input 
                        type="text"  
                        id="fullname"
                        placeholder="e.g.John Doe"
                        value={fullname}
                        onChange={(e)=>setFullName(e.target.value)}
                        required
                    />
                </div>
            )}
            <div className="box">
                <label htmlFor="email">Email</label>
                <input 
                    type="email"  
                    id="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    required
                 />
            </div>
            <div className="box">
                <label htmlFor="password">Password</label>
                <div className="relative">
                      <input 
                        type={showPassword ? "text":"password"}
                        id="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                        required 
                        />
                    <button 
                    type='button'
                    className='passwordset' onClick={()=>setShowPassword(!showPassword)}
                    aria-label={showPassword ? "Hide password":"Show password"}>
                        {showPassword ? "👁️":"🙈"}
                    </button>
                </div>
              
            </div>
            {mode ==="login" && (
                <div className="box2">
                    <div className="left">
                                <input type="checkbox" />
                        <label htmlFor="Remember me">Remember me</label>
                    </div>
                    <div className="right">
                        <a href="#">Forgot Password</a>
                    </div>
        
            </div>
            )}
            
            <button type="submit" className='submit' disabled={loading}>
                {loading ? "Please wait...":
                mode === "login"?(
                    <>
                    Sign in to dashboard <i className="ri-arrow-right-s-line"></i>
                    </>
                ):(
                    "Create my account"
                )}
            </button>
            <p className='link'>
                New to CivicTrack? <button type='button' onClick={()=>setMode(mode === "signup"? "login":"signup")}>{mode === 'signup'?"Create an account":"Proceed to Login"}</button>
            </p>
        </form>
       </section>
    );
}
export default Landing;