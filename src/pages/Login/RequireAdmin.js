import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";
import Loading from "../../shared/Loading";

const RequireAdmin = ({ children }) => {
  const [user, loading, error] = useAuthState(auth);
  const [admin, adminLoading] = useAdmin(user);
  const location = useLocation();

  if (loading || adminLoading) {
    return <Loading />;
  }

  if (error) {
    toast.error(`ERROR : ${error}`, {
      toastId: "error1",
    });
  }

  if (!user || !admin) {
    signOut(auth);
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }

  return children;
};

export default RequireAdmin;
