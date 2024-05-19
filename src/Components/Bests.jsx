import React from 'react'

const Bests = () => {
  return (
    <div className="bg-black  text-white p-16">
      <div className="flex flex-col lg:flex-row justify-between space-y-12 lg:space-y-0">
        <div className="flex flex-col my-16 space-y-4">
          <h1 className="text-3xl font-bold">Find out why we're best-in-class</h1>
          <p className="text-lg">
            The #1 email marketing and automations platform* that recommends ways to get more opens,
            clicks, and sales.
          </p>
        </div>

        <div className="flex flex-col space-y-4">
          <h2 className="text-2xl font-semibold">Up to 25x ROI</h2>
          <p className="text-lg">seen by Mailchimp users*</p>
          <h2 className="text-2xl font-semibold">11M+ Users</h2>
          <p className="text-lg">of Mailchimp globally</p>
        </div>

        <div className="flex flex-col space-y-4">
          <h2 className="text-2xl font-semibold">22 years experience</h2>
          <p className="text-lg">helping businesses sell more</p>
          <h2 className="text-2xl font-semibold">$1.7K per campaign</h2>
          <p className="text-lg">generated on average*</p>
        </div>
      </div>
    </div>
  )
}

export default Bests