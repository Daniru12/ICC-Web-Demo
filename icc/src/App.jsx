import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { LiveScores } from './pages/LiveScores';
import { Rankings } from './pages/Rankings';
import { News } from './pages/News';
import { Photos } from './pages/Photos';
import { Videos } from './pages/Videos';

export function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#0A1929] text-gray-100">
        <Header />
        <main className="flex-grow w-full "
>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/live-scores" element={<LiveScores />} />
            <Route path="/rankings" element={<Rankings />} />
            <Route path="/news" element={<News />} />
            <Route path="/photos" element={<Photos />} />
            <Route path="/videos" element={<Videos />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
