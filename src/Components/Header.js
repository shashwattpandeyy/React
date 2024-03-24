import { Link, useNavigate } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { updateAuth } from "../utils/authSlice";
const Header = () => {
  const cart = useSelector((store) => store.cart.items)
  const auth = useSelector((store) => store.auth.token);
  const dispatch = useDispatch();
  const handleLogout = () => {
    if(Object.keys(auth).length > 0 ) {
      localStorage.removeItem("token");
      dispatch(updateAuth({}))
    }
  }
  console.log("Header")
  return (
    <div className="flex justify-between shadow-md mb-2 ">
      <div className="header-logo">
        <Link to="/">
          <img className="w-32" src={LOGO_URL} alt="burger" />
        </Link>
      </div>
      <div className="flex items-center mr-4">
        <ul className="flex space-x-6">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/cart">Cart ({cart.length} items)</Link>
          </li>
        </ul>
        <button className="mx-4 bg-orange-500 text-white rounded py-2 px-4 font-bold" onClick={handleLogout}>{Object.keys(auth).length > 0 ? "Logout" : "Login" }</button>
      </div>
    </div>
  );
};

export default Header;
