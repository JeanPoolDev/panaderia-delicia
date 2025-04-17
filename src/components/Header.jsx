import { Cart } from "../icons";

export function Header() {
  return (
    <header className="fixed top-3 left-1/2 transform -translate-x-1/2 bg-white  
            w-[350px] sm:w-[700px] xl:w-[1300px] h-[100px] rounded-full border z-[100]">
      <div className="flex items-center h-full px-10 justify-between">
        <a href="/" className="text-xl font-bold hover:scale-125 transition-all">
          Delicia Pan
        </a>
        <nav className="hidden xl:flex gap-6 text-[#9e7d5d] font-bold text-lg">
          <a href="/">Inicio</a>
          <a href="#about">Sobre nosotros</a>
          <a href="#panes">Producto</a>
          <a href="#place">Lugares</a>
          <a href="/shop">Tienda</a>
        </nav>
        <a
          href="/cart"
          className="px-4 py-3 sm:px-6 sm:py-4 rounded-lg bg-[#9e7d5d] text-white">
          <Cart />
        </a>
      </div>
    </header>
  );
};