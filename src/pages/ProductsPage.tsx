import { useState } from "react";
import { products } from "@/data/products";
import ProductGrid from "@/components/ProductGrid";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProductType } from "@/types/product";

const ProductsPage = () => {
  const [selectedType, setSelectedType] = useState<ProductType | 'all'>('all');
  
  const filteredProducts = selectedType === 'all' 
    ? products 
    : products.filter(product => product.type === selectedType);
  
const productTypes: Array<{ id: InjectableType | OralType | 'all', name: string }> = [
  { id: 'all', name: 'Todos' },
  // Injetáveis
  { id: 'testosterone-cipionate', name: 'Testosterona Cipionato' },
  { id: 'testosterone-blend', name: 'Blend de Testosterona (Durateston)' },
  { id: 'testosterone-enanthate', name: 'Testosterona Enantato' },
  { id: 'testosterone-propionate', name: 'Testosterona Propionato' },
  { id: 'sustanon', name: 'Sustanon 250' },
  { id: 'nandrolone-decanoate', name: 'Nandrolona Decanoato (Deca-Durabolin)' },
  { id: 'boldenone', name: 'Boldenona (Equipoise)' },
  { id: 'trembolone', name: 'Trembolona' },
  { id: 'masteron', name: 'Masteron (Drostanolona)' },
  { id: 'primobolan', name: 'Primobolan (Metenolona)' },
  { id: 'growth-hormone', name: 'Hormônio do Crescimento (GH)' },
  { id: 'insulin', name: 'Insulina' },
  { id: 'hcg', name: 'HCG' },

  // Orais
  { id: 'oxandrolone', name: 'Oxandrolona (Anavar)' },
  { id: 'stanozolol', name: 'Stanozolol (Winstrol)' },
  { id: 'dianabol', name: 'Dianabol (Metandrostenolona)' },
  { id: 'turinabol', name: 'Turinabol' },
  { id: 'halotestin', name: 'Halotestin (Fluoximesterona)' },
  { id: 'proviron', name: 'Proviron (Mesterolona)' },
  { id: 'clomid', name: 'Clomid (Clomifeno)' },
  { id: 'nolvadex', name: 'Nolvadex (Tamoxifeno)' },
  { id: 'aromatase-inhibitors', name: 'Inibidores de Aromatase (Anastrozol / Letrozol)' },
  { id: 'contraceptive', name: 'Anticoncepcionais (Yaz, Diane 35, etc.)' },
  { id: 'clenbuterol', name: 'Clenbuterol' },
  { id: 't3', name: 'T3 (Liotironina)' },
  { id: 't4', name: 'T4 (Levotiroxina)' },
  { id: 'tamoxifen', name: 'Tamoxifeno' },
  { id: 'xenical', name: 'Xenical (Orlistate)' },
  { id: 'sarms', name: 'SARMs' },
  { id: 'dnp', name: 'DNP (Dinitrofenol)' },
  { id: 'sibutrapro', name: 'Sibutrapro (Sibutramina)' },
];

  return (
    <div className="page-container">
      <Header />
      
      <main className="flex-1">
        <div className="page-content bg-[#0A0D0D]">
          <section className="mb-8">
            <h2 className="text-3xl font-bold mb-2">Todos os Produtos</h2>
            <p className="text-black-300 mb-6">Explore nossa variedade de suplementos e hormônios para alto desempenho</p>
          </section>

          <ProductGrid products={filteredProducts} />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductsPage;
