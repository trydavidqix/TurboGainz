import { Button } from "@/components/ui/button";
import { Product } from "@/types/product";
import { useShoppingCart } from "@/context/ShoppingCartContext";
import { ShoppingCart } from "lucide-react";
import { Link, LinkProps } from "react-router-dom";
import React, { useState } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils"; // assuming cn is a helper for clsx/tailwind-merge
import Counter from "./Counter";
import cartGif from "/icons/cart.gif";

const productCardVariants = cva(
  "bg-[#0A0D0D] max-w-sm w-full rounded-lg shadow-md border flex flex-col h-full overflow-hidden transition-shadow duration-300 group",
  {
    variants: {
      // Define variants here if needed in the future, e.g.,
      // state: { soldOut: "opacity-50 cursor-not-allowed" },
      border: {
        // Example of conditional border based on state or props
        default: "border-black-700",
        hover: "hover:border-highlight hover:shadow-lg", // Apply hover styles as part of a variant
      },
    },
    defaultVariants: {
      border: "default", // Default border style
    },
  }
);

interface ProductCardProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  product: Product;
  // Add any other props that might affect variants here
}

const ProductCard = React.memo(
  ({
    product,
    className,
    ...props // className is now part of props due to AnchorHTMLAttributes
  }: ProductCardProps) => {
    const { addItem } = useShoppingCart();
    const [quantity, setQuantity] = useState(1);

    // Determine border variant - for now, just using default and hover built into base classes
    // In a more complex scenario, you might pass a variant prop and use it here:
    // const cardClasses = cn(productCardVariants({ variant: product.state }), className);

    return (
      <Link
        to={`/product/${product.id}`}
        className={cn(
          productCardVariants({ border: "default" }), // Apply base and default border
          "hover:border-highlight hover:shadow-lg", // Keep hover styles here for now or move to variant
          className // Apply any additional classes passed in
        )}
        style={{ textDecoration: "none" }}
        {...props} // Spread all other anchor props
      >
        <div className="relative h-39 bg-background flex items-center justify-center">
          <img
            src={
              product.image.startsWith("/")
                ? `${import.meta.env.BASE_URL}${product.image.substring(1)}`
                : product.image
            }
            alt={product.name}
            className="object-cover w-full h-full"
            loading="lazy"
          />
          {product.isNew && (
            <span className="absolute top-2 left-2 bg-highlight text-highlight-foreground px-2 py-1 text-xs rounded-full">
              NOVO
            </span>
          )}
          {product.discountPrice && (
            <span className="absolute top-2 right-2 bg-destructive text-destructive-foreground px-2 py-1 text-xs rounded-full">
              OFERTA
            </span>
          )}
        </div>
        <div className="flex-1 flex flex-col p-4">
          <h3 className="font-semibold text-lg text-black-50 group-hover:text-highlight mb-1 line-clamp-2">
            {product.name}
          </h3>
          <p className="text-black-300 text-sm mb-2 line-clamp-2">
            {product.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-2">
            {product.gender.map((g) => (
              <span
                key={g}
                className="px-2 py-1 text-xs rounded-full bg-black-800 text-black-50 font-medium"
              >
                {g === "men" ? "Homem" : g === "women" ? "Mulher" : g}
              </span>
            ))}
            <span className="px-2 py-1 text-xs rounded-full bg-black-800 text-black-50 font-medium">
              {product.category === "injectable" ? "Injetável" : "Comprimido"}
            </span>
          </div>
          <div className="font-bold text-xl text-highlight mb-2">
            R${" "}
            {(product.discountPrice || product.price)
              .toFixed(2)
              .replace(".", ",")}
          </div>
          <div className="mt-auto flex items-center gap-2">
            <Button
              onClick={(e) => {
                e.preventDefault();
                // Implementar lógica de adicionar ao carrinho aqui
                addItem(product, quantity); // Passa o produto e a quantidade explicitamente
              }}
              className="flex-grow bg-black-900 hover:bg-black-800 text-highlight-foreground"
            >
              Comprar
            </Button>
            <div className="flex items-center justify-between bg-black-900 rounded-md">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setQuantity((prev) => Math.max(1, prev - 1)); // Garante que a quantidade mínima é 1
                }}
                className="flex-1 p-2 text-white hover:bg-gray-600 rounded-l-md disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={quantity === 1}
              >
                -
              </button>
              <Counter
                value={quantity}
                fontSize={18}
                padding={2}
                gap={0}
                places={[10, 1]}
                textColor="white"
                fontWeight={600}
              />
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setQuantity((prev) => prev + 1);
                }}
                className="flex-1 p-2 text-white hover:bg-gray-600 rounded-r-md"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </Link>
    );
  }
);

ProductCard.displayName = "ProductCard";

export default ProductCard;
