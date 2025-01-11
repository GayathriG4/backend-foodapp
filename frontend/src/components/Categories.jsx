import React from "react";
import { categories } from "../assets/data";

const Categories = ({ category, setCategory }) => {
  return (
    <section id="menu" className="max-padd-container py-16">
      {/* title */}
      <div className="py-10 max-w-[622px] pb-20 mx-auto text-center">
        <h3 className="h3 uppercase ">Flavors to Explore</h3>
        <p>
        "Discover a world of delicious possibilities with our curated selection of flavors. From bold and spicy to rich and savory, explore unique taste profiles and indulge in the perfect dishes for every craving. Taste the difference with each bite!"
        </p>
      </div>
      {/* container */}
      <div className="flexStart gap-10 flex-wrap">
        {categories.map((item) => (
          <div
            onClick={() =>
              setCategory((prev) => (prev === item.name ? "All" : item.name))
            }
            id={item.name}
            key={item.name}
            className={`${category === item.name ? "ring-1 ring-slate-900/5" : ""
            } flexCenter flex-col bg-white rounded-2xl cursor-pointer`}>
            <div
              className={'p-8 rounded-2xl'}
            >
              <img
                src={item.image}
                alt="categoryImg"
                height={122}
                width={122}
                className="object-contain aspect-square"
              />
            </div>
            <h4 className={"pb-4 medium-15"}>{item.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
