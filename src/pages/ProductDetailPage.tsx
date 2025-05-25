import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { products } from "@/data/products";
import { Product } from "@/types/product";
import { useShoppingCart } from "@/context/ShoppingCartContext";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ShoppingCart, ArrowLeft, Minus, Plus } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import Counter from "@/components/Counter";

const ProductDetailPage = () => {
  const { productId } = useParams<{ productId: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const { addItem } = useShoppingCart();

  useEffect(() => {
    window.scrollTo(0, 0);

    const foundProduct = products.find((p) => p.id === productId);

    if (foundProduct) {
      setProduct(foundProduct);

      // Find related products (same category or gender)
      const related = products
        .filter((p) => p.id !== foundProduct.id)
        .filter(
          (p) =>
            p.category === foundProduct.category ||
            p.type === foundProduct.type ||
            p.gender.some((g) => foundProduct.gender.includes(g))
        )
        .slice(0, 4);

      setRelatedProducts(related);
    } else {
      // Adicionar um log ou feedback visual se o produto não for encontrado
      console.error(`Produto com id ${productId} não encontrado.`);
      setProduct(null); // Garantir que o estado do produto é nulo
    }

    setLoading(false);
  }, [productId]);

  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrementQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const handleAddToCart = () => {
    if (product) {
      addItem(product, quantity);
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center py-16">
            <div className="w-12 h-12 border-4 border-shark-900 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-shark-600">Carregando produto...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center py-16">
            <h1 className="text-2xl font-bold text-shark-900 mb-4">
              Produto não encontrado
            </h1>
            <p className="text-shark-600 mb-6">
              O produto que você está procurando não existe ou foi removido.
            </p>
            <Button asChild>
              <Link to="/products">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Voltar para produtos
              </Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 py-12 bg-[#0A0D0D]">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <div className="flex items-center text-sm text-black-300 mb-6">
            <Link to="/" className="hover:text-black-100">
              Início
            </Link>
            <span className="mx-2">/</span>
            <Link to="/products" className="hover:text-black-100">
              Produtos
            </Link>
            <span className="mx-2">/</span>
            <Link
              to={`/category/${product.category}`}
              className="hover:text-black-100"
            >
              {product.category === "injectable" ? "Injetáveis" : "Comprimidos"}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-black-50">{product.name}</span>
          </div>

          {/* Product details */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Product image */}
            <div className="bg-black-900 rounded-lg border border-black-700 shadow-sm flex items-center justify-center w-full max-w-[27rem] mx-auto h-100">
              {product && (
                <img
                  src={import.meta.env.BASE_URL + product.image}
                  alt={product.name}
                  className="w-full h-full object-cover rounded-lg"
                />
              )}
            </div>

            {/* Product info */}
            <div>
              <h1 className="text-3xl font-bold text-black-50 mb-2">
                {product.name}
              </h1>

              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center gap-1 text-yellow-400">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className={`w-4 h-4 ${
                        star <= Math.round(product.rating)
                          ? "text-yellow-400"
                          : "text-shark-200"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-black-300">
                  {product.rating.toFixed(1)} ({product.reviews} avaliações)
                </span>
              </div>

              <div className="flex items-center gap-2 mb-6">
                {product.gender.includes("men") && (
                  <span className="text-xs px-2 py-1 bg-blue-900 text-blue-100 rounded-full">
                    Homem
                  </span>
                )}
                {product.gender.includes("women") && (
                  <span className="text-xs px-2 py-1 bg-pink-900 text-pink-100 rounded-full">
                    Mulher
                  </span>
                )}
                <span className="text-xs px-2 py-1 bg-black-700 text-black-100 rounded-full">
                  {product.category === "injectable"
                    ? "Injetável"
                    : "Comprimido"}
                </span>
              </div>

              <div className="flex items-baseline gap-3 mb-6">
                {product.discountPrice ? (
                  <>
                    <span className="text-3xl font-bold text-black-100">
                      R$ {product.discountPrice.toFixed(2).replace(".", ",")}
                    </span>
                    <span className="text-lg text-black-300 line-through">
                      R$ {product.price.toFixed(2).replace(".", ",")}
                    </span>
                    <span className="bg-red-900 text-red-100 px-2 py-1 text-sm rounded">
                      {Math.round(
                        (1 - product.discountPrice / product.price) * 100
                      )}
                      % OFF
                    </span>
                  </>
                ) : (
                  <span className="text-3xl font-bold text-black-100">
                    R$ {product.price.toFixed(2).replace(".", ",")}
                  </span>
                )}
              </div>

              <p className="text-black-100 mb-6">{product.description}</p>

              <div className="mb-8">
                <div className="flex items-center mb-2">
                  <div
                    className={`w-3 h-3 rounded-full ${
                      product.stock > 0 ? "bg-green-500" : "bg-red-500"
                    } mr-2`}
                  ></div>
                  <span
                    className={`text-sm ${
                      product.stock > 0 ? "text-green-400" : "text-red-400"
                    }`}
                  >
                    {product.stock > 0
                      ? `Em estoque (${product.stock} unidades)`
                      : "Sem estoque"}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4 mb-8 w-full">
                {/* Container para o Contador e botões +/- */}
                <div className="flex items-center justify-between bg-[#3d3d3d] rounded-md w-1/2">
                  <button
                    onClick={decrementQuantity}
                    disabled={quantity <= 1}
                    className="p-2 text-white hover:bg-gray-600 rounded-l-md disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    -
                  </button>
                  {/* Substitui o span pelo componente Counter */}
                  <Counter
                    value={quantity}
                    fontSize={18}
                    padding={2}
                    gap={0}
                    places={[10, 1]}
                    textColor="white"
                    fontWeight={600}
                    containerStyle={{
                      width: "auto",
                      display: "flex",
                      justifyContent: "center",
                    }}
                    digitStyle={{ width: "1ch" }}
                  />
                  <button
                    onClick={incrementQuantity}
                    className="p-2 text-white hover:bg-gray-600 rounded-r-md"
                  >
                    +
                  </button>
                </div>

                <Button
                  size="lg"
                  onClick={handleAddToCart}
                  disabled={product.stock === 0}
                  className="flex-grow bg-black-900 hover:bg-black-800 text-highlight-foreground w-1/2"
                >
                  <ShoppingCart className="mr-2 h-5 w-5" aria-hidden="true" />
                  Adicionar ao carrinho
                </Button>
              </div>

              <div className="space-y-2 text-sm text-black-100 border-t border-black-700 pt-6">
                <div className="flex gap-2">
                  <span className="font-semibold min-w-32">
                    Uso recomendado:
                  </span>
                  <span>{product.usage}</span>
                </div>
                <div className="flex gap-2">
                  <span className="font-semibold min-w-32">Tempo de uso:</span>
                  <span>{product.duration}</span>
                </div>
                <div className="flex gap-2">
                  <span className="font-semibold min-w-32">Indicação:</span>
                  <span>{product.indications}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Product details tabs */}
          <div className="mt-12">
            <Tabs defaultValue="details">
              <TabsList className="bg-black-900 border-black-700">
                <TabsTrigger
                  value="details"
                  className="text-black-100 data-[state=active]:bg-black-700 data-[state=active]:text-black-50"
                >
                  Detalhes do produto
                </TabsTrigger>
                <TabsTrigger
                  value="usage"
                  className="text-black-100 data-[state=active]:bg-black-700 data-[state=active]:text-black-50"
                >
                  Modo de uso
                </TabsTrigger>
                <TabsTrigger
                  value="precautions"
                  className="text-black-100 data-[state=active]:bg-black-700 data-[state=active]:text-black-50"
                >
                  Precauções
                </TabsTrigger>
                <TabsTrigger
                  value="side-effects"
                  className="text-black-100 data-[state=active]:bg-black-700 data-[state=active]:text-black-50"
                >
                  Efeitos colaterais
                </TabsTrigger>
                <TabsTrigger
                  value="benefits"
                  className="text-black-100 data-[state=active]:bg-black-700 data-[state=active]:text-black-50"
                >
                  Benefícios
                </TabsTrigger>
              </TabsList>

              <TabsContent value="details" className="text-black-100">
                <h3 className="text-xl font-bold text-black-50 mb-4">
                  Características do produto
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-black-100">
                  {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </TabsContent>

              <TabsContent value="usage" className="text-black-100">
                <h3 className="text-xl font-bold text-black-50 mb-4">
                  Modo de uso
                </h3>
                <p className="text-black-100 mb-4">{product.usage}</p>
                <p className="text-black-100">
                  Período recomendado: {product.duration}
                </p>
              </TabsContent>

              <TabsContent value="precautions" className="text-black-100">
                <h3 className="text-xl font-bold text-black-50 mb-4">
                  Precauções
                </h3>
                <p className="text-black-100">{product.precautions}</p>
              </TabsContent>

              <TabsContent value="side-effects" className="text-black-100">
                <h3 className="text-xl font-bold text-black-50 mb-4">
                  Possíveis efeitos colaterais
                </h3>
                <p className="text-black-100">{product.sideEffects}</p>
              </TabsContent>

              <TabsContent value="benefits" className="text-black-100">
                <h3 className="text-xl font-bold text-black-50 mb-4">
                  Benefícios
                </h3>
                <p className="text-black-100">{product.benefits}</p>
              </TabsContent>
            </Tabs>
          </div>

          {/* Related products */}
          {relatedProducts.length > 0 && (
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-black-50 mb-6">
                Produtos relacionados
              </h3>
              <div className="product-grid">
                {relatedProducts.map((relatedProduct) => (
                  <ProductCard
                    key={relatedProduct.id}
                    product={relatedProduct}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetailPage;
