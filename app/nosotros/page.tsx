import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AboutContent } from "@/components/about-content"

export const metadata = {
  title: "Nosotros - Antal M | Expertos en Industria 4.0",
  description:
    "Conoce a Antal M, partner oficial de Siemens con más de 20 años liderando la transformación digital en manufactura",
}

export default function NosotrosPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <AboutContent />
      </main>
      <Footer />
    </div>
  )
}
