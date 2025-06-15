import React, { useEffect, useState } from 'react'
import { ChevronRightIcon } from 'lucide-react'

export const LiveScores = () => {
  const [liveMatches, setLiveMatches] = useState([])
  const [showAll, setShowAll] = useState(false)
  const [loading, setLoading] = useState(true)

  const API_KEY = '55bb79e6-581f-4301-9781-9cfac9bb69a7'
  const API_URL = `https://api.cricapi.com/v1/currentMatches?apikey=${API_KEY}&offset=0`

  useEffect(() => {
    const fetchLiveScores = async () => {
      try {
        const response = await fetch(API_URL)
        const data = await response.json()
        if (data.status === 'success' && Array.isArray(data.data)) {
          setLiveMatches(data.data)
        }
      } catch (error) {
        console.error('Failed to fetch live scores:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchLiveScores()
    const interval = setInterval(fetchLiveScores, 60000)
    return () => clearInterval(interval)
  }, [])

  const visibleMatches = showAll ? liveMatches : liveMatches.slice(0, 6)

  const getFlag = (team) => {
    const countryName = team?.name?.toLowerCase() || ''
    const map = {
      india: 'in',
      pakistan: 'pk',
      australia: 'au',
      england: 'gb',
      bangladesh: 'bd',
      'new zealand': 'nz',
      afghanistan: 'af',
      'sri lanka': 'lk',
      'south africa': 'za',
      zimbabwe: 'zw',
      ireland: 'ie',
      netherlands: 'nl',
      'west indies': 'jm',
      scotland: 'gb-sct',
      namibia: 'na',
      uae: 'ae',
      nepal: 'np',
      oman: 'om',
      usa: 'us',
    }

    const match = Object.entries(map).find(([name]) =>
      countryName.includes(name)
    )
    const code = match ? match[1] : null

    return code
      ? `https://flagcdn.com/w40/${code}.png`
      : 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Gray_flag_icon.svg/640px-Gray_flag_icon.svg.png'
  }

  return (
    <section className="min-h-screen w-full bg-[#0A1929] py-12 px-6 md:px-16">

      <div className="mb-10 flex justify-between items-center">
        <h2 className="text-3xl font-bold text-[#0E2340]">Live Scores</h2>
        <a
          href="#"
          className="text-[#28B6CE] flex items-center text-sm hover:underline"
        >
          View All <ChevronRightIcon size={16} className="ml-1" />
        </a>
      </div>

      {loading ? (
        <p className="text-gray-500">Loading live scores...</p>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleMatches.map((match, index) => (
              <div
                key={match.id || index}
                className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow hover:shadow-lg transition-all"
              >
                <div className="p-6">
                  <div className="text-xs text-gray-500 mb-4 font-medium">{match.name}</div>

                  {/* Team 1 */}
                  <div className="flex justify-between items-center mb-3">
                    <div className="flex items-center space-x-2">
                      <img
                        src={getFlag(match.teamInfo?.[0])}
                        alt="flag"
                        className="w-6 h-4 rounded-sm border"
                      />
                      <span className="text-sm font-semibold text-gray-800">
                        {match.teamInfo?.[0]?.name}
                      </span>
                    </div>
                    <div className="text-right text-gray-900 font-bold">
                      {match.score?.[0]?.r}/{match.score?.[0]?.w}
                      <span className="text-gray-400 text-sm ml-1">
                        ({match.score?.[0]?.o} ov)
                      </span>
                    </div>
                  </div>

                  {/* Team 2 */}
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center space-x-2">
                      <img
                        src={getFlag(match.teamInfo?.[1])}
                        alt="flag"
                        className="w-6 h-4 rounded-sm border"
                      />
                      <span className="text-sm font-semibold text-gray-800">
                        {match.teamInfo?.[1]?.name}
                      </span>
                    </div>
                    <div className="text-right text-gray-900 font-bold">
                      {match.score?.[1]?.r}/{match.score?.[1]?.w}
                      <span className="text-gray-400 text-sm ml-1">
                        ({match.score?.[1]?.o} ov)
                      </span>
                    </div>
                  </div>

                  <div className="text-sm text-gray-600">
                    {match.status || 'Match info not available'}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Show More / Less */}
          {liveMatches.length > 6 && (
            <div className="text-center mt-10">
              <button
                onClick={() => setShowAll(!showAll)}
                className="bg-[#28B6CE] hover:bg-[#1A97AF] text-white px-6 py-2 rounded-md shadow transition"
              >
                {showAll ? 'Show Less' : 'Show More'}
              </button>
            </div>
          )}
        </>
      )}
    </section>
  )
}
