import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { DashboardPreview } from "@/components/dashboard-preview"
import { ServicesGrid } from "@/components/services-grid"
import { ROICalculator } from "@/components/roi-calculator"
import { ClientCarousel } from "@/components/client-carousel"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <DashboardPreview />
        <ServicesGrid />
        <ROICalculator />
        <ClientCarousel />
      </main>
      <Footer />
    </div>
  )
}
