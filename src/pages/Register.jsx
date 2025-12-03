import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, updateProfile, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import Swal from "sweetalert2";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const Register = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "", photoURL: "" });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    const { password, name, photoURL, email } = formData;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      return Swal.fire("Error", "Password must have uppercase, lowercase, and min 6 chars", "error");
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(userCredential.user, { displayName: name, photoURL });
      Swal.fire("Success!", "Account created successfully", "success");
      navigate("/");
    } catch (err) {
      Swal.fire("Error", err.message, "error");
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      Swal.fire("Success!", "Logged in with Google", "success");
      navigate("/");
    } catch (err) {
      Swal.fire("Error", err.message, "error");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input type="text" placeholder="Name" className="input input-bordered w-full" required
          value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} />
        <input type="email" placeholder="Email" className="input input-bordered w-full" required
          value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} />
        <input type="text" placeholder="Photo URL" className="input input-bordered w-full"
          value={formData.photoURL} onChange={e => setFormData({ ...formData, photoURL: e.target.value })} />
        <div className="relative">
          <input type={showPassword ? "text" : "password"} placeholder="Password"
            className="input input-bordered w-full"
            value={formData.password}
            onChange={e => setFormData({ ...formData, password: e.target.value })}
            required
          />
          <span className="absolute right-3 top-2 cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
          </span>
        </div>
        <button className="btn btn-primary mt-2">Register</button>
      </form>
      <button className="btn btn-outline btn-google mt-2" onClick={handleGoogleLogin}>Register with Google</button>
      <p className="mt-2 text-sm">
        Already have an account? <Link className="text-blue-600" to="/login">Login</Link>
      </p>
    </div>
  );
};

export default Register;
