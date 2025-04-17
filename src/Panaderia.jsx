import { Header } from "./components/Header";
import { PanaderiaRouter } from "./router/PanaderiaRouter";

export function Panderia() {
  return (
    <div className="h-auto relative">

      <Header />

      <PanaderiaRouter />

    </div>
  )
}