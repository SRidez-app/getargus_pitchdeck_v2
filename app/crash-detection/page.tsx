'use client';

import CrashDetectionSlide from '@/app/Slides/CrashDetectionSlide';
import { useSlideNavigation } from '@/app/Components/SlideNavigation';

export default function CrashDetectionPage() {
  const { onNext, onPrevious } = useSlideNavigation({
    nextSlide: '/tam',
    previousSlide: '/breadth-of-impact',
  });

  return <CrashDetectionSlide onNext={onNext} onPrevious={onPrevious} />;
}