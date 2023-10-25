import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./index.css";
import Login from "./components/auth/Login.jsx";
import Signup from "./components/auth/Signup.jsx";
import ChangePassword from "./components/auth/ChangePassword.jsx";
import Homepage from "./components/home/Homepage.jsx";
import Profile from "./components/profile/Profile.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/changePassword" element={<ChangePassword />} />
      <Route path="/home" element={<Homepage />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  </Router>
);
