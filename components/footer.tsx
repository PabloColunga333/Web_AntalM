import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/logo-antal-m.png"
                alt="Antal M - Effective Manufacturing Software"
                width={140}
                height={47}
                className="h-12 w-auto"
              />
            </Link>
            <div className="flex items-center gap-2">{/* Removed Factory icon and text for logo */}</div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Socio oficial de Siemens en soluciones ERP e Industria 4.0. Transformando la manufactura con tecnología de
              vanguardia.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-slate-400 hover:text-blue-500 transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="text-white font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/servicios/aps" className="text-slate-400 hover:text-white text-sm transition-colors">
                  Sistemas APS
                </Link>
              </li>
              <li>
                <Link href="/servicios/mes" className="text-slate-400 hover:text-white text-sm transition-colors">
                  Sistemas MES
                </Link>
              </li>
              <li>
                <Link href="/servicios/apqs" className="text-slate-400 hover:text-white text-sm transition-colors">
                  Sistemas APQS
                </Link>
              </li>
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h3 className="text-white font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/filosofia" className="text-slate-400 hover:text-white text-sm transition-colors">
                  Filosofía
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-slate-400 hover:text-white text-sm transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/eventos" className="text-slate-400 hover:text-white text-sm transition-colors">
                  Eventos
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-slate-400 hover:text-white text-sm transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-slate-400 text-sm">
                <Mail className="h-4 w-4 mt-0.5 text-blue-500 flex-shrink-0" />
                <span>contacto@antalm.com</span>
              </li>
              <li className="flex items-start gap-2 text-slate-400 text-sm">
                <Phone className="h-4 w-4 mt-0.5 text-cyan-400 flex-shrink-0" />
                <span>+52 (81) 8888-9999</span>
              </li>
              <li className="flex items-start gap-2 text-slate-400 text-sm">
                <MapPin className="h-4 w-4 mt-0.5 text-blue-500 flex-shrink-0" />
                <span>Monterrey, Nuevo León, México</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Antal M. Todos los derechos reservados. Siemens Partner Oficial.
          </p>
        </div>
      </div>
    </footer>
  )
}
