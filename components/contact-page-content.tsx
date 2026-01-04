"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"

const contactInfo = [
  {
    icon: Phone,
    title: "Teléfono",
    details: ["(427) 274-9160"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["ventas@antalm.com.mx"],
  },
  {
    icon: MapPin,
    title: "Ubicación",
    details: ["Querétaro, Qro., México"],
  },
  {
    icon: Clock,
    title: "Horario de Soporte",
    details: ["Lun - Vie: 9:00 am - 6:00 pm", "(excepto días festivos)", "Urgencias: 24/7 vía telefónica"],
  },
]

export function ContactPageContent() {
  return (
    <div className="bg-slate-950">
      {/* Hero */}
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
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 text-balance">
              Comienza tu{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Transformación Digital
              </span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Agenda una consultoría gratuita con nuestros expertos en Industria 4.0
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-blue-500/50 transition-colors"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-blue-600/20 text-blue-400 mb-4">
                  <info.icon className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-white mb-3">{info.title}</h3>
                <div className="space-y-1">
                  {info.details.map((detail) => (
                    <p key={detail} className="text-sm text-slate-400">
                      {detail}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-slate-900/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Solicita una Consultoría Gratuita</h2>
              <p className="text-slate-300 mb-8 leading-relaxed">
                Completa el formulario y uno de nuestros expertos se pondrá en contacto contigo en menos de 24 horas
                para discutir tus necesidades y objetivos.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-600/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-400 text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">Análisis Inicial</h3>
                    <p className="text-sm text-slate-400">Revisamos tu situación actual y objetivos de negocio</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-600/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-400 text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">Propuesta Personalizada</h3>
                    <p className="text-sm text-slate-400">
                      Diseñamos una solución adaptada a tus necesidades específicas
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-600/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-400 text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">Demo en Vivo</h3>
                    <p className="text-sm text-slate-400">Te mostramos las capacidades de nuestras soluciones</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="relative">
                {/* Glassmorphism effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-cyan-500/10 rounded-2xl blur-xl" />

                <form className="relative bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Nombre*</label>
                      <Input
                        placeholder="Juan"
                        className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Apellido*</label>
                      <Input
                        placeholder="Pérez"
                        className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Email Corporativo*</label>
                    <Input
                      type="email"
                      placeholder="juan.perez@empresa.com"
                      className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Teléfono*</label>
                    <Input
                      type="tel"
                      placeholder="+52 (55) 1234-5678"
                      className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Empresa*</label>
                    <Input
                      placeholder="Nombre de tu empresa"
                      className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Solución de Interés</label>
                    <select className="w-full px-4 py-2 rounded-lg bg-slate-800/50 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option>Selecciona una opción</option>
                      <option>APS - Advanced Planning & Scheduling</option>
                      <option>MES - Manufacturing Execution System</option>
                      <option>APQS - Advanced Production Quality</option>
                      <option>Suite Completa</option>
                      <option>No estoy seguro</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Mensaje*</label>
                    <Textarea
                      placeholder="Cuéntanos sobre tus desafíos y objetivos..."
                      rows={4}
                      className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white"
                  >
                    Enviar Solicitud
                    <Send className="w-4 h-4 ml-2" />
                  </Button>

                  <p className="text-xs text-slate-500 text-center">
                    Al enviar este formulario, aceptas nuestra política de privacidad
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden"
          >
            <div className="aspect-video bg-slate-800 flex items-center justify-center">
              <p className="text-slate-600">Mapa de ubicaciones</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
