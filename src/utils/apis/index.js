import axios from "axios";
import { useMutation, useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { updateAuth } from "../authSlice";
import store from '../appStore';

const BASE_URL = "http://localhost:8055/";

const api = axios.create({
  baseURL: BASE_URL
});

let token;
store.subscribe(() => {
  token = store.getState().auth.token
})

api.interceptors.request.use((config) => {
  if(config.url === '/auth/login') {
   return config;
  }
  if(!token) {
    return config;
  }
  
  const { access_token } = JSON.parse(token)
  config.headers.Authorization = `Bearer ${access_token}`
  return config;
});

const useLogin = () => {
  const dispatch = useDispatch();
  return useMutation(async (input) => await api.post("/auth/login", input), {
    onSuccess: (response) => {
      localStorage.setItem("token", JSON.stringify(response?.data?.data))
      dispatch(updateAuth(response?.data?.data));
    }
  })
}

const useSignUp = async(input) => {
  try {
    const { data } = await api.post("/auth/register", input);
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
}

const useProfile = () => {
  return useQuery("profile", async() => {
    try {
      const { data } = await api.get("/users/me");
      return data
    } catch (error) {
      return Promise.reject(error);
    }
  })
} 

export { useLogin, useSignUp, useProfile };