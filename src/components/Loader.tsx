import burger from "../assets/burger.png";

function Loader() {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-[white]">
      <img
        src={burger}
        alt="Cargando"
        className="w-20 animate-spin-slow"
      />
      <p className="font-bold text-[#F7C22F]">
        Cargando...
      </p>
    </div>
  );
}

export default Loader;