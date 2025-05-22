import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { CircleAlert } from "lucide-react";

const ChangePasswordPage = () => {
  const [formError, setFormError] = useState(false);
  const [passwordAtualError, setPasswordAtualError] = useState(false);
  const [novaPasswordError, setNovaPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);

  // Exemplo de como poderia definir erros (apenas para visualização)
  const simulateErrors = () => {
    setFormError(true);
    setPasswordAtualError(true);
    setNovaPasswordError(true);
    setConfirmPasswordError(true);
  };

  // Chame simulateErrors para ver o estilo de erro (opcional)
  // simulateErrors();
  
  const handleMudarPasswordClick = () => {
    simulateErrors(); // Chamar a função para simular erros
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#0A0D0D] text-black-100">
      <Header />
      
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4 max-w-md">
           <div className="flex items-center mb-8">
            <Link to="/manage-account" className="text-black-300 hover:text-black-100 transition-colors mr-4">
              <ArrowLeft className="h-6 w-6" />
            </Link>
            <h1 className="text-2xl font-bold text-black-50">Mudar password</h1>
          </div>
          
          {/* General Error Banner */}
          {formError && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-6" role="alert">
              <strong className="font-bold">Ops!</strong>
              <span className="block sm:inline ml-2">Lamentamos, mas surgiu um problema com os dados enviados.</span>
              <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                <svg className="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15L5.651 6.85a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.15 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
              </span>
            </div>
          )}

          <div className="bg-black-900 rounded-lg shadow border border-black-700 p-6 space-y-4">
            <div>
              <Label htmlFor="current-password" className={`${passwordAtualError ? 'text-red-500' : ''}`}>PASSWORD ATUAL *</Label>
              <div className="relative">
                <Input 
                  id="current-password" 
                  type="password" 
                  className={`bg-black-800 border-black-700 text-black-100 placeholder:text-black-300 ${passwordAtualError ? 'border-red-500' : ''}`}
                  required
                />
                {passwordAtualError && (
                  <CircleAlert className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-red-500" />
                )}
              </div>
              {passwordAtualError && (
                <p className="text-red-500 text-sm mt-1">Este campo não pode ficar vazio!</p>
              )}
            </div>
            
            <div>
              <Label htmlFor="new-password" className={`${novaPasswordError ? 'text-red-500' : ''}`}>NOVA PASSWORD *</Label>
              <div className="relative">
                <Input 
                  id="new-password" 
                  type="password" 
                  className={`bg-black-800 border-black-700 text-black-100 placeholder:text-black-300 ${novaPasswordError ? 'border-red-500' : ''}`}
                  required
                  pattern="^(?=.*[A-Z])(?=.*\d)(?=.*[@]).+$"
                  title="Deve conter pelo menos uma letra maiúscula, um dígito e um @."
                />
                 {novaPasswordError && (
                  <CircleAlert className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-red-500" />
                )}
              </div>
              {novaPasswordError && (
                 <p className="text-red-500 text-sm mt-1">Este campo não pode ficar vazio!</p>
              )}
            </div>
            
            <div>
              <Label htmlFor="confirm-password" className={`${confirmPasswordError ? 'text-red-500' : ''}`}>CONFIRMAR PASSWORD</Label>
               <div className="relative">
                <Input 
                  id="confirm-password" 
                  type="password" 
                  className={`bg-black-800 border-black-700 text-black-100 placeholder:text-black-300 ${confirmPasswordError ? 'border-red-500' : ''}`}
                  required
                  pattern="^(?=.*[A-Z])(?=.*\d)(?=.*[@]).+$"
                  title="Deve conter pelo menos uma letra maiúscula, um dígito e um @."
                />
                {confirmPasswordError && (
                  <CircleAlert className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-red-500" />
                )}
               </div>
              {confirmPasswordError && (
                 <p className="text-red-500 text-sm mt-1">Deve conter pelo menos uma letra maiúscula, um dígito e um @.</p>
              )}
            </div>
            
            <div className="mt-6">
              <button 
                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleMudarPasswordClick}
              >
                MUDAR PASSWORD
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ChangePasswordPage; 