import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft, CreditCard, DollarSign } from "lucide-react";

const PaymentMethodsPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#0A0D0D] text-black-100">
      <Header />
      
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4 max-w-2xl">
           <div className="flex items-center mb-8">
            <Link to="/manage-account" className="text-black-300 hover:text-black-100 transition-colors mr-4">
              <ArrowLeft className="h-6 w-6" />
            </Link>
            <h1 className="text-2xl font-bold text-black-50">Métodos de pagamento</h1>
          </div>
          
          <div className="bg-black-900 rounded-lg shadow border border-black-700 overflow-hidden">
            <Link to="/manage-account/payment-methods/credit-card" className="flex items-center justify-between p-4 hover:bg-black-800 transition-colors border-b border-black-700 last:border-b-0">
              <div className="flex items-center">
                <CreditCard className="h-6 w-6 mr-3 text-black-300" />
                <span>Cartão de Crédito</span>
              </div>
              <ArrowLeft className="h-5 w-5 text-black-300 transform rotate-180" />
            </Link>
             <Link to="/manage-account/payment-methods/pix" className="flex items-center justify-between p-4 hover:bg-black-800 transition-colors border-b border-black-700 last:border-b-0">
              <div className="flex items-center">
                 <DollarSign className="h-6 w-6 mr-3 text-black-300" />
                 <span>Pix com 10% de desconto</span>
               </div>
              <ArrowLeft className="h-5 w-5 text-black-300 transform rotate-180" />
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PaymentMethodsPage; 