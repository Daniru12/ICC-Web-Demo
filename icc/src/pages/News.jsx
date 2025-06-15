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
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-slate-900 to-black">

      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Header Section */}
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-300">
            <div className="relative">
              <img
                src="https://i.postimg.cc/mrLWBgQy/image.png"
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

          {/* Match Details - Light Theme Box */}
          <div className="bg-white rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300 border border-gray-200">
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2">Match Details</h2>
              <ul className="text-gray-700 space-y-3">
                <li className="flex justify-between items-center">
                  <span className="font-medium text-gray-600">Venue:</span>
                  <span className="font-semibold text-gray-800">{matchDetails.venue}</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="font-medium text-gray-600">Date:</span>
                  <span className="font-semibold text-gray-800">{matchDetails.date}</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="font-medium text-gray-600">Result:</span>
                  <span className="font-bold text-green-600">{matchDetails.result}</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="font-medium text-gray-600">Player of Match:</span>
                  <span className="font-semibold text-gray-800">{matchDetails.motm}</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="font-medium text-gray-600">Duration:</span>
                  <span className="font-semibold text-gray-800">{matchDetails.duration}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Scoreboard - Light Theme Box */}
        <div className="mt-10 bg-white rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300 border border-gray-200">
          <div className="p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-6 border-b border-gray-200 pb-2">Final Scoreboard</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-center space-x-4 border-l-4 border-green-500 pl-4 bg-green-50 rounded-lg p-4">
                <img src={flagUrls.sa} alt="SA Flag" className="w-12 h-8 rounded shadow-md" />
                <div>
                  <div className="text-lg font-bold text-green-700">South Africa</div>
                  <div className="text-sm text-green-600 font-medium">Winner - 7 wickets</div>
                </div>
                <div className="ml-auto">
                  <div className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">WINNER</div>
                </div>
              </div>
              <div className="flex items-center space-x-4 border-l-4 border-orange-500 pl-4 bg-orange-50 rounded-lg p-4">
                <img src={flagUrls.aus} alt="AUS Flag" className="w-12 h-8 rounded shadow-md" />
                <div>
                  <div className="text-lg font-bold text-orange-700">Australia</div>
                  <div className="text-sm text-orange-600 font-medium">Runner-up</div>
                </div>
                <div className="ml-auto">
                  <div className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold">2ND</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section - Light Theme Box */}
        <div className="mt-10 bg-white rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300 border border-gray-200">
          <div className="p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-6 border-b border-gray-200 pb-2">Quick Stats</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-xl p-4 text-center transform hover:scale-105 transition-all duration-200">
                <div className="text-3xl font-bold text-blue-600 mb-1">1st</div>
                <p className="text-blue-700 text-sm font-medium">WTC Title</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 rounded-xl p-4 text-center transform hover:scale-105 transition-all duration-200">
                <div className="text-3xl font-bold text-purple-600 mb-1">4</div>
                <p className="text-purple-700 text-sm font-medium">Days</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-xl p-4 text-center transform hover:scale-105 transition-all duration-200">
                <div className="text-3xl font-bold text-green-600 mb-1">7</div>
                <p className="text-green-700 text-sm font-medium">Wickets</p>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-200 rounded-xl p-4 text-center transform hover:scale-105 transition-all duration-200">
                <div className="text-3xl font-bold text-orange-600 mb-1">95%</div>
                <p className="text-orange-700 text-sm font-medium">Win Rate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};