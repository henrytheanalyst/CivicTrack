import './Landing.css';

function Landing(){
    return(
       <section className="landing">
         <form className='form'>
            <h1>Welcome Back</h1>
            <h2>Sign in to CivicTrack</h2>
            <p className='subtitle'>Continue making a difference in your neighborhood</p>
            <div className="box">
                <label htmlFor="email">Email</label>
                <input 
                    type="email"  
                    id="email"
                    placeholder="you@example.com"
                    required
                 />
            </div>
            <div className="box">
                <label htmlFor="password">Password</label>
                <input 
                    type="password" 
                    id="password"
                    placeholder="Enter your password"
                    required 
                />
            </div>
            <div className="box2">
                <div className="left">
                            <input type="checkbox" />
                     <label htmlFor="Remember me">Remember me</label>
                </div>
                <div className="right">
                    <a href="#">Forgot Password</a>
                </div>
        
            </div>
            <button type="submit" className='submit'>Sign in to dashboard <i className="ri-arrow-right-s-line"></i> </button>
            <p className='link'>
                New to CivicTrack? <a href="#">Create an account</a>
            </p>
        </form>
       </section>
    );
}
export default Landing;