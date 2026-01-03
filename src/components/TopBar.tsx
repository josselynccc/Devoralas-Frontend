import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function TopBar() {
  return (
    <div className="bg-default-800 text-default-400 text-xs font-nunito">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-2">

        {/* LEFT */}
        <div className="flex items-center gap-4">
          <span className="uppercase tracking-widest">Follow us</span>
          <FaFacebookF className="cursor-pointer hover:text-[var(--color-secondary)] transition" />
          <FaInstagram className="cursor-pointer hover:text-[var(--color-secondary)] transition" />
          <FaWhatsapp className="cursor-pointer hover:text-[var(--color-secondary)] transition" />
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-6">
          <span className="hidden sm:block">
            Reservations: +51 999 888 777
          </span>

          <button className="border border-default-400 px-3 py-1 uppercase tracking-widest hover:border-[var(--color-secondary)] hover:text-[var(--color-secondary)] transition">
            Book now
          </button>
        </div>
      </div>
      <hr className="w-[80vw] mx-auto my-5 border-white/20" />
    </div>
  );
}
