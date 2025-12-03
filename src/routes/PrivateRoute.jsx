import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { auth } from "../firebase/firebase.config"; 
import { onAuthStateChanged } from "firebase/auth";

const PrivateRoute = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Listen for auth state changes
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    // Cleanup listener on unmount
    return () => unsubscribe();
  }, []);

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  if (!user) return <Navigate to="/login" replace />;

  return children;
};

export default PrivateRoute;
