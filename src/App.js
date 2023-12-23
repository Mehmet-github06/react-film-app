// App.js

import React from "react";
import Blog from "./components/Blog";
import Header from "./components/Header";
import Matrix from "./components/Matrix";
import Movis from "./components/Movis";
import Footer from "./components/Footers";
import { DarkModeProvider, useDarkMode } from "./components/DarkModeProvider";
import { Routes, Route } from "react-router-dom";
import "./index.css";

function App() {
  return (
    <DarkModeProvider>
      <AppContent />
    </DarkModeProvider>
  );
}

const AppContent = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className={isDarkMode ? "dark" : ""}>
      <div className="absolute top-1 left-5 cursor-pointer text-lg">
        <i
          className={`fa-solid fa-sun text-white ${isDarkMode ? "" : "hidden"}`}
          id="sun"
          onClick={toggleDarkMode}
        ></i>
        <i
          className={`fa-solid fa-moon text-black ${
            isDarkMode ? "hidden" : ""
          }`}
          id="moon"
          onClick={toggleDarkMode}
        ></i>
      </div>

      <Header />
      
      <Routes>
        
        <Route path="/" element={<Header />} />
        <Route path="/movis" element={<Movis />} />
        <Route path="/matrix" element={<Matrix />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
