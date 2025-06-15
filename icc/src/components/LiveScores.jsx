import React, { useEffect, useState } from 'react'
import { ChevronRight as ChevronRightIcon } from 'lucide-react'

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
        console.log('Fetched Data:', data)

        if (data.status === 'success' && Array.isArray(data.data)) {
          setLiveMatches(data.data)
        } else {
          console.warn('Unexpected API structure or error status')
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

  const liveNow = liveMatches.filter(m => m.matchStarted)
  const fallbackMatches = liveMatches.slice(-6).reverse()
  const matchesToShow = liveNow.length > 0 ? (showAll ? liveNow : liveNow.slice(0, 6)) : fallbackMatches

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
    <section className="min-h-screen w-full bg-gradient-to-br from-[#0A1929] to-[#1A2332] py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 flex justify-between items-center">
          <div className="relative">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
              Live Scores
            </h2>
            <div className="relative h-1 bg-gray-700 rounded-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#28B6CE] via-[#42E0FF] to-[#28B6CE] rounded-full animate-pulse">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-ping"></div>
              </div>
              <div className="absolute top-0 left-0 h-full w-16 bg-gradient-to-r from-transparent via-white to-transparent opacity-60 animate-bounce transform -translate-x-full"></div>
            </div>
            <div className="flex items-center mt-3">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse mr-2"></div>
              <span className="text-sm text-gray-300 font-medium">
                {liveNow.length > 0 ? 'LIVE UPDATES' : 'RECENT MATCHES'}
              </span>
            </div>
          </div>
          <a
            href="#"
            className="text-[#28B6CE] flex items-center text-sm hover:text-[#42E0FF] transition-colors duration-300 group"
          >
            View All
            <ChevronRightIcon size={16} className="ml-1 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#28B6CE] mb-4"></div>
            <p className="text-gray-400 text-lg">Loading live scores...</p>
          </div>
        ) : liveMatches.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">
              No match data fetched. Please check your API key or try again later.
            </p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {matchesToShow.map((match, index) => (
                <div
                  key={match.id || index}
                  className="bg-white/95 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-white"
                >
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <div className="text-xs text-gray-600 font-semibold uppercase tracking-wide">
                        {match.name}
                      </div>
                      {match.matchStarted && (
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse mr-1"></div>
                          <span className="text-xs text-red-500 font-bold">LIVE</span>
                        </div>
                      )}
                    </div>

                    {[0, 1].map((i) => (
                      <div key={i} className="flex justify-between items-center mb-4 p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <img
                            src={getFlag(match.teamInfo?.[i])}
                            alt="flag"
                            className="w-8 h-6 rounded-sm border border-gray-200 shadow-sm"
                            onError={(e) => {
                              e.target.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Gray_flag_icon.svg/640px-Gray_flag_icon.svg.png'
                            }}
                          />
                          <span className="text-sm font-bold text-gray-800">
                            {match.teamInfo?.[i]?.name || `Team ${i + 1}`}
                          </span>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-gray-900">
                            {match.score?.[i]?.r || 0}/{match.score?.[i]?.w || 0}
                          </div>
                          <div className="text-xs text-gray-500">
                            ({match.score?.[i]?.o || 0} ov)
                          </div>
                        </div>
                      </div>
                    ))}

                    <div className="mt-4 pt-3 border-t border-gray-200">
                      <div className="text-sm text-gray-700 font-medium text-center bg-[#28B6CE]/10 py-2 px-3 rounded-lg">
                        {match.status || 'Match info not available'}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {liveNow.length > 6 && (
              <div className="text-center mt-12">
                <button
                  onClick={() => setShowAll(!showAll)}
                  className="bg-gradient-to-r from-[#28B6CE] to-[#42E0FF] hover:from-[#1A97AF] hover:to-[#28B6CE] text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 font-semibold text-sm uppercase tracking-wide hover:scale-105"
                >
                  {showAll ? 'Show Less' : `Show More (${liveNow.length - 6} more)`}
                </button>
              </div>
            )}
          </>
        )}
      </div>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </section>
  )
}
