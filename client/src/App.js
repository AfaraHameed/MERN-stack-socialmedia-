import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Profile />} path="/profile/:username" />
        <Route element={<Login />} path="/login" />
        <Route element={<Register />} path="/register" />
        </Routes>
    </div>
  )
  
  
}

export default App;
