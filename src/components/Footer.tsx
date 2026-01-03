import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-default-900 text-default-foreground font-nunito">
      
      {/* CONTENIDO */}
      <div className="mx-auto max-w-7xl grid gap-10 px-6 py-16 md:grid-cols-3">

        {/* COLUMNA 1 - LOGO */}
        <div>
          <h2 className="font-bungee text-2xl text-[var(--color-secondary)]">
            DEVÓRALAS
          </h2>
          <p className="mt-4 text-sm text-default-400">
            Hamburguesas artesanales hechas con pasión y fuego.
          </p>
        </div>

        {/* COLUMNA 2 - LINKS */}
        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest">
            Links
          </h3>

          <ul className="space-y-3 text-sm text-default-400">
            <li className="cursor-pointer hover:text-[var(--color-secondary)] transition">
              Home
            </li>
            <li className="cursor-pointer hover:text-[var(--color-secondary)] transition">
              Menu
            </li>
            <li className="cursor-pointer hover:text-[var(--color-secondary)] transition">
              Contact
            </li>
          </ul>
        </div>

        {/* COLUMNA 3 - SOCIAL */}
        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest">
            Síguenos
          </h3>

          <div className="flex gap-4 text-lg">
            <FaFacebookF className="cursor-pointer text-default-400 hover:text-[var(--color-secondary)] transition" />
            <FaInstagram className="cursor-pointer text-default-400 hover:text-[var(--color-secondary)] transition" />
            <FaWhatsapp className="cursor-pointer text-default-400 hover:text-[var(--color-secondary)] transition" />
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <hr className="w-[80vw] mx-auto my-1 border-white/20" />
      <div className="py-2 text-center text-xs text-default-500">
        © {new Date().getFullYear()} Devóralas. Todos los derechos reservados.
      </div>
    </footer>
  );
}
