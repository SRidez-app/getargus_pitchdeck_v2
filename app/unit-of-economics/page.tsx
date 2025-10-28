'use client';

import UnitEconomicsSlide from '../Slides/UnitEconomicsSlide';
import { useSlideNavigation } from '@/app/Components/SlideNavigation';

export default function UnitEconomicsPage() {
  const { onNext, onPrevious } = useSlideNavigation({
    nextSlide: '/team-overview',
    previousSlide: '/revenue',
  });

  return <UnitEconomicsSlide onNext={onNext} onPrevious={onPrevious} />;
}