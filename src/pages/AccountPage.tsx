import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const AccountPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#0A0D0D] text-black-100">
      <Header />
      
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4 max-w-md bg-black-900 rounded-lg shadow border border-black-700 p-8">
          <h1 className="text-3xl font-bold text-black-50 mb-8 text-center">Minha Conta</h1>
          
          <div className="space-y-8">
            {/* A Minha Conta */}
            <div>
              <h2 className="text-2xl font-bold text-black-50 mb-4">A Minha Conta</h2>
              <div className="bg-black-900 rounded-lg shadow border border-black-700 overflow-hidden">
                <Link to="/orders" className="flex items-center justify-between p-4 hover:bg-black-800 transition-colors border-b border-black-700 last:border-b-0">
                  <span>Ver as minhas encomendas</span>
                  <ChevronRight className="h-5 w-5 text-black-300" />
                </Link>
                <Link to="/manage-account" className="flex items-center justify-between p-4 hover:bg-black-800 transition-colors border-b border-black-700 last:border-b-0">
                  <span>Gerir a Minha Conta</span>
                  <ChevronRight className="h-5 w-5 text-black-300" />
                </Link>
              </div>
            </div>
            
            {/* Ajuda e Informação */}
            <div>
              <h2 className="text-2xl font-bold text-black-50 mb-4">Ajuda e Informação</h2>
               <div className="bg-black-900 rounded-lg shadow border border-black-700 overflow-hidden">
                <Link to="/contact" className="flex items-center justify-between p-4 hover:bg-black-800 transition-colors border-b border-black-700 last:border-b-0">
                  <span>Ajuda e Contactos</span>
                  <ChevronRight className="h-5 w-5 text-black-300" />
                </Link>
                 <Link to="/about" className="flex items-center justify-between p-4 hover:bg-black-800 transition-colors border-b border-black-700 last:border-b-0">
                  <span>Sobre Nós</span>
                  <ChevronRight className="h-5 w-5 text-black-300" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AccountPage; 