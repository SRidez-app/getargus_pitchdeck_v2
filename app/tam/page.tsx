'use client';

import TamSlide from '../Slides/TamSlide';
import { useSlideNavigation } from '@/app/Components/SlideNavigation';

export default function TamPage() {
  const { onNext, onPrevious } = useSlideNavigation({
    nextSlide: '/timeline',
    previousSlide: '/crash-detection',
  });

  return <TamSlide onNext={onNext} onPrevious={onPrevious} />;
}