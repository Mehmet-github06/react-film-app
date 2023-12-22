import React from "react";

const Movis = () => {
  return (
    <section className="py-24 dark:bg-black bg-white">
      {/*/// movis content */}
      <div className="container flex flex-col lg:flex-row lg:space-x-16 space-y-8 lg:space-y-0">
        {/* /// left contant */}
        <div className="basis-2/3">
          <div className="flex space-x-2 divide-x-2 divide-gega-red divide-opacity-50 mb-8 pl-10 lg:pl-0">
            <h2 className="text-gega-red ">
              <a href="">Latest</a>
            </h2>
            <h2 className="dark:text-gega-grey text-black pl-2 hover:text-gega-red duration-500">
              <a
                href="https://www.imdb.com/trailers/?ref_=nv_sr_srsg_0_tt_7_nm_0_q_popular"
                target="_blank"
              >
                Popular
              </a>
            </h2>
            <h2 className="dark:text-gega-grey text-black pl-2 hover:text-gega-red duration-500">
              <a
                href="https://www.imdb.com/trailers/?ref_=nv_sr_srsg_0_tt_7_nm_0_q_popular"
                target="_blank"
              >
                Best
              </a>
            </h2>
          </div>
          <div className="flex flex-wrap img">
            <div className="group relative overflow-hidden basis-1/3 ">
              <img
                src="./images/mv1.jpg"
                className="group-hover:scale-110 group-hover:opacity-50 duration-500"
              />
              <div className="absolute px-6 bottom-8">
                <h3 className="text-gega-grey group-hover:text-gega-melon group-hover:mb-8 duration-500">
                  oblivion
                </h3>

                <div className="absolute flex space-x-8 opacity-0 -bottom-2 group-hover:bottom-2  group-hover:opacity-100 duration-500">
                  <a className="group-hover:text-gega-red" href="#">
                    <i className="fa-solid fa-play text-gega-grey"></i>
                  </a>
                  <a className="hover:text-gega-red" href="#">
                    <i className="fa-solid fa-arrow-right text-gega-grey"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden basis-1/3">
              <img
                src="./images/mv2.jpg"
                className="group-hover:scale-110 group-hover:opacity-50 duration-500"
              />
              <div className="absolute px-6 bottom-8">
                <h3 className="text-gega-grey group-hover:text-gega-melon group-hover:mb-8 duration-500">
                  wild
                </h3>

                <div className="absolute flex space-x-8 opacity-0 -bottom-2 group-hover:bottom-2  group-hover:opacity-100 duration-500">
                  <a className="group-hover:text-gega-red" href="#">
                    <i className="fa-solid fa-play text-gega-grey"></i>
                  </a>
                  <a className="hover:text-gega-red" href="#">
                    <i className="fa-solid fa-arrow-right text-gega-grey"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden basis-1/3">
              <img
                src="./images/mv3.jpg"
                className="group-hover:scale-110 group-hover:opacity-50 duration-500"
              />
              <div className="absolute px-6 bottom-8">
                <h3 className="text-gega-grey group-hover:text-gega-melon group-hover:mb-8 duration-500">
                  maducland price
                </h3>

                <div className="absolute flex space-x-8 opacity-0 -bottom-2 group-hover:bottom-2  group-hover:opacity-100 duration-500">
                  <a className="group-hover:text-gega-red" href="#">
                    <i className="fa-solid fa-play text-gega-grey"></i>
                  </a>
                  <a className="hover:text-gega-red" href="#">
                    <i className="fa-solid fa-arrow-right text-gega-grey"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden basis-1/3">
              <img
                src="./images/mv4.jpg"
                className="group-hover:scale-110 group-hover:opacity-50 duration-500"
              />
              <div className="absolute px-6 bottom-8">
                <h3 className="text-gega-grey group-hover:text-gega-melon group-hover:mb-8 duration-500">
                  2049
                </h3>

                <div className="absolute flex space-x-8 opacity-0 -bottom-2 group-hover:bottom-2  group-hover:opacity-100 duration-500">
                  <a className="group-hover:text-gega-red" href="#">
                    <i className="fa-solid fa-play text-gega-grey"></i>
                  </a>
                  <a className="hover:text-gega-red" href="#">
                    <i className="fa-solid fa-arrow-right text-gega-grey"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden basis-1/3">
              <img
                src="./images/mv5.jpg"
                className="group-hover:scale-110 group-hover:opacity-50 duration-500"
              />
              <div className="absolute px-6 bottom-8">
                <h3 className="text-gega-grey group-hover:text-gega-melon group-hover:mb-8 duration-500">
                  the forest
                </h3>

                <div className="absolute flex space-x-8 opacity-0 -bottom-2 group-hover:bottom-2  group-hover:opacity-100 duration-500">
                  <a className="group-hover:text-gega-red" href="#">
                    <i className="fa-solid fa-play text-gega-grey"></i>
                  </a>
                  <a className="hover:text-gega-red" href="#">
                    <i className="fa-solid fa-arrow-right text-gega-grey"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden basis-1/3">
              <img
                src="./images/mv6.jpg"
                className="group-hover:scale-110 group-hover:opacity-50 duration-500"
              />
              <div className="absolute px-6 bottom-8">
                <h3 className="text-gega-grey group-hover:text-gega-melon group-hover:mb-8 duration-500">
                  skyfall
                </h3>

                <div className="absolute flex space-x-8 opacity-0 -bottom-2 group-hover:bottom-2  group-hover:opacity-100 duration-500">
                  <a className="group-hover:text-gega-red" href="#">
                    <i className="fa-solid fa-play text-gega-grey"></i>
                  </a>
                  <a className="hover:text-gega-red" href="#">
                    <i className="fa-solid fa-arrow-right text-gega-grey"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*/// right content */}
        <div className="basis-1/3 pl-10 lg:pl-0">
          <h2 className="dark:text-gega-grey text-black mb-8 ">hot news</h2>
          {/* ///news container */}
          <div className="flex flex-row lg:flex-col lg:h-full lg:pb-16 justify-start  lg:justify-between flex-wrap lg:flex-nowrap space-y-4">
            {/* ///items */}
            <div className="flex items-center group basis-3/4 md:basis-1/2">
              <div className="basis-1/3 h-full">
                <img
                  src="./images/new1.jpg"
                  className="h-full w-full object-cover"
                  alt=""
                />
              </div>
              {/* /// detaylar */}
              <div className="basis-2/3 pl-6 dark:text-gega-grey text-black group-hover:text-gega-melon group-hover:cursor-pointer duration-500">
                <p className="text-sm">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Inventore, nostrum!
                </p>
                <p className="text-xs tracking-tighter mt-2 font-bold ">
                  ON NOW{" "}
                  <span className="text-gega-red">
                    {new Date().getFullYear()}
                  </span>{" "}
                </p>
              </div>
            </div>
            <div className="flex items-center group basis-3/4 md:basis-1/2">
              <div className="basis-1/3 h-full">
                <img
                  src="./images/new3.jpg"
                  className="h-full w-full "
                  alt=""
                />
              </div>
              {/* /// detaylar */}
              <div className="basis-2/3 pl-6 dark:text-gega-grey text-blackgroup-hover:text-gega-melon group-hover:cursor-pointer duration-500">
                <p className="text-sm">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Inventore, nostrum!
                </p>
                <p className="text-xs tracking-tighter mt-2 font-bold ">
                  ON NOW{" "}
                  <span className="text-gega-red">
                    {new Date().getFullYear()}
                  </span>{" "}
                </p>
              </div>
            </div>
            <div className="flex items-center group basis-3/4 md:basis-1/2">
              <div className="basis-1/3 h-full">
                <img
                  src="./images/new2.jpg"
                  className="h-full w-full object-cover"
                  alt=""
                />
              </div>
              {/* /// detaylar */}
              <div className="basis-2/3 pl-6 dark:text-gega-grey text-blackgroup-hover:text-gega-melon group-hover:cursor-pointer duration-500">
                <p className="text-sm">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Inventore, nostrum!
                </p>
                <p className="text-xs tracking-tighter mt-2 font-bold ">
                  ON NOW{" "}
                  <span className="text-gega-red">
                    {new Date().getFullYear()}
                  </span>{" "}
                </p>
              </div>
            </div>
            <div className="flex items-center group basis-3/4 md:basis-1/2">
              <div className="basis-1/3 h-full">
                <img
                  src="./images/new4.jpg"
                  className="h-full w-full "
                  alt=""
                />
              </div>
              {/* /// detaylar */}
              <div className="basis-2/3 pl-6 dark:text-gega-grey text-blackgroup-hover:text-gega-melon group-hover:cursor-pointer duration-500">
                <p className="text-sm">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Inventore, nostrum!
                </p>
                <p className="text-xs tracking-tighter mt-2 font-bold ">
                  ON NOW{" "}
                  <span className="text-gega-red">
                    {new Date().getFullYear()}
                  </span>
                </p>
              </div>
            </div>
            <div className="flex items-center group basis-3/4 md:basis-1/2 md:hidden lg:flex">
              <div className="basis-1/3 h-full">
                <img
                  src="./images/new5.jpg"
                  className="h-full w-full object-cover"
                  alt=""
                />
              </div>
              {/* /// detaylar */}
              <div className="basis-2/3 pl-6 dark:text-gega-grey text-black group-hover:text-gega-melon group-hover:cursor-pointer duration-500">
                <p className="text-sm">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Inventore, nostrum!
                </p>
                <p className="text-xs tracking-tighter mt-2 font-bold ">
                  ON NOW{" "}
                  <span className="text-gega-red">
                    {new Date().getFullYear()}
                  </span>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Movis;
