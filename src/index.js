import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Routers } from "react-router-dom";
import Index from "./components/Index";
import Header from "./templates/Header";
import Footer from "./templates/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Routers>
        <Index />
      </Routers>
      <Footer />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
