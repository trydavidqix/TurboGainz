import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const EditProfilePicturePage = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const selectedFile = files[0];
      console.log("Arquivo selecionado:", selectedFile);
      // Aqui você pode adicionar lógica para fazer upload ou pré-visualizar a imagem
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="flex flex-col min-h-screen bg-black-900 text-black-100">
      <Header />

      <main className="flex-1 py-12">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex items-center mb-8">
            <Link
              to="/manage-account/profile"
              className="text-black-300 hover:text-black-100 transition-colors mr-4"
            >
              <ArrowLeft className="h-6 w-6" />
            </Link>
            <h1 className="text-2xl font-bold text-black-50">Dados da Conta</h1>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar */}
            <div className="md:w-1/4 bg-black-800 p-6 rounded-lg">
              <ul className="space-y-4">
                <li>
                  <Link
                    to="/manage-account/profile"
                    className="text-black-300 hover:text-black-100 transition-colors"
                  >
                    Dados pessoais
                  </Link>
                </li>
                <li>
                  <Link
                    to="/manage-account/edit-profile-picture"
                    className="text-black-50 font-semibold hover:text-black-100 transition-colors"
                  >
                    Fotografia de perfil
                  </Link>
                </li>
                <li>
                  <Link
                    to="/manage-account/deactivate-account"
                    className="text-black-300 hover:text-black-100 transition-colors"
                  >
                    Desativar conta
                  </Link>
                </li>
              </ul>
            </div>

            {/* Main Content */}
            <div className="md:w-3/4 bg-black-900 p-8 rounded-lg border border-black-700">
              <h2 className="text-xl font-bold text-black-50 mb-6">
                Editar fotografia de perfil
              </h2>

              <div className="flex justify-center items-center border border-dashed border-black-700 rounded-lg h-64 mb-6">
                <div className="text-center text-black-300">
                  <Upload className="mx-auto h-12 w-12" />
                  <p className="mt-2">Carrega uma fotografia</p>
                  {/* Campo de input de arquivo oculto */}
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileSelect}
                    accept=".png, .jpg, .jpeg"
                    className="hidden"
                  />
                  {/* Botão estilizado que aciona o input de arquivo */}
                  <Button
                    className="mt-4 bg-black-700 hover:bg-black-600 text-black-50"
                    onClick={triggerFileInput}
                  >
                    Seleciona o ficheiro
                  </Button>
                </div>
              </div>

              <h2 className="text-xl font-bold text-black-50 mb-6 mt-12">
                Desativação da conta
              </h2>
              <p className="mb-4">
                O teu e-mail está associado à seguinte loja TurboGainz:
              </p>
              <div className="mb-6">
                <Label htmlFor="email" className="text-black-50">
                  Seu e-mail
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Seu e-mail"
                  className="bg-[#0A0D0D] rounded-lg shadow border border-black-700 text-black-50"
                />
              </div>
              <p className="mb-4">
                Ao desativares a tua conta vais perder todos os benefícios de
                seres cliente da TurboGainz, além de perderes a possibilidade de
                efetuar compras no site
              </p>
              <p className="mb-6">
                Tens a certeza de que não queres reconsiderar esta decisão? O
                que te levou a tomar esta decisão?
              </p>
              <p className="mb-4">
                Antes de procederes à desativação da tua conta, podes exercer o
                teu direito à portabilidade dos dados enviando mensagem para o
                nosso Serviço de Apoio ao Cliente.
              </p>
              <textarea
                placeholder="Escrever comentário"
                className="w-full p-4 mb-6 bg-[#0A0D0D] border border-black-700 rounded-lg text-black-50 placeholder-black-300 focus:outline-none focus:ring-2 focus:ring-red-600"
                rows={6}
                style={{ resize: "none" }}
              ></textarea>
              <div className="flex justify-end">
                <Button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                  DESATIVAR CONTA
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default EditProfilePicturePage;
