import { useContext } from "react";
import { Footer } from "../components";
import { Pan } from "../components/Pan";
import { PanContext } from "../context";


export function ShopPage() {

  const { productos, addToCart } = useContext(PanContext);

  return (
    <div className="mt-[200px] h-auto max-w-6xl m-auto">

      <section className="grid grid-cols-3 gap-4">
        {
          productos.map(producto => (
            <Pan
              key={producto.id}
              producto={producto}
              addToCart={addToCart}
            />
          ))
        }
      </section>

      <Footer />
    </div>
  );
};