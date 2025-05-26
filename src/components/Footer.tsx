import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail } from "lucide-react";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubscribe = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Aqui você faria a requisição POST segura para o seu backend com o email
    console.log("Simulando inscrição com email:", email);
    // Simular sucesso e limpar o campo
    setEmail("");
    alert("Obrigado por se inscrever!"); // Feedback simples para o usuário
  };

  return (
    <footer className="bg-black-950 text-black-50 w-full">
      <div className="container mx-auto px-2 sm:px-4 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">TurboGainz</h3>
            <p className="text-black-300 mb-4">
              Suplementos e hormônios de alta qualidade para o melhor desempenho
              físico.
            </p>
            <div className="flex space-x-4">
              <span
                rel="noopener noreferrer"
                className="text-black-300 hover:text-black-100"
                aria-label="Visite nosso Facebook"
              >
                <Facebook className="h-5 w-5" aria-hidden="true" />
              </span>
              <span
                rel="noopener noreferrer"
                className="text-black-300 hover:text-black-100"
                aria-label="Visite nosso Instagram"
              >
                <Instagram className="h-5 w-5" aria-hidden="true" />
              </span>
              <span
                rel="noopener noreferrer"
                className="text-black-300 hover:text-black-100"
                aria-label="Visite nosso Twitter"
              >
                <Twitter className="h-5 w-5" aria-hidden="true" />
              </span>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Produtos</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/category/men"
                  className="text-black-300 hover:text-black-100"
                >
                  Para Homens
                </Link>
              </li>
              <li>
                <Link
                  to="/category/women"
                  className="text-black-300 hover:text-black-100"
                >
                  Para Mulheres
                </Link>
              </li>
              <li>
                <Link
                  to="/category/injectable"
                  className="text-black-300 hover:text-black-100"
                >
                  Injetáveis
                </Link>
              </li>
              <li>
                <Link
                  to="/category/oral"
                  className="text-black-300 hover:text-black-100"
                >
                  Comprimidos
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-black-300 hover:text-black-100"
                >
                  Todos os Produtos
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Informações</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-black-300 hover:text-black-100"
                >
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link
                  to="/envio-e-entrega"
                  className="text-black-300 hover:text-black-100"
                >
                  Envio e Entrega
                </Link>
              </li>
              <li>
                <Link
                  to="/politica-de-privacidade"
                  className="text-black-300 hover:text-black-100"
                >
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link
                  to="/termos-e-condicoes"
                  className="text-black-300 hover:text-black-100"
                >
                  Termos e Condições
                </Link>
              </li>
              <li>
                <Link
                  to="/perguntas-frequentes"
                  className="text-black-300 hover:text-black-100"
                >
                  Perguntas Frequentes
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contato</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-black-300">
                <Mail className="h-4 w-4" aria-hidden="true" />
                <span className="hover:text-black-100">
                  contato@turbogainz.com
                </span>
              </li>
              <li className="text-black-300">
                <span>Seg - Sex: 9:00 - 18:00</span>
              </li>
              <li className="text-black-300">
                <span>Sáb: 10:00 - 16:00</span>
              </li>
            </ul>

            <div className="mt-6">
              <h4 className="font-medium mb-2">Receba novidades:</h4>
              <form className="flex" onSubmit={handleSubscribe}>
                <label htmlFor="newsletter-email" className="sr-only">
                  Seu email para receber novidades
                </label>
                <input
                  type="email"
                  name="email"
                  id="newsletter-email"
                  required
                  placeholder="Seu email"
                  value={email}
                  onChange={handleInputChange}
                  className="px-2 sm:px-3 py-2 bg-black-800 text-black-50 border-0 rounded-l-md focus:outline-none focus:ring-1 focus:ring-black-500 flex-1 w-full sm:w-auto"
                />
                <button
                  type="submit"
                  className="bg-black-700 hover:bg-black-600 px-3 rounded-r-md text-black-50"
                  aria-label="Inscrever-se na newsletter"
                >
                  Enviar
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Copyright text above the line */}
        <div className="mt-12 text-center text-black-400 text-sm">
          <p>
            © {new Date().getFullYear()} TurboGainz. Todos os direitos
            reservados. Este site é apenas para demonstração.
          </p>
        </div>

        {/* Line and 'Desenvolvido por' below */}
        <div className="border-t border-black-800 mt-6 pt-6 text-center text-black-400 text-sm">
          <p>
            Desenvolvido por{" "}
            <a
              href="https://github.com/trydavidqix"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black-400 hover:text-black-200"
            >
              David William
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
