import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useShoppingCart } from "@/context/ShoppingCartContext";
import { Link } from "react-router-dom";

const GavetaDoCarrinho = () => {
  const { itemCount } = useShoppingCart();

  return (
    <Sheet>
      <SheetTrigger>
        <img src="/icons/cart.gif" alt="Carrinho de Compras" className="h-5 w-5 text-black-50" aria-hidden="true" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="text-xl font-bold flex items-center text-black-50">
            <img src="/icons/cart.gif" alt="Carrinho de Compras" className="mr-2 h-6 w-6" aria-hidden="true" />{" "}
            Carrinho de Compras
          </SheetTitle>
        </SheetHeader>
        <div className="flex-1 flex flex-col items-center justify-center">
          <img
            src="/icons/cart.gif"
            alt="Carrinho de Compras"
            className="h-16 w-16 text-black-700 mb-4"
            aria-hidden="true"
          />
          {itemCount > 0 && (
            <p className="text-black-50">Você tem {itemCount} item(s) no carrinho.</p>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default GavetaDoCarrinho; 