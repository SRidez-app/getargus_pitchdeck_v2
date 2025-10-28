'use client';

import ContactUsSlide from '../Slides/ContactUsSlide';
import { useSlideNavigation } from '@/app/Components/SlideNavigation';

export default function ContactUsPage() {
  const { onNext, onPrevious } = useSlideNavigation({
    nextSlide: null,
    previousSlide: '/the-ask',
  });

  return <ContactUsSlide onNext={onNext} onPrevious={onPrevious} />;
}