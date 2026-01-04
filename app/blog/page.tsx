import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { BlogContent } from "@/components/blog-content"

export const metadata = {
  title: "Blog - Antal M | Insights de Industria 4.0",
  description: "Artículos, tendencias y mejores prácticas sobre manufactura inteligente, ERP y transformación digital",
}

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <BlogContent />
      </main>
      <Footer />
    </div>
  )
}
