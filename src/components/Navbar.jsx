import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase/firebase.config";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <nav className="bg-purple-200 text-purple-700 p-4 sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Left Section (Logo) */}
        <div className="flex items-center gap-6">
          <Link to="/" className="font-bold text-xl">
            ToyTopia
          </Link>
        </div>

        {/* Center Links (Desktop) */}
        <div className="hidden md:flex flex-1 justify-center items-center gap-6">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/all-items" className="hover:underline">All Items</Link>
          {user && <Link to="/profile" className="hover:underline">My Profile</Link>}
          <Link to="/contact" className="hover:underline">Contact</Link>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-2">
          {user ? (
            <>
              <img
                src={user.photoURL || "/default-user.png"}
                alt={user.displayName || "User"}
                className="w-8 h-8 rounded-full"
                title={user.displayName}
              />
              <button
                className="btn btn-sm btn-outline font-bold text-purple-900"
                onClick={() => signOut(auth)}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="btn btn-sm btn-primary">
                Login
              </Link>
              <Link to="/register" className="btn btn-sm btn-secondary">
                Register
              </Link>
            </>
          )}

          {/* Mobile Hamburger */}
          <button
            className="md:hidden ml-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-purple-300 flex flex-col md:hidden text-black p-4 gap-2 z-50">
            <Link to="/" className="hover:underline" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="/all-items" className="hover:underline" onClick={() => setMenuOpen(false)}>All Items</Link>
            {user && (
              <Link to="/profile" className="hover:underline" onClick={() => setMenuOpen(false)}>My Profile</Link>
            )}
            <Link to="/contact" className="hover:underline" onClick={() => setMenuOpen(false)}>Contact</Link>
            
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
