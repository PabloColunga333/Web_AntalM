"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Menu, MoveRight, X } from "lucide-react"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "backdrop-blur-xl bg-white/95 border-b border-slate-200 shadow-lg"
          : "bg-white/90 backdrop-blur-sm",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between lg:grid lg:grid-cols-3">
          {/* Logo */}
          <div className="flex justify-start">
            <Link href="/" className="flex items-center group">
              <Image
                src="/logo-antal-m.png"
                alt="Antal M - Effective Manufacturing Software"
                width={140}
                height={45}
                className="h-12 w-auto transition-opacity group-hover:opacity-80"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex lg:justify-center">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50 transition-colors">
                      Inicio
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-slate-700 hover:text-blue-600 hover:bg-slate-50 data-[state=open]:text-blue-600 data-[state=open]:bg-slate-50">
                    Nosotros
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="!w-[500px] p-4 bg-slate-950 border-slate-800">
                    <div className="grid grid-cols-2 gap-4">
                      {/* Columna izquierda: Descripción y CTA */}
                      <div className="flex flex-col justify-between p-2">
                        <div className="space-y-2">
                          <p className="text-base font-semibold text-white">Nosotros</p>
                          <p className="text-sm text-slate-300 leading-relaxed">
                            Conoce nuestra trayectoria como Partner Oficial de Siemens en soluciones Industry 4.0.
                          </p>
                        </div>
                        <Button
                          size="sm"
                          className="mt-8 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white"
                        >
                          Conocer más
                        </Button>
                      </div>

                      {/* Columna derecha: Enlaces */}
                      <div className="flex flex-col justify-end space-y-1">
                        <Link
                          href="/nosotros"
                          className="flex items-center justify-between rounded-md hover:bg-slate-800 py-3 px-4 transition-colors group"
                        >
                          <span className="text-sm font-medium text-slate-100 group-hover:text-cyan-400">
                            Nuestra Empresa
                          </span>
                          <MoveRight className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 transition-colors" />
                        </Link>
                        <Link
                          href="/nosotros#equipo"
                          className="flex items-center justify-between rounded-md hover:bg-slate-800 py-3 px-4 transition-colors group"
                        >
                          <span className="text-sm font-medium text-slate-100 group-hover:text-cyan-400">
                            Nuestro Equipo
                          </span>
                          <MoveRight className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 transition-colors" />
                        </Link>
                        <Link
                          href="/nosotros#partners"
                          className="flex items-center justify-between rounded-md hover:bg-slate-800 py-3 px-4 transition-colors group"
                        >
                          <span className="text-sm font-medium text-slate-100 group-hover:text-cyan-400">
                            Partners Estratégicos
                          </span>
                          <MoveRight className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 transition-colors" />
                        </Link>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-slate-700 hover:text-blue-600 hover:bg-slate-50 data-[state=open]:text-blue-600 data-[state=open]:bg-slate-50">
                    Servicios
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="!w-[520px] p-4 bg-slate-950 border-slate-800">
                    <div className="grid grid-cols-2 gap-4">
                      {/* Columna izquierda: Descripción y CTA */}
                      <div className="flex flex-col justify-between p-2">
                        <div className="space-y-2">
                          <p className="text-base font-semibold text-white">Servicios</p>
                          <p className="text-sm text-slate-300 leading-relaxed">
                            Soluciones integrales de software para manufactura inteligente y digitalización industrial.
                          </p>
                        </div>
                        <Button
                          size="sm"
                          className="mt-8 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white"
                        >
                          Solicitar Demo
                        </Button>
                      </div>

                      {/* Columna derecha: Enlaces */}
                      <div className="flex flex-col justify-end space-y-1">
                        <Link
                          href="/servicios"
                          className="flex items-center justify-between rounded-md hover:bg-slate-800 py-3 px-4 transition-colors group"
                        >
                          <span className="text-sm font-medium text-slate-100 group-hover:text-cyan-400">
                            Todos los Servicios
                          </span>
                          <MoveRight className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 transition-colors" />
                        </Link>
                        <Link
                          href="/servicios#aps"
                          className="flex items-center justify-between rounded-md hover:bg-slate-800 py-3 px-4 transition-colors group"
                        >
                          <span className="text-sm font-medium text-slate-100 group-hover:text-cyan-400">
                            Sistemas APS
                          </span>
                          <MoveRight className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 transition-colors" />
                        </Link>
                        <Link
                          href="/servicios#mes"
                          className="flex items-center justify-between rounded-md hover:bg-slate-800 py-3 px-4 transition-colors group"
                        >
                          <span className="text-sm font-medium text-slate-100 group-hover:text-cyan-400">
                            Sistemas MES
                          </span>
                          <MoveRight className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 transition-colors" />
                        </Link>
                        <Link
                          href="/servicios#apqs"
                          className="flex items-center justify-between rounded-md hover:bg-slate-800 py-3 px-4 transition-colors group"
                        >
                          <span className="text-sm font-medium text-slate-100 group-hover:text-cyan-400">
                            Sistemas APQS
                          </span>
                          <MoveRight className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 transition-colors" />
                        </Link>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/blog" legacyBehavior passHref>
                    <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50 transition-colors">
                      Blog
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/contacto" legacyBehavior passHref>
                    <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50 transition-colors">
                      Contacto
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/eventos" legacyBehavior passHref>
                    <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50 transition-colors">
                      Eventos
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* CTA Button - Right aligned */}
          <div className="hidden lg:flex items-center justify-end gap-4">
            <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-50 bg-transparent">
              (427) 274-9160
            </Button>
            <Button className="glow-on-hover bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-semibold">
              Contactar
            </Button>
          </div>

          <div className="flex lg:hidden items-center justify-end">
            <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-slate-700" />
              ) : (
                <Menu className="h-6 w-6 text-slate-700" />
              )}
            </Button>

            {isMobileMenuOpen && (
              <div className="absolute top-20 left-0 right-0 bg-white border-t border-slate-200 shadow-2xl py-6 container mx-auto">
                <nav className="flex flex-col gap-6">
                  <Link
                    href="/"
                    className="flex items-center justify-between text-slate-700 hover:text-blue-600 text-base font-medium transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span>Inicio</span>
                    <MoveRight className="w-4 h-4 text-slate-400" />
                  </Link>

                  <div className="space-y-3">
                    <p className="text-base font-semibold text-slate-900">Nosotros</p>
                    <Link
                      href="/nosotros"
                      className="flex items-center justify-between text-slate-600 hover:text-blue-600 ml-4 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <span>Nuestra Empresa</span>
                      <MoveRight className="w-4 h-4 text-slate-400" />
                    </Link>
                    <Link
                      href="/nosotros#equipo"
                      className="flex items-center justify-between text-slate-600 hover:text-blue-600 ml-4 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <span>Nuestro Equipo</span>
                      <MoveRight className="w-4 h-4 text-slate-400" />
                    </Link>
                    <Link
                      href="/nosotros#partners"
                      className="flex items-center justify-between text-slate-600 hover:text-blue-600 ml-4 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <span>Partners</span>
                      <MoveRight className="w-4 h-4 text-slate-400" />
                    </Link>
                  </div>

                  <div className="space-y-3">
                    <p className="text-base font-semibold text-slate-900">Servicios</p>
                    <Link
                      href="/servicios"
                      className="flex items-center justify-between text-slate-600 hover:text-blue-600 ml-4 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <span>Todos los Servicios</span>
                      <MoveRight className="w-4 h-4 text-slate-400" />
                    </Link>
                    <Link
                      href="/servicios#aps"
                      className="flex items-center justify-between text-slate-600 hover:text-blue-600 ml-4 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <span>Sistemas APS</span>
                      <MoveRight className="w-4 h-4 text-slate-400" />
                    </Link>
                    <Link
                      href="/servicios#mes"
                      className="flex items-center justify-between text-slate-600 hover:text-blue-600 ml-4 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <span>Sistemas MES</span>
                      <MoveRight className="w-4 h-4 text-slate-400" />
                    </Link>
                    <Link
                      href="/servicios#apqs"
                      className="flex items-center justify-between text-slate-600 hover:text-blue-600 ml-4 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <span>Sistemas APQS</span>
                      <MoveRight className="w-4 h-4 text-slate-400" />
                    </Link>
                  </div>

                  <Link
                    href="/blog"
                    className="flex items-center justify-between text-slate-700 hover:text-blue-600 text-base font-medium transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span>Blog</span>
                    <MoveRight className="w-4 h-4 text-slate-400" />
                  </Link>

                  <Link
                    href="/contacto"
                    className="flex items-center justify-between text-slate-700 hover:text-blue-600 text-base font-medium transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span>Contacto</span>
                    <MoveRight className="w-4 h-4 text-slate-400" />
                  </Link>

                  <Link
                    href="/eventos"
                    className="flex items-center justify-between text-slate-700 hover:text-blue-600 text-base font-medium transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span>Eventos</span>
                    <MoveRight className="w-4 h-4 text-slate-400" />
                  </Link>

                  <Button className="mt-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white w-full">
                    Solicitar Demo
                  </Button>
                </nav>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
