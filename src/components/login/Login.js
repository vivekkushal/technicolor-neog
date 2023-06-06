import './Login.css';

import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="login-backdrop">
      <div className="login-center">
        <h1>Login</h1>
        <form method="post">
          <div className="login-txt-field">
            <input type="text" required />
            <span></span>
            <label>Username</label>
          </div>
          <div className="login-txt-field">
            <input type="password" required />
            <span></span>
            <label>Password</label>
          </div>
          <input className="login-btn" type="submit" value="Login" />
          <input
            className="login-btn guest-user"
            type="submit"
            value="Guest User"
          />
          <div className="login-link">
            Not a member? <Link to="/signup">Signup</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
