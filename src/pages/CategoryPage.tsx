import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "@/data/products";
import { Product, ProductCategory, ProductGender } from "@/types/product";
import ProductGrid from "@/components/ProductGrid";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CategoryPage = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const [categoryProducts, setCategoryProducts] = useState<Product[]>([]);
  const [categoryTitle, setCategoryTitle] = useState("");
  const [categoryDescription, setCategoryDescription] = useState("");
  
  useEffect(() => {
    let filtered: Product[] = [];
    
    if (categoryId === "men") {
      filtered = products.filter(p => p.gender.includes("men"));
      setCategoryTitle("Produtos para Homens");
      setCategoryDescription("Hormônios e suplementos específicos para o público masculino");
    } else if (categoryId === "women") {
      filtered = products.filter(p => p.gender.includes("women"));
      setCategoryTitle("Produtos para Mulheres");
      setCategoryDescription("Hormônios e suplementos específicos para o público feminino");
    } else if (categoryId === "injectable") {
      filtered = products.filter(p => p.category === "injectable");
      setCategoryTitle("Produtos Injetáveis");
      setCategoryDescription("Hormônios e suplementos de aplicação injetável para máximo desempenho");
    } else if (categoryId === "oral") {
      filtered = products.filter(p => p.category === "oral");
      setCategoryTitle("Produtos em Comprimidos");
      setCategoryDescription("Hormônios e suplementos orais de fácil administração");
    } else {
      filtered = products;
      setCategoryTitle("Todos os Produtos");
      setCategoryDescription("Explore nossa variedade completa de produtos");
    }
    
    setCategoryProducts(filtered);
  }, [categoryId]);
  
  return (
    <div className="page-container">
      <Header />
      
      <main className="flex-1">
        <div className="page-content bg-[#0A0D0D]">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-black-100">{categoryTitle}</h1>
            <p className="text-black-300 mt-2">{categoryDescription}</p>
          </div>
          
          <ProductGrid products={categoryProducts} />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CategoryPage;
