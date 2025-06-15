import React from 'react'
import { ChevronRightIcon } from 'lucide-react'
export const LiveScores = () => {
  const liveMatches = [
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
    },
    {
      id: 2,
      series: "ICC Women's T20 Series",
      team1: {
        name: 'Australia',
        score: '164/5',
        overs: '(20)',
      },
      team2: {
        name: 'India',
        score: '112/3',
        overs: '(14.2)',
      },
      status: 'LIVE',
      statusDetail: 'India need 53 runs in 34 balls',
    },
    {
      id: 3,
      series: 'Test Series',
      team1: {
        name: 'South Africa',
        score: '342 & 189/4',
        overs: '(58)',
      },
      team2: {
        name: 'Pakistan',
        score: '298',
        overs: '(92.1)',
      },
      status: 'Day 3',
      statusDetail: 'South Africa lead by 233 runs',
    },
  ]
  return (
    <section className="mb-10">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-white">Live Scores</h2>
        <a
          href="#"
          className="text-[#28B6CE] flex items-center text-sm hover:underline"
        >
          View All <ChevronRightIcon size={16} className="ml-1" />
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {liveMatches.map((match) => (
          <div
            key={match.id}
            className="bg-[#0E2340] rounded-lg overflow-hidden border border-[#1A3356] hover:border-[#28B6CE] transition-colors duration-200"
          >
            <div className="p-4">
              <div className="text-xs text-gray-400 mb-3">{match.series}</div>
              <div className="flex justify-between items-center mb-3">
                <div className="font-semibold">{match.team1.name}</div>
                <div className="font-bold">
                  {match.team1.score}{' '}
                  <span className="text-gray-400 text-sm">
                    {match.team1.overs}
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-center mb-4">
                <div className="font-semibold">{match.team2.name}</div>
                <div className="font-bold">
                  {match.team2.score}{' '}
                  <span className="text-gray-400 text-sm">
                    {match.team2.overs}
                  </span>
                </div>
              </div>
              <div className="flex items-center">
                {match.status === 'LIVE' && (
                  <span className="inline-block w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></span>
                )}
                <span
                  className={`text-sm ${match.status === 'LIVE' ? 'text-red-400' : 'text-gray-400'}`}
                >
                  {match.statusDetail}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
