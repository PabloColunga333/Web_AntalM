"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Calendar, MapPin, Users, Clock, Bell, Archive, Zap } from "lucide-react"
import { useState } from "react"

export function EventsContent() {
  const [email, setEmail] = useState("")

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Subscribed:", email)
  }

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 to-slate-950" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <Calendar className="h-16 w-16 text-blue-500 mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 text-balance">
              Eventos{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
                Industria 4.0
              </span>
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed">
              Experiencias exclusivas de networking y conocimiento
            </p>
          </motion.div>
        </div>
      </section>

      {/* Historical Events */}
      <section className="py-16 border-t border-slate-800">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <Archive className="h-6 w-6 text-slate-500" />
            <h2 className="text-3xl font-bold text-slate-400">Eventos Anteriores</h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-slate-900/50 border-slate-800 overflow-hidden opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              <div className="md:flex">
                <div className="md:w-1/3 bg-gradient-to-br from-slate-800 to-slate-900 p-8 flex items-center justify-center">
                  <div className="text-center">
                    <Calendar className="h-16 w-16 text-slate-600 mx-auto mb-4" />
                    <div className="text-4xl font-bold text-slate-500 mb-2">15</div>
                    <div className="text-slate-600 font-medium">Noviembre 2024</div>
                  </div>
                </div>
                <div className="p-8 md:w-2/3">
                  <div className="inline-block px-3 py-1 bg-slate-800 text-slate-500 text-xs font-semibold rounded-full mb-4">
                    FINALIZADO
                  </div>
                  <h3 className="text-2xl font-bold text-slate-400 mb-3">
                    Cena-Cocktail: Transformación Digital en Manufactura
                  </h3>
                  <p className="text-slate-500 mb-6 leading-relaxed">
                    Una velada exclusiva donde líderes de la industria compartieron experiencias sobre la adopción de
                    tecnologías 4.0 y los resultados obtenidos en sus operaciones.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2 text-slate-500">
                      <MapPin className="h-4 w-4" />
                      <span>Hotel Camino Real, Monterrey</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-500">
                      <Users className="h-4 w-4" />
                      <span>120+ Asistentes</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-500">
                      <Clock className="h-4 w-4" />
                      <span>19:00 - 23:00 hrs</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 border-t border-slate-800">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <Bell className="h-6 w-6 text-blue-500 animate-pulse" />
            <h2 className="text-3xl font-bold text-white">Próximos Eventos</h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-gradient-to-br from-slate-900 to-slate-800 border-blue-500/30 p-12 text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-blue-500/10 border-2 border-blue-500/30 mb-6">
                <Calendar className="h-10 w-10 text-blue-400" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Próximamente: Nuevas Experiencias Industria 4.0</h3>
              <p className="text-lg text-slate-400 mb-8 max-w-xl mx-auto leading-relaxed">
                Estamos preparando eventos exclusivos para conectar líderes de manufactura con las últimas innovaciones
                tecnológicas.
              </p>

              <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="event-email" className="text-left block text-slate-300">
                      Recibe alertas de próximos eventos
                    </Label>
                    <div className="flex gap-2">
                      <Input
                        id="event-email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="tu@empresa.com"
                        className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500"
                        required
                      />
                      <Button
                        type="submit"
                        className="glow-on-hover bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 whitespace-nowrap"
                      >
                        <Bell className="h-4 w-4 mr-2" />
                        Suscribirme
                      </Button>
                    </div>
                  </div>
                  <p className="text-xs text-slate-500 text-left">
                    Te notificaremos cuando abramos el registro para nuestros próximos eventos
                  </p>
                </div>
              </form>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Why Attend */}
      <section className="py-16 border-t border-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">¿Por qué asistir a nuestros eventos?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: Users,
                  title: "Networking de Alto Nivel",
                  description: "Conecta con líderes y tomadores de decisiones de la industria manufacturera",
                },
                {
                  icon: Zap,
                  title: "Conocimiento Práctico",
                  description: "Aprende sobre implementaciones reales y casos de éxito en Industria 4.0",
                },
                {
                  icon: Clock,
                  title: "Experiencias Exclusivas",
                  description: "Acceso a demostraciones en vivo y contenido no disponible en otros espacios",
                },
              ].map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="p-6 bg-slate-900 border-slate-800 h-full hover:border-blue-500/50 transition-colors">
                    <benefit.icon className="h-12 w-12 text-blue-500 mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                    <p className="text-slate-400 leading-relaxed">{benefit.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
