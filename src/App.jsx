import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Credential from "./components/Credentials.jsx";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Credential />} />
          <Route path="/signup" element={<Credential />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
