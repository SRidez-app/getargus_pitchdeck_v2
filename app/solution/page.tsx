'use client';

import SolutionsSlide from "../Slides/SolutionsSlide";


import { useSlideNavigation } from '@/app/Components/SlideNavigation';

export default function SolutionsSlidePage() {
  const { onNext, onPrevious } = useSlideNavigation({
    nextSlide: '/crash-detection',
    previousSlide: '/breadth-of-impact',
  });

  return <SolutionsSlide onNext={onNext} onPrevious={onPrevious} />;
}