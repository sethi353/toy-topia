import { useState, useEffect } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { useLocation } from "react-router-dom";
import Swal from "sweetalert2";

const ForgetPassword = () => {
  const location = useLocation();
  const emailFromLogin = location.state?.email || "";
  const [email, setEmail] = useState(emailFromLogin);

  const handleReset = async e => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email);
      Swal.fire("Success!", "Check your email to reset password.", "success");
    } catch (err) {
      Swal.fire("Error", err.message, "error");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4">Reset Password</h2>
      <form onSubmit={handleReset} className="flex flex-col gap-3">
        <input type="email" placeholder="Email" className="input input-bordered w-full"
          value={email} onChange={e => setEmail(e.target.value)} required />
        <button className="btn btn-primary mt-2">Reset Password</button>
      </form>
    </div>
  );
};

export default ForgetPassword;

