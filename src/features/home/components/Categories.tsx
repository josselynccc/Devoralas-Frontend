export default function Categories() {
  const img = 'https://e-an.americatv.com.pe/redes-sociales-dia-hamburguesa-peruana-ofreceran-hamburguesas-gratis-esta-cadena-restaurantes-n393109-938x528-625535.jpg';
  const alita = 'https://www.popeyes.com.pe/media/catalog/product/p/p/pp2146468860.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700&format=jpeg';
  const papas = 'https://www.burgerfi.com/wp-content/uploads/2020/10/BFI_20_WB_Fries.jpg';
  const categories = [
    {
      name: "Hamburguesas",
      image: img,
    },
    {
      name: "Alitas",
      image: alita,
    },
    {
      name: "Papas & Snacks",
      image: papas,
    },
  ];

  return (
    <section className="bg-black py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-12 text-center font-bungee text-3xl md:text-4xl text-white">
          Explora nuestras <span className="text-[var(--color-secondary)]">categorías</span>
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="group relative h-[320px] overflow-hidden rounded-2xl"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/50 flex items-end p-6">
                <h3 className="text-2xl font-bold text-white">
                  {cat.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
