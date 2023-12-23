import React from "react";

const Hero = () => {
  return (
    <section className="h-64 md:h-96 lg:max-h-full group relative">
      <img src="./images/batman.jpg" className="h-full w-full object-cover" />
      <div className="absolute bottom-0 w-full dark:bg-gradient-to-b from-transparent to-black dark:text-white text-black">
        <div className="container pl-10 lg:pl-0">
          <h3 className="text-gega-melon tracking-wider group-hover:mb-1 duration-500">
            Action, Drama, thiller
          </h3>
          <h1 className="text-4xl lg:text-6xl text-gega-grey group-hover:mb-1 duration-500">
            The Dark knight
          </h1>
          <p className=" dark:text-gega-grey text-black group-hover:mb-1 duration-500 text-sm lg:text-base w-3/4 lg:w-2/3 text-justify">
            When the menace known as the Joker wreaks havoc and chaos on the
            people of Gotham, Batman must accept one of the greatest
            psychological and physical tests of his ability to fight injustice.
          </p>
          {/* // detail container butonlar için */}
          <div className="flex space-x-8 opacity-0 group-hover:opacity-100 group-hover:mb-[50px] lg:group-hover:mb-20 duration-1000">
            <div className="flex space-x-2 item-center cursor-pointer">
              <a
                href="https://www.sinemalar.com/film/744/kara-sovalye"
                className="text-gega-grey uppercase lg:text-lg hover:text-gega-red"
                target="-blank"
              >
                Watch Trailer
              </a>
              <div className="flex h-8 w-8 rounded-full text-center justify-center items-center bg-gega-red text-gega-grey">
                <i className="fas fa-play ml-1.5"></i>
              </div>
            </div>
            <div className="flex space-x-2 item-center cursor-pointer">
              <a
                href="https://iyikigormusum.com/batman-the-dark-knight"
                className="text-gega-grey uppercase lg:text-lg hover:text-gega-red"
                target="-blank"
              >
                Full Synopsis
              </a>
              <div className="flex h-8 w-8 rounded-full text-center justify-center items-center bg-gega-red text-gega-grey">
                <i className="fas fa-arrow-right ml-1"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ///  points */}
      <div className="flex space-x-3 absolute bottom-5 left-10 opacity-0 group-hover:opacity-100 duration-500">
        <div className="w-3 h-3 lg:w-4 lg:h-4 rounded-full bg-gega-grey"></div>
        <div className="w-3 h-3 lg:w-4 lg:h-4  rounded-full bg-gega-red"></div>
        <div className="w-3 h-3 lg:w-4 lg:h-4  rounded-full bg-gega-grey"></div>
        <div className="w-3 h-3 lg:w-4 lg:h-4  rounded-full bg-gega-grey"></div>
      </div>
    </section>
  );
};

export default Hero;
