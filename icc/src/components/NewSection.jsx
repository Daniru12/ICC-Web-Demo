import React from 'react'
import { ChevronRightIcon } from 'lucide-react'
export const NewsSection = () => {
  const news = [
    {
      id: 1,
      title: 'Rohit Sharma to lead India in upcoming West Indies tour',
      excerpt:
        'The BCCI has announced a full-strength squad for the upcoming tour with all senior players available.',
      category: 'Team News',
      time: '3 hours ago',
      image:
        'https://i.postimg.cc/g0HWvbk0/image.png',
    },
    {
      id: 2,
      title: "ICC announces schedule for Women's T20 World Cup 2025",
      excerpt:
        'The tournament will be hosted by Bangladesh with 10 teams competing for the trophy.',
      category: 'ICC',
      time: '6 hours ago',
      image:
        'https://i.postimg.cc/mkRVCKkT/image.png',
    },
    {
      id: 3,
      title: "England's Jofra Archer returns to training after injury layoff",
      excerpt:
        'The fast bowler has been out of action for over six months due to an elbow injury.',
      category: 'Players',
      time: '12 hours ago',
      image:
        'https://i.postimg.cc/52GhLNV1/image.png',
    },
    {
      id: 4,
      title: 'Australia retain top spot in Test rankings after Ashes triumph',
      excerpt:
        "Australia's dominant performance in the Ashes series has helped them maintain their position.",
      category: 'Rankings',
      time: '1 day ago',
      image:
        'https://i.postimg.cc/m2SC68Z6/image.png',
    },
  ]
  return (
     <section className="mb-10 py-10 px-4 md:px-16">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-white">Latest News</h2>
        <a
          href="#"
          className="text-[#28B6CE] flex items-center text-sm hover:underline"
        >
          More News <ChevronRightIcon size={16} className="ml-1" />
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {news.map((item) => (
          <div
            key={item.id}
            className="bg-[#0E2340] rounded-lg overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-200"
          >
            <div className="h-48 overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs bg-[#1A3356] text-[#28B6CE] px-2 py-1 rounded">
                  {item.category}
                </span>
                <span className="text-xs text-gray-400">{item.time}</span>
              </div>
              <h3 className="font-bold mb-2 line-clamp-2">{item.title}</h3>
              <p className="text-sm text-gray-300 line-clamp-3 mb-3">
                {item.excerpt}
              </p>
              <a href="#" className="text-[#28B6CE] text-sm hover:underline">
                Read more
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
