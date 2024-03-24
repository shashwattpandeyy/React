import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./Components/ProtectedRoute";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Contact from "./Components/Contact";
import RestaurantDetail from "./Components/RestaurantDetail";
import Cart from "./Components/Cart";
import Login from "./Components/Login";
import { Suspense, lazy, useEffect, useState } from "react";
import { updateAuth } from "./utils/authSlice";
import store from "./utils/appStore";
import SignUp from "./Components/SignUp";

const About = lazy(() => import("./Components/About"));
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <ProtectedRoute>
              <Header />
              <Outlet />
            </ProtectedRoute>
          }
          errorElement={<Error />}
        >
          <Route path="/" Component={Body} />
          <Route path="/contact" Component={Contact} />
          <Route
            path="/about"
            element={
              <Suspense fallback={<h2>Loading...</h2>}>
                <About />
              </Suspense>
            }
          />
          <Route path="/restaurant/:resId" Component={RestaurantDetail} />
          <Route path="/cart" Component={Cart} />
        </Route>
      </Routes>
      <Routes>
        <Route path="/signup" Component={SignUp} />
        <Route path="/login" Component={Login} />
      </Routes>
    </BrowserRouter>
  );
};

const AuthInitialize = () => {
  const [loading, setLoading] = useState(true);
  const initializeAuth = async () => {
    const token = localStorage.getItem("token");
    store.dispatch(updateAuth(token ?? {}));
  };
  useEffect(() => {
    initializeAuth().then(() => setLoading(false));
  }, []);

  return (
    <div>
      {loading ? (
        <>
          <div className="text-center font-bold text-2xl">Loading..</div>
        </>
      ) : (
        <Router />
      )}
    </div>
  );
};

export default AuthInitialize;
