"use client"

import { motion } from "framer-motion"
import { Calendar, Cog, Target, CheckCircle2, ArrowRight } from "lucide-react"
import { Button } from "./ui/button"

const services = [
  {
    icon: Calendar,
    title: "APS - Advanced Planning & Scheduling",
    subtitle: "Planificación Inteligente",
    description:
      "Optimiza tu cadena de suministro y producción con algoritmos avanzados de programación que reducen tiempos de entrega hasta 40%.",
    features: [
      "Programación automática de órdenes",
      "Optimización de recursos y capacidad",
      "Análisis de escenarios what-if",
      "Integración con ERP existente",
    ],
    color: "from-blue-600 to-blue-400",
    benefits: "Reduce lead times, mejora OEE y aumenta la flexibilidad operativa",
  },
  {
    icon: Cog,
    title: "MES - Manufacturing Execution System",
    subtitle: "Control en Tiempo Real",
    description:
      "Sistema de ejecución manufacturera que conecta la planta de producción con los sistemas de gestión empresarial para visibilidad total.",
    features: [
      "Seguimiento de órdenes en tiempo real",
      "Captura automática de datos de planta",
      "Gestión de calidad integrada",
      "Trazabilidad completa de productos",
    ],
    color: "from-cyan-600 to-cyan-400",
    benefits: "Incrementa productividad 25%, reduce desperdicio y mejora calidad",
  },
  {
    icon: Target,
    title: "APQS - Advanced Production Quality System",
    subtitle: "Calidad Predictiva",
    description:
      "Sistema avanzado de gestión de calidad que identifica y previene defectos antes de que ocurran mediante análisis predictivo.",
    features: [
      "Control estadístico de procesos (SPC)",
      "Análisis predictivo de calidad",
      "Gestión de no conformidades",
      "Auditorías digitales automatizadas",
    ],
    color: "from-purple-600 to-purple-400",
    benefits: "Reduce defectos hasta 60%, cumple normativas y mejora satisfacción",
  },
]

const process = [
  {
    number: "01",
    title: "Diagnóstico",
    description: "Análisis profundo de procesos actuales y identificación de oportunidades de mejora",
  },
  {
    number: "02",
    title: "Diseño",
    description: "Arquitectura de solución personalizada alineada a objetivos del negocio",
  },
  {
    number: "03",
    title: "Implementación",
    description: "Despliegue controlado con capacitación integral al equipo operativo",
  },
  {
    number: "04",
    title: "Optimización",
    description: "Soporte continuo y mejora iterativa basada en métricas reales",
  },
]

export function ServicesContent() {
  return (
    <div className="bg-slate-950">
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
              Soluciones para la{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Industria 4.0
              </span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Tecnología empresarial que conecta, optimiza y transforma tu operación manufacturera
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="grid md:grid-cols-2 gap-12 items-center"
              >
                <div className={index % 2 === 1 ? "md:order-2" : ""}>
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} mb-6`}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-sm font-semibold text-blue-400 mb-2">{service.subtitle}</div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{service.title}</h2>
                  <p className="text-slate-300 text-lg mb-6 leading-relaxed">{service.description}</p>
                  <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 mb-6">
                    <h3 className="font-semibold text-white mb-4 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-400" />
                      Características Principales
                    </h3>
                    <ul className="space-y-3">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3 text-slate-400">
                          <ArrowRight className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-gradient-to-r from-blue-600/10 to-cyan-500/10 border border-blue-500/30 rounded-lg p-4">
                    <p className="text-sm text-slate-300">
                      <strong className="text-blue-400">Beneficios:</strong> {service.benefits}
                    </p>
                  </div>
                </div>

                <div className={index % 2 === 1 ? "md:order-1" : ""}>
                  <div className="aspect-square rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 p-8 flex items-center justify-center">
                    <service.icon className="w-full h-full text-blue-400/20" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-slate-900/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Nuestro Proceso</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Metodología probada que garantiza implementaciones exitosas y ROI medible
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-blue-500 to-transparent" />
                )}
                <div className="text-5xl font-bold text-blue-500/20 mb-4">{step.number}</div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-slate-400 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl p-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Comienza tu Transformación Digital</h2>
            <p className="text-blue-50 mb-8 max-w-2xl mx-auto">
              Agenda una consultoría gratuita y descubre cómo nuestras soluciones pueden optimizar tu manufactura
            </p>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-slate-100">
              Solicitar Demo
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
