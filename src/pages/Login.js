import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const Navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValidate()) {
      ProceedLogin(e);
    }
  };

  const isValidate = () => {
    let result = true;
    if (email === null || email === "") {
      result = false;
      toast.warning("Please enter Email");
    }
    if (password === null || password === "") {
      result = false;
      toast.warning("Please enter Password");
    }
    return result;
  };

  let loginObj = { email, password };

  const ProceedLogin = async (e) => {
    e.preventDefault();
    try {
      console.log(loginObj);
      const res = await axios.post("https://reqres.in/api/login", loginObj);
      console.log(res);
      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        Navigate("/");
      }
    } catch (err) {
      console.error(err);
      toast.warning("Invalid Email or Password");
    }
  };

  return (
    <div>
      <Header />
      <div className="flex justify-center">
        <form className="w-full max-w-lg" onSubmit={handleSubmit}>
          <div className="bg-white rounded px-8 pt-6 pb-8 mb-4  border-4 m-6">
            <div className="mb-4">
              <h1 className="text-2xl font-bold text-center">Login</h1>
            </div>

            <div className="gap-4">
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Password <span className="text-red-500">*</span>
                </label>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
            </div>
            <div className="mt-6 flex gap-4">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Login
              </button>
              <Link
                to="/register"
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                New User
              </Link>
            </div>
          </div>
        </form>
      </div>
      <Footer/>
    </div>
  );
};

export default Login;
