import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";

import Home from "./pages/Home";
import About from "./pages/About";
import Housing from "./pages/Housing";
import Error404 from "./pages/Error404";



function App() {
  return (
  <div>
    <Router>
    <Header />
        <Routes>
          <Route path="/" element={<Home/>} />  
          <Route path="/about" element={<About/>} />
          <Route path="/housing/:id" element={<Housing/>} />
          <Route path="*" element={<Error404/>}/> 
        </Routes>
      <Footer />
    </Router>
  </div>
  );
}

export default App;
