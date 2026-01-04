"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Send } from "lucide-react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
  })
  const [errors, setErrors] = useState<Record<string, boolean>>({})

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newErrors: Record<string, boolean> = {}

    if (!formData.name) newErrors.name = true
    if (!formData.email) newErrors.email = true
    if (!formData.company) newErrors.company = true
    if (!formData.phone) newErrors.phone = true

    setErrors(newErrors)

    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted:", formData)
      // Handle form submission
    }
  }

  return (
    <div className="glass-card rounded-2xl p-8 max-w-md shadow-2xl">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Solicita una Demo</h3>
        <p className="text-slate-600 dark:text-slate-400 text-sm">Descubre cómo podemos transformar tu manufactura</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-slate-700 dark:text-slate-300">
            Nombre Completo *
          </Label>
          <Input
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className={`bg-white/50 dark:bg-slate-800/50 ${errors.name ? "border-red-500" : ""}`}
            placeholder="Juan Pérez"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="company" className="text-slate-700 dark:text-slate-300">
            Empresa *
          </Label>
          <Input
            id="company"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            className={`bg-white/50 dark:bg-slate-800/50 ${errors.company ? "border-red-500" : ""}`}
            placeholder="Tu Empresa S.A."
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-slate-700 dark:text-slate-300">
            Email Corporativo *
          </Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className={`bg-white/50 dark:bg-slate-800/50 ${errors.email ? "border-red-500" : ""}`}
            placeholder="juan@empresa.com"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone" className="text-slate-700 dark:text-slate-300">
            Teléfono *
          </Label>
          <Input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className={`bg-white/50 dark:bg-slate-800/50 ${errors.phone ? "border-red-500" : ""}`}
            placeholder="+52 (81) 1234-5678"
          />
        </div>

        <Button
          type="submit"
          className="w-full glow-on-hover bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-semibold"
        >
          <Send className="h-4 w-4 mr-2" />
          Solicitar Demo Gratis
        </Button>
      </form>
    </div>
  )
}
