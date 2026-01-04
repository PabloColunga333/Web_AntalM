import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { EventsContent } from "@/components/events-content"

export const metadata = {
  title: "Eventos - Antal M",
  description: "Eventos y experiencias de Industria 4.0 de Antal M",
}

export default function EventosPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <EventsContent />
      </main>
      <Footer />
    </div>
  )
}
