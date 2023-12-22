import React from "react";

const Footers = () => {
  return (
    <footer className="dark:bg-black dark:text-gega-grey bg-white text-black border-t-2 border-gega-red">
      <div className="container flex flex-col md:flex-row px-10 lg:px-0 pb-8 mt-2">
        <div className="basis-1/3">
          <a
            href="#"
            className="text-2xl lg:text-3xl  font-bold text-transparent bg-gradient-to-r bg-clip-text from-gega-red to-gega-grey"
          >
            FILMORG
          </a>
          <p className="text-sm mt-2">
            {new Date().toLocaleDateString("tr-TR")} MDSOFT No &copy; COPYRIGHT
          </p>
        </div>
        <div className="basis-1/3">
          <h2 className="mb-2 text-gega-red">LINKS</h2>
          <div className="grid grid-cols-5 gap-2 uppercase">
            <a
              className="col-span-2 hover:text-gega-melon duration-500"
              href="#"
            >
              MOVİES
            </a>
            <a
              className="col-span-2 hover:text-gega-melon duration-500"
              href="#"
            >
              CELEBRİTİES
            </a>
            <a
              className="col-span-2 hover:text-gega-melon duration-500"
              href="#"
            >
              BLOG
            </a>
            <a
              className="col-span-2 hover:text-gega-melon duration-500"
              href="#"
            >
              NEWS
            </a>
            <a
              className="col-span-2 hover:text-gega-melon duration-500"
              href="#"
            >
              ABOUT
            </a>
          </div>
        </div>
        {/*/// right */}
        <div className="basis-1/3">
          <h2 className="mb-2 text-gega-red">follow up</h2>
          <form className="flex" onClick={(e)=>e.preventDefault()}>
            <input
              className="py-1 px-2 bg-transparent border border-gega-red outline-none"
              type="text"
              placeholder="Type yor email..."
            />
            <button className="py-1 px-2 border border-gega-red bg-gega-red font-gemunu uppercase">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footers;
