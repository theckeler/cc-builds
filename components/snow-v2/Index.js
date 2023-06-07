import React from "react";
import { Routes, Route } from "react-router-dom";

import "../../scss/main.scss";
import "./scss/snow-v2.scss";

import Home from "./Home";
import IntelliPower from "./IntelliPower";
import OneX from "./OneX";
import TwoX from "./TwoX";
import ThreeX from "./ThreeX";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/intellipower" element={<IntelliPower />} />
      <Route path="/1x" element={<OneX />} />
      <Route path="/2x" element={<TwoX />} />
      <Route path="/3x" element={<ThreeX />} />
    </Routes>
  );
};

export default App;
