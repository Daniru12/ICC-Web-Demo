import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { LiveScores } from '../components/LiveScores';
import { PointTable } from '../components/PointTable';
import { NewsSection } from '../components/NewSection';
import { Gallery } from '../components/Gallery';

export function Home() {
  return (
    <div>
      <HeroSection />
      <LiveScores />
      <PointTable />
      <NewsSection />
      <Gallery />
    </div>
  );
}
