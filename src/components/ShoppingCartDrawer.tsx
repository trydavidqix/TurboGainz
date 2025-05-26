import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useShoppingCart } from "@/context/ShoppingCartContext";
import { ShoppingCart, Trash, Plus, Minus, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const ShoppingCartDrawer = () => {
  const { items, removeItem, updateQuantity, clearCart, itemCount, subtotal } =
    useShoppingCart();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleCheckout = () => {
    setOpen(false);
    // Navigate to checkout
    navigate("/checkout");
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="relative border-black-700 hover:bg-black-800"
          aria-label="Abrir carrinho de compras"
        >
          <ShoppingCart className="h-5 w-5 text-black-50" aria-hidden="true" />
          {itemCount > 0 && (
            <Badge className="absolute -top-2 -right-2 bg-highlight hover:bg-highlight/90 w-5 h-5 p-0 rounded-full flex items-center justify-center">
              {itemCount}
            </Badge>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-md flex flex-col bg-[#0A0D0D] text-black-100 border-black-700">
        <SheetHeader className="mb-6">
          <SheetTitle className="text-xl font-bold flex items-center text-black-50">
            <ShoppingCart className="mr-2 h-6 w-6" aria-hidden="true" />{" "}
            Carrinho de Compras
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center">
            <ShoppingCart
              className="h-16 w-16 text-black-700 mb-4"
              aria-hidden="true"
            />
            <p className="text-black-300 mb-4">Seu carrinho está vazio</p>
            <Button
              variant="outline"
              onClick={() => setOpen(false)}
              className="border-black-700 hover:bg-black-800 text-black-50"
            >
              Continuar Comprando
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-auto pr-2 space-y-4">
              {items.map((item) => (
                <Link
                  key={item.product.id}
                  to={`/product/${item.product.id}`}
                  onClick={() => setOpen(false)}
                  className="block bg-black-900/50 rounded-lg p-4 hover:bg-black-800 transition-colors mb-2"
                  style={{ textDecoration: "none" }}
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-black-800 w-32 h-32 rounded-md flex-shrink-0 p-2">
                      <img
                        src={import.meta.env.BASE_URL + item.product.image}
                        alt={`Imagem de ${item.product.name}`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-black-50 hover:text-highlight transition-colors">
                        {item.product.name}
                      </div>
                      <p className="text-sm text-black-300 mt-1">
                        {item.product.category === "injectable"
                          ? "Injetável"
                          : "Comprimido"}
                      </p>
                      <div className="flex items-baseline gap-2 mt-2">
                        <span className="font-medium text-highlight">
                          R${" "}
                          {(
                            (item.product.discountPrice || item.product.price) *
                            item.quantity
                          )
                            .toFixed(2)
                            .replace(".", ",")}
                        </span>
                        {item.quantity > 1 && (
                          <span className="text-xs text-black-300">
                            (R${" "}
                            {(item.product.discountPrice || item.product.price)
                              .toFixed(2)
                              .replace(".", ",")}{" "}
                            cada)
                          </span>
                        )}
                      </div>
                    </div>
                    <div
                      className="flex flex-col items-end gap-2"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="flex items-center border border-black-700 rounded-md bg-black-800">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 p-0 text-black-50 hover:bg-black-700"
                          onClick={(e) => {
                            e.preventDefault();
                            updateQuantity(item.product.id, item.quantity - 1);
                          }}
                          aria-label="Diminuir quantidade"
                        >
                          <Minus className="h-3 w-3" aria-hidden="true" />
                        </Button>
                        <span className="w-8 text-center text-black-50">
                          {item.quantity}
                        </span>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 p-0 text-black-50 hover:bg-black-700"
                          onClick={(e) => {
                            e.preventDefault();
                            updateQuantity(item.product.id, item.quantity + 1);
                          }}
                          aria-label="Aumentar quantidade"
                        >
                          <Plus className="h-3 w-3" aria-hidden="true" />
                        </Button>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={(e) => {
                          e.preventDefault();
                          removeItem(item.product.id);
                        }}
                        className="text-black-300 hover:text-destructive h-8 w-8"
                        aria-label="Remover item"
                      >
                        <Trash className="h-4 w-4" aria-hidden="true" />
                      </Button>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-6 pt-6 space-y-4 border-t border-black-700">
              <div className="flex justify-between items-center">
                <span className="font-medium text-black-50">Subtotal:</span>
                <span className="font-bold text-xl text-highlight">
                  R$ {subtotal.toFixed(2).replace(".", ",")}
                </span>
              </div>

              <Button
                className="w-full border-black-700 hover:bg-black-800 text-black-50 text-lg h-12"
                onClick={handleCheckout}
              >
                Finalizar Compra
              </Button>

              <div className="flex gap-2">
                <Button
                  variant="outline"
                  className="flex-1 border-black-700 hover:bg-black-800 text-black-50"
                  onClick={() => setOpen(false)}
                >
                  Continuar Comprando
                </Button>
                <Button
                  variant="ghost"
                  className="text-black-300 hover:text-destructive flex items-center"
                  onClick={clearCart}
                  aria-label="Limpar carrinho"
                >
                  <X className="mr-1 h-4 w-4" aria-hidden="true" />
                  Limpar
                </Button>
              </div>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default ShoppingCartDrawer;
