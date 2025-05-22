import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PoliticaPrivacidadePage = () => {
  return (
    <div className="page-container min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-[#0A0D0D]">
        <section className="py-16 text-black-100">
          <div className="container mx-auto px-4 max-w-3xl">
            <h1 className="text-4xl font-bold mb-6">Política de Privacidade</h1>
            <p className="text-black-300 mb-4">
              Sua privacidade é muito importante para nós. Confira como tratamos seus dados:
            </p>
            <ul className="list-disc pl-6 text-black-300 space-y-2">
              <li>Seus dados são utilizados apenas para processar pedidos e atendimento.</li>
              <li>Não compartilhamos suas informações com terceiros sem sua autorização.</li>
              <li>Utilizamos criptografia e medidas de segurança para proteger seus dados.</li>
              <li>Você pode solicitar a exclusão dos seus dados a qualquer momento.</li>
              <li>Para mais detalhes, entre em contato com nosso suporte.</li>
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PoliticaPrivacidadePage; 