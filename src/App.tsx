import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./css/color.css";
import "./css/style.css";
import "./css/style-new.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Body from "./components/body";
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
