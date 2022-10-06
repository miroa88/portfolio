import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";

import Navbar from "./shared/UIElement/Navbar";
import Footer from "./shared/UIElement/Footer";
import ScrollToTop from "./shared/UIElement/ScrollToTop";
import Home from './Home/pages/Home';
import Projects from './Project/pages/Projects';
import Reserach from './Research/pages/Research';
import Resume from './Resume/pages/ResumeNew';

import './App.css';
import './style.css';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home /> }/>
          <Route path="/project" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/research" element={<Reserach />} /> 
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
