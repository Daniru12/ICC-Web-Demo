import React from 'react'
import {
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  YoutubeIcon,
} from 'lucide-react'
export const Footer = () => {
  return (
    <footer className="bg-[#061325] pt-10 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <h2 className="text-[#28B6CE] text-xl font-bold mr-2">ICC</h2>
              <span className="text-white font-semibold">Cricket</span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              The official website for all ICC cricket coverage with live
              scores, fixtures, results, rankings, news, and features for
              international test, ODI and T20 matches.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#28B6CE]">
                <FacebookIcon size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#28B6CE]">
                <TwitterIcon size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#28B6CE]">
                <InstagramIcon size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#28B6CE]">
                <YoutubeIcon size={20} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#28B6CE] text-sm"
                >
                  Live Scores
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#28B6CE] text-sm"
                >
                  ICC Rankings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#28B6CE] text-sm"
                >
                  Future Tours
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#28B6CE] text-sm"
                >
                  ICC Events
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#28B6CE] text-sm"
                >
                  News
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#28B6CE] text-sm"
                >
                  Videos
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">ICC Tournaments</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#28B6CE] text-sm"
                >
                  Men's Cricket World Cup
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#28B6CE] text-sm"
                >
                  Women's Cricket World Cup
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#28B6CE] text-sm"
                >
                  Men's T20 World Cup
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#28B6CE] text-sm"
                >
                  Women's T20 World Cup
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#28B6CE] text-sm"
                >
                  World Test Championship
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#28B6CE] text-sm"
                >
                  Champions Trophy
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">More</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#28B6CE] text-sm"
                >
                  ICC Teams
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#28B6CE] text-sm"
                >
                  ICC Hall of Fame
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#28B6CE] text-sm"
                >
                  ICC Awards
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#28B6CE] text-sm"
                >
                  ICC Match Officials
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#28B6CE] text-sm"
                >
                  About ICC
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#28B6CE] text-sm"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-6 border-t border-[#1A3356] text-center">
          <p className="text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} International Cricket Council. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
