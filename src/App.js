import React from "react";
import Blog from "./components/Blog";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Matrix from "./components/Matrix";
import Movis from "./components/Movis";
import Footer from "./components/Footers";
import { DarkModeProvider ,useDarkMode} from "./components/DarkModeProvider"; // Dosyanın gerçek yolunu ekleyin
import "./index.css";

function App() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    <DarkModeProvider >
      {/* DarkModeProvider'ın içindeki bileşenler DarkModeContext kullanabilir */}
      <div className="dark">
        <div className="absolute top-1 left-5 cursor-pointer text-lg">
          {/* Buradaki kullanım useDarkMode hook'u ile context'ten değerleri almak içindir */}
          <i
            className={`fa-solid fa-sun text-white ${
              isDarkMode ? "" : "hidden"
            }`}
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
        <Hero />
        <Movis />
        <Matrix />
        <Blog />
        <Footer />
      </div>
    </DarkModeProvider>
  );
}

export default App;
