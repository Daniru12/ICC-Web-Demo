import React, { useEffect, useState } from 'react'
import { ChevronRight as ChevronRightIcon } from 'lucide-react'

export const LiveScores = () => {
  const [liveMatches, setLiveMatches] = useState([])
  const [loading, setLoading] = useState(true)
  const [apiFailed, setApiFailed] = useState(false)

  const API_KEY = '55bb79e6-581f-4301-9781-9cfac9bb69a7'
  const API_URL = `https://api.cricapi.com/v1/currentMatches?apikey=${API_KEY}&offset=0`

  const demoMatches = [
    {
      id: 1,
      name: 'World T20 Qualifier · T20 2 of 12',
      matchStarted: false,
      teamInfo: [{ name: 'Cayman Islands' }, { name: 'Bahamas' }],
      score: [],
      status: 'Starts at 01:00',
    },
    {
      id: 2,
      name: 'T20 8 of 8 (CAM leads 5-1)',
      matchStarted: false,
      teamInfo: [{ name: 'Indonesia' }, { name: 'Cambodia' }],
      score: [],
      status: 'Starts at 07:00',
    },
    {
      id: 3,
      name: 'One-off Tournaments · T20 2 of 6',
      matchStarted: false,
      teamInfo: [{ name: 'Nepal' }, { name: 'Netherlands' }],
      score: [],
      status: 'Starts at 19:30',
    },
    {
      id: 4,
      name: 'World T20 Qualifier · T20 3 of 12',
      matchStarted: false,
      teamInfo: [{ name: 'Canada' }, { name: 'Cayman Islands' }],
      score: [],
      status: 'Starts at 20:00',
    },
    {
      id: 5,
      name: 'World T20 Qualifier · T20 4 of 12',
      matchStarted: false,
      teamInfo: [{ name: 'Bermuda' }, { name: 'Bahamas' }],
      score: [],
      status: 'Starts at 01:00',
    },
    {
      id: 6,
      name: 'Test 1 of 2',
      matchStarted: false,
      teamInfo: [{ name: 'Sri Lanka' }, { name: 'Bangladesh' }],
      score: [],
      status: 'Starts at 10:00',
    },
  ]

  useEffect(() => {
    const fetchLiveScores = async () => {
      try {
        const response = await fetch(API_URL)
        const data = await response.json()
        console.log('Fetched Data:', data)

        if (data.status === 'success' && Array.isArray(data.data)) {
          setLiveMatches(data.data)
        } else {
          setApiFailed(true)
          setLiveMatches(demoMatches)
        }
      } catch (error) {
        console.error('Fetch error:', error)
        setApiFailed(true)
        setLiveMatches(demoMatches)
      } finally {
        setLoading(false)
      }
    }

    fetchLiveScores()
  }, [])

  const liveNow = liveMatches.filter(m => m.matchStarted)
  const matchesToShow = liveNow.length > 0 && !apiFailed ? liveNow : liveMatches

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
      bermuda: 'bm',
      canada: 'ca',
      bahamas: 'bs',
      'cayman islands': 'ky',
      indonesia: 'id',
      cambodia: 'kh',
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
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between mb-12">
          <div className="relative">
            <h2 className="mb-2 text-4xl font-bold text-white md:text-5xl">
              {apiFailed ? 'Upcoming Matches' : 'Live Scores'}
            </h2>
            <div className="relative h-1 overflow-hidden bg-gray-700 rounded-full">
              <div className="absolute inset-0 bg-gradient-to-r from-[#28B6CE] via-[#42E0FF] to-[#28B6CE] rounded-full animate-pulse">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-ping"></div>
              </div>
              <div className="absolute top-0 left-0 w-16 h-full transform -translate-x-full bg-gradient-to-r from-transparent via-white to-transparent opacity-60 animate-bounce"></div>
            </div>
            <div className="flex items-center mt-3">
              <div className={`w-3 h-3 ${apiFailed ? 'bg-yellow-400' : 'bg-red-500'} rounded-full animate-pulse mr-2`}></div>
              <span className="text-sm font-medium text-gray-300">
                {apiFailed ? 'Showing fallback data' : 'LIVE UPDATES'}
              </span>
            </div>
          </div>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#28B6CE] mb-4"></div>
            <p className="text-lg text-gray-400">Loading live scores...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {matchesToShow.map((match, index) => (
              <div
                key={match.id || index}
                className="overflow-hidden transition-all duration-300 border shadow-xl bg-white/95 backdrop-blur-sm rounded-2xl border-white/20 hover:shadow-2xl hover:scale-105 hover:bg-white"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-xs font-semibold tracking-wide text-gray-600 uppercase">
                      {match.name}
                    </div>
                    {match.matchStarted && (
                      <div className="flex items-center">
                        <div className="w-2 h-2 mr-1 bg-red-500 rounded-full animate-pulse"></div>
                        <span className="text-xs font-bold text-red-500">LIVE</span>
                      </div>
                    )}
                  </div>

                  {[0, 1].map((i) => (
                    <div key={i} className="flex items-center justify-between p-3 mb-4 rounded-lg bg-gray-50">
                      <div className="flex items-center space-x-3">
                        <img
                          src={getFlag(match.teamInfo?.[i])}
                          alt="flag"
                          className="w-8 h-6 border border-gray-200 rounded-sm shadow-sm"
                        />
                        <span className="text-sm font-bold text-gray-800">
                          {match.teamInfo?.[i]?.name || `Team ${i + 1}`}
                        </span>
                      </div>
                      {!apiFailed && (
                        <div className="text-right">
                          <div className="text-lg font-bold text-gray-900">
                            {match.score?.[i]?.r || 0}/{match.score?.[i]?.w || 0}
                          </div>
                          <div className="text-xs text-gray-500">
                            ({match.score?.[i]?.o || 0} ov)
                          </div>
                        </div>
                      )}
                    </div>
                  ))}

                  <div className="pt-3 mt-4 border-t border-gray-200">
                    <div className="text-sm text-gray-700 font-medium text-center bg-[#28B6CE]/10 py-2 px-3 rounded-lg">
                      {match.status || 'Match info not available'}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
