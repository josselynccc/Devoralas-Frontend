import { NavLink } from "react-router";
import { LuStar } from "react-icons/lu";

interface MenuItem {
  label: string;
  to: string;
}

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

const items: MenuItem[] = [
  { label: "Home", to: "/" },
  { label: "Menu", to: "/products" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

const MobileMenu: React.FC<MobileMenuProps> = ({ open, onClose }) => {
  return (
    <div
      className={`
        md:hidden overflow-hidden transition-all duration-300
        ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
      `}
    >
      <nav className="flex flex-col items-center gap-6 py-6 bg-default-900/95 backdrop-blur-md font-nunito uppercase tracking-widest">
        <LuStar className="text-[var(--color-secondary)] text-xs opacity-40" />

        {items.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end
            onClick={onClose}
            className={({ isActive }) =>
              `transition text-sm ${
                isActive
                  ? "text-[var(--color-secondary)]"
                  : "text-default-foreground/80 hover:text-[var(--color-secondary)]"
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}

        <LuStar className="text-[var(--color-secondary)] text-xs opacity-40" />
      </nav>
    </div>
  );
};

export default MobileMenu;
