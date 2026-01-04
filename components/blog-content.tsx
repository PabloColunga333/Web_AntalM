"use client"

import { motion } from "framer-motion"
import { Calendar, Clock, ArrowRight, TrendingUp, Zap, Target } from "lucide-react"
import { Button } from "./ui/button"
import Image from "next/image"

const featuredPost = {
  title: "5 Claves para una Implementación Exitosa de MES en 2025",
  excerpt:
    "Descubre las estrategias probadas que garantizan el éxito en la adopción de sistemas de ejecución manufacturera y cómo evitar los errores más comunes.",
  category: "MES",
  date: "15 Enero 2025",
  readTime: "8 min lectura",
  image: "/blog-industry-4-0-factory.png",
}

const posts = [
  {
    icon: TrendingUp,
    title: "Cómo el APS Reduce Costos de Inventario hasta 30%",
    excerpt:
      "Análisis profundo de casos reales donde la planificación avanzada transformó la gestión de inventarios y redujo capital inmovilizado.",
    category: "APS",
    date: "10 Enero 2025",
    readTime: "6 min",
    color: "from-blue-600 to-blue-400",
    image: "/blog-aps-software-screen.png",
  },
  {
    icon: Zap,
    title: "Industria 4.0 en México: Estado Actual y Oportunidades",
    excerpt:
      "Radiografía del estado de la transformación digital en la manufactura mexicana y las oportunidades de crecimiento que presenta.",
    category: "Tendencias",
    date: "5 Enero 2025",
    readTime: "10 min",
    color: "from-cyan-600 to-cyan-400",
    image: "/blog-team-planning-meeting.png",
  },
  {
    icon: Target,
    title: "Control de Calidad Predictivo con APQS",
    excerpt:
      "Cómo la inteligencia artificial y el análisis predictivo están revolucionando la gestión de calidad en manufactura.",
    category: "APQS",
    date: "28 Diciembre 2024",
    readTime: "7 min",
    color: "from-purple-600 to-purple-400",
  },
  {
    icon: TrendingUp,
    title: "ROI Real: Casos de Éxito en Implementaciones ERP",
    excerpt:
      "Números, métricas y resultados tangibles de proyectos de transformación digital en empresas manufactureras mexicanas.",
    category: "Casos de Éxito",
    date: "20 Diciembre 2024",
    readTime: "9 min",
    color: "from-green-600 to-green-400",
  },
  {
    icon: Zap,
    title: "Integración de Sistemas: ERP + MES + APS",
    excerpt: "Guía práctica para lograr una arquitectura empresarial coherente que maximice el valor de cada sistema.",
    category: "Integración",
    date: "15 Diciembre 2024",
    readTime: "12 min",
    color: "from-orange-600 to-orange-400",
  },
  {
    icon: Target,
    title: "Mejores Prácticas para la Gestión del Cambio Digital",
    excerpt:
      "Estrategias de Change Management que aseguran la adopción exitosa de nuevas tecnologías por parte de los equipos operativos.",
    category: "Gestión",
    date: "10 Diciembre 2024",
    readTime: "8 min",
    color: "from-pink-600 to-pink-400",
  },
]

const categories = ["Todos", "APS", "MES", "APQS", "Tendencias", "Casos de Éxito", "Gestión"]

export function BlogContent() {
  return (
    <div className="bg-slate-950 min-h-screen">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-slate-950 to-cyan-500/10" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 text-balance">
              Insights de{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Industria 4.0
              </span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Tendencias, mejores prácticas y casos de éxito en manufactura inteligente
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b border-slate-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-lg bg-slate-900 text-slate-400 hover:bg-slate-800 hover:text-blue-400 transition-colors text-sm font-medium"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-2xl overflow-hidden"
          >
            <div className="grid md:grid-cols-2 gap-0">
              <div className="aspect-video md:aspect-auto bg-slate-800 relative overflow-hidden">
                <Image
                  src={featuredPost.image || "/placeholder.svg"}
                  alt={featuredPost.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 text-sm text-blue-400 font-semibold mb-4">
                  <span className="px-3 py-1 rounded-full bg-blue-500/20">{featuredPost.category}</span>
                  <span className="text-slate-500">Destacado</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-balance">{featuredPost.title}</h2>
                <p className="text-slate-400 mb-6 leading-relaxed">{featuredPost.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-slate-500 mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {featuredPost.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {featuredPost.readTime}
                  </div>
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700 w-fit">
                  Leer Artículo
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-16 bg-slate-900/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Artículos Recientes</h2>
            <p className="text-slate-400">Las últimas publicaciones sobre tecnología manufacturera</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all group cursor-pointer"
              >
                <div className={`h-2 bg-gradient-to-r ${post.color}`} />
                {post.image && (
                  <div className="relative h-48 bg-slate-800 overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <div className="p-6">
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br ${post.color} mb-4`}
                  >
                    <post.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-xs font-semibold text-blue-400 mb-3">{post.category}</div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors text-balance">
                    {post.title}
                  </h3>
                  <p className="text-slate-400 text-sm mb-4 leading-relaxed">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-slate-500 pt-4 border-t border-slate-800">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl p-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Suscríbete a Nuestro Newsletter</h2>
            <p className="text-blue-50 mb-8 max-w-2xl mx-auto">
              Recibe insights exclusivos, casos de estudio y las últimas tendencias en Industria 4.0
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="tu@email.com"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <Button size="lg" className="bg-white text-blue-600 hover:bg-slate-100">
                Suscribirme
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
