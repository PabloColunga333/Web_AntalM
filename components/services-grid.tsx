"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Cpu, Factory, ClipboardCheck, ArrowRight } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Cpu,
    title: "Sistemas APS",
    subtitle: "Advanced Planning & Scheduling",
    description:
      "Planificación avanzada con algoritmos de IA para optimizar recursos y cumplir con tiempos de entrega.",
    features: ["Optimización de recursos", "Planificación inteligente", "Sincronización en tiempo real"],
    href: "/servicios/aps",
    gradient: "from-blue-600 to-blue-400",
  },
  {
    icon: Factory,
    title: "Sistemas MES",
    subtitle: "Manufacturing Execution System",
    description: "Control total de la ejecución de manufactura con visibilidad completa del piso de producción.",
    features: ["Trazabilidad completa", "Control de calidad", "Reducción de desperdicios"],
    href: "/servicios/mes",
    gradient: "from-cyan-500 to-cyan-300",
  },
  {
    icon: ClipboardCheck,
    title: "Sistemas APQS",
    subtitle: "Advanced Process Quality System",
    description: "Gestión avanzada de calidad con análisis predictivo y prevención de defectos.",
    features: ["Análisis SPC", "Control estadístico", "Prevención de defectos"],
    href: "/servicios/apqs",
    gradient: "from-blue-500 to-cyan-400",
  },
]

export function ServicesGrid() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">
            Soluciones Enterprise para{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
              Industria 4.0
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Tecnología de clase mundial para transformar tu operación de manufactura
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group relative overflow-hidden bg-slate-900 border-slate-800 hover:border-blue-500/50 transition-all duration-300 h-full">
                <div className="p-6 space-y-6">
                  {/* Icon */}
                  <div
                    className={`h-16 w-16 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <service.icon className="h-8 w-8 text-white" />
                  </div>

                  {/* Title */}
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-slate-500">{service.subtitle}</p>
                  </div>

                  {/* Description */}
                  <p className="text-slate-400 leading-relaxed">{service.description}</p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-slate-400">
                        <div className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link href={service.href}>
                    <Button
                      variant="ghost"
                      className="group/btn w-full justify-between text-blue-400 hover:text-blue-300 hover:bg-blue-500/10"
                    >
                      Ver más detalles
                      <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
