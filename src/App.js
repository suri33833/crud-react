import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Read from "./components/Read";
import Create from "./components/Create";

export default function App() {
  return (
    <>
      <div className="container">
        <Router>
          <Routes>
            <Route path="/" element={<Create />} />
            <Route path="/read" element={<Read />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}
