import React from "react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <header className="bg-black py-6 lg:py-12 text-gega-grey uppercase">
      <div className="container flex items-center justify-between space-x-8 lg:space-x-16">
        <a
          href="#"
          className="pl-10 md:pl-0 text-4xl lg:text-6xl  font-bold text-transparent bg-gradient-to-r bg-clip-text from-gega-red to-gega-grey"
        >
          filmorg
        </a>
        <div className="block md:hidden pr-10 mt-2" onClick={toggleMenu}>
          <div className="space-y-1.5 cursor-pointer">
            <div
              className={`bg-gega-grey w-8 h-1 rounded-s-full ${
                isMenuOpen ? "rotate-45 transform origin-center" : ""
              }`}
            ></div>
            <div
              className={`bg-gega-grey w-8 h-1 rounded-s-full ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            ></div>
            <div
              className={`bg-gega-grey w-8 h-1 rounded-s-full ${
                isMenuOpen ? "-rotate-45 transform origin-center" : ""
              }`}
            ></div>
          </div>
        </div>
        <nav
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:flex flex-1 flex-col md:flex-row md:items-center md:justify-between`}
        >
          <div className="flex items-center lg:text-lg space-x-4 lg:space-x-8">
            <a
              href="#"
              className="hover:text-gega-melon transition duration-500 md:mt-0"
            >
              movis
            </a>
            <a
              href="#"
              className="hover:text-gega-melon transition duration-500 md:mt-0"
            >
              celebrities
            </a>
            <a
              href="#"
              className="hover:text-gega-melon transition duration-500 md:mt-0"
            >
              blog
            </a>
            <a
              href="#"
              className="hover:text-gega-melon transition duration-500 md:mt-0"
            >
              news
            </a>
            <a
              href="#"
              className="hover:text-gega-melon transition duration-500 md:mt-0"
            >
              about
            </a>
          </div>
          <div className="flex items-center space-x-4 lg:space-x-8">
            <form>
              <div className="group border-r px-4 mx-4 py-1 border-gega-red ">
                <input
                  type="text"
                  className="opacity-0 group-hover:opacity-100 bg-transparent border-b border-gega-red focus:outline-none w-24 lg:w-44 transition duration-500"
                />
                <button className="-ml-4 group-hover:ml-0 transition duration-500">
                  <i className="fas fa-search group-hover:text-gega-red transition duration-500"></i>
                </button>
              </div>
            </form>
            <div className="flex items-center  space-x-4 lg:space-x-8 lg:text-lg">
              <a href="#">login</a>
              <a
                href="#"
                className="bg-gega-red px-3 py-1 hover:bg-rose-500 hover:text-gega-grey cursor-pointer transition duration-500 whitespace-nowrap"
              >
                sing up
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
