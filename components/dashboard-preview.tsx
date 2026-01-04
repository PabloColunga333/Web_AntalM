"use client"

import { motion } from "framer-motion"
import { TrendingUp, Activity, BarChart3, Zap } from "lucide-react"
import { Card } from "@/components/ui/card"

export function DashboardPreview() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-4">
            <Activity className="h-4 w-4 text-blue-600" />
            <span className="text-sm text-blue-600 font-medium">Dashboard en Tiempo Real</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 text-balance">
            Control Total de tu Producción
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Visualiza KPIs críticos, detecta cuellos de botella y toma decisiones basadas en datos en tiempo real
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { label: "Eficiencia OEE", value: "94.2%", icon: TrendingUp, trend: "+5.2%", color: "blue" },
            { label: "Producción Diaria", value: "12.4K", icon: BarChart3, trend: "+12%", color: "cyan" },
            { label: "Tiempo Activo", value: "98.5%", icon: Zap, trend: "+2.1%", color: "blue" },
            { label: "Calidad", value: "99.1%", icon: Activity, trend: "+0.8%", color: "cyan" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 bg-gradient-to-br from-slate-50 to-white border-slate-200 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className={`h-12 w-12 rounded-lg bg-${stat.color}-100 flex items-center justify-center`}>
                    <stat.icon className={`h-6 w-6 text-${stat.color}-600`} />
                  </div>
                  <span className="text-sm font-medium text-green-600 bg-green-50 px-2 py-1 rounded">{stat.trend}</span>
                </div>
                <p className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</p>
                <p className="text-sm text-slate-600">{stat.label}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Animated Chart Visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <Card className="p-8 bg-gradient-to-br from-slate-900 to-slate-800 border-slate-700 overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-6">Análisis de Producción Semanal</h3>
              <div className="h-64 flex items-end justify-between gap-2">
                {[65, 82, 78, 95, 88, 92, 98].map((height, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${height}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.1 }}
                    className="flex-1 bg-gradient-to-t from-blue-600 to-cyan-400 rounded-t-lg relative group cursor-pointer"
                  >
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-700 text-white text-xs px-2 py-1 rounded">
                      {height}%
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="flex justify-between mt-4 text-slate-400 text-sm">
                {["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"].map((day) => (
                  <span key={day}>{day}</span>
                ))}
              </div>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
