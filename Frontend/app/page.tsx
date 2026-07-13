import { PageWrapper } from '@/components/layout'
import {
  HeroSection,
  AnnouncementsSection,
  AboutSection,
  ScheduleSection,
  SacramentsSection,
  ContactSection,
  FeaturedSection,
} from '@/components/home'

export default function HomePage() {
  return (
    <PageWrapper>
      <HeroSection />

       <ScheduleSection />
       <AboutSection />

      <FeaturedSection />

      <AnnouncementsSection />

      <SacramentsSection />
      <ContactSection />
    </PageWrapper>
  )
}