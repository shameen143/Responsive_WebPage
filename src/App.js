import React from "react";
import Navbar from "./Components/Navbar";
import {Routes,Route} from 'react-router-dom';
import Footer from "./Components/Footer";

//import './App.css';


const Home=()=> {
  return (
    <div>
      <Navbar/>
     
      <section className="hero-section">
        <p>Welcome to</p>
        <h1>Clever Code</h1>
      </section>
      <Footer/>
    </div>
     
  );
};

const About=()=>{
  return(
    <div>
      <Navbar/>
      <section className="hero-section">
        <p>Welcome to</p>
        <h1>Clever Code</h1>

      </section>
      <Footer/>
    </div>
  );
};
const Service=()=>{
  return(
    <div>
      <Navbar/>
      <section className="hero-section">
        <p>Welcome to</p>
        <h1>Clever Code</h1>
      </section>
      <Footer/>
    </div>
  );
};

const Contact=()=>{
  return(
    <div>
      <Navbar/>
      <section className="hero-section">
        <p>Welcome to</p>
        <h1>Clever Code</h1>
      </section>
      <Footer/>
    </div>
  );
}
const App=()=>{
  return(
   
    <Routes>
     <Route path="/" element={<Home/>}></Route>
    
      <Route path="/about" element={<About/>}></Route>
      <Route path="/service" element={<Service/>}></Route>
      <Route path="/contact" element={<Contact/>}>
      
      </Route>
      </Routes>
     
  )
}

export default App;
