import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import Program from "./pages/Program";
import Students from "./pages/Students";
import Team from "./pages/Team";

const App: React.FC = () => {
  // TODO Lazy?
  // const lazyHome = React.lazy(() => import("./pages/Home"));

  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/" element={<Home />} />
        <Route path="/students" element={<Students />} />
        <Route path="/program" element={<Program />} />
        <Route path="/team" element={<Team />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
