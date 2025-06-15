import React from 'react';

const teamData = {
  test: [
    { rank: 1, team: 'Australia', rating: 123, flag: 'au' },
    { rank: 2, team: 'South Africa', rating: 114, flag: 'za' },
    { rank: 3, team: 'England', rating: 113, flag: 'gb' },
    { rank: 4, team: 'India', rating: 105, flag: 'in' },
    { rank: 5, team: 'New Zealand', rating: 95, flag: 'nz' },
  ],
  odi: [
    { rank: 1, team: 'India', rating: 124, flag: 'in' },
    { rank: 2, team: 'New Zealand', rating: 109, flag: 'nz' },
    { rank: 3, team: 'Australia', rating: 109, flag: 'au' },
    { rank: 4, team: 'Sri Lanka', rating: 104, flag: 'lk' },
    { rank: 5, team: 'Pakistan', rating: 104, flag: 'pk' },
  ],
  t20: [
    { rank: 1, team: 'India', rating: 271, flag: 'in' },
    { rank: 2, team: 'Australia', rating: 262, flag: 'au' },
    { rank: 3, team: 'England', rating: 254, flag: 'gb' },
    { rank: 4, team: 'New Zealand', rating: 249, flag: 'nz' },
    { rank: 5, team: 'West Indies', rating: 246, flag: 'jm' },
  ],
};

const getFlag = (code) =>
  `https://flagcdn.com/w40/${code}.png`;

export function PointTable() {
  return (
    <section className="py-10 px-4 md:px-16 bg-[#0A1929]">
      <h2 className="text-3xl font-bold text-white text-center mb-10">
        MEN'S TEAM RANKINGS
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Ranking Card */}
        {[
          { title: 'TEST - TEAM RANKINGS', color: 'border-green-500', data: teamData.test },
          { title: 'ODI - TEAM RANKINGS', color: 'border-cyan-500', data: teamData.odi },
          { title: 'T20 - TEAM RANKINGS', color: 'border-pink-500', data: teamData.t20 },
        ].map((section, index) => (
          <div key={index} className="bg-white rounded-lg shadow border">
            <div className={`border-b-2 ${section.color} p-4 text-lg font-semibold text-[#0E2340]`}>
              {section.title}
            </div>
            <ul>
              {section.data.map((team) => (
                <li
                  key={`${section.title}-${team.rank}`}
                  className="flex items-center justify-between p-4 border-b text-[#0E2340]"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-6 font-bold">
                      {String(team.rank).padStart(2, '0')}
                    </span>
                    <img
                      src={getFlag(team.flag)}
                      alt={team.team}
                      className="w-6 h-4 rounded border"
                    />
                    <span className="font-bold">{team.team.toUpperCase()}</span>
                  </div>
                  <span className="font-bold">{team.rating}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
