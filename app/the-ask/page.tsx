'use client';

import TheAskSlide from '../Slides/TheAskSlide';
import { useSlideNavigation } from '@/app/Components/SlideNavigation';

export default function TheAskPage() {
  const { onNext, onPrevious } = useSlideNavigation({
    nextSlide: '/contact-us',
    previousSlide: '/team-overview',
  });

  return <TheAskSlide onNext={onNext} onPrevious={onPrevious} />;
}