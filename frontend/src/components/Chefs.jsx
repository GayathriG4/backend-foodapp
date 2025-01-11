import React from 'react'
import chef1 from "../assets/chef1.png"
import chef2 from "../assets/chef2.png"
import chef3 from "../assets/chef3.png"


const Chefs = () => {
  return (
    <section id="menu" className="max-padd-container py-16">
      {/* title */}
      <div className="py-10 max-w-[622px] pb-20 mx-auto text-center">
        <h3 className="h3 uppercase ">Our Culinary Artisans</h3>
        <p>
        "Delicious meals, delivered fast! Explore a variety of mouthwatering dishes crafted by expert culinary artisans, and enjoy seamless ordering with just a few taps. From comfort food to gourmet flavors, we bring the best of the kitchen to your door."
        </p>
      </div>
      {/* container */}
      <div className="max-padd-container grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-10">
        <div>
            <img src={chef1} alt="" className='object-contain aspect-square bg-white pt-5 h-[499px] rounded-xl'/>
        </div>
        <div className='mt-14'>
            <img src={chef3} alt="" className='object-contain aspect-square bg-white pt-5 h-[499px] rounded-xl'/>
        </div>
        <div className='mt-28'>
            <img src={chef2} alt="" className='object-contain aspect-square bg-white pt-5 h-[499px] rounded-xl'/>
        </div>
      </div>
    </section>
  )
}

export default Chefs