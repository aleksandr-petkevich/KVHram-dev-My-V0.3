import { PageWrapper } from '@/components/layout'
import {
  HeroSection,
  AnnouncementsSection,
  AboutSection,
  ScheduleSection,
  ContactSection,
  MuseumSection,
} from '@/components/home'

export default function HomePage() {
  return (
    <PageWrapper>
      <HeroSection />

      <ScheduleSection />
      <AboutSection />

      <MuseumSection />

      <ContactSection />
    </PageWrapper>
  )
}