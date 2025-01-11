import React, { useContext } from "react";
import Item from "./Item";
import { ShopContext } from "../context/ShopContext";

const ProductDisplay = ({ category }) => {
  const {all_products} = useContext(ShopContext)
  return (
    <section id="foods" className="max-padd-container py-16 xl:py-28">
      {/* title */}
      <div className="max-w-[622px] pb-20 mx-auto text-center">
        <h3 className="h3 uppercase">Your Chosen Flavors</h3>
        <p>
        "Indulge in the flavors you crave! Whether you’re in the mood for something sweet, spicy, or savory, our carefully selected dishes cater to every taste preference. Choose your favorites and savor the perfect bite, every time."   
        </p>
      </div>
      {/* container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {all_products.map((product) => {
          if (category === "All" || category === product.category) {
            return (
              <div key={product._id}>
                <Item product={product} />
              </div>
            );
          }
        })}
      </div>
    </section>
  );
};

export default ProductDisplay;
