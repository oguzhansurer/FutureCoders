import { Input, Button } from "antd";
import Footer from "../../layouts/footer/footer";
import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <div className="login-page-container">
      <div className="login-banner">
        <div className="title">
          <h1 style={{ letterSpacing: "4px" }}>Login</h1>
          <h4>Home / Login</h4>
        </div>
      </div>
      <div className="login-form">
        <div className="wrap-centered-form-div">
          <form>
            <p style={{ marginBottom: "32px", fontSize: "20px" }}>
              Hi, Welcome Back!
            </p>
            <Input type="text" placeholder="Username or Email Address" />
            <Input type="text" placeholder="Password" />
          </form>
          <div className="keep-signed">
            <div className="check">
              <input type="checkbox" />
              Keep me signed in
            </div>
            <Link to={"/forgot-password"}>Forgot?</Link>
          </div>
          <div className="submit-form">
            <button>Sign In</button>
            <p>
              Don't have an account?{" "}
              <Link to="/sign-page">Registration Now</Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LoginForm;
