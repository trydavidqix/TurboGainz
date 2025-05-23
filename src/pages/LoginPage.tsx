import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import BaseLayout from "@/components/BaseLayout";
import FormInput from "@/components/ui/form-input";
import { useFormValidation } from "@/hooks/useFormValidation";
import { Helmet } from "react-helmet-async";
import Stepper, { Step } from "@/components/Stepper";
import RegistrationSuccessModal from "@/components/RegistrationSuccessModal";

const LoginPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("register");
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isRegistrationSuccessModalOpen, setIsRegistrationSuccessModalOpen] =
    useState(false);

  const loginSchema = {
    email: {
      required: true,
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: "Email inválido",
    },
    password: {
      required: true,
      minLength: 6,
      message: "Senha deve ter no mínimo 6 caracteres",
    },
  };

  const registerSchema = {
    ...loginSchema,
    name: {
      required: true,
      minLength: 3,
      message: "Nome deve ter no mínimo 3 caracteres",
    },
    confirmPassword: {
      required: true,
      custom: (value: string) => value === registerData.password,
      message: "As senhas não conferem",
    },
  };

  const { errors: loginErrors, validateForm: validateLogin } =
    useFormValidation(loginSchema);
  const { errors: registerErrors, validateForm: validateRegister } =
    useFormValidation(registerSchema);

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegisterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegisterData({
      ...registerData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateLogin(loginData)) {
      setIsLoading(true);

      // Simulate API call
      setTimeout(() => {
        setIsLoading(false);
        // Redirect or update UI
        window.location.href = "/";
      }, 1500);
    }
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("handleRegister chamado");

    if (validateRegister(registerData)) {
      console.log("Validação do cadastro bem-sucedida");
      setIsLoading(true);

      // Simulate API call
      setTimeout(() => {
        setIsLoading(false);
        setIsRegistrationSuccessModalOpen(true);
      }, 1500);
    } else {
      console.log("Validação do cadastro falhou", registerErrors);
    }
  };

  const handleCloseRegistrationSuccessModal = () => {
    setIsRegistrationSuccessModalOpen(false);
    setActiveTab("login");
    // Optionally redirect after closing the modal
    // window.location.href = "/";
  };

  return (
    <BaseLayout>
      <Helmet>
        <title>TurboGainz - Login ou Cadastro</title>
        <meta
          name="description"
          content="Acesse sua conta ou crie uma nova para comprar na TurboGainz."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="TurboGainz - Login ou Cadastro" />
        <meta
          property="og:description"
          content="Acesse sua conta ou crie uma nova para comprar na TurboGainz."
        />
        {/* Substitua pela URL da imagem que você quer que apareça ao compartilhar */}
        <meta property="og:image" content="[URL_DA_IMAGEM_PARA_OG]" />
        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="TurboGainz - Login ou Cadastro" />
        <meta
          name="twitter:description"
          content="Acesse sua conta ou crie uma nova para comprar na TurboGainz."
        />
        {/* Substitua pela URL da imagem que você quer que apareça ao compartilhar no Twitter */}
        <meta name="twitter:image" content="[URL_DA_IMAGEM_PARA_TWITTER]" />
      </Helmet>
      <div className="container mx-auto px-4 max-w-md py-12">
        <div className="bg-[#0A0D0D] rounded-lg shadow border border-black-700 overflow-hidden">
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="w-full grid grid-cols-2 gap-2 mb-6">
              <TabsTrigger
                value="login"
                className="border border-transparent text-black-50 font-semibold rounded-lg py-2 transition-colors data-[state=active]:border-highlight data-[state=active]:bg-black-800 data-[state=active]:text-highlight data-[state=active]:shadow focus:outline-none"
              >
                Login
              </TabsTrigger>
              <TabsTrigger
                value="register"
                className="border border-transparent text-black-50 font-semibold rounded-lg py-2 transition-colors data-[state=active]:border-highlight data-[state=active]:bg-black-800 data-[state=active]:text-highlight data-[state=active]:shadow focus:outline-none"
              >
                Cadastro
              </TabsTrigger>
            </TabsList>

            <TabsContent value="login">
              <form onSubmit={handleLogin} className="space-y-4 p-6">
                <FormInput
                  label="Email"
                  type="email"
                  name="email"
                  value={loginData.email}
                  onChange={handleLoginChange}
                  error={loginErrors.email}
                  required
                  placeholder="Seu email"
                />

                <FormInput
                  label="Senha"
                  type="password"
                  name="password"
                  value={loginData.password}
                  onChange={handleLoginChange}
                  error={loginErrors.password}
                  required
                  placeholder="Sua senha"
                />

                <Button
                  type="submit"
                  className="w-full border border-highlight bg-transparent text-highlight font-semibold rounded-lg py-3 mt-4 text-lg shadow-sm hover:bg-black-800 hover:text-highlight-foreground transition-colors"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="flex items-center">
                      <div className="w-4 h-4 border-2 border-highlight border-t-transparent rounded-full animate-spin mr-2"></div>
                      Entrando...
                    </div>
                  ) : (
                    "Entrar"
                  )}
                </Button>
              </form>
            </TabsContent>

            <TabsContent value="register">
              <Stepper
                initialStep={1}
                onStepChange={(step) => {
                  console.log("Current step:", step);
                }}
                onFinalStepCompleted={() => {
                  console.log("onFinalStepCompleted chamado");
                  handleRegister(new Event("submit")); // Chama a função de registro/validação
                  setIsRegistrationSuccessModalOpen(true); // Força a abertura do modal
                }}
                backButtonText="Anterior"
                nextButtonText="Próximo"
              >
                <Step>
                  <div className="space-y-4 p-6">
                    <FormInput
                      label="Nome"
                      type="text"
                      name="name"
                      value={registerData.name}
                      onChange={handleRegisterChange}
                      error={registerErrors.name}
                      required
                      placeholder="Seu nome"
                    />

                    <FormInput
                      label="Email"
                      type="email"
                      name="email"
                      value={registerData.email}
                      onChange={handleRegisterChange}
                      error={registerErrors.email}
                      required
                      placeholder="Seu email"
                    />
                  </div>
                </Step>
                <Step>
                  <div className="space-y-4 p-6">
                    <FormInput
                      label="Senha"
                      type="password"
                      name="password"
                      value={registerData.password}
                      onChange={handleRegisterChange}
                      error={registerErrors.password}
                      required
                      placeholder="Sua senha"
                    />

                    <FormInput
                      label="Confirmar Senha"
                      type="password"
                      name="confirmPassword"
                      value={registerData.confirmPassword}
                      onChange={handleRegisterChange}
                      error={registerErrors.confirmPassword}
                      required
                      placeholder="Confirmar senha"
                    />

                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="terms"
                        className="w-4 h-4 mr-2"
                        required
                      />
                      <label htmlFor="terms" className="text-xs text-black-100">
                        Concordo com os{" "}
                        <Link
                          to="/terms"
                          className="text-blue-600 hover:underline"
                        >
                          Termos de Serviço
                        </Link>{" "}
                        e{" "}
                        <Link
                          to="/privacy"
                          className="text-blue-600 hover:underline"
                        >
                          Política de Privacidade
                        </Link>
                      </label>
                    </div>
                  </div>
                </Step>
              </Stepper>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      <RegistrationSuccessModal
        isOpen={isRegistrationSuccessModalOpen}
        onClose={handleCloseRegistrationSuccessModal}
      />
    </BaseLayout>
  );
};

export default LoginPage;
