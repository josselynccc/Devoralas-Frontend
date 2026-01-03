import { useEffect, useState } from "react";
import table from '../../../assets/table.png';
const img = 'https://e-an.americatv.com.pe/redes-sociales-dia-hamburguesa-peruana-ofreceran-hamburguesas-gratis-esta-cadena-restaurantes-n393109-938x528-625535.jpg';
const slides = [
  {
    name: "La Devórala Clásica",
    description:
      "Hamburguesa artesanal con carne jugosa, queso cheddar y pan dorado.",
    image: img,
  },
  {
    name: "Alitas Inferno",
    description:
      "Alitas crocantes bañadas en salsa picante con un toque ahumado.",
    image: img,
  },
  {
    name: "Papas Brutales",
    description:
      "Papas fritas doradas, crujientes y con nuestra salsa especial.",
    image: img,
  },
  {
    name: "Burger BBQ",
    description:
      "Carne a la parrilla, salsa BBQ artesanal y cebolla caramelizada.",
    image: img,
  },
  {
    name: "Combo Devórala",
    description:
      "Hamburguesa + papas + bebida para los verdaderos hambrientos.",
    image: img,
  },
];

export default function Banner() {
  const [current, setCurrent] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  /* ---------------- AUTO SLIDE ---------------- */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  /* ---------------- SWIPE MOBILE ---------------- */
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;

    if (distance > minSwipeDistance) {
      // swipe izquierda → siguiente
      setCurrent((prev) => (prev + 1) % slides.length);
    }

    if (distance < -minSwipeDistance) {
      // swipe derecha → anterior
      setCurrent((prev) =>
        prev === 0 ? slides.length - 1 : prev - 1
      );
    }
  };

  const slide = slides[current];

  return (
    <section
      className="relative h-[90vh] w-full overflow-hidden"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Fondo base (luego va la tabla de madera) */}
      <div 
        className="absolute inset-0"
        style={{ 
          backgroundImage: `url(${table})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      <div className="absolute inset-0 bg-black/60" />

      {/* Contenido */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
        <div className="grid w-full items-center gap-12 md:grid-cols-2">
          
          {/* IMAGEN IZQUIERDA */}
          <div className="flex justify-center">
            <img
              key={slide.image}
              src={slide.image}
              alt={slide.name}
              className="max-h-[420px] w-auto animate-fadeInUp drop-shadow-2xl"
            />
          </div>

          {/* TEXTO DERECHA */}
          <div className="space-y-6 text-white">
            <span className="uppercase tracking-widest text-sm text-[var(--color-secondary)]">
              Platillo estrella
            </span>

            <h1 className="font-bungee text-4xl md:text-6xl leading-tight">
              {slide.name}
            </h1>

            <p className="max-w-md text-white/80">
              {slide.description}
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <button className="bg-[var(--color-secondary)] px-6 py-3 font-semibold uppercase text-black hover:scale-105 transition">
                Ver menú
              </button>
              <button className="border border-white/60 px-6 py-3 uppercase hover:bg-white hover:text-black transition">
                Ordenar ahora
              </button>
            </div>

            {/* INDICADORES */}
            <div className="flex gap-2 pt-6">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`h-2 w-8 rounded-full transition-all ${
                    index === current
                      ? "bg-[var(--color-secondary)]"
                      : "bg-white/20"
                  }`}
                  aria-label={`Slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
