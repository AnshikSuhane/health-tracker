import "./App.css";
import { Login } from "./Auth/login";
import { Routes, Route, Navigate } from "react-router-dom";
import { Register } from "./Auth/Register";
import { Home } from "./components/Home";
import { useState } from "react";
import RefrshHandler from "./assets/utils/RefreshHandler";

function App() {
  const [isAuth, setIsAuthenticated] = useState(false);
  const PrivateRoute = ({ element }) => {
    return isAuth ? element : <Navigate to="/login" />;
  };
  return (
    <>
      <RefrshHandler setIsAuthenticated={setIsAuthenticated} />
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/home" element={<PrivateRoute element={<Home />} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
