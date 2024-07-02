import { useContext } from "react";
import { AuthContext } from "../Provider/ProviderContext";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const { Loader, User } = useContext(AuthContext);
  if (Loader) {
    return (
      <div>
        <span className="loading loading-bars loading-sm"></span>
        <span className="loading loading-bars loading-md"></span>
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }
  if (User) {
    return children;
  }
  return <Navigate to={"/login"}></Navigate>;
};

export default PrivateRoutes;
