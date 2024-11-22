import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");

  const Navigate = useNavigate();

  const isValidate = () => {
    let isProceed = true;
    let errorMessage = " Please enter the value for ";
    if (firstName === null || firstName === "") {
      errorMessage += " First Name";
      isProceed = false;
    }
    if (lastName === null || lastName === "") {
      errorMessage += " Last Name";
      isProceed = false;
    }
    if (phone === null || phone === "") {
      errorMessage += " phone";
      isProceed = false;
    }
    if (email === null || email === "") {
      errorMessage += " Email";
      isProceed = false;
    }
    if (password === null || password === "") {
      errorMessage += " Password";
      isProceed = false;
    }
    if (ConfirmPassword === null || ConfirmPassword === "") {
      errorMessage += " Confirm Password";
      isProceed = false;
    }
    if (!isProceed) {
      toast.warning(errorMessage);
    } else {
      if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      } else {
        isProceed = false;
        toast.warning("Please enter valid email");
      }
    }
    if (password !== ConfirmPassword) {
      isProceed = false;
      toast.warning("Password and Confirm Password should be same");
    }
    return isProceed;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Ensure all fields are validated
    if (isValidate()) {
      // Prepare the payload
      let regObj = {
        email,
        password,
        phone,
        firstName,
        lastName,
        address: "", // Assuming address is not currently handled in your state
      };
  
      try {
        const response = await axios.post("http://localhost:8080/api/v1/users/register", regObj, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        console.log(response.data);
      } catch (error) {
        console.error("Error during registration:", error);
        if (error.response) {
          // Backend-specific error message
          toast.error(error.response.data.message || "Registration failed");
        } else {
          toast.error("Something went wrong. Please try again later.");
        }
      }
    }
  };
  

  return (
    <div>
      <Header/>
      <div className="flex justify-center ">
        <form className="w-full max-w-lg" onSubmit={handleSubmit}>
          <div className="bg-white rounded px-8 pt-6 pb-8 mb-4 border-4 m-6">
            <div className="mb-4">
              <h1 className="text-2xl font-bold text-center">
                Sign Up
              </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2 text-left">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                placeholder="Enter First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  type="text"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2 text-left">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                placeholder="Enter Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  type="text"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2 text-left">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                placeholder="Enter Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="text"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2 text-left">
                  Phone <span className="text-red-500">*</span>
                </label>
                <input
                placeholder="Enter Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  type="phone"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2 text-left">
                  Password <span className="text-red-500">*</span>
                </label>
                <input
                placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2 text-left">
                  Confirm Password <span className="text-red-500">*</span>
                </label>
                <input
                placeholder="Enter Confirm Password"
                  value={ConfirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  type="password"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2 text-left">
                Address
              </label>
              <textarea
                rows="4"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter Address"
              ></textarea>
            </div>
            <div className="mt-6 flex gap-4">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Register
              </button>
              <Link
                to="/login"
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Close
              </Link>
            </div>
          </div>
        </form>
      </div>
      <Footer/>
    </div>
  );
}

export default Register;
