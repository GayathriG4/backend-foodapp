import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const Product = () => {
  const { productId } = useParams();
  const { all_products, url } = useContext(ShopContext);
  
  const product = all_products.find((e) => e._id === productId);

  if (!product) {
    return <div className="h1 pt-28">Product not Found</div>;
  }

  return (
    <section className="max-padd-container py-16 xl:py-28">
      {/* Title */}
      <div className="py-10 max-w-[622px] pb-20">
        <h3 className="h3 uppercase ">Your Chosen Flavors</h3>
        <p>{product.description}</p>
      </div>

      {/* Product Details */}
      <div className="flex flex-col lg:flex-row gap-10 items-center">
        <img
          src={`${url}/images/${product.image}`}
          alt={product.name}
          className="rounded-lg shadow-md w-full max-w-[400px]"
        />
        <div>
          <h3 className="h3">{product.name}</h3>
          <p className="medium-16 text-gray-50">Price: ${product.price}</p>
          <p className="medium-16 text-gray-50">Category: {product.category}</p>
        </div>
      </div>
    </section>
  );
};

export default Product;
