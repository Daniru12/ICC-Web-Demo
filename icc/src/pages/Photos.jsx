import React, { useState } from 'react';
import {
  Search, Filter, Grid, List, Heart, Share2, Download, X, ChevronLeft, ChevronRight, Play
} from 'lucide-react';

export const Photos = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [likedImages, setLikedImages] = useState(new Set());

  const photos = [
    {
      id: 1,
      src: 'https://i.postimg.cc/qvMwkGm7/image.png',
      title: 'Victory Celebration',
      category: 'matches',
      description: 'Team celebrating after winning the championship',
      likes: 245,
      date: '2024-03-15'
    },
    {
      id: 2,
      src: 'https://i.postimg.cc/854yNnht/image.png',
      title: 'Perfect Batting Stance',
      category: 'action',
      description: 'Capturing the perfect moment of a batting stroke',
      likes: 189,
      date: '2024-03-10'
    },
    {
      id: 3,
      src: 'https://i.postimg.cc/3J8Z3BRc/image.png',
      title: 'Team Spirit',
      category: 'team',
      description: 'Pre-match team huddle showing unity',
      likes: 156,
      date: '2024-03-08'
    },
    {
      id: 4,
      src: 'https://i.postimg.cc/mZYGvbzS/image.png',
      title: 'Cricket Stadium',
      category: 'venues',
      description: 'Beautiful aerial view of the cricket ground',
      likes: 203,
      date: '2024-03-05'
    },
    {
      id: 5,
      src: 'https://i.postimg.cc/gkBGYGdL/image.png',
      title: 'Wicket Keeper in Action',
      category: 'action',
      description: 'Lightning fast wicket keeping skills',
      likes: 178,
      date: '2024-03-12'
    },
    {
      id: 6,
      src: 'https://i.postimg.cc/bNQN97jZ/image.png',
      title: 'Training Session',
      category: 'training',
      description: 'Intense practice session preparation',
      likes: 134,
      date: '2024-03-07'
    },
    {
      id: 7,
      src: 'https://i.postimg.cc/Ls5z5ryb/image.png',
      title: 'Match Highlights',
      category: 'matches',
      description: 'Key moments from the final match',
      likes: 267,
      date: '2024-03-14'
    },
    {
      id: 8,
      src: 'https://i.postimg.cc/2Sc00dMg/image.png',
      title: 'Fan Support',
      category: 'fans',
      description: 'Incredible support from our loyal fans',
      likes: 198,
      date: '2024-03-13'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Photos', count: photos.length },
    { id: 'matches', name: 'Matches', count: photos.filter(p => p.category === 'matches').length },
    { id: 'action', name: 'Action', count: photos.filter(p => p.category === 'action').length },
    { id: 'team', name: 'Team', count: photos.filter(p => p.category === 'team').length },
    { id: 'training', name: 'Training', count: photos.filter(p => p.category === 'training').length },
    { id: 'venues', name: 'Venues', count: photos.filter(p => p.category === 'venues').length },
    { id: 'fans', name: 'Fans', count: photos.filter(p => p.category === 'fans').length }
  ];

  const filteredPhotos = photos.filter(photo => {
    const matchesCategory = selectedCategory === 'all' || photo.category === selectedCategory;
    const matchesSearch = photo.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         photo.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleLike = (photoId) => {
    const newLikedImages = new Set(likedImages);
    if (newLikedImages.has(photoId)) {
      newLikedImages.delete(photoId);
    } else {
      newLikedImages.add(photoId);
    }
    setLikedImages(newLikedImages);
  };

  const openLightbox = (photo) => {
    setSelectedImage(photo);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction) => {
    const currentIndex = filteredPhotos.findIndex(p => p.id === selectedImage.id);
    const newIndex = direction === 'next' 
      ? (currentIndex + 1) % filteredPhotos.length
      : (currentIndex - 1 + filteredPhotos.length) % filteredPhotos.length;
    setSelectedImage(filteredPhotos[newIndex]);
  };

  return (
    <div className="min-h-screen px-6 py-8 text-white bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Header */}
      <div className="mb-10 text-center">
        <h1 className="mb-2 text-5xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text">
          Cricket Photo Gallery
        </h1>
        <p className="text-lg text-gray-400">Relive the moments from the pitch</p>
      </div>

       {/* Controls */}
      <div className="p-6 mb-8 border bg-slate-800/50 backdrop-blur-sm rounded-xl border-slate-700">
        <div className="flex flex-col items-start justify-between gap-4 lg:flex-row lg:items-center">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute w-4 h-4 text-gray-400 transform -translate-y-1/2 left-3 top-1/2" />
            <input
              type="text"
              placeholder="Search photos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full py-2 pl-10 pr-4 text-white placeholder-gray-400 border rounded-lg bg-slate-700/50 border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            />
          </div>

          {/* View Mode */}
          <div className="flex items-center gap-2 p-1 rounded-lg bg-slate-700/50">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded ${viewMode === 'grid' ? 'bg-blue-500 text-white' : 'text-gray-400 hover:text-white'}`}
            >
              <Grid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('masonry')}
              className={`p-2 rounded ${viewMode === 'masonry' ? 'bg-blue-500 text-white' : 'text-gray-400 hover:text-white'}`}
            >
              <Filter className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded ${viewMode === 'list' ? 'bg-blue-500 text-white' : 'text-gray-400 hover:text-white'}`}
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 mt-4">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg'
                  : 'bg-slate-700/50 text-gray-300 hover:bg-slate-600/50 hover:text-white'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>
      </div>

      {/* Photo Grid */}
      {viewMode === 'grid' && (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredPhotos.map(photo => (
            <div key={photo.id} className="relative overflow-hidden transition-all duration-300 transform shadow-lg group bg-slate-800/30 rounded-xl hover:shadow-2xl hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="object-cover w-full h-48 transition-transform duration-300 cursor-pointer group-hover:scale-110"
                  onClick={() => openLightbox(photo)}
                />
                <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:opacity-100" />
                
                {/* Overlay Controls */}
                <div className="absolute flex gap-2 transition-opacity duration-300 opacity-0 top-3 right-3 group-hover:opacity-100">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleLike(photo.id);
                    }}
                    className={`p-2 rounded-full backdrop-blur-sm transition-colors ${
                      likedImages.has(photo.id) 
                        ? 'bg-red-500/80 text-white' 
                        : 'bg-black/40 text-white hover:bg-red-500/80'
                    }`}
                  >
                    <Heart className="w-4 h-4" fill={likedImages.has(photo.id) ? 'currentColor' : 'none'} />
                  </button>
                  <button className="p-2 text-white transition-colors rounded-full bg-black/40 hover:bg-blue-500/80 backdrop-blur-sm">
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>

                {/* Play Icon for Video-like Effect */}
                <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                  <div className="flex items-center justify-center w-16 h-16 transition-colors rounded-full cursor-pointer bg-white/20 backdrop-blur-sm hover:bg-white/30">
                    <Play className="w-6 h-6 ml-1 text-white" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="mb-1 font-semibold text-white transition-colors group-hover:text-blue-300">
                  {photo.title}
                </h3>
                <p className="mb-3 text-sm text-gray-400 line-clamp-2">{photo.description}</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">{photo.date}</span>
                  <div className="flex items-center gap-1 text-gray-400">
                    <Heart className="w-4 h-4" />
                    <span>{photo.likes}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Masonry Layout */}
      {viewMode === 'masonry' && (
        <div className="gap-6 space-y-6 columns-1 md:columns-2 lg:columns-3 xl:columns-4">
          {filteredPhotos.map(photo => (
            <div key={photo.id} className="relative mb-6 overflow-hidden transition-all duration-300 shadow-lg break-inside-avoid group bg-slate-800/30 rounded-xl hover:shadow-2xl">
              <div className="relative overflow-hidden">
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="object-cover w-full transition-transform duration-300 cursor-pointer group-hover:scale-105"
                  onClick={() => openLightbox(photo)}
                />
                <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:opacity-100" />
                
                <div className="absolute flex gap-2 transition-opacity duration-300 opacity-0 top-3 right-3 group-hover:opacity-100">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleLike(photo.id);
                    }}
                    className={`p-2 rounded-full backdrop-blur-sm transition-colors ${
                      likedImages.has(photo.id) 
                        ? 'bg-red-500/80 text-white' 
                        : 'bg-black/40 text-white hover:bg-red-500/80'
                    }`}
                  >
                    <Heart className="w-4 h-4" fill={likedImages.has(photo.id) ? 'currentColor' : 'none'} />
                  </button>
                </div>
              </div>

              <div className="p-4">
                <h3 className="mb-1 font-semibold text-white">{photo.title}</h3>
                <p className="mb-3 text-sm text-gray-400">{photo.description}</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">{photo.date}</span>
                  <div className="flex items-center gap-1 text-gray-400">
                    <Heart className="w-4 h-4" />
                    <span>{photo.likes}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* List View */}
      {viewMode === 'list' && (
        <div className="space-y-4">
          {filteredPhotos.map(photo => (
            <div key={photo.id} className="p-4 transition-all duration-300 border group bg-slate-800/30 rounded-xl hover:bg-slate-800/50 border-slate-700/50">
              <div className="flex gap-4">
                <div className="relative flex-shrink-0 overflow-hidden rounded-lg">
                  <img
                    src={photo.src}
                    alt={photo.title}
                    className="object-cover w-24 h-24 transition-transform duration-300 cursor-pointer hover:scale-110"
                    onClick={() => openLightbox(photo)}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="mb-1 text-lg font-semibold text-white">{photo.title}</h3>
                      <p className="mb-2 text-gray-400">{photo.description}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span>{photo.date}</span>
                        <div className="flex items-center gap-1">
                          <Heart className="w-4 h-4" />
                          <span>{photo.likes} likes</span>
                        </div>
                        <span className="px-2 py-1 text-blue-300 capitalize rounded bg-blue-500/20">
                          {photo.category}
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-2 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                      <button
                        onClick={() => toggleLike(photo.id)}
                        className={`p-2 rounded-full transition-colors ${
                          likedImages.has(photo.id) 
                            ? 'bg-red-500/20 text-red-400' 
                            : 'bg-slate-700/50 text-gray-400 hover:bg-red-500/20 hover:text-red-400'
                        }`}
                      >
                        <Heart className="w-4 h-4" fill={likedImages.has(photo.id) ? 'currentColor' : 'none'} />
                      </button>
                      <button className="p-2 text-gray-400 transition-colors rounded-full bg-slate-700/50 hover:bg-blue-500/20 hover:text-blue-400">
                        <Share2 className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-gray-400 transition-colors rounded-full bg-slate-700/50 hover:bg-green-500/20 hover:text-green-400">
                        <Download className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm">
          <div className="relative flex items-center justify-center max-w-6xl max-h-full">
            {/* Navigation Buttons */}
            <button
              onClick={() => navigateImage('prev')}
              className="absolute z-10 p-3 text-white transition-colors transform -translate-y-1/2 rounded-full left-4 top-1/2 bg-black/50 hover:bg-black/70"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => navigateImage('next')}
              className="absolute z-10 p-3 text-white transition-colors transform -translate-y-1/2 rounded-full right-4 top-1/2 bg-black/50 hover:bg-black/70"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute z-10 p-3 text-white transition-colors rounded-full top-4 right-4 bg-black/50 hover:bg-black/70"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Image */}
            <div className="relative">
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
              
              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 p-6 rounded-b-lg bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="mb-2 text-xl font-semibold text-white">{selectedImage.title}</h3>
                <p className="mb-3 text-gray-300">{selectedImage.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">{selectedImage.date}</span>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1 text-gray-400">
                      <Heart className="w-4 h-4" />
                      <span>{selectedImage.likes}</span>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => toggleLike(selectedImage.id)}
                        className={`p-2 rounded-full transition-colors ${
                          likedImages.has(selectedImage.id) 
                            ? 'bg-red-500/20 text-red-400' 
                            : 'bg-white/10 text-white hover:bg-red-500/20 hover:text-red-400'
                        }`}
                      >
                        <Heart className="w-4 h-4" fill={likedImages.has(selectedImage.id) ? 'currentColor' : 'none'} />
                      </button>
                      <button className="p-2 text-white transition-colors rounded-full bg-white/10 hover:bg-blue-500/20 hover:text-blue-400">
                        <Share2 className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-white transition-colors rounded-full bg-white/10 hover:bg-green-500/20 hover:text-green-400">
                        <Download className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* No Results */}
      {filteredPhotos.length === 0 && (
        <div className="py-16 text-center">
          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-slate-700/50">
            <Search className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="mb-2 text-xl font-semibold text-white">No photos found</h3>
          <p className="text-gray-400">Try adjusting your search or filter criteria</p>
        </div>
      )}
    </div>
  );
};
