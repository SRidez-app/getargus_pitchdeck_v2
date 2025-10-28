'use client';

import TeamOverviewSlide from '../Slides/TeamOverviewSlide';
import { useSlideNavigation } from '@/app/Components/SlideNavigation';

export default function TeamOverviewPage() {
  const { onNext, onPrevious } = useSlideNavigation({
    nextSlide: '/the-ask',
    previousSlide: '/unit-of-economics',
  });

  return <TeamOverviewSlide onNext={onNext} onPrevious={onPrevious} />;
}