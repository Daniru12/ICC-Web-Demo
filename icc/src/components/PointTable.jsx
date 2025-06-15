import React, { useState, useEffect } from 'react';

// Map team names (lowercase) to flag codes
const flagMap = {
  india: 'in',
  pakistan: 'pk',
  australia: 'au',
  england: 'gb',
  'south africa': 'za',
  'new zealand': 'nz',
  'west indies': 'jm',
  bangladesh: 'bd',
  srilanka: 'lk',
  afghanistan: 'af',
  ireland: 'ie',
  zimbabwe: 'zw',
  netherlands: 'nl',
  uae: 'ae',
  nepal: 'np',
  oman: 'om',
  scotland: 'gb-sct',
  namibia: 'na',
  usa: 'us',
};

const getFlagUrl = (teamName) => {
  const code = flagMap[teamName.toLowerCase()] || null;
  return code
    ? `https://flagcdn.com/w20/${code}.png`
    : 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Gray_flag_icon.svg/640px-Gray_flag_icon.svg.png';
};

export function PointTable() {
  const [activeTab, setActiveTab] = useState('t20');
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(false);

  const RAPID_API_KEY = '37c29307f7msh430440e092d8dc4p1c2922jsn7ba698cd03b3';
  const RAPID_API_HOST = 'unofficial-cricbuzz.p.rapidapi.com';

  useEffect(() => {
    const fetchRankings = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `https://${RAPID_API_HOST}/stats/get-icc-rankings?category=team&formatType=${activeTab}&isWomen=0`,
          {
            method: 'GET',
            headers: {
              'X-RapidAPI-Key': RAPID_API_KEY,
              'X-RapidAPI-Host': RAPID_API_HOST,
            },
          }
        );
        const { rank } = await res.json();
        const parsed = rank.map(item => ({
          rank: parseInt(item.rank),
          team: item.name,
          matches: parseInt(item.matches),
          points: parseInt(item.points),
          rating: parseInt(item.rating),
        }));
        setTeams(parsed);
      } catch (err) {
        console.error('Fetch failed:', err);
        setTeams([]);
      } finally {
        setLoading(false);
      }
    };
    fetchRankings();
  }, [activeTab]);

  return (
    <section className="mb-10 px-6 md:px-16">
      <h2 className="text-2xl font-bold text-white mb-6">ICC Team Rankings</h2>

      {/* Format Tabs */}
      <div className="mb-6 flex">
        {['t20', 'odi', 'test'].map(type => (
          <button
            key={type}
            onClick={() => setActiveTab(type)}
            className={`px-6 py-3 font-medium ${
              activeTab === type
                ? 'bg-[#28B6CE] text-white'
                : 'bg-[#0E2340] text-gray-300 hover:bg-[#1A3356]'
            } ${
              type === 't20'
                ? 'rounded-tl-lg rounded-bl-lg'
                : type === 'test'
                ? 'rounded-tr-lg rounded-br-lg'
                : ''
            } transition-colors duration-200`}
          >
            {type.toUpperCase()}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="text-gray-300">Loading rankings...</div>
      ) : (
        <div className="bg-[#0E2340] rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-[#061325]">
                  {['Rank', 'Team', 'Matches', 'Points', 'Rating'].map(col => (
                    <th
                      key={col}
                      className="px-4 py-3 text-left text-sm font-semibold text-gray-300"
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {teams.map(team => (
                  <tr
                    key={team.rank}
                    className="border-b border-[#1A3356] hover:bg-[#1A3356] transition"
                  >
                    <td className="px-4 py-3 text-sm">{team.rank}</td>
                    <td className="px-4 py-3 inline-flex items-center">
                      <img
                        src={getFlagUrl(team.team)}
                        alt={`${team.team} flag`}
                        className="w-5 h-3 mr-2 object-cover border"
                      />
                      <span className="font-medium text-sm text-gray-200">
                        {team.team}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm">{team.matches}</td>
                    <td className="px-4 py-3 text-sm">{team.points}</td>
                    <td className="px-4 py-3 text-sm font-bold">{team.rating}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-4 text-xs text-gray-400 border-t border-[#1A3356]">
            Last updated: {new Date().toLocaleDateString()}
          </div>
        </div>
      )}
    </section>
  );
}
