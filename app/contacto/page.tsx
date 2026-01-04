import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ContactPageContent } from "@/components/contact-page-content"

export const metadata = {
  title: "Contacto - Antal M | Inicia tu Transformación Digital",
  description:
    "Agenda una consultoría gratuita con nuestros expertos en soluciones ERP, APS y MES para la Industria 4.0",
}

export default function ContactoPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <ContactPageContent />
      </main>
      <Footer />
    </div>
  )
}
