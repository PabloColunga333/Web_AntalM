"use client"

import { motion } from "framer-motion"
import { Building2, Award, Users, TrendingUp, Target, Zap } from "lucide-react"

const stats = [
  { icon: Building2, value: "20+", label: "Años de experiencia" },
  { icon: Users, value: "150+", label: "Clientes satisfechos" },
  { icon: Award, value: "50+", label: "Implementaciones exitosas" },
  { icon: TrendingUp, value: "35%", label: "ROI promedio" },
]

const values = [
  {
    icon: Target,
    title: "Precisión",
    description: "Soluciones exactas adaptadas a las necesidades específicas de cada cliente",
  },
  {
    icon: Zap,
    title: "Innovación",
    description: "Tecnología de vanguardia para mantener tu empresa competitiva",
  },
  {
    icon: Users,
    title: "Compromiso",
    description: "Acompañamiento integral desde el análisis hasta la implementación",
  },
]

export function AboutContent() {
  return (
    <div className="bg-slate-950">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-slate-950 to-cyan-500/10" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(90deg, rgba(59,130,246,0.03) 1px, transparent 1px),
            linear-gradient(0deg, rgba(59,130,246,0.03) 1px, transparent 1px)
          `,
            backgroundSize: "60px 60px",
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 text-balance">
              Transformando la Industria desde{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">2003</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Como partner oficial de Siemens, lideramos la revolución de la Industria 4.0 con soluciones ERP, APS y MES
              que optimizan la manufactura mexicana
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Nuestra Historia</h2>
              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>
                  Fundada en 2003, Antal M nació con la visión de revolucionar la gestión industrial en México mediante
                  tecnología de clase mundial. Desde nuestros inicios, hemos sido pioneros en la adopción de soluciones
                  avanzadas de planificación y ejecución manufacturera.
                </p>
                <p>
                  Como partner certificado de Siemens, implementamos soluciones APS (Advanced Planning & Scheduling),
                  MES (Manufacturing Execution Systems) y APQS (Advanced Production Quality Systems) que han
                  transformado más de 150 operaciones manufactureras en todo el país.
                </p>
                <p>
                  Nuestro equipo de expertos combina profundo conocimiento técnico con amplia experiencia en industria,
                  garantizando implementaciones exitosas que generan resultados medibles desde el primer día.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-video rounded-2xl bg-gradient-to-br from-blue-600/20 to-cyan-500/20 border border-blue-500/30 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <Building2 className="w-24 h-24 text-blue-400 mx-auto mb-4" />
                    <p className="text-slate-400 text-sm">Partner Oficial</p>
                    <p className="text-2xl font-bold text-white">Siemens</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-slate-900/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Nuestros Valores</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Principios que guían cada proyecto e implementación que realizamos
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-900/50 border border-slate-800 rounded-xl p-8 hover:border-blue-500/50 transition-colors"
              >
                <value.icon className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-slate-400 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl p-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">¿Listo para Transformar tu Manufactura?</h2>
            <p className="text-blue-50 mb-8 max-w-2xl mx-auto">
              Únete a más de 150 empresas que ya optimizaron sus operaciones con nuestras soluciones
            </p>
            <a
              href="/contacto"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-colors"
            >
              Contactar al Equipo
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
