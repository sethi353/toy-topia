import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { auth } from "../firebase/firebase.config";
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import Swal from "sweetalert2";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = async e => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      Swal.fire("Success!", "Logged in successfully", "success");
      navigate(from, { replace: true });
    } catch (err) {
      Swal.fire("Error", err.message, "error");
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      Swal.fire("Success!", "Logged in with Google", "success");
      navigate(from, { replace: true });
    } catch (err) {
      Swal.fire("Error", err.message, "error");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form onSubmit={handleLogin} className="flex flex-col gap-3">
        <input
          type="email"
          placeholder="Email"
          className="input input-bordered w-full"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="input input-bordered w-full"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <button className="btn btn-primary mt-2">Login</button>
      </form>
      <button className="btn btn-outline btn-google mt-2" onClick={handleGoogleLogin}>Login with Google</button>
      <p className="mt-2 text-sm">
        Don't have an account? <Link className="text-blue-600" to="/register">Register</Link>
      </p>
      <p className="mt-1 text-sm">
        <Link className="text-blue-600" to="/forget-password">Forgot Password?</Link>
      </p>
    </div>
  );
};

export default Login;

