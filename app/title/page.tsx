'use client';

import TitleSlide from '../Slides/Title';
import { useSlideNavigation } from '@/app/Components/SlideNavigation';

export default function TitlePage() {
  const { onNext, onPrevious } = useSlideNavigation({
    nextSlide: '/problem',
    previousSlide: '/contact-us',
  });

  return <TitleSlide onNext={onNext} onPrevious={onPrevious} />;
}