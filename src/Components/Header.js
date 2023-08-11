import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useContext } from "react";
import UserContext from "../utils/userContext";
import { useSelector } from "react-redux";
const Header = () => {
  const { loggedInUser } = useContext(UserContext);
  const cart = useSelector((store) => store.cart.items)
  console.log("header", cart);
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
          <li>{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
