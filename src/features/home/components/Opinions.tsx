import { FaStar } from "react-icons/fa";

const reviews = [
  {
    text: "La mejor hamburguesa que he probado en mucho tiempo",
    author: "Carlos M.",
    rating: 5,
  },
  {
    text: "Las alitas están a otro nivel, brutal sabor",
    author: "Joss L.",
    rating: 5,
  },
  {
    text: "Todo llegó caliente y con excelente presentación",
    author: "Andrea R.",
    rating: 5,
  },
  {
    text: "El combo Devóralas es simplemente adictivo",
    author: "Luis P.",
    rating: 5,
  },
  {
    text: "Se nota la calidad artesanal en cada bocado",
    author: "María F.",
    rating: 5,
  },
];

export default function Opinions() {
  return (
    <section className="bg-black py-20 overflow-hidden">
      {/* Título */}
      <div className="mb-12 text-center">
        <h2 className="text-3xl md:text-4xl text-white font-bold">
          Lo que dicen{" "}
          <span className="text-yellow-500">nuestros clientes</span>
        </h2>
      </div>

      {/* Viewport */}
      <div className="relative overflow-hidden">
        {/* Contenedor con animación */}
        <div className="flex gap-6 animate-scroll">
          {/* Primer set */}
          {reviews.map((review, index) => (
            <div
              key={`set1-${index}`}
              className="min-w-[300px] flex-shrink-0 rounded-xl border border-white/10 bg-white/5 px-6 py-5 backdrop-blur"
            >
              {/* Estrellas */}
              <div className="mb-3 flex gap-1 text-yellow-500">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <FaStar key={i} className="text-sm" />
                ))}
              </div>

              {/* Texto */}
              <p className="text-sm text-white/80 italic leading-relaxed">
                "{review.text}"
              </p>

              {/* Autor */}
              <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-white/60">
                — {review.author}
              </p>
            </div>
          ))}
          
          {/* Segundo set (duplicado para loop seamless) */}
          {reviews.map((review, index) => (
            <div
              key={`set2-${index}`}
              className="min-w-[300px] flex-shrink-0 rounded-xl border border-white/10 bg-white/5 px-6 py-5 backdrop-blur"
            >
              {/* Estrellas */}
              <div className="mb-3 flex gap-1 text-yellow-500">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <FaStar key={i} className="text-sm" />
                ))}
              </div>

              {/* Texto */}
              <p className="text-sm text-white/80 italic leading-relaxed">
                "{review.text}"
              </p>

              {/* Autor */}
              <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-white/60">
                — {review.author}
              </p>
            </div>
          ))}
        </div>

        {/* Fade laterales */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent z-10" />
      </div>
    </section>
  );
}