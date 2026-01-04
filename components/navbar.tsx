"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Menu } from "lucide-react"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

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
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Image
              src="/logo-antal-m.png"
              alt="Antal M - Effective Manufacturing Software"
              width={120}
              height={40}
              className="h-10 w-auto transition-opacity group-hover:opacity-80"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors">
                    Inicio
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-slate-700 hover:text-blue-600">
                  Nosotros
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[220px] gap-3 p-4 bg-white border border-slate-200 shadow-lg">
                    <li>
                      <Link href="/nosotros" legacyBehavior passHref>
                        <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 text-slate-700 hover:text-blue-600">
                          <div className="text-sm font-medium">Nuestra Empresa</div>
                          <p className="text-xs text-slate-500">Historia y valores</p>
                        </NavigationMenuLink>
                      </Link>
                    </li>
                    <li>
                      <Link href="/nosotros#equipo" legacyBehavior passHref>
                        <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 text-slate-700 hover:text-blue-600">
                          <div className="text-sm font-medium">Nuestro Equipo</div>
                          <p className="text-xs text-slate-500">Expertos en Industry 4.0</p>
                        </NavigationMenuLink>
                      </Link>
                    </li>
                    <li>
                      <Link href="/nosotros#partners" legacyBehavior passHref>
                        <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 text-slate-700 hover:text-blue-600">
                          <div className="text-sm font-medium">Partners</div>
                          <p className="text-xs text-slate-500">Siemens y más</p>
                        </NavigationMenuLink>
                      </Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-slate-700 hover:text-blue-600">
                  Servicios
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[260px] gap-3 p-4 bg-white border border-slate-200 shadow-lg">
                    <li>
                      <Link href="/servicios" legacyBehavior passHref>
                        <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 text-slate-700 hover:text-blue-600">
                          <div className="text-sm font-medium">Todos los Servicios</div>
                          <p className="text-xs text-slate-500">Soluciones completas</p>
                        </NavigationMenuLink>
                      </Link>
                    </li>
                    <li>
                      <Link href="/servicios#aps" legacyBehavior passHref>
                        <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 text-slate-700 hover:text-blue-600">
                          <div className="text-sm font-medium">Sistemas APS</div>
                          <p className="text-xs text-slate-500">Planificación Avanzada</p>
                        </NavigationMenuLink>
                      </Link>
                    </li>
                    <li>
                      <Link href="/servicios#mes" legacyBehavior passHref>
                        <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 text-slate-700 hover:text-blue-600">
                          <div className="text-sm font-medium">Sistemas MES</div>
                          <p className="text-xs text-slate-500">Ejecución de Manufactura</p>
                        </NavigationMenuLink>
                      </Link>
                    </li>
                    <li>
                      <Link href="/servicios#apqs" legacyBehavior passHref>
                        <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 text-slate-700 hover:text-blue-600">
                          <div className="text-sm font-medium">Sistemas APQS</div>
                          <p className="text-xs text-slate-500">Control de Calidad</p>
                        </NavigationMenuLink>
                      </Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/blog" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors">
                    Blog
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/contacto" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors">
                    Contacto
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/eventos" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors">
                    Eventos
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Button className="glow-on-hover bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-semibold">
              Solicitar Demo
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6 text-slate-700" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-white border-slate-200">
              {/* Logo en menú móvil */}
              <div className="mb-6">
                <Image src="/logo-antal-m.png" alt="Antal M" width={100} height={35} className="h-8 w-auto" />
              </div>
              <nav className="flex flex-col gap-4 mt-8">
                <Link href="/" className="text-slate-700 hover:text-blue-600 text-lg font-medium transition-colors">
                  Inicio
                </Link>
                <div className="space-y-2">
                  <p className="text-slate-500 text-sm font-semibold">Nosotros</p>
                  <Link href="/nosotros" className="block text-slate-700 hover:text-blue-600 ml-4 transition-colors">
                    Nuestra Empresa
                  </Link>
                  <Link
                    href="/nosotros#equipo"
                    className="block text-slate-700 hover:text-blue-600 ml-4 transition-colors"
                  >
                    Nuestro Equipo
                  </Link>
                  <Link
                    href="/nosotros#partners"
                    className="block text-slate-700 hover:text-blue-600 ml-4 transition-colors"
                  >
                    Partners
                  </Link>
                </div>
                <div className="space-y-2">
                  <p className="text-slate-500 text-sm font-semibold">Servicios</p>
                  <Link href="/servicios" className="block text-slate-700 hover:text-blue-600 ml-4 transition-colors">
                    Todos los Servicios
                  </Link>
                  <Link
                    href="/servicios#aps"
                    className="block text-slate-700 hover:text-blue-600 ml-4 transition-colors"
                  >
                    Sistemas APS
                  </Link>
                  <Link
                    href="/servicios#mes"
                    className="block text-slate-700 hover:text-blue-600 ml-4 transition-colors"
                  >
                    Sistemas MES
                  </Link>
                  <Link
                    href="/servicios#apqs"
                    className="block text-slate-700 hover:text-blue-600 ml-4 transition-colors"
                  >
                    Sistemas APQS
                  </Link>
                </div>
                <Link href="/blog" className="text-slate-700 hover:text-blue-600 text-lg font-medium transition-colors">
                  Blog
                </Link>
                <Link
                  href="/contacto"
                  className="text-slate-700 hover:text-blue-600 text-lg font-medium transition-colors"
                >
                  Contacto
                </Link>
                <Link
                  href="/eventos"
                  className="text-slate-700 hover:text-blue-600 text-lg font-medium transition-colors"
                >
                  Eventos
                </Link>
                <Button className="mt-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white">Solicitar Demo</Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
