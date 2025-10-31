'use client';

import RevenueProjectionSlide from '../Slides/RevenueSlide';
import { useSlideNavigation } from '@/app/Components/SlideNavigation';

export default function RevenuePage() {
  const { onNext, onPrevious } = useSlideNavigation({
    nextSlide: '/team-overview',
    previousSlide: '/unit-of-economics',
  });

  return <RevenueProjectionSlide onNext={onNext} onPrevious={onPrevious} />;
}