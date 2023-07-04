import React from "react";
import "./index.css";
import AssignmentStructure from "./Components/AssignmentStructure";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<AssignmentStructure />} />
      </Routes>
    </BrowserRouter>
  );
}

export { App };
