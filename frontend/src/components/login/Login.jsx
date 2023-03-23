import { useState } from 'react';
import './Login.css'

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(loginData);
  };

  return (
    <div className='login-div'>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <input
          name="email"
          value={loginData.email}
          onChange={handleChange}
          type="text"
          placeholder="Enter Email"
        />
        <input
          name="password"
          value={loginData.password}
          onChange={handleChange}
          type="text"
          placeholder="Enter Password"
        />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default Login;
