import Login from "../components/LoginSignup/Login";
import { Routes, Route } from "react-router-dom";
import Register from "../components/Register/Register";
import Dashboard from "../components/Dashboard/Dashboard";
import Home from "../components/Home/Home";

export default function Rms() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register/>}/>
        <Route path="/dashboard" element={<Dashboard/>}>
          <Route path="home" element={<Home/>} />
        </Route>
      </Routes>
    </>
  );
}
