'use client';

import RoadmapSlide from '../Slides/RoadmapSlide';
import { useSlideNavigation } from '@/app/Components/SlideNavigation';

export default function RoadmapSlidePage() {
  const { onNext, onPrevious } = useSlideNavigation({
    nextSlide: '/why-argus-stands-alone',
previousSlide: '/camera-acquisition',
  });

  return <RoadmapSlide onNext={onNext} onPrevious={onPrevious} />;
}