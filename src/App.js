import './App.css';
import React from 'react';
import Inputcard from './Components/Inputcard';
import Navbarcal from './Components/Navbarcal';
import Aboutus from './Components/Extra/Aboutus';
import Contactus from './Components/Extra/Contactus';
import Faq from './Components/Extra/Faq';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
// import { Nav, Navbar } from 'react-bootstrap';


function App() {
  return (
    document.title = "Image Reader",
    <Router>
      <Navbarcal/>
      <Routes>
        <Route exact path="/" element={<Inputcard/>} />
        <Route path="/about" element={<Aboutus/>} />
        <Route path="/contact" element={<Contactus/>} />
        <Route path="/faq" element={<Faq/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
