import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { CircleAlert } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";

const CreditCardPage = () => {
  const navigate = useNavigate();
  const [errorMessages, setErrorMessages] = useState<string[]>([]);

  // Função para simular a exibição de erros
  const simulateErrors = () => {
    setErrorMessages([
      "Número de cartão: Número Inválido",
      "CVV: Inválido - verificar o número",
      "O campo Nome deve ter pelo menos 2 carateres.",
      "Cartão de Crédito Expirado",
    ]);
  };

  const handleAdicionarCartaoClick = () => {
    // Em uma aplicação real, aqui você faria a validação e a chamada da API
    // e definiria as mensagens de erro com base na resposta.
    simulateErrors(); // Apenas para simular a exibição dos erros
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#0A0D0D] text-black-100">
      <Helmet>
        <title>TurboGainz - Adicionar Cartão</title>
        <meta
          name="description"
          content="Adicione ou edite seus métodos de pagamento com cartão de crédito na TurboGainz."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="TurboGainz - Adicionar Cartão" />
        <meta
          property="og:description"
          content="Adicione ou edite seus métodos de pagamento com cartão de crédito na TurboGainz."
        />
        {/* Substitua pela URL da imagem que você quer que apareça ao compartilhar */}
        <meta property="og:image" content="[URL_DA_IMAGEM_PARA_OG]" />
        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="TurboGainz - Adicionar Cartão" />
        <meta
          name="twitter:description"
          content="Adicione ou edite seus métodos de pagamento com cartão de crédito na TurboGainz."
        />
        {/* Substitua pela URL da imagem que você quer que apareça ao compartilhar no Twitter */}
        <meta name="twitter:image" content="[URL_DA_IMAGEM_PARA_TWITTER]" />
      </Helmet>
      <Header />

      <main className="flex-1 py-12">
        <div className="container mx-auto px-4 max-w-md">
          <div className="flex items-center mb-8">
            <Link
              to="/manage-account/payment-methods"
              className="text-black-300 hover:text-black-100 transition-colors mr-4"
            >
              <ArrowLeft className="h-6 w-6" />
            </Link>
            <h1 className="text-2xl font-bold text-black-50">
              Adicionar Cartão
            </h1>
          </div>

          {/* Error Messages Box */}
          {errorMessages.length > 0 && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-6">
              <div className="flex items-center mb-2">
                <CircleAlert className="h-5 w-5 mr-2" />
                <span className="font-bold">Erro:</span>
              </div>
              <ul className="list-disc list-inside">
                {errorMessages.map((msg, index) => (
                  <li key={index} className="text-sm">
                    {msg}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="bg-black-900 rounded-lg shadow border border-black-700 p-6 space-y-4">
            <div>
              <Label htmlFor="card-number">Número do cartão *</Label>
              <Input
                id="card-number"
                type="text"
                className="bg-black-800 border-black-700 text-black-100 placeholder:text-black-300"
                required
              />
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div>
                <Label htmlFor="expiry-month">Mês *</Label>
                <Input
                  id="expiry-month"
                  type="text"
                  placeholder="MM"
                  className="bg-black-800 border-black-700 text-black-100 placeholder:text-black-300"
                  required
                />
              </div>
              <div>
                <Label htmlFor="expiry-year">Ano *</Label>
                <Input
                  id="expiry-year"
                  type="text"
                  placeholder="AA"
                  className="bg-black-800 border-black-700 text-black-100 placeholder:text-black-300"
                  required
                />
              </div>
              <div>
                <Label htmlFor="cvv">CVV *</Label>
                <Input
                  id="cvv"
                  type="text"
                  className="bg-black-800 border-black-700 text-black-100 placeholder:text-black-300"
                  required
                />
              </div>
            </div>

            <div>
              <Label htmlFor="card-name">Nome do Titular *</Label>
              <Input
                id="card-name"
                type="text"
                className="bg-black-800 border-black-700 text-black-100 placeholder:text-black-300"
                required
              />
            </div>

            <div className="mt-6">
              <button
                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleAdicionarCartaoClick}
              >
                Adicionar Cartão
              </button>
            </div>
            <div className="mt-2">
              <button
                className="w-full bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => navigate("/manage-account/payment-methods")}
              >
                Cancelar
              </button>
            </div>
            {/* Placeholder para ícones de segurança/bandeiras */}
            <div className="flex justify-center items-center mt-4 space-x-4">
              {/* Adicionar imagens ou ícones das bandeiras de cartão aqui */}
            </div>
            {/* Mensagem de autenticação */}
            <div
              className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 mt-4"
              role="alert"
            >
              <p className="text-sm">
                Dependendo do sistema de segurança do seu cartão poderá ser
                necessário autenticação no site do seu banco.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CreditCardPage;
