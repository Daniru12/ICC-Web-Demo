import React, { useState } from 'react';

export const News = () => {
  const [content, setContent] = useState({
    category: 'MATCH RESULT',
    tournament: 'World Test Championship Final 2024',
    headline: 'South Africa crowned World Test Champions after historic win',
    description: "Dean Elgar's team secures South Africa's first-ever World Test Championship title with a commanding performance",
    buttonText: 'Match Report',
  });

  const matchDetails = {
    venue: "Lord's Cricket Ground",
    date: "June 15, 2024",
    result: "South Africa won by 7 wickets",
    motm: "Dean Elgar",
    duration: "4 Days"
  };

  const flagUrls = {
    sa: "https://flagcdn.com/w80/za.png",   // South Africa
    aus: "https://flagcdn.com/w80/au.png",  // Australia
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">

      <div className="max-w-1xl mx-auto px-10 py-10">
        {/* Header Section */}
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-gradient-to-r from-orange-400 to-pink-500 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-300">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1531415074968-036ba1b575da?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Victory"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex flex-col justify-end p-6">
                <div className="text-sm text-yellow-300 mb-1 font-semibold">{content.category} • {content.tournament}</div>
                <h1 className="text-3xl text-white font-bold drop-shadow-lg">{content.headline}</h1>
                <p className="text-gray-100 mt-2 max-w-xl drop-shadow-md">{content.description}</p>
                <button className="mt-4 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-6 py-3 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200 font-semibold">
                  {content.buttonText}
                </button>
              </div>
            </div>
          </div>

          {/* Match Details */}
          <div className="bg-gradient-to-br from-cyan-400 to-blue-500 p-6 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300">
            <h2 className="text-xl font-bold text-white mb-4 drop-shadow-md">Match Details</h2>
            <ul className="text-white space-y-3">
              <li><strong>Venue:</strong> {matchDetails.venue}</li>
              <li><strong>Date:</strong> {matchDetails.date}</li>
              <li><strong>Result:</strong> <span className="text-yellow-300 font-bold">{matchDetails.result}</span></li>
              <li><strong>Player of the Match:</strong> {matchDetails.motm}</li>
              <li><strong>Duration:</strong> {matchDetails.duration}</li>
            </ul>
          </div>
        </div>

        {/* Scoreboard */}
        <div className="mt-10 bg-gradient-to-r from-green-400 to-blue-500 p-6 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300">
          <h2 className="text-xl font-bold text-white mb-6 drop-shadow-md">Final Scoreboard</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-center space-x-4 border-l-4 border-yellow-400 pl-4 bg-white bg-opacity-20 rounded-lg p-3">
              <img src={flagUrls.sa} alt="SA Flag" className="w-10 h-7 rounded shadow-md" />
              <div>
                <div className="text-lg font-bold text-yellow-200">South Africa</div>
                <div className="text-sm text-gray-100">Winner - 7 wickets</div>
              </div>
            </div>
            <div className="flex items-center space-x-4 border-l-4 border-orange-400 pl-4 bg-white bg-opacity-20 rounded-lg p-3">
              <img src={flagUrls.aus} alt="AUS Flag" className="w-10 h-7 rounded shadow-md" />
              <div>
                <div className="text-lg font-bold text-orange-200">Australia</div>
                <div className="text-sm text-gray-100">Runner-up</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-10 bg-gradient-to-r from-purple-500 to-pink-500 p-6 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300">
          <h2 className="text-xl font-bold text-white mb-6 drop-shadow-md">Quick Stats</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="bg-white bg-opacity-20 rounded-xl p-4 backdrop-blur-sm">
              <div className="text-2xl font-bold text-yellow-300">1st</div>
              <p className="text-gray-100 text-sm">WTC Title</p>
            </div>
            <div className="bg-white bg-opacity-20 rounded-xl p-4 backdrop-blur-sm">
              <div className="text-2xl font-bold text-yellow-300">4</div>
              <p className="text-gray-100 text-sm">Days</p>
            </div>
            <div className="bg-white bg-opacity-20 rounded-xl p-4 backdrop-blur-sm">
              <div className="text-2xl font-bold text-yellow-300">7</div>
              <p className="text-gray-100 text-sm">Wickets</p>
            </div>
            <div className="bg-white bg-opacity-20 rounded-xl p-4 backdrop-blur-sm">
              <div className="text-2xl font-bold text-yellow-300">95%</div>
              <p className="text-gray-100 text-sm">Win Rate</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};