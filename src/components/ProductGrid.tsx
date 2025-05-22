import { useState, useMemo } from "react";
import { Product, ProductCategory, ProductGender } from "@/types/product";
import ProductCard from "./ProductCard";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-react";

interface ProductGridProps {
  products: Product[];
}

const ProductGrid = ({ products }: ProductGridProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<ProductCategory | "all">(
    "all"
  );
  const [genderFilter, setGenderFilter] = useState<ProductGender | "all">(
    "all"
  );
  const [sortBy, setSortBy] = useState<string>("featured");

  const filteredProducts = useMemo(() => {
    console.log("Filtering products..."); // Log para debug
    return products.filter((product) => {
      // Filter by search query
      if (
        searchQuery &&
        !product.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !product.description.toLowerCase().includes(searchQuery.toLowerCase())
      ) {
        return false;
      }

      // Filter by category
      if (categoryFilter !== "all" && product.category !== categoryFilter) {
        return false;
      }

      // Filter by gender
      if (genderFilter !== "all" && !product.gender.includes(genderFilter)) {
        return false;
      }

      return true;
    });
  }, [products, searchQuery, categoryFilter, genderFilter]);

  // Sort products
  const sortedProducts = useMemo(() => {
    console.log("Sorting products..."); // Log para debug
    const productsToSort = [...filteredProducts];
    productsToSort.sort((a, b) => {
      switch (sortBy) {
        case "price-asc":
          return (a.discountPrice || a.price) - (b.discountPrice || b.price);
        case "price-desc":
          return (b.discountPrice || b.price) - (a.discountPrice || a.price);
        case "name":
          return a.name.localeCompare(b.name);
        case "rating":
          return b.rating - a.rating;
        case "featured":
        default:
          // Featured products first, then popular, then new, then by rating
          if (a.isFeatured && !b.isFeatured) return -1;
          if (!a.isFeatured && b.isFeatured) return 1;
          if (a.isPopular && !b.isPopular) return -1;
          if (!a.isPopular && b.isPopular) return 1;
          if (a.isNew && !b.isNew) return -1;
          if (!a.isNew && b.isNew) return 1;
          return b.rating - a.rating;
      }
    });
    return productsToSort;
  }, [filteredProducts, sortBy]);

  return (
    <div>
      <div className="mb-6 grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
        <div className="md:col-span-2 relative">
          <Input
            type="text"
            placeholder="Buscar produtos..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-black-800 bg-black-900 border-black-700 text-black-50 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black-700 text-center"
            aria-label="Buscar produtos"
          />
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-black-500"
            aria-hidden="true"
          />
        </div>
        <Select
          value={categoryFilter}
          onValueChange={(value) => setCategoryFilter(value as any)}
        >
          <SelectTrigger
            className="bg-black-800 border-black-700 text-black-50 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black-700"
            aria-label="Filtrar por categoria"
          >
            <SelectValue placeholder="Categoria" />
          </SelectTrigger>
          <SelectContent className="bg-black-900 border-black-700 text-black-50">
            <SelectItem value="all">Todas Categorias</SelectItem>
            <SelectItem value="injectable">Injetáveis</SelectItem>
            <SelectItem value="oral">Comprimidos</SelectItem>
          </SelectContent>
        </Select>
        <Select
          value={genderFilter}
          onValueChange={(value) => setGenderFilter(value as any)}
        >
          <SelectTrigger
            className="bg-black-800 border-black-700 text-black-50 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black-700"
            aria-label="Filtrar por gênero"
          >
            <SelectValue placeholder="Gênero" />
          </SelectTrigger>
          <SelectContent className="bg-black-900 border-black-700 text-black-50">
            <SelectItem value="all">Todos Gêneros</SelectItem>
            <SelectItem value="men">Homens</SelectItem>
            <SelectItem value="women">Mulheres</SelectItem>
          </SelectContent>
        </Select>
        <div className="md:col-span-4 mt-2"></div>
      </div>

      {sortedProducts.length === 0 ? (
        <div className="text-center py-12">
          <h3 className="text-lg font-medium text-black-100">
            Nenhum produto encontrado
          </h3>
          <p className="text-black-300 mt-2">
            Tente ajustar seus filtros ou busque por outro termo.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-center bg-[#0A0D0D]">
          {sortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductGrid;
