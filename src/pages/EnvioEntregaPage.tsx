import Header from "@/components/Header";
import Footer from "@/components/Footer";

const EnvioEntregaPage = () => {
  return (
    <div className="page-container min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-[#0A0D0D]">
        <section className="py-16 text-black-100">
          <div className="container mx-auto px-4 max-w-3xl">
            <h1 className="text-4xl font-bold mb-6">Envio e Entrega</h1>
            <p className="text-black-300 mb-4">
              Saiba como funciona o processo de envio e entrega dos nossos produtos.
            </p>
            <ul className="list-disc pl-6 text-black-300 space-y-2">
              <li>Prazo de postagem: até 2 dias úteis após a confirmação do pagamento.</li>
              <li>Prazo de entrega: varia conforme a região e modalidade escolhida.</li>
              <li>Rastreamento: você receberá um código para acompanhar seu pedido.</li>
              <li>Embalagem discreta e segura para sua privacidade.</li>
              <li>Em caso de dúvidas, entre em contato com nosso suporte.</li>
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default EnvioEntregaPage; 