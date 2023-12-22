import React from "react";

const Blog = () => {
  return (
    <section className="py-24 bg-black text-gega-grey" id="blog">
      {/* container */}
      <div className="container px-10 lg:px-0">
        <h2 className="text-gega-red -mt-3 mb-3">
          <a href="#">Popular post</a>
        </h2>
        {/* grid area */}
        <div className="grid grid-cols-6 gap-10">
          {/* ///item...1*/}
          <div className="col-span-6 md:col-span-3 border border-gega-red">
            {/* item..1 header */}
            <div className="border-b border-gega-red p-4 flex items-center justify-between">
              <h3>ACCUSANTİUM DOLOREMQE LAUDANT...</h3>
              <img
                src="./images/userava1.jpg"
                alt="user"
                className="rounded-full"
              />
            </div>
            {/* item 1 parg */}
            <p className="p-4 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur ea saepe repudiandae quaerat aut reiciendis.
            </p>
            <div className="border-t border-gega-red p-4 flex items-center justify-end space-x-4 font-bold font-gemunu text-xl">
              <p> {new Date().toLocaleDateString("tr-TR")}</p>
              <div className="flex items-center justify-center space-x-3">
                <i className="fa-regular fa-comment">
                  <span className="text-sm"> 12</span>
                </i>

                <i className="fa-regular fa-heart">
                  <span className="text-sm"> 09</span>
                </i>
              </div>
            </div>
          </div>
          {/* ///item...2*/}
          <div className="col-span-6 md:col-span-3 border border-gega-red">
            {/* item..2 header */}
            <div className="border-b border-gega-red p-4 flex items-center justify-between">
              <h3>ACCUSANTİUM DOLOREMQE LAUDANT...</h3>
              <img
                src="./images/userava2.jpg"
                alt="user"
                className="rounded-full"
              />
            </div>
            {/* item 2 parg */}
            <p className="p-4 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur ea saepe repudiandae quaerat aut reiciendis.
            </p>
            <div className="border-t border-gega-red p-4 flex items-center justify-end space-x-4 font-bold font-gemunu text-xl">
              <p> {new Date().toLocaleDateString("tr-TR")}</p>
              <div className="flex items-center justify-center space-x-3">
                <i className="fa-regular fa-comment">
                  <span className="text-sm"> 18</span>
                </i>

                <i className="fa-regular fa-heart">
                  <span className="text-sm"> 16</span>
                </i>
              </div>
            </div>
          </div>
          {/* ///item...3*/}
          <div className="col-span-6 md:col-span-3 lg:col-span-2 border border-gega-red">
            {/* item..2 header */}
            <div className="border-b border-gega-red p-4 flex items-center justify-between">
              <h3>ACCUSANTİUM DOLOREMQE LAUDANT...</h3>
              <img
                src="./images/userava3.jpg"
                alt="user"
                className="rounded-full"
              />
            </div>
            {/* item 2 parg */}
            <p className="p-4 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur ea saepe repudiandae quaerat aut reiciendis.
            </p>
            <div className="border-t border-gega-red p-4 flex items-center justify-end space-x-4 font-bold font-gemunu text-xl">
              <p> {new Date().toLocaleDateString("tr-TR")}</p>
              <div className="flex items-center justify-center space-x-3">
                <i className="fa-regular fa-comment">
                  <span className="text-sm"> 32</span>
                </i>

                <i className="fa-regular fa-heart">
                  <span className="text-sm"> 13</span>
                </i>
              </div>
            </div>
          </div>
          {/* ///item...4*/}
          <div className="col-span-6 md:col-span-3 lg:col-span-2 border border-gega-red">
            {/* item..2 header */}
            <div className="border-b border-gega-red p-4 flex items-center justify-between">
              <h3>ACCUSANTİUM DOLOREMQE LAUDANT...</h3>
              <img
                src="./images/userava4.jpg"
                alt="user"
                className="rounded-full"
              />
            </div>
            {/* item 2 parg */}
            <p className="p-4 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur ea saepe repudiandae quaerat aut reiciendis.
            </p>
            <div className="border-t border-gega-red p-4 flex items-center justify-end space-x-4 font-bold font-gemunu text-xl">
              <p> {new Date().toLocaleDateString("tr-TR")}</p>
              <div className="flex items-center justify-center space-x-3">
                <i className="fa-regular fa-comment">
                  <span className="text-sm"> 32</span>
                </i>

                <i className="fa-regular fa-heart">
                  <span className="text-sm"> 12</span>
                </i>
              </div>
            </div>
          </div>
          {/* ///item...5*/}
          <div className="hidden lg:block col-span-3 lg:col-span-2 border border-gega-red">
            {/* item..2 header */}
            <div className="border-b border-gega-red p-4 flex items-center justify-between">
              <h3>ACCUSANTİUM DOLOREMQE LAUDANT...</h3>
              <img
                src="./images/userava5.jpg"
                alt="user"
                className="rounded-full"
              />
            </div>
            {/* item 2 parg */}
            <p className="p-4 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur ea saepe repudiandae quaerat aut reiciendis.
            </p>
            <div className="border-t border-gega-red p-4 flex items-center justify-end space-x-4 font-bold font-gemunu text-xl">
              <p> {new Date().toLocaleDateString("tr-TR")}</p>
              <div className="flex items-center justify-center space-x-3">
                <i className="fa-regular fa-comment">
                  <span className="text-sm"> 02</span>
                </i>

                <i className="fa-regular fa-heart">
                  <span className="text-sm"> 39</span>
                </i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
