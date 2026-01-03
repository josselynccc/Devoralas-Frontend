import { NavLink } from "react-router";
import { LuStar } from "react-icons/lu";

const items = [
  { label: "Home", to: "/" },
  { label: "Menu", to: "/products" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

function Menu({ className = "" }) {
  return (
    <nav
      className={`flex items-center gap-6 font-nunito text-sm uppercase tracking-widest ${className}`}
    >
      {/* Estrella inicial */}
      <LuStar className="text-[var(--color-secondary)] text-[10px] opacity-40" />

      {items.map((item, index) => (
        <div key={item.to} className="flex items-center gap-6">
          <NavLink
            to={item.to}
            end
            className={({ isActive }) =>
              `transition ${
                isActive
                  ? "text-[var(--color-secondary)]"
                  : "text-default-foreground/80 hover:text-[var(--color-secondary)]"
              }`
            }
          >
            {item.label}
          </NavLink>

          {/* Estrella entre items */}
          {index < items.length - 1 && (
            <LuStar className="text-[var(--color-secondary)] text-[10px] opacity-30" />
          )}
        </div>
      ))}

      {/* Estrella final */}
      <LuStar className="text-[var(--color-secondary)] text-[10px] opacity-40" />
    </nav>
  );
}

export default Menu;
