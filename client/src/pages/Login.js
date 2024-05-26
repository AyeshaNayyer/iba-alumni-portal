import React, { useState } from "react";
import axios from "axios";
import {useNavigate, Link} from "react-router-dom";

function Login() {
  const [ERP, setERP] = useState("");
  const [Password, setPassword] = useState("");

  const navigate = useNavigate();
  
  const login = () => {
    const data = { ERP: ERP, Password: Password };
    axios.post("http://localhost:3001/auth/login", data).then((response) => {
      //console.log(response.data);
      if (response.data.error) {
        alert (response.data.error);}
        else {
          sessionStorage.setItem("accessToken", response.data);
          navigate('/home');
        }
     
        });
  };
  return (
    <div className="full-page-container"> 
      <div className="loginContainer">
        <div className="inputGroup">
        <h2 className="loginHeader">Student Login</h2>
          <label>ERP:</label>
          <input
            className="formField" // Added class for styling
            type="text"
            onChange={(e) => setERP(e.target.value)}
          />
        </div>
        <div className="inputGroup">
          <label>Password:</label>
          <input
            className="formField" // Added class for styling
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className="role-button" onClick={login}> Login </button>
        <p className="registerLink"> {/* Added class for styling */}
          Don't have an account?{" "}
          <Link to="/registration">Register here</Link>
        </p>
      </div>
    </div>
  );
}


export default Login;