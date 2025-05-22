import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AboutPage = () => {
  return (
    <div className="page-container">
      <Header />

      <main className="flex-1">
        {/* Hero section */}
        <section className="bg-[#0A0D0D] text-black-100 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Sobre a TurboGainz
              </h1>
              <p className="text-lg text-black-300 mb-8">
                Especialistas em produtos para desempenho físico e otimização
                hormonal
              </p>
            </div>
          </div>
        </section>

        {/* Company info */}
        <section className="py-16 bg-[#0A0D0D]">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-black-100 mb-6">
                  Nossa Missão
                </h2>
                <p className="text-black-300 mb-4">
                  Na TurboGainz, acreditamos que todos merecem ter acesso a
                  produtos de qualidade que possam ajudá-los a atingir seus
                  objetivos físicos e de saúde de maneira eficiente e segura.
                </p>
                <p className="text-black-300 mb-4">
                  Fundada em 2018 por um grupo de especialistas em farmacologia
                  e atletas profissionais, nossa empresa nasceu da necessidade
                  de fornecer suplementos e hormônios de qualidade superior para
                  atletas e entusiastas do fitness em todo o Brasil.
                </p>
                <p className="text-black-300">
                  Nosso compromisso é oferecer produtos autênticos, com
                  informações transparentes e suporte especializado para que
                  nossos clientes possam tomar decisões informadas sobre seu
                  desempenho e saúde.
                </p>
              </div>
              <div className="bg-shark-950 rounded-lg p-1 flex items-center justify-center">
                <img
                  src="/Equipe/Equipe.png"
                  alt="Equipe TurboGainz"
                  className="rounded-lg max-w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values - Updated to Cards */}
        <section className="py-16 bg-[#0A0D0D]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-black-100 mb-12 text-center">
              Nossos Valores
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1 - Qualidade */}
              <div className="bg-black-900 rounded-xl p-8 border border-black-700 hover:border-blue-500 transition-all duration-300 hover:shadow-xl hover:transform hover:scale-105">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-center text-blue-400">
                  Qualidade
                </h3>
                <p className="text-black-300 text-center leading-relaxed">
                  Trabalhamos apenas com os melhores laboratórios e fornecedores
                  para garantir produtos autênticos e de alta qualidade que
                  entregam resultados.
                </p>
              </div>

              {/* Card 2 - Transparência */}
              <div className="bg-black-900 rounded-xl p-8 border border-black-700 hover:border-green-500 transition-all duration-300 hover:shadow-xl hover:transform hover:scale-105">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-center text-green-400">
                  Transparência
                </h3>
                <p className="text-black-300 text-center leading-relaxed">
                  Acreditamos em fornecer informações claras e precisas sobre
                  nossos produtos, incluindo benefícios e potenciais efeitos
                  colaterais.
                </p>
              </div>

              {/* Card 3 - Expertise */}
              <div className="bg-black-900 rounded-xl p-8 border border-black-700 hover:border-purple-500 transition-all duration-300 hover:shadow-xl hover:transform hover:scale-105">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-center text-purple-400">
                  Expertise
                </h3>
                <p className="text-black-300 text-center leading-relaxed">
                  Nossa equipe inclui farmacêuticos, nutricionistas e atletas
                  que oferecem orientação especializada para otimizar seus
                  resultados.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team - Updated with better spacing */}
        <section className="py-16 bg-[#0A0D0D]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-black-100 mb-12 text-center">
              Nossa Equipe
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <div className="text-center">
                <div className="relative w-40 h-40 mx-auto mb-4">
                  <img
                    src="/Equipe/catarina.png"
                    alt="Catarina"
                    className="w-full h-full rounded-full object-cover border-4 border-black-700"
                  />
                </div>
                <h3 className="text-lg font-semibold text-black-100 mb-2">
                  Catarina Alves
                </h3>
                <p className="text-black-300 text-sm leading-relaxed">
                  Consultora de Nutrição Esportiva
                </p>
              </div>

              <div className="text-center">
                <div className="relative w-40 h-40 mx-auto mb-4">
                  <img
                    src="/Equipe/david.png"
                    alt="David"
                    className="w-full h-full rounded-full object-cover border-4 border-black-700"
                  />
                </div>
                <h3 className="text-lg font-semibold text-black-100 mb-2">
                  David Moreira
                </h3>
                <p className="text-black-300 text-sm leading-relaxed">
                  Especialista em Suplementação e Hormônios
                </p>
              </div>

              <div className="text-center">
                <div className="relative w-40 h-40 mx-auto mb-4">
                  <img
                    src="/Equipe/jose.jpeg"
                    alt="Jose"
                    className="w-full h-full rounded-full object-cover border-4 border-black-700"
                  />
                </div>
                <h3 className="text-lg font-semibold text-black-100 mb-2">
                  Jose Ferreira
                </h3>
                <p className="text-black-300 text-sm leading-relaxed">
                  Analista de Pesquisa e Desenvolvimento Farmacêutico
                </p>
              </div>

              <div className="text-center">
                <div className="relative w-40 h-40 mx-auto mb-4">
                  <img
                    src="/Equipe/marcia.jpeg"
                    alt="Marcia"
                    className="w-full h-full rounded-full object-cover border-4 border-black-700"
                  />
                </div>
                <h3 className="text-lg font-semibold text-black-100 mb-2">
                  Marcia Ribeiro
                </h3>
                <p className="text-black-300 text-sm leading-relaxed">
                  Coordenadora de Controle de Qualidade e Análises Clínicas
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-[#0A0D0D] text-black-100">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-6">
              Pronto para melhorar seu desempenho?
            </h2>
            <p className="text-lg text-black-300 mb-8">
              Descubra nossa linha completa de produtos e encontre a solução
              perfeita para atingir seus objetivos
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-black-900 hover:bg-black-800 text-highlight-foreground"
                asChild
              >
                <Link to="/products">Ver Produtos</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-black-100 text-black-100 hover:bg-black-100/10"
                asChild
              >
                <Link to="/contact">Fale Conosco</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;