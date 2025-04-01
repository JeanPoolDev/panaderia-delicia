
export function Panderia() {
  return (
    <div className="h-auto relative">

      <header className="fixed top-3 left-1/2 transform -translate-x-1/2 bg-white  
            w-[1500px] h-[100px] rounded-full border">
        <div className="flex items-center h-full px-10 justify-between">
          <h1 className="text-xl font-bold">Delicia Pan</h1>
          <nav className="flex gap-6 text-[#9e7d5d] font-bold text-lg">
            <a href="#">Inicio</a>
            <a href="#">Sobre nosotros</a>
            <a href="#">Producto</a>
            <a href="#">Lugares</a>
          </nav>
          <a href="#" className="px-6 py-4 rounded-lg bg-[#9e7d5d] text-white">
            Contactanos
          </a>
        </div>
      </header>


      <div className="h-screen p-10">
        <div className="w-full h-full border rounded-2xl 
                bg-[url('https://i.pinimg.com/736x/6c/3a/e3/6c3ae3d7e20d902e7311ee80e9cd30ae.jpg')]
                bg-cover bg-center">

          <div className="w-full h-full degradado  flex items-end p-20 rounded-2xl">
            <h1 className="text-white text-6xl w-1/2">
              Desde el horno hasta tu mesa, frescura garantizada
            </h1>
          </div>

        </div>
      </div>

      <main className="h-auto py-10 px-20 space-y-20">

        <section className="flex h-[500px] gap-10">
          <div className="rounded-2xl w-2/6 
                    bg-[url('https://i.pinimg.com/736x/0e/02/88/0e02881977ba9a68ceca38cbdeb037e4.jpg')] 
                    bg-cover">
            <div className="p-20 flex flex-col justify-end h-full">
              <h2 className="text-9xl font-bold">30+</h2>
              <p className="text-3xl font-semibold">Variedad de producto</p>
            </div>
          </div>
          <div className="rounded-2xl w-4/6 flex bg-[#ede8e3]">
            <div className="w-4/6 p-10 space-y-20">
              <h2 className="text-6xl font-semibold">
                ¿Quiénes <span className="text-[#9e7d5d]">somos</span> nosotros?
              </h2>
              <p className="text-3xl w-5/6">
                Somos una panaderia dedicada a la mejor satisfaccion del
                paladar de nuestros clientes con productos de calidad
              </p>
            </div>
            <div className="w-2/6 p-4">
              <img
                className="object-cover w-full h-full rounded-2xl"
                src="https://i.pinimg.com/736x/66/ff/2f/66ff2f4f20d6af70010e94a1119ebbe3.jpg"
                alt="" />
            </div>
          </div>
        </section>

        <section className="space-y-10">
          <h2 className="text-6xl font-semibold">Los <span className="text-[#9e7d5d]">mejores</span> panes</h2>


          <div className="grid grid-cols-3 grid-rows-2 gap-4 h-[700px]">
            <div >
              <img
                className="w-full h-full object-cover rounded-2xl"
                src="https://i.pinimg.com/736x/61/04/8d/61048d15bdac6a74be0bb0492e112995.jpg"
                alt="" />
            </div>
            <div>
              <img
                className="w-full h-full object-cover rounded-2xl"
                src="https://i.pinimg.com/736x/a3/e0/f1/a3e0f1508cf99a1ac13c755c37aa50c6.jpg"
                alt="" />
            </div>
            <div className="col-span-2 col-start-1 row-start-2 rounded-2xl">

              <img
                className="w-full h-full object-cover rounded-2xl"
                src="https://i.pinimg.com/736x/5e/20/81/5e208121df206d1f97fed5922ee15c71.jpg"
                alt="" />
            </div>
            <div className="row-span-2 col-start-3 row-start-1 rounded-2xl">
              <img
                className="w-full h-full object-cover rounded-2xl"
                src="https://i.pinimg.com/736x/fa/2f/f8/fa2ff8e9df8c42b95d8ff8698a929fba.jpg"
                alt="" />
            </div>
          </div>

        </section>

        <section className="space-y-10">

          <h2 className="text-6xl font-semibold w-1/2">En <span className="text-[#9e7d5d]">Huancayo</span> , donde el pan artesanal cobra vida</h2>

          <div className="h-[800px] rounded-2xl bg-[#f7f6f2] flex items-center">
            <div className="w-1/2 space-y-8 px-10">

              <h1 className="text-6xl font-semibold">Una panadería, <span className="text-[#b59f86]">un espacio</span> para disfrutar con
                <span className="text-[#b59f86]"> la familia</span>
              </h1>

              <p className="text-xl">El local de nuestra panadería-cafetería combina elegancia y modernidad con un diseño centrado en la experiencia del cliente. Y cada mesa cuenta con cargadores USB y Wi-Fi.</p>

              <a href="#" className="py-4 px-6 bg-[#b59f86] rounded-lg text-white font-semibold">
                Direcciones aquí
              </a>

            </div>
            <div className="w-1/2">
              <img
                className="object-cover rounded aspect-square"
                src="https://i.pinimg.com/736x/11/8a/73/118a730672547150c4f32b9d9dfa83f9.jpg" alt="panaderia delicia" />
            </div>
          </div>

        </section>

        <footer className="text-center">
          <h2 className="text-[#9e7d5d] text-8xl opacity-30">PANADERIA ☕ DELICIA</h2>
          <p>2025 @derechos de autor reservados - jp</p>
        </footer>

      </main>


    </div>
  )
}