

'use client';

import CameraAcquisitionSlide from '../Slides/CameraAcquisitionSlide';
import { useSlideNavigation } from '@/app/Components/SlideNavigation';

export default function CameraAcquisitionSlidePage() {
  const { onNext, onPrevious } = useSlideNavigation({
    nextSlide: '/roadmap',
    previousSlide: '/tam',
  });

  return <CameraAcquisitionSlide onNext={onNext} onPrevious={onPrevious} />;
}