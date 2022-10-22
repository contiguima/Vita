import { useContext } from "react";
import { useAuth } from "../../context/authContext";
import { Navigate, Outlet } from "react-router-dom";

const LayaoutRequireAuth = () => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/Registro" />;
  }
  return (
    <div>
      <Outlet />
    </div>
  );
};
export default LayaoutRequireAuth;
