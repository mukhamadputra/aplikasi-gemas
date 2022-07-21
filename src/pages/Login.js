import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";

import gemas from "../assets/images/gemas.png";

const Login = () => {
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const database = [
    {
      username: "user1",
      password: "pass1",
    },
    {
      username: "user2",
      password: "pass2",
    },
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password",
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <input type="text" placeholder="Username" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <input type="password" placeholder="Password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" value="Log in" />
        </div>
      </form>
    </div>
  );

  return (
    <div className="login-page">
      <img className="logo-ems" src={gemas} alt="gemas" />
      <div className="login-container">
        <div className="login-form">
          {/* <div className="title">Login</div> */}
          {isSubmitted ? <Redirect to="/home" /> : renderForm}
        </div>
        <div className="login-desc">
          <p>
            Need information? <Link to="/info" style={{ textDecoration: "none", color: "#dc6446" }}>Quick guide</Link>
          </p>
          <p>General Electronic Facility Terminal 3</p>
        </div>
      </div>
      {/* <div className="footer">Member of:</div>
      <img className="logo-ap" src={ap} alt="ap" />
      <img className="logo-team" src={team} alt="team" /> */}
    </div>
  );
};

export default Login;
