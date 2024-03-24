import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateAuth } from "../utils/authSlice";
import { Link, redirect, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import firebase from "firebase/app";
import { useSignUp } from "../utils/apis";

const SignUp = () => {
  const [form, setForm] = useState({
    first: "",
    last: "pandey",
    email: "",
    password: "",
    language: "en",
  });
  const auth = useSelector((store) => store.auth.loggedIn);
  // const location = useLocation();
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  const handleForm = async (e) => {
    e.preventDefault();
    // console.log("Form Submitted");
    // dispatch(updateAuth(true))
    // const { from } = location.state || { from: { pathname: '/' } };
    // console.log("from", from)
    // navigate(from, { replace: true })
    // localStorage.setItem("loggedIn", true )
    // console.log(firebase)
    try {
      const response = await useSignUp(form);
      navigate("/login");
    } catch (e) {
      console.log("error in signup", e)
    }
  };

  return (
    <div className="flex flex-col items-center w-96 shadow-md rounded-md pb-2 bg-white mx-auto mt-4 p-4">
      <h2 className="font-bold text-xl">Register With Us.</h2>
      <form className="p-2 m-2">
        <div className="flex flex-col space-y-1">
          <label className="font-bold text-lg">Full name</label>
          <input
            className="border border-black rounded p-2"
            type="text"
            placeholder="Enter full name"
            onChange={(e) => setForm({ ...form, first: e.target.value })}
          />
        </div>
        <div className="flex flex-col space-y-1">
          <label className="font-bold text-lg">Email</label>
          <input
            className="border border-black rounded p-2"
            type="email"
            placeholder="Enter email"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </div>
        <div className="flex flex-col space-y-1">
          <label className="font-bold text-lg">Full password</label>
          <input
            className="border border-black rounded p-2"
            type="password"
            placeholder="Enter password"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
        </div>
      </form>
      <button
        className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full"
        type="button"
        onClick={handleForm}
      >
        Sign Up
      </button>
      <div className="space-x-2 p-2 mt-2">
        <label>Already have an account?</label>
        <Link className="underline font-bold" to="/login">Login</Link>
      </div>
    </div>
  );
};

export default SignUp;
