import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const BecomePartnerPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black-900 text-black-100">
      <Header />

      <main className="flex-1 py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-3xl font-bold text-black-50 mb-8 text-center">Tornar-se Parceiro</h1>

          <div className="bg-black-900 p-8 rounded-lg border border-black-700 text-black-100">
            <p className="mb-4">Tem um negócio ou é um influenciador e gostaria de fazer parceria com a TurboGainz?</p>
            <p className="mb-6">Estamos abertos a colaborações que beneficiem ambas as partes. Preencha o formulário abaixo ou contacte-nos diretamente para saber mais sobre as oportunidades de parceria.</p>

            {/* Formulário de Contacto para Parceria (Exemplo) */}
            {/* Pode adicionar campos como Nome, E-mail, Tipo de Parceria, Mensagem, etc. */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-black-50 mb-4">Formulário de Contacto</h2>
              {/* Adicionar campos do formulário de contacto aqui */}
              <p className="text-black-300">[Inserir campos do formulário de contacto aqui]</p>
            </div>

            <div className="flex justify-center">
              <Button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Enviar Proposta de Parceria</Button>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BecomePartnerPage; 