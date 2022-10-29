import { useContext } from "react";
import { authContext, useAuth } from "../../context/authContext";
import { Navigate, Outlet } from "react-router-dom";

const LayaoutRequireAuth = () => {
  const { user } = useContext(authContext);

  if (!user) {
    return <Navigate to="/Login" />;
  }
  return (
    <div>
      <Outlet />
    </div>
  );
};
export default LayaoutRequireAuth;
