import React from "react";
import { Link } from "react-router-dom";
import heroImg from "../assets/bg.png";
import { FaArrowRightLong } from "react-icons/fa6";

const Hero = () => {
  return (
    <section
      id="home"
      className="max-padd-container flex xl:flex-row flex-col gap-5 gap-y-20 z-0 relative py-12"
    >
      <div className="absolute xl:-top-1 xl:-right-[44%] -right-1/4 bg-hero bg-repeat-round -z-10 w-full xl:h-[811px] h-[590px] overflow-hidden" />
      {/* left */}
      <div className="flex-1 pt-52 max-w-[611px]">
        <h2 className="h1 capitalize tracking-[1px]">
          Delicious Meals Delivered Right{" "}
          <span className="xl:text-secondary">to Your Doorstep</span>
        </h2>
        <p className="pt-4 pb-14">
        "Your go-to app for quick, delicious meals delivered to your door. Explore a variety of flavors, place your order with ease, and enjoy your favorite dishes anytime, anywhere."
        </p>
        <div className="inline-flex flex-col xs:flex-row xs:items-center gap-3">
          <Link to={""} className="btn-secondary rounded-full !px-12">
            Order Now
          </Link>
          <Link
            to={"#menu"}
            className="btn-outline rounded-full !px-12 flexCenter gap-x-3"
          >
            Explore Menu
            <FaArrowRightLong className="" />
          </Link>
        </div>
      </div>
      {/* Right */}
      <div className="xl:flex-1 flex justify-end items-end">
        <div className="relative xl:w-full w-[90%] xl:h-full h-[590px] xl:pt-20 xl:pl-24 z-0">
          <img src={heroImg} alt="hero" className="object-contain " />
        </div>
      </div>
    </section>
  );
};

export default Hero;
