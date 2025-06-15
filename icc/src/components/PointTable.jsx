import React, { useState } from 'react'
export function PointTable() {
  


  const [activeTab, setActiveTab] = useState('t20')
  const t20Rankings = [
    {
      rank: 1,
      team: 'India',
      matches: 28,
      points: 3802,
      rating: 136,
    },
    {
      rank: 2,
      team: 'England',
      matches: 33,
      points: 4246,
      rating: 129,
    },
    {
      rank: 3,
      team: 'Pakistan',
      matches: 31,
      points: 3946,
      rating: 127,
    },
    {
      rank: 4,
      team: 'South Africa',
      matches: 24,
      points: 3026,
      rating: 126,
    },
    {
      rank: 5,
      team: 'New Zealand',
      matches: 26,
      points: 3075,
      rating: 118,
    },
    {
      rank: 6,
      team: 'Australia',
      matches: 29,
      points: 3409,
      rating: 118,
    },
  ]
  const odiRankings = [
    {
      rank: 1,
      team: 'Australia',
      matches: 30,
      points: 3901,
      rating: 130,
    },
    {
      rank: 2,
      team: 'India',
      matches: 35,
      points: 4289,
      rating: 123,
    },
    {
      rank: 3,
      team: 'New Zealand',
      matches: 27,
      points: 3226,
      rating: 119,
    },
    {
      rank: 4,
      team: 'England',
      matches: 27,
      points: 3121,
      rating: 116,
    },
    {
      rank: 5,
      team: 'South Africa',
      matches: 24,
      points: 2756,
      rating: 115,
    },
    {
      rank: 6,
      team: 'Pakistan',
      matches: 25,
      points: 2756,
      rating: 110,
    },
  ]
  const testRankings = [
    {
      rank: 1,
      team: 'Australia',
      matches: 19,
      points: 2439,
      rating: 128,
    },
    {
      rank: 2,
      team: 'India',
      matches: 20,
      points: 2526,
      rating: 126,
    },
    {
      rank: 3,
      team: 'England',
      matches: 25,
      points: 2843,
      rating: 114,
    },
    {
      rank: 4,
      team: 'New Zealand',
      matches: 16,
      points: 1792,
      rating: 112,
    },
    {
      rank: 5,
      team: 'Pakistan',
      matches: 14,
      points: 1486,
      rating: 106,
    },
    {
      rank: 6,
      team: 'South Africa',
      matches: 15,
      points: 1542,
      rating: 103,
    },
  ]
  const getActiveRankings = () => {
    switch (activeTab) {
      case 't20':
        return t20Rankings
      case 'odi':
        return odiRankings
      case 'test':
        return testRankings
      default:
        return t20Rankings
    }
  }
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-bold text-white mb-6">ICC Rankings</h2>
      <div className="mb-6 flex">
        <button
          className={`px-6 py-3 font-medium ${activeTab === 't20' ? 'bg-[#28B6CE] text-white' : 'bg-[#0E2340] text-gray-300 hover:bg-[#1A3356]'} 
            rounded-tl-lg rounded-bl-lg transition-colors duration-200`}
          onClick={() => setActiveTab('t20')}
        >
          T20
        </button>
        <button
          className={`px-6 py-3 font-medium ${activeTab === 'odi' ? 'bg-[#28B6CE] text-white' : 'bg-[#0E2340] text-gray-300 hover:bg-[#1A3356]'} 
            transition-colors duration-200`}
          onClick={() => setActiveTab('odi')}
        >
          ODI
        </button>
        <button
          className={`px-6 py-3 font-medium ${activeTab === 'test' ? 'bg-[#28B6CE] text-white' : 'bg-[#0E2340] text-gray-300 hover:bg-[#1A3356]'} 
            rounded-tr-lg rounded-br-lg transition-colors duration-200`}
          onClick={() => setActiveTab('test')}
        >
          TEST
        </button>
      </div>
      <div className="bg-[#0E2340] rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-[#061325]">
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-300">
                  Rank
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-300">
                  Team
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-300">
                  Matches
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-300">
                  Points
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-300">
                  Rating
                </th>
              </tr>
            </thead>
            <tbody>
              {getActiveRankings().map((team) => (
                <tr
                  key={team.rank}
                  className="border-b border-[#1A3356] hover:bg-[#1A3356] transition-colors duration-150"
                >
                  <td className="px-4 py-3 text-sm">{team.rank}</td>
                  <td className="px-4 py-3 font-medium">{team.team}</td>
                  <td className="px-4 py-3 text-sm">{team.matches}</td>
                  <td className="px-4 py-3 text-sm">{team.points}</td>
                  <td className="px-4 py-3 text-sm font-bold">{team.rating}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-4 text-xs text-gray-400 border-t border-[#1A3356]">
          Last updated: June 15, 2023
        </div>
      </div>
    </section>
  )
}
