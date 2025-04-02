
export function Panderia() {
  return (
    <div className="h-auto relative">

      <header className="fixed top-3 left-1/2 transform -translate-x-1/2 bg-white  
            w-[350px] sm:w-[700px] xl:w-[1500px] h-[100px] rounded-full border z-[100]">
        <div className="flex items-center h-full px-10 justify-between">
          <a href="#" className="text-xl font-bold hover:scale-125 transition-all">
            Delicia Pan
          </a>
          <nav className="hidden xl:flex gap-6 text-[#9e7d5d] font-bold text-lg">
            <a href="#">Inicio</a>
            <a href="#about">Sobre nosotros</a>
            <a href="#panes">Producto</a>
            <a href="#place">Lugares</a>
          </nav>
          <a
            href="#"
            className="px-4 py-3 sm:px-6 sm:py-4 rounded-lg bg-[#9e7d5d] text-white">
            Contactanos
          </a>
        </div>
      </header>

      <div className="h-screen p-4 sm:p-10">
        <div className="w-full h-full border rounded-2xl 
                bg-[url('https://i.pinimg.com/736x/6c/3a/e3/6c3ae3d7e20d902e7311ee80e9cd30ae.jpg')]
                bg-cover bg-center">

          <div className="w-full h-full degradado flex items-end p-4 sm:p-20 rounded-2xl">
            <h1 className="text-white text-5xl sm:text-6xl w-full sm:w-1/2">
              Desde el horno hasta tu mesa, frescura garantizada
            </h1>
          </div>

        </div>
      </div>

      <main className="h-auto px-4 py-10 sm:px-20 space-y-20">

        <section
          id="about"
          className="flex flex-col lg:flex-row h-auto lg:h-[500px] gap-10">
          <div className="rounded-2xl lg:w-2/6 
                    bg-[url('https://i.pinimg.com/736x/0e/02/88/0e02881977ba9a68ceca38cbdeb037e4.jpg')] 
                    bg-cover">
            <div className="p-20 flex flex-col justify-end h-full">
              <h2 className="text-9xl font-bold">30+</h2>
              <p className="text-3xl font-semibold">Variedad de producto</p>
            </div>
          </div>
          <div className="rounded-2xl lg:w-4/6 flex flex-col lg:flex-row bg-[#ede8e3]">
            <div className="lg:w-4/6 p-4 md:p-10 space-y-20">
              <h2 className="text-6xl font-semibold">
                ¿Quiénes <span className="text-[#9e7d5d]">somos</span> nosotros?
              </h2>
              <p className="text-2xl xl:text-3xl lg:w-5/6">
                Somos una panaderia dedicada a la mejor satisfaccion del
                paladar de nuestros clientes con productos de calidad
              </p>
            </div>
            <div className="lg:w-2/6 p-4">
              <img
                className="object-cover w-full h-full rounded-2xl"
                src="https://i.pinimg.com/736x/66/ff/2f/66ff2f4f20d6af70010e94a1119ebbe3.jpg"
                alt="" />
            </div>
          </div>
        </section>

        <section className="space-y-10" id="panes">
          <h2 className="text-6xl font-semibold">Los <span className="text-[#9e7d5d]">mejores</span> panes</h2>

          <div className="grid grid-cols-1 grid-rows-1 gap-4 lg:grid-cols-3 lg:grid-rows-2 lg:h-[700px] h-auto">
            <div className="relative">

              <img
                className="w-full h-full object-cover rounded-2xl aspect-[4/3]"
                src="https://i.pinimg.com/736x/61/04/8d/61048d15bdac6a74be0bb0492e112995.jpg"
                alt=""
              />

              <div className="absolute bottom-0 left-0 degradado w-full h-full 
              flex items-end p-10 rounded-2xl opacity-0 hover:opacity-100 transition-all cursor-cell">
                <h1 className="text-[#b08e6c] font-bold text-5xl">Pan Bollo</h1>
              </div>

            </div>

            <div className="relative">
              <img
                className="w-full h-full object-cover rounded-2xl aspect-[4/3]"
                src="https://i.pinimg.com/736x/a3/e0/f1/a3e0f1508cf99a1ac13c755c37aa50c6.jpg"
                alt=""
              />

              <div className="absolute bottom-0 left-0 degradado w-full h-full 
              flex items-end p-10 rounded-2xl opacity-0 hover:opacity-100 transition-all cursor-cell">
                <h1 className="text-[#b08e6c] font-bold text-5xl">Pan Frances</h1>
              </div>
            </div>

            <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 relative">
              <img
                className="w-full h-full object-cover rounded-2xl aspect-[4/3]"
                src="https://i.pinimg.com/736x/5e/20/81/5e208121df206d1f97fed5922ee15c71.jpg"
                alt=""
              />

              <div className="absolute bottom-0 left-0 degradado w-full h-full 
              flex items-end p-10 rounded-2xl opacity-0 hover:opacity-100 transition-all cursor-cell">
                <h1 className="text-[#b08e6c] font-bold text-5xl">Pan Chocolate</h1>
              </div>

            </div>

            <div className="lg:row-span-2 lg:col-start-3 lg:row-start-1 relative">
              <img
                className="w-full h-full object-cover rounded-2xl aspect-[4/6]"
                src="https://i.pinimg.com/736x/fa/2f/f8/fa2ff8e9df8c42b95d8ff8698a929fba.jpg"
                alt=""
              />

              <div className="absolute bottom-0 left-0 degradado w-full h-full 
              flex items-end p-10 rounded-2xl opacity-0 hover:opacity-100 transition-all cursor-cell">
                <h1 className="text-[#b08e6c] font-bold text-5xl">Pan Jamon</h1>
              </div>
            </div>

          </div>

        </section>

        <section className="space-y-10" id="place">

          <h2 className="text-5xl lg:text-6xl font-semibold lg:w-1/2">En <span className="text-[#9e7d5d]">Huancayo</span> , donde el pan artesanal cobra vida</h2>

          <div className="h-auto lg:h-[800px] rounded-2xl bg-[#f7f6f2] flex flex-col lg:flex-row lg:items-center space-y-10 lg:space-y-0">
            <div className="lg:w-1/2 space-y-8 px-4 lg:px-10">

              <h1 className="text-6xl font-semibold">Una panadería, <span className="text-[#b59f86]">un espacio</span> para disfrutar con
                <span className="text-[#b59f86]"> la familia</span>
              </h1>

              <p className="text-2xl lg:text-xl">El local de nuestra panadería-cafetería combina elegancia y modernidad con un diseño centrado en la experiencia del cliente. Y cada mesa cuenta con cargadores USB y Wi-Fi.</p>

              <a
                target="_blank"
                href="https://maps.app.goo.gl/2o8mNqMrUd1TC3ZV8" className="py-4 px-6 bg-[#b59f86] rounded-lg text-white font-semibold">
                Direcciones aquí
              </a>

            </div>
            <div className="lg:w-1/2">
              <img
                className="object-cover rounded aspect-square"
                src="https://i.pinimg.com/736x/11/8a/73/118a730672547150c4f32b9d9dfa83f9.jpg" alt="panaderia delicia" />
            </div>
          </div>

        </section>

        <footer className="text-center">
          <h2 className="text-[#9e7d5d] text-5xl sm:text-8xl opacity-30">PANADERIA ☕ DELICIA</h2>
          <p>2025 @derechos de autor reservados - jp</p>
        </footer>

      </main>


    </div>
  )
}