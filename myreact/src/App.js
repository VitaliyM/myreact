import React from "react";
import Footer from "./Components/footer/Footer";
import Mainblock from "./Components/mainblock/Mainblock";
import Navbar from "./Components/navbar/Navbar";
import { BrowserRouter } from "react-router-dom";
import './main.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
        <Navbar />
        <Mainblock />
        <Footer />


      </BrowserRouter>
    </div>
  );
}

export default App;
