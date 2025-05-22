import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
// Importar componentes de formulário conforme necessário (Input, Label, etc.)

const EditAddressPage = () => {
  const { addressId } = useParams(); // Para pegar o ID do endereço da URL

  // TODO: Carregar dados do endereço com base em addressId
  // TODO: Usar state para armazenar os dados do formulário
  // TODO: Implementar lógica para preencher o formulário com os dados carregados
  // TODO: Implementar função de salvar alterações

  return (
    <div className="flex flex-col min-h-screen bg-[#0A0D0D] text-black-100">
      <Header />

      <main className="flex-1 py-12">
        <div className="container mx-auto px-4 max-w-md">
          <div className="flex items-center mb-8">
            <Link
              to="/manage-account/addresses"
              className="text-black-300 hover:text-black-100 transition-colors mr-4"
            >
              <ArrowLeft className="h-6 w-6" />
            </Link>
            <h1 className="text-2xl font-bold text-black-50">
              Editar Endereço
            </h1>
          </div>

          {/* TODO: Adicionar formulário de edição de endereço aqui */}
          <div className="bg-black-900 rounded-lg shadow border border-black-700 p-6 space-y-4">
            <p className="text-black-50">
              Editando endereço com ID: {addressId}
            </p>
            {/* Exemplo de campo */}
            {/*
             <div>
               <label htmlFor="rua" className="block text-sm font-medium text-black-300 mb-1">RUA*</label>
               <Input id="rua" placeholder="Sua Rua" className="bg-black-800 border-black-700 text-black-100 placeholder:text-black-300" required />
             </div>
             */}

            {/* TODO: Adicionar botões Salvar e Cancelar */}
            <div className="mt-6 flex justify-end gap-4">
              {/* Botão Cancelar */}
              <button
                className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                onClick={() =>
                  (window.location.href = "/manage-account/addresses")
                }
              >
                CANCELAR
              </button>
              {/* Botão Salvar */}
              <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                SALVAR
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default EditAddressPage;
