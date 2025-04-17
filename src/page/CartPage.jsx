import { useContext } from "react";
import { PanContext } from "../context";
import { Add, Delete, Minus } from "../icons";

export function CartPage() {

  const { cart, removeCart } = useContext(PanContext);

  return (
    <div className="mt-[200px] h-auto max-w-7xl m-auto pb-10">

      <h1 className="mb-10 font-semibold text-3xl">Tus ordenes</h1>

      {
        cart.map(({ id, categoria, precio, nombre, imagen }) => (
          <section
            key={id}
            className="grid grid-cols-3 h-auto border-t border-b py-5">

            <div className="flex gap-5 items-center">
              <img
                className="w-20 h-20 object-cover rounded-full"
                src={imagen}
                alt={nombre} />
              <div>
                <h1 className="font-bold">{nombre}</h1>
                <p>{categoria}</p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-4">
              <button className="font-bold text-xl cursor-pointer">
                <Minus />
              </button>
              <p className="w-8 h-8 border grid place-content-center">1</p>
              <button className="font-bold text-xl cursor-pointer">
                <Add />
              </button>
            </div>

            <div className="flex items-center justify-end gap-6">
              <p className="text-xl">S/.{precio}</p>
              <button
                onClick={() => removeCart(id)}
                className="cursor-pointer">
                <Delete />
              </button>
            </div>
          </section>
        ))
      }


    </div>
  );
};