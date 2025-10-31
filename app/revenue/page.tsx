'use client';

import RevenueProjectionSlide from '../Slides/RevenueSlide';
import { useSlideNavigation } from '@/app/Components/SlideNavigation';

export default function RevenuePage() {
  const { onNext, onPrevious } = useSlideNavigation({
    nextSlide: '/traction',
    previousSlide: '/why-argus-stands-alone',
  });

  return <RevenueProjectionSlide onNext={onNext} onPrevious={onPrevious} />;
}