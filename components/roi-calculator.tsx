"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Calculator, TrendingUp } from "lucide-react"

export function ROICalculator() {
  const [efficiency, setEfficiency] = useState([75])

  const calculateSavings = (eff: number) => {
    const baseSavings = 500000
    const multiplier = eff / 10
    return Math.round(baseSavings * multiplier)
  }

  const savings = calculateSavings(efficiency[0])

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-4">
              <Calculator className="h-4 w-4 text-blue-600" />
              <span className="text-sm text-blue-600 font-medium">Calculadora ROI</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 text-balance">
              Calcula tu Retorno de Inversión
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              Descubre cuánto podrías ahorrar optimizando tu eficiencia operativa
            </p>
          </div>

          <Card className="p-8 md:p-12 bg-gradient-to-br from-slate-50 to-white border-slate-200">
            <div className="space-y-8">
              <div>
                <label className="block text-lg font-semibold text-slate-900 mb-4">
                  Incremento de Eficiencia Esperado
                </label>
                <Slider
                  value={efficiency}
                  onValueChange={setEfficiency}
                  min={10}
                  max={100}
                  step={5}
                  className="w-full"
                />
                <div className="flex justify-between mt-2 text-sm text-slate-600">
                  <span>10%</span>
                  <span className="font-bold text-blue-600 text-lg">{efficiency[0]}%</span>
                  <span>100%</span>
                </div>
              </div>

              <div className="border-t border-slate-200 pt-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-slate-600">Ahorro Anual Estimado:</span>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-green-600" />
                    <motion.span
                      key={savings}
                      initial={{ scale: 1.2, color: "#16a34a" }}
                      animate={{ scale: 1, color: "#0f172a" }}
                      className="text-3xl font-bold"
                    >
                      ${savings.toLocaleString()} USD
                    </motion.span>
                  </div>
                </div>
                <p className="text-sm text-slate-500 text-center">
                  * Basado en una operación de manufactura promedio con 50 empleados
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-4 pt-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <p className="text-2xl font-bold text-blue-600">{Math.round(efficiency[0] * 0.6)}%</p>
                  <p className="text-sm text-slate-600 mt-1">Reducción de Costos</p>
                </div>
                <div className="text-center p-4 bg-cyan-50 rounded-lg">
                  <p className="text-2xl font-bold text-cyan-600">{Math.round(efficiency[0] * 0.8)}%</p>
                  <p className="text-sm text-slate-600 mt-1">Mayor Productividad</p>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <p className="text-2xl font-bold text-blue-600">6-12</p>
                  <p className="text-sm text-slate-600 mt-1">Meses para ROI</p>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
