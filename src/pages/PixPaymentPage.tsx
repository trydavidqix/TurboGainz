import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import QRCode from "react-qr-code";

const PixPaymentPage = () => {
  // Valor de exemplo - em uma aplicação real viria do carrinho/pedido
  const purchaseValue = "";
  const pixRedirectUrl = "https://github.com/trydavidqix";

  return (
    <div className="flex flex-col min-h-screen bg-[#0A0D0D] text-black-100">
      <Header />

      <main className="flex-1 py-12">
        <div className="container mx-auto px-4 max-w-sm">
          <div className="flex items-center mb-8">
            <Link
              to="/manage-account/payment-methods"
              className="text-black-300 hover:text-black-100 transition-colors mr-4"
            >
              <ArrowLeft className="h-6 w-6" />
            </Link>
            <h1 className="text-2xl font-bold text-black-50">
              Pagamento com Pix
            </h1>
          </div>

          {/* Pix Content Area */}
          <div className="bg-black-900 rounded-lg shadow border border-black-700 p-6 text-center">
            {/* Pix Logo Placeholder */}
            <div className="mb-6">
              <div className="w-20 h-20 mx-auto bg-green-500 rounded-lg" />
            </div>

            <h2 className="text-lg font-semibold text-black-50 mb-4">
              Valor da compra:
            </h2>
            <p className="text-2xl font-bold text-green-400">
              R$ {purchaseValue}
            </p>

            {/* QR Code real */}
            <div className="my-6 flex justify-center">
              <div className="bg-white p-2 rounded">
                <QRCode value={pixRedirectUrl} size={192} />
              </div>
            </div>

            <h3 className="text-lg font-semibold text-green-400 mb-4">
              Pagar com o Pix é fácil, rápido e seguro!
            </h3>

            <div className="text-left text-black-300 space-y-2">
              <p>1. Abra o aplicativo do seu banco no celular.</p>
              <p>
                2. Clique no menu <strong>Pix</strong> e escolha a opção{" "}
                <strong>Pagar com QR Code</strong>.
              </p>
              <p>3. Aponte a câmara do celular para o QR Code gerado acima.</p>
              <p>
                4. Pronto, agora é só confirmar os dados e finalizar o pagamento
                com o <strong>Pix</strong>.
              </p>
            </div>

            <p className="text-sm text-black-300 mt-6">
              Este pagamento está sendo processado pelo{" "}
              <strong>PayMee Brasil Serviços</strong>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PixPaymentPage;
