'use client';


import CompetitorSlide from '../Slides/CompetitorSlide';
import { useSlideNavigation } from '@/app/Components/SlideNavigation';

export default function WhyArgusStandsAlonePage() {
  const { onNext, onPrevious } = useSlideNavigation({
    nextSlide: '/traction',
    previousSlide: '/roadmap',
  });

  return <CompetitorSlide onNext={onNext} onPrevious={onPrevious} />;
}