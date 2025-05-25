import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import badgeIcon from "/icons/badge.png";
import transparenciaIcon from "/icons/transparency.png";
import expertiseIcon from "/icons/experience.png";
import equipeImg from "/Equipe/Equipe.png";
import catarinaImg from "/Equipe/catarina.png";
import davidImg from "/Equipe/david.png";
import joseImg from "/Equipe/jose.png";
import marciaImg from "/Equipe/marcia.png";

const AboutPage = () => {
  return (
    <div className="page-container">
      <Header />

      <main className="flex-1">
        {/* Hero section */}
        <section className="bg-[#0A0D0D] text-black-100 py-10">
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
        <section className="py-10 bg-[#0A0D0D]">
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
                  src={equipeImg}
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
              <div className="bg-black-900 rounded-xl p-8 border border-black-700 transition-all duration-300 hover:bg-[#262626] flex flex-col h-full">
                <img
                  src={badgeIcon}
                  alt="Ícone de Qualidade"
                  className="w-16 h-16 object-contain mx-auto mb-6"
                />
                <h3 className="text-xl font-bold mb-4 text-center text-[#f6f6f6]">
                  Qualidade
                </h3>
                <p className="text-[#f6f6f6] text-center leading-relaxed">
                  Trabalhamos apenas com os melhores laboratórios e fornecedores
                  para garantir produtos autênticos e de alta qualidade que
                  entregam resultados.
                </p>
              </div>

              {/* Card 2 - Transparência */}
              <div className="bg-black-900 rounded-xl p-8 border border-black-700 transition-all duration-300 hover:bg-[#262626] flex flex-col h-full">
                <img
                  src={transparenciaIcon}
                  alt="Ícone de Transparência"
                  className="w-16 h-16 object-contain mx-auto mb-6"
                />
                <h3 className="text-xl font-bold mb-4 text-center text-[#f6f6f6]">
                  Transparência
                </h3>
                <p className="text-[#f6f6f6] text-center leading-relaxed">
                  Acreditamos em fornecer informações claras e precisas sobre
                  nossos produtos, incluindo benefícios e potenciais efeitos
                  colaterais.
                </p>
              </div>

              {/* Card 3 - Expertise */}
              <div className="bg-black-900 rounded-xl p-8 border border-black-700 transition-all duration-300 hover:bg-[#262626] flex flex-col h-full">
                <img
                  src={expertiseIcon}
                  alt="Ícone de Expertise"
                  className="w-16 h-16 object-contain mx-auto mb-6"
                />
                <h3 className="text-xl font-bold mb-4 text-center text-[#f6f6f6]">
                  Expertise
                </h3>
                <p className="text-[#f6f6f6] text-center leading-relaxed">
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
                <img
                  src={catarinaImg}
                  alt="Catarina"
                  className="w-40 h-35 rounded-full object-cover border-4 border-black-700 mx-auto mb-4"
                />
                <h3 className="text-lg font-semibold text-black-100 mb-2">
                  Catarina Alves
                </h3>
                <p className="text-black-300 text-sm leading-relaxed">
                  Consultora de Nutrição Esportiva
                </p>
              </div>

              <div className="text-center">
                <img
                  src={davidImg}
                  alt="David"
                  className="w-40 h-35 rounded-full object-cover border-4 border-black-700 mx-auto mb-4"
                />
                <h3 className="text-lg font-semibold text-black-100 mb-2">
                  David Moreira
                </h3>
                <p className="text-black-300 text-sm leading-relaxed">
                  Especialista em Suplementação e Hormônios
                </p>
              </div>

              <div className="text-center">
                <img
                  src={joseImg}
                  alt="Jose"
                  className="w-40 h-35 rounded-full object-cover border-4 border-black-700 mx-auto mb-4"
                />
                <h3 className="text-lg font-semibold text-black-100 mb-2">
                  Jose Ferreira
                </h3>
                <p className="text-black-300 text-sm leading-relaxed">
                  Analista de Pesquisa e Desenvolvimento Farmacêutico
                </p>
              </div>

              <div className="text-center">
                <img
                  src={marciaImg}
                  alt="Marcia"
                  className="w-40 h-35 rounded-full object-cover border-4 border-black-700 mx-auto mb-4"
                />
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
