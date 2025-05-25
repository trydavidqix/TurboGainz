import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { ChevronRight } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PromoCarousel from "@/components/PromoCarousel";
import { Helmet } from "react-helmet-async";
import RotatingText from "@/components/RotatingText";

import badgeIcon from "/icons/badge.png";
import fastDeliveryIcon from "/icons/fast-delivery.png";
import messageIcon from "/icons/message.png";

const HomePage = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredProducts = products
    .filter((product) => {
      if (activeCategory === "all") return true;
      if (activeCategory === "men") return product.gender.includes("men");
      if (activeCategory === "women") return product.gender.includes("women");
      if (activeCategory === "injectable")
        return product.category === "injectable";
      if (activeCategory === "oral") return product.category === "oral";
      return true;
    })
    .slice(0, 8);

  return (
    <div className="flex flex-col min-h-screen bg-[#0A0D0D]">
      <Helmet>
        <title>TurboGainz - Potencialize seus Resultados</title>
        <meta
          name="description"
          content="Produtos de alta qualidade para performance e resultados avançados. Formulações desenvolvidas para atletas exigentes."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Open Graph Meta Tags */}
        <meta
          property="og:title"
          content="TurboGainz - Potencialize seus Resultados"
        />
        <meta
          property="og:description"
          content="Produtos de alta qualidade para performance e resultados avançados. Formulações desenvolvidas para atletas exigentes."
        />
        {/* Substitua pela URL da imagem que você quer que apareça ao compartilhar */}
        <meta property="og:image" content="[URL_DA_IMAGEM_PARA_OG]" />
        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="TurboGainz - Potencialize seus Resultados"
        />
        <meta
          name="twitter:description"
          content="Produtos de alta qualidade para performance e resultados avançados. Formulações desenvolvidas para atletas exigentes."
        />
        {/* Substitua pela URL da imagem que você quer que apareça ao compartilhar no Twitter */}
        <meta name="twitter:image" content="[URL_DA_IMAGEM_PARA_TWITTER]" />
        {/* Favicons */}
        <link
          rel="icon"
          href={`${
            import.meta.env.BASE_URL
          }favicon_io/icons8-muscle-office-l-16.png`}
          sizes="16x16"
          type="image/png"
        />
        <link
          rel="icon"
          href={`${
            import.meta.env.BASE_URL
          }favicon_io/icons8-muscle-office-l-32.png`}
          sizes="32x32"
          type="image/png"
        />
        <link
          rel="apple-touch-icon"
          href={`${
            import.meta.env.BASE_URL
          }favicon_io/icons8-muscle-office-l-57.png`}
          sizes="57x57"
        />
        <link
          rel="apple-touch-icon"
          href={`${
            import.meta.env.BASE_URL
          }favicon_io/icons8-muscle-office-l-60.png`}
          sizes="60x60"
        />
        <link
          rel="icon"
          href={`${
            import.meta.env.BASE_URL
          }favicon_io/icons8-muscle-office-l-70.png`}
          sizes="70x70"
          type="image/png"
        />
        <link
          rel="apple-touch-icon"
          href={`${
            import.meta.env.BASE_URL
          }favicon_io/icons8-muscle-office-l-72.png`}
          sizes="72x72"
        />
        <link
          rel="apple-touch-icon"
          href={`${
            import.meta.env.BASE_URL
          }favicon_io/icons8-muscle-office-l-76.png`}
          sizes="76x76"
        />
        <link
          rel="icon"
          href={`${
            import.meta.env.BASE_URL
          }favicon_io/icons8-muscle-office-l-96.png`}
          sizes="96x96"
          type="image/png"
        />
      </Helmet>
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-[#0A0D0D] text-black-50 py-fluid-32">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-fluid-16">
            <div className="md:w-1/2 text-center md:text-left">
              <h1 className="text-fluid-h1 font-bold mb-4 text-black-50">
                Potencialize seus{" "}
                <RotatingText
                  texts={[
                    "Resultados",
                    "Ganhos",
                    "Ciclos",
                    "Shape",
                    "Modo monstro",
                  ]}
                  mainClassName="text-[#4A0B0B]"
                  staggerFrom="last"
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-120%" }}
                  staggerDuration={0.025}
                  splitLevelClassName="overflow-hidden"
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                  rotationInterval={2000}
                />
              </h1>
              <p className="text-fluid-lg mb-8 text-black-200 max-w-md mx-auto md:mx-0">
                Produtos de alta qualidade para performance e resultados
                avançados. Formulações desenvolvidas para atletas exigentes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button
                  size="lg"
                  className="bg-black-700 text-black-50 hover:bg-black-600"
                  asChild
                >
                  <Link to="/products">Ver Produtos</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-black-700 text-black-50 hover:bg-black-800"
                  asChild
                >
                  <Link to="/about">Saber Mais</Link>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 w-full flex justify-center">
              <PromoCarousel />
            </div>
          </div>
        </section>

        {/* Categories Section - Updated to match Benefits style */}
        <section className="py-fluid-32 bg-[#0A0D0D] text-black-50">
          <div className="container mx-auto px-4">
            <h2 className="text-fluid-h2 font-bold mb-12 text-center text-[#f6f6f6]">
              Categorias
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Para Homens */}
              <Link to="/category/men" className="group">
                <div className="bg-black-900 rounded-xl p-8 border border-black-700 transition-all duration-300 hover:bg-[#262626] flex flex-col h-full">
                  <img
                    src={`${
                      import.meta.env.BASE_URL
                    }icons/icons8-muscle-flexing-skin-type-3-96.png`}
                    alt="Ícone de Músculo para Homens"
                    className="w-16 h-16 object-contain mx-auto mb-6"
                    loading="lazy"
                  />
                  <h3 className="text-fluid-h3 font-bold mb-4 text-center text-[#f6f6f6]">
                    Para Homens
                  </h3>
                  <p className="text-[#f6f6f6] text-center leading-relaxed mb-4">
                    Produtos específicos para o público masculino
                  </p>
                  <div className="flex justify-center">
                    <span className="text-[#f6f6f6] inline-flex items-center group-hover:underline">
                      Ver produtos
                      <ChevronRight
                        className="ml-1 h-4 w-4"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                </div>
              </Link>

              {/* Para Mulheres */}
              <Link to="/category/women" className="group">
                <div className="bg-black-900 rounded-xl p-8 border border-black-700 transition-all duration-300 hover:bg-[#262626] flex flex-col h-full">
                  <img
                    src={`${
                      import.meta.env.BASE_URL
                    }icons/icons8-weightlift-64.png`}
                    alt="Ícone de Halter para Mulheres"
                    className="w-16 h-16 object-contain mx-auto mb-6"
                    loading="lazy"
                  />
                  <h3 className="text-fluid-h3 font-bold mb-4 text-center text-[#f6f6f6]">
                    Para Mulheres
                  </h3>
                  <p className="text-[#f6f6f6] text-center leading-relaxed mb-4">
                    Produtos específicos para o público feminino
                  </p>
                  <div className="flex justify-center">
                    <span className="text-[#f6f6f6] inline-flex items-center group-hover:underline">
                      Ver produtos
                      <ChevronRight
                        className="ml-1 h-4 w-4"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                </div>
              </Link>

              {/* Injetáveis */}
              <Link to="/category/injectable" className="group">
                <div className="bg-black-900 rounded-xl p-8 border border-black-700 transition-all duration-300 hover:bg-[#262626] flex flex-col h-full">
                  <img
                    src={`${
                      import.meta.env.BASE_URL
                    }icons/icons8-injection-64.png`}
                    alt="Ícone de Seringa para Injetáveis"
                    className="w-16 h-16 object-contain mx-auto mb-6"
                    loading="lazy"
                  />
                  <h3 className="text-fluid-h3 font-bold mb-4 text-center text-[#f6f6f6]">
                    Injetáveis
                  </h3>
                  <p className="text-[#f6f6f6] text-center leading-relaxed mb-4">
                    Hormônios e suplementos injetáveis
                  </p>
                  <div className="flex justify-center">
                    <span className="text-[#f6f6f6] inline-flex items-center group-hover:underline">
                      Ver produtos
                      <ChevronRight
                        className="ml-1 h-4 w-4"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                </div>
              </Link>

              {/* Comprimidos */}
              <Link to="/category/oral" className="group">
                <div className="bg-black-900 rounded-xl p-1 border border-black-700 transition-all duration-300 hover:bg-[#262626] flex flex-col h-full w-full justify-evenly">
                  <img
                    src={`${import.meta.env.BASE_URL}icons/icons8-pills-50.png`}
                    alt="Ícone de Pílulas para Comprimidos"
                    className="w-16 h-16 object-contain mx-auto mb-6"
                    loading="lazy"
                  />
                  <h3 className="text-fluid-h3 font-bold mb-4 text-center text-[#f6f6f6] w-full break-words ml-[-2]">
                    Comprimidos
                  </h3>
                  <p className="text-[#f6f6f6] text-center leading-relaxed mb-4">
                    Hormônios e suplementos em comprimidos
                  </p>
                  <div className="flex justify-center">
                    <span className="text-[#f6f6f6] inline-flex items-center group-hover:underline">
                      Ver produtos
                      <ChevronRight
                        className="ml-1 h-4 w-4"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-16">
          <div className="container mx-auto py-12 px-4 bg-shark-900 rounded-lg">
            <h2 className="text-fluid-h2 font-bold text-black-50 mb-2 text-center">
              Conheça Nossos Produtos
            </h2>
            <p className="text-black-200 mb-8 text-center max-w-2xl mx-auto">
              Suplementos e hormônios de alta qualidade para maximizar seus
              resultados
            </p>

            <div className="mb-8">
              <Tabs defaultValue="all" onValueChange={setActiveCategory}>
                <div className="flex justify-center mb-8 overflow-x-auto">
                  <TabsList className="bg-black-900 hover:bg-black-800 inline-flex">
                    <TabsTrigger
                      value="all"
                      className="data-[state=active]:bg-highlight data-[state=active]:text-highlight transition-colors duration-300 hover:h-full"
                    >
                      Todos
                    </TabsTrigger>
                    <TabsTrigger
                      value="men"
                      className="data-[state=active]:bg-highlight data-[state=active]:text-highlight transition-colors duration-300  hover:h-full"
                    >
                      Homens
                    </TabsTrigger>
                    <TabsTrigger
                      value="women"
                      className="data-[state=active]:bg-highlight data-[state=active]:text-highlight transition-colors duration-300  hover:h-full"
                    >
                      Mulheres
                    </TabsTrigger>
                    <TabsTrigger
                      value="injectable"
                      className="data-[state=active]:bg-highlight data-[state=active]:text-highlight transition-colors duration-300  hover:h-full"
                    >
                      Injetáveis
                    </TabsTrigger>
                    <TabsTrigger
                      value="oral"
                      className="data-[state=active]:bg-highlight data-[state=active]:text-highlight transition-colors duration-300  hover:h-full"
                    >
                      Comprimidos
                    </TabsTrigger>
                  </TabsList>
                </div>

                <TabsContent value="all">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {filteredProducts.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="men">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {filteredProducts.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="women">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {filteredProducts.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="injectable">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {filteredProducts.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="oral">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {filteredProducts.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            <div className="text-center">
              <Button
                size="lg"
                className="bg-black-900 hover:bg-black-800"
                asChild
              >
                <Link to="/products">Ver todos os produtos</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Benefits Section - Updated to Cards */}
        <section className="py-16 bg-[#0A0D0D] text-black-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Por que escolher a TurboGainz?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1 - Qualidade */}
              <div className="bg-black-900 rounded-xl p-8 border border-black-700 transition-all duration-300 hover:bg-[#262626] flex flex-col h-full">
                <img
                  src={badgeIcon}
                  alt="Ícone de Qualidade"
                  className="w-16 h-16 object-contain mx-auto mb-6"
                />
                <h3 className="text-xl font-bold mb-4 text-center text-[#f6f6f6]">
                  Produtos de Qualidade
                </h3>
                <p className="text-[#f6f6f6] text-center leading-relaxed">
                  Todos os nossos produtos passam por rigoroso controle de
                  qualidade para garantir resultados.
                </p>
              </div>

              {/* Card 2 - Entrega */}
              <div className="bg-black-900 rounded-xl p-8 border border-black-700 transition-all duration-300 hover:bg-[#262626] flex flex-col h-full">
                <img
                  src={fastDeliveryIcon}
                  alt="Ícone de Entrega"
                  className="w-16 h-16 object-contain mx-auto mb-6"
                />
                <h3 className="text-xl font-bold mb-4 text-center text-[#f6f6f6]">
                  Entrega Rápida
                </h3>
                <p className="text-[#f6f6f6] text-center leading-relaxed">
                  Enviamos seus pedidos em até 24h com embalagem discreta e
                  sistema de rastreamento.
                </p>
              </div>

              {/* Card 3 - Suporte */}
              <div className="bg-black-900 rounded-xl p-8 border border-black-700 transition-all duration-300 hover:bg-[#262626] flex flex-col h-full">
                <img
                  src={messageIcon}
                  alt="Ícone de Suporte"
                  className="w-16 h-16 object-contain mx-auto mb-6"
                />
                <h3 className="text-xl font-bold mb-4 text-center text-[#f6f6f6]">
                  Suporte Especializado
                </h3>
                <p className="text-[#f6f6f6] text-center leading-relaxed">
                  Nossa equipe está disponível para ajudar com dúvidas sobre
                  produtos e ciclos.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-black-50 mb-2 text-center">
              O que dizem nossos clientes
            </h2>
            <p className="text-black-200 mb-12 text-center max-w-2xl mx-auto">
              Veja a opinião de quem já obteve resultados com nossos produtos
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#0A0D0D] p-6 rounded-lg shadow border border-black-700">
                <div className="flex items-center gap-1 text-yellow-400 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-white mb-4">
                  "Uso a Testosterona Enantato há 3 meses e os resultados são
                  inacreditáveis. Ganho muscular e energia significativos sem
                  efeitos colaterais graves."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-black-200 rounded-full"></div>
                  <div>
                    <p className="font-medium">Ricardo M.</p>
                    <p className="text-sm text-black-500">Cliente desde 2023</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#0A0D0D] p-6 rounded-lg shadow border border-black-700">
                <div className="flex items-center gap-1 text-yellow-400 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-white mb-4">
                  "A Oxandrolona é perfeita para nós mulheres. Tenho conseguido
                  definição muscular sem efeitos masculinizantes. Recomendo
                  muito."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-black-200 rounded-full"></div>
                  <div>
                    <p className="font-medium">Amanda S.</p>
                    <p className="text-sm text-black-500">Cliente desde 2022</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#0A0D0D] p-6 rounded-lg shadow border border-black-700">
                <div className="flex items-center gap-1 text-yellow-400 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-white mb-4">
                  "O suporte da TurboGainz é excelente. Me ajudaram a montar meu
                  primeiro ciclo de Trembolona e os resultados foram excelentes.
                  Entrega rápida."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-black-200 rounded-full"></div>
                  <div>
                    <p className="font-medium">Bruno L.</p>
                    <p className="text-sm text-black-500">Cliente desde 2021</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
