import React from "react";
import { GoChecklist } from "react-icons/go";
import { PiCookingPot } from "react-icons/pi";
import { TbTruckDelivery } from "react-icons/tb";
import { GrFormCheckmark } from "react-icons/gr";

const Steps = () => {
  return (
    <section className="max-padd-container py-16 xl:py-28">
      {/* title */}
      <div className="max-w-[622px] pb-20 mx-auto text-center">
        <h3 className="h3 uppercase ">How It Works ?</h3>
        <p>
        "Simply browse, select, and enjoy! Choose your favorite dishes, place your order, and we'll deliver a hot, fresh meal right to your doorstep."
        </p>
      </div>
      {/* container */}
      <div className="flexCenter gap-5 flex-wrap">
        <div className="flexCenter gap-4">
          <div className="h-10 w-10 flexCenter bg-secondary rounded-full text-white">
            <GoChecklist className="text-2xl" />
          </div>
          <hr className="bg-[#555] outline-none border-none h-[1px] w-6 sm:w-44 rounded-full" />
        </div>
        <div className="flexCenter gap-4">
          <div className="h-10 w-10 flexCenter bg-secondary rounded-full text-white">
            <PiCookingPot className="text-2xl" />
          </div>
          <hr className="bg-[#555] outline-none border-none h-[1px] w-6 sm:w-44 rounded-full" />
        </div>
        <div className="flexCenter gap-4">
          <div className="h-10 w-10 flexCenter bg-secondary rounded-full text-white">
            <TbTruckDelivery className="text-2xl" />
          </div>
          <hr className="bg-slate-900/10 outline-none border-none h-[1px] w-6 sm:w-44 rounded-full " />
        </div>
        <div className="h-10 w-10 flexCenter bg-secondary rounded-full text-white">
          <GrFormCheckmark className="text-2xl" />
        </div>
      </div>
    </section>
  );
};

export default Steps;
