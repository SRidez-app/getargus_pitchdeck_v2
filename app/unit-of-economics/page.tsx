'use client';

import UnitEconomicsSlide from '../Slides/UnitEconomicsSlide';
import { useSlideNavigation } from '@/app/Components/SlideNavigation';

export default function UnitEconomicsPage() {
  const { onNext, onPrevious } = useSlideNavigation({
    nextSlide: '/revenue',
    previousSlide: '/traction',
  });

  return <UnitEconomicsSlide onNext={onNext} onPrevious={onPrevious} />;
}