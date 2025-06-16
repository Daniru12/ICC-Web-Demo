import React, { useState } from 'react';

export const Videos = () => {
  const videos = [
    {
      id: 1,
      title: "ICC World Cup 2023 Final Highlights",
      youtubeId: "YqKYpgZ9FWU",
      link: "https://youtu.be/YqKYpgZ9FWU?si=NalJD__yVrXcvGVO",
      duration: "12:45",
      views: "15.2M",
      date: "2023-11-19",
      category: "Highlights"
    },
    {
      id: 2,
      title: "Best Catches of T20 World Cup 2024",
      youtubeId: "4iiLuQVMs-w",
      link: "https://www.youtube.com/watch?v=4iiLuQVMs-w",
      duration: "08:32",
      views: "9.7M",
      date: "2022-11-13",
      category: "Fielding"
    },
     {
      id: 3,
      title: "Lasith Malinga, the king of yorkers",
      youtubeId: "2EkYXd3IMgY",
      link: "https://www.youtube.com/watch?v=2EkYXd3IMgY",
      duration: "03:45",
      views: "50.3M",
      date: "2011-04-02",
      category: "Moments"
    },
    {
      id: 4,
      title: "Rohit Sharma Hits 140! vs Pakistan - ICC Cricket World Cup 2019",
      youtubeId: "AFEZzf9_EHk",
      link: "https://www.youtube.com/watch?v=AFEZzf9_EHk",
      duration: "15:20",
      views: "32.1M",
      date: "2022-10-23",
      category: "Batting"
    },
   
    {
      id: 5,
      title: "Glenn Maxwell produces one of the greatest ODI knocks of all-time | CWC23",
      youtubeId: "VQpTVVsNHQs",
      link: "https://www.youtube.com/watch?v=VQpTVVsNHQs",
      duration: "10:01",
      views: "21.9M",
      date: "2005-03-22",
      category: "Legends"
    },
    {
      id: 6,
      title: "Pakistan v Sri Lanka | Whatever It Takes Preview | WT20WC 2024",
      youtubeId: "HeprtXM3xuQ",
      link: "https://www.youtube.com/watch?v=HeprtXM3xuQ",
      duration: "09:14",
      views: "11.5M",
      date: "2021-06-15",
      category: "Bowling"
    }
  ];

  const categories = ["All", "Highlights", "Batting", "Bowling", "Fielding", "Moments", "Legends"];
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <div className="min-h-screen p-4 md:p-8 bg-gradient-to-br from-gray-900 via-slate-900 to-black">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-2 text-3xl font-bold text-white">Cricket Videos</h1>
        <p className="mb-8 text-gray-400">Watch the best moments from international cricket</p>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Video Thumbnails Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {videos
            .filter(video => activeCategory === "All" || video.category === activeCategory)
            .map((video) => (
              <a
                key={video.id}
                href={video.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-lg shadow-lg transition-transform hover:scale-[1.02] block"
              >
                <div className="relative">
                  <img
                    src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                    alt={video.title}
                    className="object-cover w-full h-48 rounded-t-lg"
                  />
                  <div className="absolute px-2 py-1 text-xs text-white rounded bottom-2 right-2 bg-black/80">
                    {video.duration}
                  </div>
                </div>
                <div className="p-4 bg-gray-800 rounded-b-lg">
                  <h3 className="font-medium text-white hover:underline line-clamp-2">
                    {video.title}
                  </h3>
                  <div className="flex justify-between mt-2 text-xs text-gray-400">
                    <span>{video.views} views</span>
                    <span>{new Date(video.date).toLocaleDateString()}</span>
                  </div>
                </div>
              </a>
            ))}
        </div>
      </div>
    </div>
  );
};
