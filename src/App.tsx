import React from "react";
import "./App.css";
import Signup from "./pages/Signup";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RequireAuth from "./components/RequireAuth";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<RequireAuth component={Home} />} />
        <Route path="/" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
