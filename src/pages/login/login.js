import React, { useState } from "react";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleEmail (evt)  {
      setEmail(evt.target.value);
    }

    function handlePassword (evt) {
        setPassword(evt.target.value);
    }

    function handleLogin (evt)  {
    }

    return (
      <div className="wrapper fadeInDown">
        <div id="formContent">

          <form onSubmit={handleLogin}>
            <input
              type="text"
              className="fadeIn second"
              name="email"
              placeholder="Email"
              onChange={handleEmail}
            />
            <input
              type="password"
              className="fadeIn third"
              name="password"
              placeholder="password"
              onChange={handlePassword}
            />
            <input type="submit" className="fadeIn fourth" value="Log In" />
          </form>
        </div>
      </div>
    );
  }

export default Login;
