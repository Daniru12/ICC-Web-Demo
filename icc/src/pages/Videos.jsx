import React, { useState } from 'react';

export const Videos = () => {
  // Sample cricket video data with YouTube IDs
  const videos = [
    {
      id: 1,
      title: "ICC World Cup 2023 Final Highlights",
      youtubeId: "7-7oy7nD-5k",
      duration: "12:45",
      views: "15.2M",
      date: "2023-11-19",
      category: "Highlights"
    },
    {
      id: 2,
      title: "Best Catches of T20 World Cup 2022",
      youtubeId: "5Z6vQeQk3L4",
      duration: "08:32",
      views: "9.7M",
      date: "2022-11-13",
      category: "Fielding"
    },
    {
      id: 3,
      title: "Kohli's 82* vs Pakistan - T20 WC 2022",
      youtubeId: "0S4qZx0XKE0",
      duration: "15:20",
      views: "32.1M",
      date: "2022-10-23",
      category: "Batting"
    },
    // Add more videos as needed...
  ];

  const categories = ["All", "Highlights", "Batting", "Bowling", "Fielding", "Moments", "Legends"];
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openVideoModal = (video) => {
    setSelectedVideo(video);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };

  const closeVideoModal = () => {
    setIsModalOpen(false);
    setSelectedVideo(null);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };

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

        {/* Video Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {videos
            .filter(video => activeCategory === "All" || video.category === activeCategory)
            .map((video) => (
              <div 
                key={video.id} 
                className="group relative overflow-hidden rounded-lg shadow-lg transition-transform hover:scale-[1.02] cursor-pointer"
                onClick={() => openVideoModal(video)}
              >
                <div className="relative">
                  <img
                    src={`https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`}
                    alt={video.title}
                    className="object-cover w-full h-48 rounded-t-lg"
                  />
                  <div className="absolute px-2 py-1 text-xs text-white rounded bottom-2 right-2 bg-black/80">
                    {video.duration}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center transition-colors bg-black/20 group-hover:bg-black/40">
                    <div className="flex items-center justify-center w-16 h-16 transition-opacity bg-blue-600 rounded-full opacity-0 group-hover:opacity-100">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-gray-800 rounded-b-lg">
                  <h3 className="font-medium text-white line-clamp-2">{video.title}</h3>
                  <div className="flex justify-between mt-2 text-xs text-gray-400">
                    <span>{video.views} views</span>
                    <span>{new Date(video.date).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* View More Button */}
        <div className="mt-10 text-center">
          <button className="px-6 py-3 font-medium text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700">
            Load More Videos
          </button>
        </div>

        {/* Video Modal */}
        {isModalOpen && selectedVideo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90">
            <div className="relative w-full max-w-4xl">
              <button 
                onClick={closeVideoModal}
                className="absolute right-0 z-10 text-white -top-10 hover:text-gray-300"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <div className="w-full aspect-w-16 aspect-h-9">
                <iframe
                  src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}?autoplay=1`}
                  title={selectedVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-[500px] rounded-lg"
                ></iframe>
              </div>
              
              <div className="mt-4 text-white">
                <h3 className="text-xl font-bold">{selectedVideo.title}</h3>
                <div className="flex justify-between mt-2 text-gray-300">
                  <span>{selectedVideo.views} views</span>
                  <span>{new Date(selectedVideo.date).toLocaleDateString()}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};