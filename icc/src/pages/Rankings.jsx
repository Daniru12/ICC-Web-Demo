import React, { useState } from 'react';

export const Rankings = () => {
  const formats = ['Test', 'ODI', 'T20I'];
  const [activeFormat, setActiveFormat] = useState('Test');

  const teamData = {
    Test: [
      { rank: 1, name: 'Australia', code: 'au', played: 26, points: 3200, rating: 123 },
      { rank: 2, name: 'South Africa', code: 'za', played: 22, points: 2501, rating: 114 },
      { rank: 3, name: 'England', code: 'gb-eng', played: 34, points: 3839, rating: 113 },
      { rank: 4, name: 'India', code: 'in', played: 27, points: 2837, rating: 105 },
      { rank: 5, name: 'New Zealand', code: 'nz', played: 22, points: 2094, rating: 95 },
      { rank: 6, name: 'Sri Lanka', code: 'lk', played: 24, points: 2078, rating: 87 },
      { rank: 7, name: 'Pakistan', code: 'pk', played: 22, points: 1705, rating: 78 },
      { rank: 8, name: 'West Indies', code: 'gd', played: 22, points: 1613, rating: 73 },
      { rank: 9, name: 'Bangladesh', code: 'bd', played: 24, points: 1487, rating: 62 },
      { rank: 10, name: 'Ireland', code: 'ie', played: 5, points: 152, rating: 30 },
    ],
    ODI: [
      { rank: 1, name: 'India', code: 'in', played: 36, points: 4471, rating: 124 },
      { rank: 2, name: 'New Zealand', code: 'nz', played: 38, points: 4160, rating: 109 },
      { rank: 3, name: 'Australia', code: 'au', played: 32, points: 3473, rating: 109 },
      { rank: 4, name: 'Sri Lanka', code: 'lk', played: 36, points: 3730, rating: 104 },
      { rank: 5, name: 'Pakistan', code: 'pk', played: 32, points: 3312, rating: 104 },
      { rank: 6, name: 'South Africa', code: 'za', played: 29, points: 2775, rating: 96 },
      { rank: 7, name: 'Afghanistan', code: 'af', played: 25, points: 2279, rating: 91 },
      { rank: 8, name: 'England', code: 'gb-eng', played: 34, points: 3003, rating: 88 },
      { rank: 9, name: 'West Indies', code: 'gd', played: 32, points: 2454, rating: 77 },
      { rank: 10, name: 'Bangladesh', code: 'bd', played: 29, points: 2205, rating: 76 },
    ],
    T20I: [
      { rank: 1, name: 'India', code: 'in', played: 57, points: 15425, rating: 271 },
      { rank: 2, name: 'Australia', code: 'au', played: 29, points: 7593, rating: 262 },
      { rank: 3, name: 'England', code: 'gb-eng', played: 37, points: 9402, rating: 254 },
      { rank: 4, name: 'New Zealand', code: 'nz', played: 41, points: 10224, rating: 249 },
      { rank: 5, name: 'West Indies', code: 'gd', played: 39, points: 9584, rating: 246 },
      { rank: 6, name: 'South Africa', code: 'za', played: 35, points: 8578, rating: 245 },
      { rank: 7, name: 'Sri Lanka', code: 'lk', played: 31, points: 7287, rating: 235 },
      { rank: 8, name: 'Pakistan', code: 'pk', played: 44, points: 10044, rating: 228 },
      { rank: 9, name: 'Bangladesh', code: 'bd', played: 38, points: 8538, rating: 225 },
      { rank: 10, name: 'Afghanistan', code: 'af', played: 30, points: 6699, rating: 223 },
    ],
  };

  const topTeam = teamData[activeFormat][0];

  return (
    <div className="min-h-screen p-4 text-gray-100 md:p-8 bg-gradient-to-br from-gray-900 via-slate-900 to-black">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="mb-2 text-3xl font-bold text-white">ICC Cricket Rankings</h1>
          <p className="text-gray-300">Current team rankings across all formats</p>
        </div>

        {/* Top Team Highlight */}
        <div className="flex items-center p-4 mb-6 bg-white rounded-lg shadow-md">
          <div className="mr-4">
            <img
              src={`https://flagcdn.com/w80/${topTeam.code}.png`}
              alt={topTeam.name}
              className="object-cover w-16 h-12 border border-gray-200 rounded"
            />
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-800">#{topTeam.rank} {topTeam.name}</h2>
            <div className="flex gap-4 mt-1">
              <span className="text-sm text-gray-600">Rating: <strong className="text-blue-600">{topTeam.rating}</strong></span>
              <span className="text-sm text-gray-600">Points: <strong>{topTeam.points.toLocaleString()}</strong></span>
              <span className="text-sm text-gray-600">Matches: <strong>{topTeam.played}</strong></span>
            </div>
          </div>
        </div>

        {/* Format Tabs */}
        <div className="flex pb-2 mb-8 overflow-x-auto">
          {formats.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFormat(f)}
              className={`flex-1 md:flex-none py-3 px-6 text-sm font-medium rounded-t-lg transition-colors ${
                f === activeFormat 
                  ? 'bg-white text-blue-600 border-t-2 border-blue-600 shadow-sm' 
                  : 'text-gray-400 hover:text-white hover:bg-gray-800'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Rankings Table */}
        <div className="overflow-hidden bg-white rounded-lg shadow-md">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                    Pos
                  </th>
                  <th scope="col" className="px-6 py-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                    Team
                  </th>
                  <th scope="col" className="px-6 py-4 text-xs font-medium tracking-wider text-center text-gray-500 uppercase">
                    Played
                  </th>
                  <th scope="col" className="px-6 py-4 text-xs font-medium tracking-wider text-center text-gray-500 uppercase">
                    Points
                  </th>
                  <th scope="col" className="px-6 py-4 text-xs font-medium tracking-wider text-center text-gray-500 uppercase">
                    Rating
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {teamData[activeFormat].map((team) => (
                  <tr key={`${activeFormat}-${team.rank}`} className={`hover:bg-gray-50 transition-colors ${
                    team.rank === 1 ? 'bg-blue-50' : ''
                  }`}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <span className={`inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-semibold ${
                          team.rank === 1 
                            ? 'bg-yellow-400 text-white' 
                            : team.rank === 2 
                              ? 'bg-gray-300 text-gray-800' 
                              : team.rank === 3 
                                ? 'bg-amber-600 text-white' 
                                : 'bg-gray-100 text-gray-800'
                        }`}>
                          {team.rank}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 w-8 h-5 mr-3">
                          <img
                            src={`https://flagcdn.com/w40/${team.code}.png`}
                            alt={team.name}
                            className="object-cover w-full h-full border border-gray-200 rounded-sm"
                          />
                        </div>
                        <div className={`text-sm font-medium ${
                          team.rank === 1 ? 'text-blue-600 font-bold' : 'text-gray-900'
                        }`}>
                          {team.name}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-center text-gray-500 whitespace-nowrap">
                      {team.played}
                    </td>
                    <td className="px-6 py-4 text-sm text-center text-gray-500 whitespace-nowrap">
                      {team.points.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 text-center whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        team.rank === 1 
                          ? 'bg-blue-100 text-blue-800' 
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        {team.rating}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          {['Home', 'Live Scores', 'Rankings', 'News', 'Photos', 'Videos'].map((item) => (
            <a
              key={item}
              href="#"
              className="px-4 py-2 text-sm font-medium text-gray-400 transition-colors hover:text-blue-400"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};