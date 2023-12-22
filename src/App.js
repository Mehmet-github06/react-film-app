import Blog from "./components/Blog";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Matrix from "./components/Matrix";
import Movis from "./components/Movis";
import Footer from "./components/Footers";
import React, { useState } from "react";
import "./index.css";

function App() {
  const [isDarkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };

  return (
     <div className={isDarkMode ? "dark" : ""}>
      <div className="absolute top-1 left-5 cursor-pointer text-lg">
        <i
          className={`fa-solid fa-sun text-white ${isDarkMode ? "" : "hidden"}`}
          id="sun"
          onClick={toggleDarkMode}
        ></i>
        <i
          className={`fa-solid fa-moon text-black ${isDarkMode ? "hidden" : ""}`}
          id="moon"
          onClick={toggleDarkMode}
        ></i>
      </div>
    <Header/>
    <Hero/>
    <Movis/>
    <Matrix/>
    <Blog/> 
    <Footer/>
      
    </div>
  );
}

export default App;
 