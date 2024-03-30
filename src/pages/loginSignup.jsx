import "./loginSignup.scss";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateUserSlice } from "../redux/Slices/userSlices";
const apiUrl = import.meta.env.VITE_API_URL;
const LoginSignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loginData, setLoginData] = useState({
    userName: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`${apiUrl}/api/v1/login`, loginData).then((data) => {
      const userData = data?.data;
      if (userData?.statusCode == 200) {
        dispatch(
          updateUserSlice({
            user: userData?.data?.user,
            loggenInToken: userData?.data?.token,
          })
        );
        navigate("/");
      } else {
        setMessage(userData?.data?.message);
      }
    });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({ ...prevData, [name]: value }));
  };
  return (
    <div className="body">
      <div className="main">
        <div className="left-side"></div>
        <p className="text-red-600">{message}</p>
        <div className="right-side">
          <form onSubmit={handleSubmit}>
            <label className="loglebel" htmlFor="email">
              Email
            </label>
            <input
              className="loginput"
              type="email"
              placeholder="Enter Email"
              name="userName"
              required
              onChange={handleChange}
              value={loginData.userName}
            />

            <label className="loglebel" htmlFor="password">
              Password
            </label>
            <input
              className="loginput"
              type="password"
              placeholder="Enter Password"
              name="password"
              required
              onChange={handleChange}
              value={loginData.password}
            />

            <button type="submit" className="login-btn">
              Sign in
            </button>
            <div className="or">OR</div>
            <button type="submit" className="login-btn">
              Sign up
            </button>
            <div className="links">
              <Link href="/forgotpassword">Forgot password?</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginSignUp;
