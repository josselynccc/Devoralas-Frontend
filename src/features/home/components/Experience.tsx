import { FaMobileAlt, FaHamburger, FaMotorcycle } from "react-icons/fa";

export default function Experience() {
  const steps = [
    {
      icon: <FaMobileAlt />,
      title: "Elige",
      desc: "Selecciona tu combo favorito.",
    },
    {
      icon: <FaHamburger />,
      title: "Preparamos",
      desc: "Cocinamos al instante.",
    },
    {
      icon: <FaMotorcycle />,
      title: "Disfruta",
      desc: "Llegamos rápido y caliente.",
    },
  ];

  return (
    <section className="bg-[#0e0e0e] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center font-bungee text-3xl md:text-4xl text-white">
          La experiencia <span className="text-[var(--color-secondary)]">Devóralas</span>
        </h2>

        <div className="mt-14 grid gap-12 md:grid-cols-3 text-center">
          {steps.map((step, i) => (
            <div key={i}>
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-secondary)] text-black text-2xl">
                {step.icon}
              </div>
              <h3 className="text-lg font-semibold text-white">
                {step.title}
              </h3>
              <p className="mt-2 text-white/70 text-sm">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
