import './App.css';
import React from 'react';
import FTest from './Components/FTest';
import Navbarcal from './Components/Navbarcal';
import Aboutus from './Components/Extra/Aboutus';
import Contactus from './Components/Extra/Contactus';
import Faq from './Components/Extra/Faq';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
// import { Nav, Navbar } from 'react-bootstrap';


function App() {
  return (
    
    <Router>
      <Navbarcal/>
      <Routes>
        <Route exact path="/" element={<FTest/>} />
        <Route path="/about" element={<Aboutus/>} />
        <Route path="/contact" element={<Contactus/>} />
        <Route path="/faq" element={<Faq/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

// function App() {
//   return (
//     <div> 
//       <main>
//         {/* <Heading/> */}
//         {/* <Navbar_cal/> */}
//         <Navbar_cal/>
//         <F_Test/>
//       </main>
//     </div>
//   );
// }

export default App;
