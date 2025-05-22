import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

const AddressesPage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [isAddingNew, setIsAddingNew] = useState(false);

  const handleAlterarClick = () => {
    setIsEditing(true);
    setIsAddingNew(false); // Ensure not adding new when altering
  };

  const handleNovoClick = () => {
    setIsAddingNew(true);
    setIsEditing(false); // Ensure not editing when adding new
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setIsAddingNew(false);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#0A0D0D] text-black-100">
      <Helmet>
        <title>TurboGainz - Minhas Moradas</title>
        <meta
          name="description"
          content="Gerencie seus endereços de entrega na TurboGainz."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="TurboGainz - Minhas Moradas" />
        <meta
          property="og:description"
          content="Gerencie seus endereços de entrega na TurboGainz."
        />
        {/* Substitua pela URL da imagem que você quer que apareça ao compartilhar */}
        <meta property="og:image" content="[URL_DA_IMAGEM_PARA_OG]" />
        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="TurboGainz - Minhas Moradas" />
        <meta
          name="twitter:description"
          content="Gerencie seus endereços de entrega na TurboGainz."
        />
        {/* Substitua pela URL da imagem que você quer que apareça ao compartilhar no Twitter */}
        <meta name="twitter:image" content="[URL_DA_IMAGEM_PARA_TWITTER]" />
      </Helmet>
      <Header />

      <main className="flex-1 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center mb-8">
            <Link
              to="/manage-account"
              className="text-black-300 hover:text-black-100 transition-colors mr-4"
            >
              <ArrowLeft className="h-6 w-6" />
            </Link>
            <h1 className="text-2xl font-bold text-black-50">
              Lista de moradas
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Seção de Endereços Existentes */}
            <div>
              <h2 className="text-xl font-bold text-black-50 mb-4">
                Endereço Principal
              </h2>
              <div className="bg-black-900 rounded-lg shadow border border-black-700 p-6">
                {/* Conteúdo do endereço principal aqui */}
                <p className="text-black-100">Nome Fictícia</p>
                <p className="text-black-300">Rua Fictícia, 123</p>
                <p className="text-black-300">19999-999 SP</p>
                <p className="text-black-300">Brasil</p>
                {/* Botões de ação para o endereço principal */}
                <div className="mt-6 flex gap-4">
                  <button
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={handleAlterarClick}
                  >
                    ALTERAR ENDEREÇO
                  </button>
                </div>
              </div>
              {/* Botão para Novo Endereço - Movido para aqui para melhor layout */}
              {!isEditing && !isAddingNew && (
                <div className="mt-8 border-2 border-dashed border-black-700 rounded-lg p-6 text-center">
                  <button
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    onClick={handleNovoClick}
                  >
                    NOVO ENDEREÇO
                  </button>
                </div>
              )}

              {/* Adicionar listagem de outros endereços aqui */}
            </div>

            {/* Seção de Editar/Adicionar Endereço */}
            {(isEditing || isAddingNew) && (
              <div>
                <h2 className="text-xl font-bold text-black-50 mb-4">
                  {isEditing ? "Editar endereço" : "Adicionar novo endereço"}
                </h2>
                <div className="bg-black-900 rounded-lg shadow border border-black-700 p-6 space-y-4">
                  {/* Campos do formulário aqui */}
                  <div>
                    <label
                      htmlFor="tipo-morada"
                      className="block text-sm font-medium text-black-100 mb-1"
                    >
                      Tipo de Morada*
                    </label>
                    <div className="flex items-center space-x-4 text-black-100">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="tipo-morada"
                          value="residencial"
                          className="form-radio text-red-600"
                          defaultChecked
                        />
                        <span className="ml-2">Residencial</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="primeiro-ultimo-nome"
                      className="block text-sm font-medium text-black-100 mb-1"
                    >
                      PRIMEIRO E ÚLTIMO NOME*
                    </label>
                    <Input
                      id="primeiro-ultimo-nome"
                      placeholder="Seu Nome"
                      className="bg-black-800 border-black-700 text-black-100 placeholder:text-black"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="rua"
                      className="block text-sm font-medium text-black-100 mb-1"
                    >
                      RUA*
                    </label>
                    <Input
                      id="rua"
                      placeholder="Sua Rua"
                      className="bg-black-800 border-black-700 text-black-100 placeholder:text-black-300"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="numero-edificio"
                        className="block text-sm font-medium text-black-100 mb-1"
                      >
                        Nº EDIFÍCIO/PORTA*
                      </label>
                      <Input
                        id="numero-edificio"
                        placeholder="Nº da Porta"
                        className="bg-black-800 border-black-700 text-black-100 placeholder:text-black-300"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="complemento-morada"
                        className="block text-sm font-medium text-black-100 mb-1"
                      >
                        COMPLEMENTO MORADA
                      </label>
                      <Input
                        id="complemento-morada"
                        placeholder="Bairro"
                        className="bg-black-800 border-black-700 text-black-100 placeholder:text-black-300"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="codigo-postal"
                        className="block text-sm font-medium text-black-100 mb-1"
                      >
                        CÓDIGO POSTAL *
                      </label>
                      <Input
                        id="codigo-postal"
                        placeholder="CEP"
                        className="bg-black-800 border-black-700 text-black-100 placeholder:text-black-300"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="cidade"
                        className="block text-sm font-medium text-black-100 mb-1"
                      >
                        CIDADE*
                      </label>
                      <Input
                        id="cidade"
                        placeholder="Sua Cidade"
                        className="bg-black-800 border-black-700 text-black-100 placeholder:text-black-300"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="telefone"
                      className="block text-sm font-medium text-black-100 mb-1"
                    >
                      TELEFONE*
                    </label>
                    <Input
                      id="telefone"
                      placeholder="Seu Telefone"
                      className="bg-black-800 border-black-700 text-black-100 placeholder:text-black-300"
                      required
                    />
                  </div>

                  <div className="flex items-center mt-4">
                    <input
                      type="checkbox"
                      id="endereco-principal"
                      className="form-checkbox text-red-600 mr-2"
                      defaultChecked
                    />
                    <label
                      htmlFor="endereco-principal"
                      className="text-sm text-black-100"
                    >
                      Endereço Principal
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="imprimir-guia"
                      className="form-checkbox text-red-600 mr-2"
                    />
                    <label
                      htmlFor="imprimir-guia"
                      className="text-sm text-black-100"
                    >
                      Imprimir Guia <span className="text-black-300"></span>
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="outra-identidade-fiscal"
                      className="form-checkbox text-red-600 mr-2"
                    />
                    <label
                      htmlFor="outra-identidade-fiscal"
                      className="text-sm text-black-100"
                    >
                      Outra identidade fiscal{" "}
                      <span className="text-black-300"></span>
                    </label>
                  </div>

                  <div className="mt-6 flex justify-end gap-4">
                    <button
                      className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                      onClick={handleCancelClick}
                    >
                      CANCELAR
                    </button>
                    <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                      SALVAR
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AddressesPage;
