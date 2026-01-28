import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Signup from "./pages/login/Signup";
import AdminDashboard from "./pages/AdminDash/AdminDashboard";
import UserHome from "./pages/Home/UserHome";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/user/home" element={<UserHome />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
