import { connect, useSelector } from "react-redux"
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  // useSelector used to subscribe the store and this protected component will re render when the store updates.
  const auth = useSelector((store) => store.auth.token);
  console.log("location", children, auth)
  if(Object.keys(auth).length <= 0) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }
  return children; 
}

export default ProtectedRoute;
