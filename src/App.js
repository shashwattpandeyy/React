import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import Cart from "./Components/Cart";
import RestaurantDetail from "./Components/RestaurantDetail";
import UserContext from "./utils/userContext";
import appStore from "./utils/appStore";
import { Provider } from "react-redux";

const About = lazy(() => import("./Components/About"));

const App = () => {
  return (
    <div>
      <Provider store={appStore}>
        <UserContext.Provider value={{ loggedInUser: "Shashwat" }}>
          <Header />
          <Outlet />
        </UserContext.Provider>
      </Provider>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h2>Loading...</h2>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantDetail />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
