import React from "react";

const Login = ()=>{
    return (
        <form>
      <div>
      <label>Enter your Email:
        <input type="email" />
      </label>
      </div>
      <div>
      <label>Password:
        <input type="password" />
      </label>
      </div>
      <button type="button">Login</button>
    </form>
    )
}
export default Login;