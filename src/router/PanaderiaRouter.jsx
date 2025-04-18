import { Route, Routes } from "react-router";

import { HomePage } from "../page/HomePage";
import { ShopPage } from "../page/ShopPage";
import { CartPage } from "../page/CartPage";

export function PanaderiaRouter() {
  return (
    <Routes>

      <Route path="/" element={<HomePage />} />
      <Route path="shop" element={<ShopPage />} />
      <Route path="cart" element={<CartPage />} />

    </Routes>
  );
};