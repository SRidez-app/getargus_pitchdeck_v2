'use client';
import TimelineSlide from '../Slides/TimelineSlide';
import { useSlideNavigation } from '@/app/Components/SlideNavigation';

export default function TimelinePage() {
  const { onNext, onPrevious } = useSlideNavigation({
    nextSlide: '/why-argus-stands-alone',
    previousSlide: '/tam',
  });

  return <TimelineSlide onNext={onNext} onPrevious={onPrevious} />;
}