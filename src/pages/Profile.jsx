import { useState, useEffect } from "react";
import { auth } from "../firebase/firebase.config";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";

const Profile = () => {
  const [formData, setFormData] = useState({ name: "", photoURL: "" });

  useEffect(() => {
    if (auth.currentUser) {
      setFormData({
        name: auth.currentUser.displayName || "",
        photoURL: auth.currentUser.photoURL || ""
      });
    }
  }, []);

  const handleUpdate = async e => {
    e.preventDefault();
    try {
      await updateProfile(auth.currentUser, { displayName: formData.name, photoURL: formData.photoURL });
      Swal.fire("Success!", "Profile updated successfully", "success");
    } catch (err) {
      Swal.fire("Error", err.message, "error");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4">My Profile</h2>
      <form onSubmit={handleUpdate} className="flex flex-col gap-3">
        <input type="text" className="input input-bordered w-full" placeholder="Name" required
          value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} />
        <input type="text" className="input input-bordered w-full" placeholder="Photo URL"
          value={formData.photoURL} onChange={e => setFormData({ ...formData, photoURL: e.target.value })} />
        <button className="btn btn-primary mt-2">Save Changes</button>
      </form>
    </div>
  );
};

export default Profile;
