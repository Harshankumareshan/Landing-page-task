import React from 'react'

const Header = () => {
  return (
    <>
    <div className="bg-white p-2 flex justify-start items-center space-x-6">
      <p className="text-lg font-bold">INTUIT</p>
      <p className="text-sm font-bold">quick books</p>
      <p className="text-sm font-bold ">mailchimp</p>
      
    </div>

<div className="bg-customBrown text-white py-2 px-4">
<div className="container mx-auto flex justify-center items-center">
  <p className="text-lg  text-center">
    Save 50% for 12 months
    <br />
    <span className="text-lg md:text-lg">- limited time offer. Get started today</span>
  </p>
</div>
</div>
</>
    
  )
}

export default Header