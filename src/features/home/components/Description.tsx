import { FaFire, FaHamburger, FaClock } from "react-icons/fa";

export default function Description() {
  const items = [
    {
      icon: <FaHamburger />,
      title: "Sabor Brutal",
      desc: "Recetas artesanales con ingredientes premium.",
    },
    {
      icon: <FaFire />,
      title: "Siempre Recién Hecho",
      desc: "Nada congelado. Todo al momento.",
    },
    {
      icon: <FaClock />,
      title: "Rápido & Potente",
      desc: "Ideal para cuando el hambre no espera.",
    },
  ];

  return (
    <section className="bg-[#0e0e0e] py-20">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <h2 className="font-bungee text-3xl md:text-4xl text-white">
          ¿Por qué <span className="text-[var(--color-secondary)]">DEVÓRALAS</span>?
        </h2>

        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {items.map((item, i) => (
            <div
              key={i}
              className="rounded-xl border border-white/10 bg-white/5 p-8 backdrop-blur hover:border-[var(--color-secondary)] transition"
            >
              <div className="mb-4 text-3xl text-[var(--color-secondary)] flex justify-center">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-white/70 text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
