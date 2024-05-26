
import React, { useState } from "react";
import axios from "axios";
import {useNavigate, Link} from "react-router-dom";

function AlumniLogin() {
  const [ERP, setERP] = useState("");
  const [Password, setPassword] = useState("");

  const navigate = useNavigate();
  
  const login = () => {
    const data = { ERP: ERP, Password: Password };
    axios.post("http://localhost:3001/alumniauth/alumnilogin", data).then((response) => {
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
      <h2 className="loginHeader">Alumni Login</h2>
      <div className="inputGroup">
        <label>ERP:</label>
        <input
          type="text"
          onChange={(event) => {
            setERP(event.target.value);
          }}
        />
      </div>
      <div className="inputGroup">
        <label>Password:</label>
        <input
          type="password"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
      </div>
      <button onClick={login} className="role-button">Login</button>
      <p className="registerLink">
        Don't have an account? <Link to="/alumniregistration">Register here</Link>
      </p>
    </div>
    </div>
  );
}


export default AlumniLogin;