'use client';
import ProblemSlide from '@/app/Slides/ProblemSlide';
import { useSlideNavigation } from '@/app/Components/SlideNavigation';

export default function ProblemPage() {
  const { onNext, onPrevious } = useSlideNavigation({
    nextSlide: '/breadth-of-impact',
    previousSlide: '/title',
  });

  return <ProblemSlide onNext={onNext} onPrevious={onPrevious} />;
}