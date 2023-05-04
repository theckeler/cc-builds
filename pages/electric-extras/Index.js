import React from "react";
import { Routes, Route } from "react-router-dom";

import Base from "./Base";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Base />} />
    </Routes>
  );
};

export default App;
