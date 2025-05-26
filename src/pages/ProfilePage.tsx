import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const ProfilePage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black-900 text-black-100">
      <Header />

      <main className="flex-1 py-12">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex items-center mb-8">
            <Link
              to="/manage-account"
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
                    className="text-black-50 font-semibold hover:text-black-100 transition-colors"
                  >
                    Dados pessoais
                  </Link>
                </li>
                <li>
                  <Link
                    to="/manage-account/edit-profile-picture"
                    className="text-black-300 hover:text-black-100 transition-colors"
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
                Editar informação pessoal
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <Label htmlFor="nome" className="text-black-50">
                    NOME*
                  </Label>
                  <Input
                    id="nome"
                    type="text"
                    defaultValue="Seu Nome"
                    required
                    className="bg-[#0A0D0D] rounded-lg shadow border border-black-700 text-black-50"
                  />
                </div>
                <div>
                  <Label htmlFor="apelido" className="text-black-50">
                    APELIDO*
                  </Label>
                  <Input
                    id="apelido"
                    type="text"
                    defaultValue="Sobrenome"
                    required
                    className="bg-[#0A0D0D] rounded-lg shadow border border-black-700 text-black-50"
                  />
                </div>
              </div>

              <div className="mb-6">
                <Label className="text-black-50 mb-2 block">Gênero*</Label>
                <RadioGroup defaultValue="masculino" className="flex space-x-4">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="masculino" id="masculino" />
                    <Label htmlFor="masculino" className="text-black-100">
                      Masculino
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="feminino" id="feminino" />
                    <Label htmlFor="feminino" className="text-black-100">
                      Feminino
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="grid grid-cols-1 gap-6 mb-6">
                <div>
                  <Label htmlFor="dataNascimento" className="text-black-50">
                    DATA DE NASCIMENTO*
                  </Label>
                  <Input
                    id="dataNascimento"
                    type="date"
                    defaultValue="Sua data de Nascimento"
                    required
                    className="bg-[#0A0D0D] rounded-lg shadow border border-black-700text-black-50"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-black-50">
                    E-MAIL*
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    defaultValue="Seu e-mail"
                    required
                    className="bg-[#0A0D0D] rounded-lg shadow border border-black-700 text-black-50"
                  />
                </div>
                <div>
                  <Label htmlFor="telefone" className="text-black-50">
                    TELEFONE*
                  </Label>
                  <Input
                    id="telefone"
                    type="tel"
                    defaultValue="Seu Número"
                    required
                    className="bg-[#0A0D0D] rounded-lg shadow border border-black-700 text-black-50"
                  />
                </div>
                <div>
                  <Label htmlFor="nif" className="text-black-50">
                    CPF
                  </Label>
                  <Input
                    id="nif"
                    type="text"
                    className="bg-[#0A0D0D] rounded-lg shadow border border-black-700 text-black-50"
                  />
                </div>
              </div>

              <div className="flex justify-end items-center mt-8">
                <p className="text-sm text-red-500 mr-4">
                  * Campos obrigatórios
                </p>
                <Button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                  GUARDAR ALTERAÇÕES
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

export default ProfilePage;
