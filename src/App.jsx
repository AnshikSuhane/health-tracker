import "./App.css";
import { Login } from "./Auth/login";
import { Routes, Route, Navigate } from "react-router-dom";
import { Register } from "./Auth/Register";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
