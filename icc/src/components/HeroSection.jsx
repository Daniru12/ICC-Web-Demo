import React from 'react'
export const HeroSection = () => {
  return (
    <section className="mt-6 mb-10">
      <div className="relative rounded-xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-[#061325] via-[#061325]/70 to-transparent z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1531415074968-036ba1b575da?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
          alt="South Africa celebrates World Test Championship victory"
          className="w-full h-96 object-cover"
        />
        <div className="absolute bottom-0 left-0 p-6 z-20 w-full">
          <div className="flex items-center mb-3">
            <span className="bg-[#28B6CE] text-white px-3 py-1 rounded-md text-sm font-medium">
              MATCH RESULT
            </span>
            <span className="ml-3 text-sm text-gray-300">
              World Test Championship Final 2024
            </span>
          </div>
          <h2 className="text-3xl font-bold text-white mb-2">
            South Africa crowned World Test Champions after historic win
          </h2>
          <p className="text-gray-200 mb-4 max-w-2xl">
            Dean Elgar's team secures South Africa's first-ever World Test
            Championship title with a commanding performance
          </p>
          <button className="bg-[#28B6CE] hover:bg-[#1A97AF] text-white px-5 py-2 rounded-md transition-colors duration-200">
            Match Report
          </button>
        </div>
      </div>
    </section>
  )
}
