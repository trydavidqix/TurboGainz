import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ChevronRight, ArrowLeft } from "lucide-react";

const ManageAccountPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#0A0D0D] text-black-100">
      <Header />
      
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4 max-w-md">
          <div className="flex items-center mb-8">
            <Link to="/account" className="text-black-300 hover:text-black-100 transition-colors mr-4">
              <ArrowLeft className="h-6 w-6" />
            </Link>
            <h1 className="text-2xl font-bold text-black-50">Gerir a Minha Conta</h1>
          </div>
          
          <div className="bg-black-900 rounded-lg shadow border border-black-700 overflow-hidden">
            <Link to="/manage-account/addresses" className="flex items-center justify-between p-4 hover:bg-black-800 transition-colors border-b border-black-700 last:border-b-0">
              <span>Lista de moradas</span>
              <ChevronRight className="h-5 w-5 text-black-300" />
            </Link>
            <Link to="/manage-account/profile" className="flex items-center justify-between p-4 hover:bg-black-800 transition-colors border-b border-black-700 last:border-b-0">
              <span>Dados da conta</span>
              <ChevronRight className="h-5 w-5 text-black-300" />
            </Link>
            <Link to="/manage-account/payment-methods" className="flex items-center justify-between p-4 hover:bg-black-800 transition-colors border-b border-black-700 last:border-b-0">
              <span>Métodos de pagamento</span>
              <ChevronRight className="h-5 w-5 text-black-300" />
            </Link>
             <Link to="/manage-account/change-password" className="flex items-center justify-between p-4 hover:bg-black-800 transition-colors border-b border-black-700 last:border-b-0">
              <span>Alterar password</span>
              <ChevronRight className="h-5 w-5 text-black-300" />
            </Link>
             {/* ProzisPoints - Adicionar se necessário depois */}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ManageAccountPage; 