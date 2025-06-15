import React from 'react'
import { CalendarIcon, FilterIcon } from 'lucide-react'
export const LiveScores = () => {
  const matches = [
    {
      id: 1,
      series: "ICC Men's ODI Series",
      team1: {
        name: 'England',
        score: '287/6',
        overs: '(50)',
      },
      team2: {
        name: 'New Zealand',
        score: '192/4',
        overs: '(32.3)',
      },
      status: 'LIVE',
      statusDetail: 'New Zealand need 96 runs in 105 balls',
      venue: "Lord's, London",
      matchType: 'ODI',
    },
    // Add more matches...
  ]
  return (
    <div className="py-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-white">Live Cricket Scores</h1>
        <div className="flex space-x-4">
          <button className="flex items-center px-4 py-2 bg-[#0E2340] text-gray-300 rounded-lg hover:bg-[#1A3356]">
            <CalendarIcon size={18} className="mr-2" />
            Schedule
          </button>
          <button className="flex items-center px-4 py-2 bg-[#0E2340] text-gray-300 rounded-lg hover:bg-[#1A3356]">
            <FilterIcon size={18} className="mr-2" />
            Filter
          </button>
        </div>
      </div>
      <div className="grid gap-4">
        {matches.map((match) => (
          <div
            key={match.id}
            className="bg-[#0E2340] rounded-lg overflow-hidden border border-[#1A3356] hover:border-[#28B6CE] transition-colors duration-200 p-6"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <div className="text-sm text-gray-400 mb-2">{match.series}</div>
                <div className="text-xs text-gray-500">{match.venue}</div>
              </div>
              <div className="flex items-center">
                {match.status === 'LIVE' && (
                  <span className="inline-block w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></span>
                )}
                <span className="text-sm text-red-400">{match.status}</span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-1">
                <div className="font-semibold mb-1">{match.team1.name}</div>
                <div className="text-2xl font-bold text-white">
                  {match.team1.score}
                </div>
                <div className="text-sm text-gray-400">{match.team1.overs}</div>
              </div>
              <div className="col-span-1 flex items-center justify-center">
                <div className="text-sm text-gray-400">vs</div>
              </div>
              <div className="col-span-1 text-right">
                <div className="font-semibold mb-1">{match.team2.name}</div>
                <div className="text-2xl font-bold text-white">
                  {match.team2.score}
                </div>
                <div className="text-sm text-gray-400">{match.team2.overs}</div>
              </div>
            </div>
            <div className="mt-4 text-sm text-[#28B6CE]">
              {match.statusDetail}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
