import { FaFire } from 'react-icons/fa';

// ==================== CARD REUTILIZABLE ====================
function ProductCard({ product }: { product: typeof menuProducts[0] }) {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-white/5 border border-white/10 backdrop-blur transition-all hover:border-yellow-500/50 hover:shadow-xl hover:shadow-yellow-500/20">
      {/* Badge de picante */}
      {product.spicy && (
        <div className="absolute top-3 right-3 z-10 flex items-center gap-1 rounded-full bg-red-500 px-2 py-1 text-xs font-bold text-white">
          <FaFire className="text-xs" />
          PICANTE
        </div>
      )}

      {/* Imagen */}
      <div className="relative h-48 overflow-hidden bg-black/20">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      {/* Contenido */}
      <div className="p-5 space-y-3">
        {/* Categoría */}
        <span className="inline-block rounded-full bg-yellow-500/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-yellow-500">
          {product.category}
        </span>

        {/* Nombre */}
        <h3 className="font-bold text-xl text-white group-hover:text-yellow-500 transition-colors">
          {product.name}
        </h3>

        {/* Descripción */}
        <p className="text-sm text-white/70 leading-relaxed line-clamp-2">
          {product.description}
        </p>

        {/* Footer: Precio + Botón */}
        <div className="flex items-center justify-between pt-2">
          <span className="text-2xl font-bold text-yellow-500">
            S/. {product.price.toFixed(2)}
          </span>
          <button className="rounded-lg bg-yellow-500 px-4 py-2 text-sm font-semibold uppercase text-black transition-all hover:bg-yellow-400 hover:scale-105">
            Agregar
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;

// ==================== DATOS DEL MENÚ ====================
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const menuProducts = [
  {
    id: 1,
    name: "La Devórala Clásica",
    description: "Hamburguesa artesanal con carne jugosa de 200g, queso cheddar, lechuga, tomate y nuestra salsa especial",
    price: 18.90,
    category: "Hamburguesas",
    image: "/foods/burger1.png",
    spicy: false,
  },
  {
    id: 2,
    name: "Burger BBQ Bacon",
    description: "Doble carne, bacon crujiente, queso gouda, cebolla caramelizada y salsa BBQ ahumada",
    price: 24.90,
    category: "Hamburguesas",
    image: "/foods/burger2.png",
    spicy: false,
  },
  {
    id: 3,
    name: "La Picante Infernal",
    description: "Carne especiada, jalapeños, queso pepper jack, salsa habanero y aros de cebolla",
    price: 22.90,
    category: "Hamburguesas",
    image: "/foods/burger1.png",
    spicy: true,
  },
  {
    id: 4,
    name: "Veggie Devórala",
    description: "Hamburguesa de lentejas y quinoa, aguacate, rúcula, tomate y alioli de cilantro",
    price: 17.90,
    category: "Hamburguesas",
    image: "/foods/burger2.png",
    spicy: false,
  },
  {
    id: 5,
    name: "Alitas Clásicas",
    description: "12 alitas crujientes con tu elección de salsa: BBQ, búfalo o miel mostaza",
    price: 19.90,
    category: "Alitas",
    image: "/foods/wings.png",
    spicy: false,
  },
  {
    id: 6,
    name: "Alitas Inferno",
    description: "12 alitas extra picantes bañadas en salsa habanero con un toque ahumado",
    price: 21.90,
    category: "Alitas",
    image: "/foods/wings.png",
    spicy: true,
  },
  {
    id: 7,
    name: "Alitas Honey Sriracha",
    description: "12 alitas glaseadas con miel y sriracha, equilibrio perfecto dulce-picante",
    price: 20.90,
    category: "Alitas",
    image: "/foods/wings.png",
    spicy: true,
  },
  {
    id: 8,
    name: "Papas Brutales",
    description: "Papas fritas artesanales extra crujientes con nuestra salsa especial",
    price: 8.90,
    category: "Acompañamientos",
    image: "/foods/fries.png",
    spicy: false,
  },
  {
    id: 9,
    name: "Papas Cheddar Bacon",
    description: "Papas cubiertas con queso cheddar fundido, bacon crujiente y cebollino",
    price: 12.90,
    category: "Acompañamientos",
    image: "/foods/fries.png",
    spicy: false,
  },
  {
    id: 10,
    name: "Aros de Cebolla",
    description: "Aros de cebolla empanizados súper crujientes con salsa ranch",
    price: 9.90,
    category: "Acompañamientos",
    image: "/foods/fries.png",
    spicy: false,
  },
  {
    id: 11,
    name: "Coca Cola",
    description: "Bebida gaseosa 500ml",
    price: 4.50,
    category: "Bebidas",
    image: "/foods/combo.png",
    spicy: false,
  },
  {
    id: 12,
    name: "Inca Kola",
    description: "Bebida gaseosa nacional 500ml",
    price: 4.50,
    category: "Bebidas",
    image: "/foods/combo.png",
    spicy: false,
  },
  {
    id: 13,
    name: "Limonada Natural",
    description: "Limonada fresca preparada al momento",
    price: 6.00,
    category: "Bebidas",
    image: "/foods/combo.png",
    spicy: false,
  },
  {
    id: 14,
    name: "Combo Devórala",
    description: "Hamburguesa clásica + papas brutales + bebida de 500ml",
    price: 26.90,
    category: "Combos",
    image: "/foods/combo.png",
    spicy: false,
  },
  {
    id: 15,
    name: "Combo Alitas",
    description: "12 alitas + papas + bebida grande",
    price: 29.90,
    category: "Combos",
    image: "/foods/combo.png",
    spicy: false,
  },
];