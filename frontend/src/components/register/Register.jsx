import { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const [registerData, setRegisterData] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisterData({ ...registerData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`http://localhost:8787/user/register`, {
      method: "POST",
      body: JSON.stringify(registerData),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return (
    <div className="register-div">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        <input
          name="fname"
          value={registerData.fname}
          onChange={handleChange}
          type="text"
          placeholder="Enter First Name"
        />
        <input
          name="lname"
          value={registerData.lname}
          onChange={handleChange}
          type="text"
          placeholder="Enter Last Name"
        />
        <input
          name="email"
          value={registerData.email}
          onChange={handleChange}
          type="text"
          placeholder="Enter Email"
        />
        <input
          name="password"
          value={registerData.password}
          onChange={handleChange}
          type="text"
          placeholder="Enter Password"
        />
        <input type="submit" value="submit" />
      </form>
      <p>
        Already have an account? <Link to="/login"> Login </Link>{" "}
      </p>
    </div>
  );
};

export default Register;
