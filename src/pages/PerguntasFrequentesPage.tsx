import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const PerguntasFrequentesPage = () => {
  return (
    <div className="page-container">
      <Helmet>
        <title>TurboGainz - Perguntas Frequentes</title>
        {/* Favicons */}
        <link
          rel="icon"
          href="/favicon_io/icons8-muscle-office-l-16.png"
          sizes="16x16"
          type="image/png"
        />
        <link
          rel="icon"
          href="/favicon_io/icons8-muscle-office-l-32.png"
          sizes="32x32"
          type="image/png"
        />
        <link
          rel="apple-touch-icon"
          href="/favicon_io/icons8-muscle-office-l-57.png"
          sizes="57x57"
        />
        <link
          rel="apple-touch-icon"
          href="/favicon_io/icons8-muscle-office-l-60.png"
          sizes="60x60"
        />
        <link
          rel="icon"
          href="/favicon_io/icons8-muscle-office-l-70.png"
          sizes="70x70"
          type="image/png"
        />
        <link
          rel="apple-touch-icon"
          href="/favicon_io/icons8-muscle-office-l-72.png"
          sizes="72x72"
        />
        <link
          rel="apple-touch-icon"
          href="/favicon_io/icons8-muscle-office-l-76.png"
          sizes="76x76"
        />
        <link
          rel="icon"
          href="/favicon_io/icons8-muscle-office-l-96.png"
          sizes="96x96"
          type="image/png"
        />
      </Helmet>
      <Header />
      <main className="flex-1">
        <section className="py-16 bg-[#0A0D0D] text-black-100">
          <div className="container mx-auto px-4 max-w-3xl">
            <h1 className="text-4xl font-bold mb-6">Perguntas Frequentes</h1>
            <div className="space-y-6">
              <div className="bg-shark-950 p-6 rounded-lg border border-black-700">
                <h2 className="text-xl font-semibold mb-2 text-black-100">
                  Qual o prazo de entrega?
                </h2>
                <p className="text-black-300">
                  O prazo depende da sua região e da modalidade de envio
                  escolhida. Após a postagem, você receberá um código de
                  rastreio.
                </p>
              </div>
              <div className="bg-shark-950 p-6 rounded-lg border border-black-700">
                <h2 className="text-xl font-semibold mb-2 text-black-100">
                  Como são as embalagens?
                </h2>
                <p className="text-black-300">
                  Todas as embalagens são discretas, sem identificação do
                  conteúdo, garantindo sua privacidade.
                </p>
              </div>
              <div className="bg-shark-950 p-6 rounded-lg border border-black-700">
                <h2 className="text-xl font-semibold mb-2 text-black-100">
                  Posso devolver um produto?
                </h2>
                <p className="text-black-300">
                  Sim, aceitamos devoluções em até 7 dias após o recebimento,
                  desde que o produto esteja lacrado e em perfeitas condições.
                </p>
              </div>
              <div className="bg-shark-950 p-6 rounded-lg border border-black-700">
                <h2 className="text-xl font-semibold mb-2 text-black-100">
                  Vocês oferecem consultoria?
                </h2>
                <p className="text-black-300">
                  Sim, temos profissionais especializados para orientar sobre o
                  uso correto dos produtos. Entre em contato para mais
                  informações.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PerguntasFrequentesPage;
