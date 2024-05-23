import React from 'react'

export default function Login() {
  return (
    <div>

<body>


<div className="box">
<form action="/login" method="post">
  <h2>Login </h2>
  <div className="in">
    <label for="username">Username:</label>
    <input type="text" id="username" name="username" required/>
    <i className='bx bxs-user-circle'></i>
  </div>
  <div className="in">
    <label for="password">Password:</label>
    <input type="password" id="password" name="password" required/>
    <i className='bx bxs-lock'></i>
  </div>
  <div class ="remember-forget">
    
      
      <a href="#">Forget password?</a>

  </div>
  <div>
    <button type="submit" className="sap">login</button>
  </div>
  <div className="register-link">
    <p>don't have an account?            
<a href="signup page.html">Sign up</a>
    </p>
  </div>
</form>
</div>

</body>
    </div>
  )
}
