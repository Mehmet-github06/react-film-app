import React from "react";

const Matrix = () => {
  return (
    <section className="dark:bg-gega-white bg-[#d3d3d3]">
      <div className="container flex items-center justify-center relative pl-10 lg:pl-0">
        {/*///left */}
        <div className="hidden md:block md:basis-1/3 lg:basis-1/2">
          <img
            src="./images/matrix.png"
            alt="matrix"
            className="lg:absolute lg:bottom-0"
          />
        </div>
        {/*/// right */}
        <div className="md:basis-2/3 lg:basis-1/2 mt-2">
          <div className="flex flex-col justify-center py-10 w-3/4 md:w-full">
            <h3 className="tracking-wider dark:text-gega-melon text-gega-red">
              Action, Drama, thrıller
            </h3>
            <h2 className="mb-2">matris reloaded</h2>
            <p className="text-sm mb-2 text-justify">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus sapiente totam tenetur doloremque nihil nostrum, tempore perferendis, iure dignissimos ullam dolorum officia consequatur tempora similique!
            </p>
            <h3 className="tracking-wider text-gega-red">
              8 wins 34 nominations
            </h3>
          </div>
        </div>
        {/* sarııııı */}
        <div className="absolute -top-12 left-10 lg:left-0 w-20 lg:w-24 h-20 lg:h-24 bg-gega-melon rounded-full text-center flex items-center ">
          <p className="text-gega-red font-gemunu uppercase  lg:font-bold  lg:text-xl -rotate-45">
            Oldie & Goldie
          </p>
        </div>
      </div>
    </section>
  );
};

export default Matrix;
