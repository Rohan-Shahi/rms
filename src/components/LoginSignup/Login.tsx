import React from "react";
import "./style.scss";
import purp from "../../images/purp.svg";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  return (
    <div className="intro">
      <div className="row intro-row m-0">
        <div className="col-md-7 intro-left">
            <h4 className="intro-title text-center pt-4 mb-4">RESULT MANAGEMENT SYSTEM</h4>
            <img className="intro-img" src={purp} alt="intro-img" />
        </div>

        <div className="col-md-4 intro-right">
          <div className="container">

            <h3 className="intro-top mb-4">Sign In | Register</h3>
            <p className="intro-para">Please make sure you register if you are new !</p>

            <form action="">
          
              <input type="text" name="username" placeholder="Username"/> <br />

              <input type="password" name="password" placeholder="Password"/> <br />
              <div className="intro-btn">

              <button type="submit" className="login-btn me-2">Login</button>
              <button className="register-btn" onClick={()=>{ navigate('/register')}}>Register</button>

              </div>
            </form>

          </div>
        </div>
      </div>
    </div>
  );
}
