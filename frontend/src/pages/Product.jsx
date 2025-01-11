import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { all_products } from "../assets/data";

const Product = () => {
  const { productId } = useParams();
  // console.log("productId: ", productId)

  const product = all_products.find((e) => e._id === productId);
  if (!product) {
    return <div className="h1 pt-28">Product not Found</div>;
  }

  return (
    <section className="max-padd-container py-16 xl:py-28">
      {/* title */}
      <div className="py-10 max-w-[622px] pb-20">
        <h3 className="h3 uppercase ">Your Chosen Flavors ?</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quidem,
          pariatur omnis, iste libero fugit aliquam recusandae velit, tenetur
          provident non!
        </p>
      </div>
      {/* container */}
    </section>
  );
};

export default Product;
