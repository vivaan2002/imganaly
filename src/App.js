import './App.css';
import React from 'react';
import F_Test from './Components/F_Test';
import Navbar_cal from './Components/Navbar_cal';
import About_us from './Components/Extra/About_us';
import Contact_us from './Components/Extra/Contact_us';
import Faq from './Components/Extra/Faq';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
// import { Nav, Navbar } from 'react-bootstrap';


function App() {
  return (
    
    <Router>
      <Navbar_cal/>
      <Routes>
        <Route exact path="/" element={<F_Test/>} />
        <Route path="/about" element={<About_us/>} />
        <Route path="/contact" element={<Contact_us/>} />
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
