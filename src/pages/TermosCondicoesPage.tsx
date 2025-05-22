import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TermosCondicoesPage = () => {
  return (
    <div className="page-container min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-[#0A0D0D]">
        <section className="py-16 text-black-100">
          <div className="container mx-auto px-4 max-w-3xl">
            <h1 className="text-4xl font-bold mb-6">Termos e Condições</h1>
            <p className="text-black-300 mb-4">
              Leia atentamente nossos termos e condições de uso:
            </p>
            <ul className="list-disc pl-6 text-black-300 space-y-2">
              <li>Ao comprar em nosso site, você concorda com nossas políticas.</li>
              <li>Os produtos são destinados a maiores de 18 anos.</li>
              <li>Não nos responsabilizamos pelo uso indevido dos produtos.</li>
              <li>Os preços e condições podem ser alterados sem aviso prévio.</li>
              <li>Em caso de dúvidas, entre em contato com nosso suporte.</li>
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TermosCondicoesPage; 