import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import ToyDetails from "./pages/ToyDetails.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import MyProfile from "./pages/Profile.jsx";
import ForgetPassword from "./pages/ForgetPassword.jsx";
import NotFound from "./pages/NotFound.jsx";
import PrivateRoute from "./routes/PrivateRoute.jsx";
import AllToys from "./pages/AllToys.jsx";



import Contact from "./pages/Contact.jsx";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/toy/:id"
            element={
              
                <ToyDetails />
              
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
                  <Route path="/forget-password" element={<ForgetPassword />} />
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <MyProfile />
              </PrivateRoute>
            }
          />
          <Route
            path="/extra"
            element={
              <PrivateRoute>
                {/* <ExtraProtected /> */}
              </PrivateRoute>
            }
          />

        <Route 
          path="/contact" 
          element={
            
              <Contact/>
          
          } 
        />
         <Route path="/all-items" element={<AllToys />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
