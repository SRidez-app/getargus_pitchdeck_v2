'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

interface SlideNavigationProps {
  nextSlide: string | null;
  previousSlide: string | null;
}

export function useSlideNavigation({ nextSlide, previousSlide }: SlideNavigationProps) {
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight' && nextSlide) {
        router.push(nextSlide);
      } else if (event.key === 'ArrowLeft' && previousSlide) {
        router.push(previousSlide);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, previousSlide, router]);

  return {
    onNext: nextSlide ? () => router.push(nextSlide) : undefined,
    onPrevious: previousSlide ? () => router.push(previousSlide) : undefined,
  };
}