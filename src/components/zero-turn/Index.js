import React from "react";
import { Routes, Route } from "react-router-dom";

//import "./scss/zero-turn.scss";

import Home from "./ZeroTurn";
import Ultima from "./Ultima";
import ZTXSArticle from "./ZTXSArticle";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ultima" element={<Ultima />} />
      <Route path="/ZTXSArticle" element={<ZTXSArticle />} />
    </Routes>
  );
};

export default App;
