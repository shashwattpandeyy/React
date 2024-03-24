import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Link,
  Navigate,
  redirect,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { useLogin } from "../utils/apis";

const Login = () => {
  console.log("Login")
  const [login, setLogin] = useState({ email: "", password: "" });
  const { mutate, error } = useLogin();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = async () => {
    mutate(login, {
      onSuccess: () => {
        const { from } = location.state || { from: { pathname: "/" } };
        navigate(from, { replace: true });
      },
      onError: (error) => {
        console.log(error)
      }
    });
  };

  return (
    <div className="flex flex-col items-center w-96 shadow-md rounded-md pb-2 bg-white mx-auto mt-4 p-4">
      <h2 className="font-bold text-2xl underline">Login</h2>
      <form className="">
        <div className="m-4 flex flex-col">
          <label className="font-bold text-lg">Email</label>
          <input
            className="border border-black rounded-md p-2"
            type="email"
            placeholder="Enter Email"
            onChange={(e) => setLogin({ ...login, email: e.target.value })}
          ></input>
        </div>

        <div className="m-4 flex flex-col">
          <label className="font-bold text-lg">Password</label>
          <input
            className="border border-black rounded-md p-2"
            type="password"
            placeholder="Enter Password"
            onChange={(e) => setLogin({ ...login, password: e.target.value })}
          ></input>
        </div>
      </form>
      <button
        className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full"
        type="submit"
        onClick={handleLogin}
      >
        Login
      </button>
      <div className="space-x-2 p-2 mt-2">
        <label>Don't have an account?</label>
        <Link className="underline font-bold" to="/signup">
          SignUp
        </Link>
      </div>
    </div>
  );
};

export default Login;
