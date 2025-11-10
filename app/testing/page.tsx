'use client';

import RoadmapSlide from '../Slides/Testing';
import { useSlideNavigation } from '@/app/Components/SlideNavigation';

export default function TestingPage() {
  const { onNext, onPrevious } = useSlideNavigation({
    nextSlide: '/revenue-projection',
    previousSlide: '/timeline',
  });

  return <RoadmapSlide onNext={onNext} onPrevious={onPrevious} />;
}
