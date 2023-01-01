import React from "react";

const SignUp = ()=>{

return(
   <form>
    <div>
    <label>Enter your Email:
      <input type="email" />
    </label>
    </div>
    <div>
    <label>Enter your Name:
      <input type="text" />
    </label>
    </div>
    <div></div>
    <div>
    <label>Password:
      <input type="password" />
    </label>
    </div>
    <button type="button">SUBMIT</button>
  </form>

)
}
export default SignUp;