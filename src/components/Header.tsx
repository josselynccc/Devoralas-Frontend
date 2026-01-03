import { useState } from "react";
import Menu from "./Menu";
import MobileMenu from "./MobileMenu";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import burger from "../assets/burger.png";

const Header: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <header className="sticky top-0 z-50 bg-default-900/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex flex-row gap-2 items-center">
          <img src={burger} alt="Burger" className="w-10 h-10" />
          <h1 className="font-bungee text-2xl tracking-widest text-[var(--color-secondary)]">
            DEVÓRALAS
          </h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex">
          <Menu />
        </div>

        {/* Mobile Icon */}
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="md:hidden text-lg text-default-foreground/80 hover:text-[var(--color-secondary)] transition"
          aria-label="Toggle menu"
        >
          {open ? <IoClose size={22} /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </header>
  );
};

export default Header;
