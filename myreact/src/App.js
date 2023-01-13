import React from "react";
import Footer from "./Components/footer/Footer";
import Mainblock from "./Components/mainblock/Mainblock";
import Navbar from "./Components/navbar/Navbar";
import './main.css';

function App() {
  return (
    <div className="App">
      
      <Navbar />
      <Mainblock />
      <Footer />

    </div>
  );
}

export default App;
