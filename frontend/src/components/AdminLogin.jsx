import React, { useState } from "react";
import '../css/adminlogin.css'
import { useDispatch } from "react-redux";
import { setUser } from "../redux/userslice";
import { Link, useNavigate } from "react-router";

const AdminLogin = () => {

  const navigate = useNavigate()

  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
    admin:"false"
  });

  function handleChange(e) {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  }

  const dispatch = useDispatch();
  function handleLogin(e) {
    e.preventDefault();
    console.log(credentials); // replace with API call later
    dispatch(setUser(credentials))
    navigate("/menu")
  }

  function handlecheck(event)
  {
    setCredentials({...credentials, admin : event.target.value === "false" ? "true" : "false"});
    console.log(credentials.admin)
  }

  return (
    <div className="admin-login">

      <div className="login-card">

        <h2>Login</h2>

        <form onSubmit={handleLogin}>
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={credentials.username}
            onChange={handleChange}
            placeholder="Enter username"
          />

          <label>Password</label>
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            placeholder="Enter password"
          />


          <div className="admin-check">
            <label htmlFor="">Admin</label>
            <input value={credentials.admin} onClick={handlecheck} id="check-box" type="checkbox" />
          </div>

          <button type="submit">Login</button>
          <Link to={"/register"}>Not registered?Click here</Link>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
