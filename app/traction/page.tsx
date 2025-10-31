import TractionMomentumWave from "../Slides/TractionMomentumSlide";
import { useSlideNavigation } from '@/app/Components/SlideNavigation';

export default function TractionMomentumWavePage() {
  const { onNext, onPrevious } = useSlideNavigation({
    nextSlide: '/unit-of-economics',
    previousSlide: '/traction',
  });

  return <TractionMomentumWave  onNext={onNext} onPrevious={onPrevious} />;
}