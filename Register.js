import React, { useState } from "react";

import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const handleClick = async (e) => {
    try {

      e.preventDefault();
      await axios.post("http://localhost:8000/register", { name, password, phno, email }).then((response) => { })
    } catch (err) {
      console.log(err)
    }

  }
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [phno, setPhno] = useState("");
  const [email, setEmail] = useState("");


  return (
    <div className="container">
      <div className="form-container">
        <h2>Register for KL MEDIA</h2>
        <form className="registration-form">
          {/* onSubmit={handleSubmit} */}
          <div>
            <label className="form-label" htmlFor="name">
              Name:
            </label>
            <input
              className="form-input"
              type="text"

              onClick={(e) => {
                setName(e.target.value)
              }}
            />
          </div>
          <div>
            <label className="form-label" htmlFor="designation">
              Password
            </label>
            <input
              className="form-input"
              type="password"

              onClick={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div>
            <label className="form-label" htmlFor="email">
              Phone Number
            </label>
            <input
              className="form-input"
              type="text"

              onClick={(e) => {
                setPhno(e.target.value);
              }}
            />
          </div>
          <div>
            <label className="form-label" htmlFor="password">
              Email
            </label>
            <input
              className="form-input"
              type="text"

              onClick={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>

          <button type="submit" className="form-button" onClick={handleClick}>
            Register
          </button>
        </form>
        <p className="form-label">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}