import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ServicesContent } from "@/components/services-content"

export const metadata = {
  title: "Servicios - Antal M | Soluciones APS, MES y APQS",
  description:
    "Descubre nuestras soluciones especializadas en planificación avanzada, ejecución manufacturera y gestión de calidad",
}

export default function ServiciosPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <ServicesContent />
      </main>
      <Footer />
    </div>
  )
}
