import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./css/color.css";
import "./css/style.css";
import "./css/style-new.css";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import Body from "./components/layout/body";
//import { BrowserRouter as Router } from "react-router-dom";
import { HashRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header></Header>
        <Body></Body>
        <Footer></Footer>
      </Router>
    </>
  );
}

export default App;
