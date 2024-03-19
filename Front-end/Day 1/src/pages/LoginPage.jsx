import { useState, useEffect } from 'react';
import '../assets/css/login.css';

function LoginPage() {
  const [showLogin, setShowLogin] = useState(true);
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const [registerData, setRegisterData] = useState({ firstname: '', lastname: '', email: '', password: '' });

  // Function to fill the login fields
  const fillLoginForm = () => {
    setLoginData({ username: '', password: '' });
  };


  useEffect(() => {
    fillLoginForm();
  }, []);

  const toggleForm = () => {
    setShowLogin(!showLogin);
  };

  const handleLoginInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleRegisterInputChange = (e) => {
    const { name, value } = e.target;
    setRegisterData({ ...registerData, [name]: value });
  };

  return (
    <div>

      <nav className="nav">
        {/* Logo */}
        <div className="nav-logo">
          <p>VEETU VELAI</p>
        </div>
        {/* Menu */}
        <div className="nav-menu" id="navMenu">
          
            <a href="#" className="link">Home</a>
            <a href="#" className="link">Blog</a>
            <a href="#" className="link">Services</a>
            <a href="#" className="link">About</a>
            <a href="#" className="link" onClick={toggleForm}>sign In</a>
            <a href="#" className="link" onClick={toggleForm}>sign up</a>
        {/* <div className="nav-button">
          <button className={`btn ${showLogin ? 'white-btn' : ''}`} onClick={toggleForm}>Sign In</button>
        </div>
        <div className="nav-button1">
          <button className={`btn ${showLogin ? '' : 'white-btn'}`} onClick={toggleForm}>Sign Up</button>
        </div> */}
          
        </div>
        {/* Sign In / Sign Up Buttons */}
        {/* Menu Button */}
        <div className="nav-menu-btn">
          <i className="bx bx-menu" onClick={() => document.getElementById("navMenu").classList.toggle("responsive")}></i>
        </div>
      </nav>
        <div className="wrapper">
      {/* Navigation */}

      {/* Form */}
      <div className="form-box">
        {showLogin ? (
          // Sign In Form
          <div className="login-container">
            <div className="top">
              <spans>Do not have an account? <a href="#" onClick={toggleForm}>Sign Up</a></spans>
              <header>Login</header>
            </div>
            <div className="input-box">
              <input type="text" className="input-field" placeholder="Username or Email" name="username" value={loginData.username} onChange={handleLoginInputChange} />
              <i className="bx bx-user"></i>
            </div>
            <div className="input-box">
              <input type="password" className="input-field" placeholder="Password" name="password" value={loginData.password} onChange={handleLoginInputChange} />
              <i className="bx bx-lock-alt"></i>
            </div>
            <div className="input-box">
              <input type="number" className="input-field" placeholder="Number" name="Number" value={loginData.username} onChange={handleLoginInputChange} />
               <i className="bx bx-user"></i>
            </div>
            <div className="input-box">
              <input type="submit" className="submit" value="Sign In" />
            </div>
            {/* <div className="two-col">
              <div className="one">
                <input type="checkbox" id="login-check" />
                <label htmlFor="login-check"> Remember Me</label>
              </div>
              <div className="two">
                <label><a href="#">Forgot password?</a></label>
              </div>
            </div> */}
          </div>
        ) : (
          // Sign Up Form
          <div className="register-container">
            <div className="top">
              <span>Have an account? <a href="#" onClick={toggleForm}>Login</a></span>
              <header>Sign Up</header>
            </div>
            <div className="two-forms">
              <div className="input-box">
                <input type="text" className="input-field" placeholder="Firstname" name="firstname" value={registerData.firstname} onChange={handleRegisterInputChange} />
                <i className="bx bx-user"></i>
              </div>
              <div className="input-box">
                <input type="text" className="input-field" placeholder="Lastname" name="lastname" value={registerData.lastname} onChange={handleRegisterInputChange} />
                <i className="bx bx-user"></i>
              </div>
            </div>
            <div className="input-box">
              <input type="text" className="input-field" placeholder="Email" name="email" value={registerData.email} onChange={handleRegisterInputChange} />
              <i className="bx bx-envelope"></i>
            </div>
            <div className="input-box">
              <input type="password" className="input-field" placeholder="Password" name="password" value={registerData.password} onChange={handleRegisterInputChange} />
              <i className="bx bx-lock-alt"></i>
            </div>
            <div className="input-box">
              <input type="submit" className="submit" value="Register" />
            </div>
            <div className="two-col">
              {/* <div className="one">
                <input type="checkbox" id="register-check" />
                <label htmlFor="register-check"> Remember Me</label>
              </div> */}
            </div>
          </div>
        )}
      </div>
    </div>
            </div>
  );
}

export default LoginPage;
