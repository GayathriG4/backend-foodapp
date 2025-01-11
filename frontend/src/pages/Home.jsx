import React, { useState } from "react";
import Hero from "../components/Hero";
import Steps from "../components/Steps";
import Categories from "../components/Categories";
import ProductDisplay from "../components/ProductDisplay";
import Chefs from "../components/Chefs";
import FindUs from "../components/FindUs";

const Home = () => {
  const [category, setCategory] = useState("All");
  return (
    <>
      <Hero />
      <Steps />
      <Categories category={category} setCategory={setCategory} />
      <ProductDisplay category={category} />
      <FindUs />
      <Chefs />
    </>
  );
};

export default Home;
