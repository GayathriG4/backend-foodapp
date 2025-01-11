import React from 'react'
import logo from "../assets/logo.png"
import profile from "../assets/profile.png"

const Navbar = () => {
  return (
    <div className='max-padd-container flexBetween py-2 bg-white'>
        <img src={logo} alt="logoImg" height={155} width={155} />
        <img src={profile} alt="profileImg" height={46} width={46} className='rounded-full'/>
    </div>
  )
}

export default Navbar