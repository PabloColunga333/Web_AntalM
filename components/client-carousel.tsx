"use client"

import { motion } from "framer-motion"

const clients = [
  "Siemens",
  "Bosch",
  "Continental",
  "Volkswagen",
  "General Electric",
  "Schneider Electric",
  "ABB",
  "Honeywell",
]

export function ClientCarousel() {
  return (
    <section className="py-16 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <h3 className="text-center text-sm font-semibold text-slate-600 mb-8 uppercase tracking-wider">
          Confían en Nosotros
        </h3>
        <div className="relative">
          <div className="flex gap-12 animate-marquee">
            {[...clients, ...clients].map((client, index) => (
              <motion.div
                key={`${client}-${index}`}
                className="flex-shrink-0 group cursor-pointer"
                whileHover={{ scale: 1.05 }}
              >
                <div className="h-16 w-32 flex items-center justify-center opacity-40 group-hover:opacity-100 transition-opacity">
                  <span className="text-xl font-bold text-slate-400 group-hover:text-blue-600 transition-colors">
                    {client}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
