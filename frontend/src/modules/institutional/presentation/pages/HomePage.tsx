import { HeroSection } from '../components/HeroSection'
import { AboutPreview } from '../components/AboutPreview'
import { HowItWorks } from '../components/HowItWorks'
import { FaqPreview } from '../components/FaqPreview'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutPreview />
      <HowItWorks />
      <FaqPreview />
    </>
  )
}
