import React from 'react'
import { ChevronRightIcon } from 'lucide-react'
export const Gallery = () => {
  const images = [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1580748141549-71748dbe0bdc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'England vs Australia - Ashes 2023',
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'India vs Pakistan - T20 World Cup',
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'New Zealand vs South Africa - ODI Series',
    },
    {
      id: 4,
      url: 'https://images.unsplash.com/photo-1584714268709-c3dd9c92b378?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: "Women's T20 World Cup Final",
    },
    {
      id: 5,
      url: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'ICC Champions Trophy',
    },
  ]
  return (
    <section className="mb-10">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-white">Latest Photos</h2>
        <a
          href="#"
          className="text-[#28B6CE] flex items-center text-sm hover:underline"
        >
          View Gallery <ChevronRightIcon size={16} className="ml-1" />
        </a>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {images.map((image) => (
          <div
            key={image.id}
            className="relative group rounded-lg overflow-hidden h-48 md:h-56"
          >
            <img
              src={image.url}
              alt={image.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
              <div className="p-3">
                <h3 className="text-sm font-medium text-white">
                  {image.title}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
export default Gallery