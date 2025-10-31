'use client';


import CompetitorSlide from '../Slides/CompetitorSlide';
import { useSlideNavigation } from '@/app/Components/SlideNavigation';

export default function WhyArgusStandsAlonePage() {
  const { onNext, onPrevious } = useSlideNavigation({
    nextSlide: '/revenue',
    previousSlide: '/why-argus-stands-alone',
  });

  return <CompetitorSlide onNext={onNext} onPrevious={onPrevious} />;
}