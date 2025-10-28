'use client';
import TheImpactSlide from '@/app/Slides/BreadthOfImpactSlide';
import { useSlideNavigation } from '@/app/Components/SlideNavigation';

export default function BreadthOfImpactPage() {
  const { onNext, onPrevious } = useSlideNavigation({
    nextSlide: '/crash-detection',
    previousSlide: '/problem',
  });

  return <TheImpactSlide onNext={onNext} onPrevious={onPrevious} />;
}