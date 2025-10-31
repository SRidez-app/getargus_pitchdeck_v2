'use client';

import SolutionsSlide from "../Slides/SolutionsSlide";


import { useSlideNavigation } from '@/app/Components/SlideNavigation';

export default function SolutionsSlidePage() {
  const { onNext, onPrevious } = useSlideNavigation({
    nextSlide: '/tam',
    previousSlide: '/crash-detection',
  });

  return <SolutionsSlide onNext={onNext} onPrevious={onPrevious} />;
}