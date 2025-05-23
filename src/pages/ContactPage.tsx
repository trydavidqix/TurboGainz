import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ContactPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      // toast({
      //   title: "Campos obrigatórios",
      //   description: "Por favor, preencha todos os campos obrigatórios",
      //   variant: "destructive",
      // });
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      // toast({
      //   title: "Mensagem enviada com sucesso",
      //   description: "Agradecemos seu contato. Responderemos em breve!",
      // });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <div className="page-container">
      <Header />

      <main className="flex-1">
        {/* Hero section */}
        <section className="bg-[#0A0D0D] text-black-100 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Fale Conosco
              </h1>
              <p className="text-lg text-black-300">
                Estamos aqui para ajudar. Entre em contato com nossa equipe de
                especialistas.
              </p>
            </div>
          </div>
        </section>

        {/* Contact info + form */}
        <section className="py-16 bg-[#0A0D0D]">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Contact information */}
              <div>
                <h2 className="text-2xl font-bold text-black-100 mb-6">
                  Informações de Contato
                </h2>

                <div className="space-y-8 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-shark-950 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-black-100" />
                    </div>
                    <div>
                      <h3 className="font-medium text-black-100 mb-1">Email</h3>
                      <span className="text-black-300 hover:text-black-100">
                        contato@turbogainz.com
                      </span>
                      <p className="text-sm text-black-500 mt-1">
                        Responderemos em até 24 horas úteis
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-shark-950 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-black-100" />
                    </div>
                    <div>
                      <h3 className="font-medium text-black-100 mb-1">
                        Telefone
                      </h3>
                      <span className="text-black-300 hover:text-black-100">
                        +55 (11) 99999-9999
                      </span>
                      <p className="text-sm text-black-500 mt-1">
                        Segunda a Sexta: 9h às 18h
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-shark-950 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-black-100" />
                    </div>
                    <div>
                      <h3 className="font-medium text-black-100 mb-1">
                        Endereço
                      </h3>
                      <p className="text-black-300">
                        Av. Paulista, 1000 - Bela Vista
                        <br />
                        São Paulo - SP, 01310-100
                        <br />
                        Brasil
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg overflow-hidden h-64 bg-shark-950">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d467690.14386865456!2d-46.92495573160536!3d-23.682063556622076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce448183a461d1%3A0x9ba94b08ff335bae!2sS%C3%A3o%20Paulo%2C%20SP%2C%20Brasil!5e0!3m2!1spt-PT!2spt!4v1747829847808!5m2!1spt-PT!2spt"
                    width="100%"
                    height="100%"
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    style={{
                      filter: "grayscale(100%) contrast(90%) brightness(80%)",
                    }}
                  ></iframe>
                </div>
              </div>

              {/* Contact form */}
              <div>
                <div className="bg-shark-950 p-8 rounded-lg shadow-sm border border-black-700">
                  <h2 className="text-2xl font-bold text-black-100 mb-6">
                    Envie uma Mensagem
                  </h2>

                  <form onSubmit={handleSubmit}>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="name">Nome completo *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Seu nome completo"
                          required
                          className="bg-background border-black-700 text-black-100"
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="email">Email *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="seu@email.com"
                            required
                            className="bg-background border-black-700 text-black-100"
                          />
                        </div>

                        <div>
                          <Label htmlFor="phone">Telefone</Label>
                          <Input
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="(00) 00000-0000"
                            className="bg-background border-black-700 text-black-100"
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="subject">Assunto</Label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="Sobre o que você quer falar?"
                          className="bg-background border-black-700 text-black-100"
                        />
                      </div>

                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Como podemos ajudar você?"
                        className="min-h-32 bg-background border-black-700 text-black-100"
                        style={{ resize: "none" }}
                        required
                      />

                      <Button
                        type="submit"
                        className="w-full border-black-700 hover:bg-black-800 text-black-50"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                            Enviando...
                          </>
                        ) : (
                          "Enviar Mensagem"
                        )}
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-[#0A0D0D]">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl font-bold text-shark-900 mb-12 text-center">
              Perguntas Frequentes
            </h2>

            <div className="space-y-6">
              {[
                {
                  question: "Qual o prazo de entrega?",
                  answer:
                    "Nossos prazos variam de acordo com a região. Após a aprovação do pagamento, a entrega é feita em até 3 dias úteis para capitais e até 7 dias úteis para interior e demais regiões.",
                },
                {
                  question: "Como são as embalagens dos produtos?",
                  answer:
                    "Todos os produtos são enviados em embalagens discretas, sem identificação do conteúdo, garantindo total privacidade e segurança.",
                },
                {
                  question: "Vocês oferecem consultoria para ciclos?",
                  answer:
                    "Sim, contamos com profissionais especializados que podem orientar sobre o uso correto dos produtos. Entre em contato para mais informações.",
                },
                {
                  question: "Como posso rastrear meu pedido?",
                  answer:
                    "Após o envio, você receberá por email o código de rastreio para acompanhar seu pedido em tempo real através do site dos Correios.",
                },
                {
                  question: "Posso devolver um produto?",
                  answer:
                    "Aceitamos devoluções em até 7 dias após o recebimento, desde que o produto esteja lacrado e em perfeitas condições. Entre em contato conosco para iniciar o processo.",
                },
              ].map((faq, index) => (
                <div
                  key={index}
                  className="bg-black-900 hover:bg-black-800 p-6 rounded-lg shadow-sm border border-shark-100"
                >
                  <h3 className="text-lg font-semibold text-shark-900 mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-shark-700">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;
