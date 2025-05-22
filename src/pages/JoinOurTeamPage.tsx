import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const JoinOurTeamPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black-900 text-black-100">
      <Header />

      <main className="flex-1 py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-3xl font-bold text-black-50 mb-8 text-center">Junta-te à nossa equipa</h1>

          <div className="bg-black-900 p-8 rounded-lg border border-black-700 text-black-100">
            <p className="mb-4">Estamos sempre à procura de talentos para se juntarem à família TurboGainz.</p>
            <p className="mb-6">Se partilhas a nossa paixão por fitness, saúde e nutrição, e queres fazer parte de uma equipa dinâmica, consulta as nossas vagas ou envia-nos a tua candidatura espontânea.</p>

            {/* Seção de Vagas (Exemplo) */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-black-50 mb-4">Vagas Atuais</h2>
              <ul className="space-y-4">
                <li>
                  <div className="p-4 border border-black-700 rounded-lg hover:bg-black-800 transition-colors">
                    <h3 className="font-semibold text-black-50">Vaga: [Nome da Vaga]</h3>
                    <p className="text-sm text-black-300">Departamento: [Nome do Departamento]</p>
                    <p className="text-sm text-black-300 mt-2">[Breve descrição da vaga]</p>
                    {/* Link ou botão para ver detalhes/aplicar */}
                  </div>
                </li>
                {/* Repetir para outras vagas */}
              </ul>
            </div>

            {/* Candidatura Espontânea */}
            <div>
              <h2 className="text-xl font-bold text-black-50 mb-4">Candidatura Espontânea</h2>
              <p className="mb-4">Não encontraste uma vaga que se encaixe no teu perfil? Envia-nos o teu CV e uma carta de apresentação.</p>
              {/* Formulário ou link para envio de candidatura */}
              <Button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Enviar Candidatura</Button>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default JoinOurTeamPage; 