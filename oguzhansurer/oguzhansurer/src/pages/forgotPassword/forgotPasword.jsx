import { Input, Button } from 'antd';
import Footer from '../../layouts/footer/footer';
import { Link } from "react-router-dom";
import { LockKeyhole } from 'lucide-react';

const ForgotPassword = () => {
  return (
    <div className='login-page-container'>
      <div className="login-banner">
        <div className="title">
          <h1 style={{ letterSpacing: "4px" }}>Forgot Password</h1>
          <h4>Home  /  Forgot Password</h4>
        </div>
      </div>
      <div className="login-form">
        
        <div className="wrap-centered-form-div">
          <LockKeyhole size={128}/>
          <form style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
            <p style={{ marginBottom: "32px", fontSize: "20px" }}>
              Let's reset your password!
            </p>
            
            <Input type="text" placeholder="Username or Email Address" />
          </form>

          <div className="submit-form">
            <button>Reset Password</button>
            <p>
              Don't have an account? <Link to="/sign-page">Registration Now</Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ForgotPassword;
