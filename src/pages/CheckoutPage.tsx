import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useShoppingCart } from "@/context/ShoppingCartContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowLeft, Check, CreditCard, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  cardNumber: string;
  cardName: string;
  expiry: string;
  cvv: string;
}

interface FormErrors {
  [key: string]: string;
}

const CheckoutPage = () => {
  const { items, subtotal, clearCart, isLoaded } = useShoppingCart();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    cardNumber: "",
    cardName: "",
    expiry: "",
    cvv: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isProcessing, setIsProcessing] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  // Wait for the cart to load
  if (!isLoaded) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center py-16">
            <div className="w-12 h-12 border-4 border-black-900 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-black-300">Carregando carrinho...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Calculate shipping
  const shipping = subtotal >= 300 ? 0 : 25.9;

  // Calculate total
  const total = subtotal + shipping;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error when user types
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const validateStep1 = () => {
    const stepErrors: FormErrors = {};

    if (!formData.fullName) {
      stepErrors.fullName = "Nome completo é obrigatório";
    }

    if (!formData.email) {
      stepErrors.email = "Email é obrigatório";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      stepErrors.email = "Email inválido";
    }

    if (!formData.phone) {
      stepErrors.phone = "Telefone é obrigatório";
    }

    if (!formData.address) {
      stepErrors.address = "Endereço é obrigatório";
    }

    if (!formData.city) {
      stepErrors.city = "Cidade é obrigatória";
    }

    if (!formData.state) {
      stepErrors.state = "Estado é obrigatório";
    }

    if (!formData.zipCode) {
      stepErrors.zipCode = "CEP é obrigatório";
    }

    setErrors(stepErrors);
    return Object.keys(stepErrors).length === 0;
  };

  const validateStep2 = () => {
    const stepErrors: FormErrors = {};

    if (!formData.cardNumber) {
      stepErrors.cardNumber = "Número do cartão é obrigatório";
    } else if (!/^\d{16}$/.test(formData.cardNumber.replace(/\s/g, ""))) {
      stepErrors.cardNumber = "Número do cartão inválido";
    }

    if (!formData.cardName) {
      stepErrors.cardName = "Nome no cartão é obrigatório";
    }

    if (!formData.expiry) {
      stepErrors.expiry = "Data de expiração é obrigatória";
    } else if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(formData.expiry)) {
      stepErrors.expiry = "Formato inválido (MM/AA)";
    }

    if (!formData.cvv) {
      stepErrors.cvv = "CVV é obrigatório";
    } else if (!/^\d{3,4}$/.test(formData.cvv)) {
      stepErrors.cvv = "CVV inválido";
    }

    setErrors(stepErrors);
    return Object.keys(stepErrors).length === 0;
  };

  const handleNextStep = () => {
    if (step === 1) {
      if (validateStep1()) {
        setStep(2);
        window.scrollTo(0, 0);
      }
    }
  };

  const handlePreviousStep = () => {
    setStep(1);
    window.scrollTo(0, 0);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (step === 2) {
      if (validateStep2()) {
        // Process checkout
        setIsProcessing(true);

        // Simulate API call
        setTimeout(() => {
          setIsProcessing(false);
          setIsCompleted(true);
          clearCart();
          window.scrollTo(0, 0);
        }, 2000);
      }
    }
  };

  if (items.length === 0 && !isCompleted) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center py-16">
            <h1 className="text-2xl font-bold text-shark-900 mb-4">
              Seu carrinho está vazio
            </h1>
            <p className="text-shark-600 mb-6">
              Adicione produtos ao carrinho antes de finalizar a compra.
            </p>
            <Button asChild>
              <Link to="/products">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Voltar para produtos
              </Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (isCompleted) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 py-12">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="bg-white p-8 rounded-lg shadow border border-shark-200 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="h-8 w-8 text-green-600" />
              </div>
              <h1 className="text-2xl font-bold text-shark-900 mb-2">
                Pedido realizado com sucesso!
              </h1>
              <p className="text-shark-600 mb-6">
                Obrigado pela sua compra. Seu pedido foi processado e será
                enviado em breve.
              </p>

              <div className="border rounded-md p-4 mb-6 text-left bg-shark-50">
                <h3 className="font-medium mb-2">Detalhes do pedido:</h3>
                <p>
                  <span className="font-medium">Número do pedido:</span> #PF
                  {Math.floor(Math.random() * 10000)}
                </p>
                <p>
                  <span className="font-medium">Total:</span> R${" "}
                  {total.toFixed(2).replace(".", ",")}
                </p>
                <p>
                  <span className="font-medium">Endereço de entrega:</span>{" "}
                  {formData.address}, {formData.city}, {formData.state}
                </p>
              </div>

              <p className="text-sm text-shark-600 mb-6">
                Um email com os detalhes da compra foi enviado para{" "}
                {formData.email}
              </p>

              <Button asChild>
                <Link to="/products">Continuar comprando</Link>
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 py-12 bg-[#0A0D0D] text-black-100">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-black-50 mb-8 text-center">
            Finalizar Compra
          </h1>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Checkout form */}
            <div className="lg:w-2/3">
              <div className="bg-black-900 rounded-lg shadow border border-black-700 overflow-hidden">
                <div className="flex border-b border-black-700">
                  <div
                    className={`flex-1 p-4 text-center ${
                      step === 1
                        ? "bg-black-700 text-black-50 font-medium"
                        : "text-black-300"
                    }`}
                  >
                    1. Informações de Entrega
                  </div>
                  <div
                    className={`flex-1 p-4 text-center ${
                      step === 2
                        ? "bg-black-700 text-black-50 font-medium"
                        : "text-black-300"
                    }`}
                  >
                    2. Pagamento
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="p-6">
                  {step === 1 && (
                    <div className="space-y-6">
                      <h2 className="text-2xl font-bold text-black-50">
                        Informações Pessoais e Entrega
                      </h2>

                      <div className="space-y-3">
                        <div>
                          <Label htmlFor="fullName" className="text-black-100">
                            Nome Completo
                          </Label>
                          <Input
                            id="fullName"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            placeholder="Seu nome completo"
                            className="bg-black-900 text-black-50 border-black-700 placeholder:text-black-300"
                          />
                          {errors.fullName && (
                            <p className="text-destructive text-sm mt-1">
                              {errors.fullName}
                            </p>
                          )}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="email" className="text-black-100">
                              Email
                            </Label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="seu@email.com"
                              className="bg-black-900 text-black-50 border-black-700 placeholder:text-black-300"
                            />
                            {errors.email && (
                              <p className="text-destructive text-sm mt-1">
                                {errors.email}
                              </p>
                            )}
                          </div>

                          <div>
                            <Label htmlFor="phone" className="text-black-100">
                              Telefone
                            </Label>
                            <Input
                              id="phone"
                              name="phone"
                              type="tel"
                              value={formData.phone}
                              onChange={handleChange}
                              placeholder="(00) 00000-0000"
                              className="bg-black-900 text-black-50 border-black-700 placeholder:text-black-300"
                            />
                            {errors.phone && (
                              <p className="text-destructive text-sm mt-1">
                                {errors.phone}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <h3 className="text-xl font-bold text-black-50 mt-6">
                          Endereço de Entrega
                        </h3>

                        <div>
                          <Label htmlFor="address" className="text-black-100">
                            Endereço Completo
                          </Label>
                          <Input
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            placeholder="Rua, Número, Complemento"
                            className="bg-black-900 text-black-50 border-black-700 placeholder:text-black-300"
                          />
                          {errors.address && (
                            <p className="text-destructive text-sm mt-1">
                              {errors.address}
                            </p>
                          )}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div>
                            <Label htmlFor="city" className="text-black-100">
                              Cidade
                            </Label>
                            <Input
                              id="city"
                              name="city"
                              value={formData.city}
                              onChange={handleChange}
                              placeholder="Cidade"
                              className="bg-black-900 text-black-50 border-black-700 placeholder:text-black-300"
                            />
                            {errors.city && (
                              <p className="text-destructive text-sm mt-1">
                                {errors.city}
                              </p>
                            )}
                          </div>

                          <div>
                            <Label htmlFor="state" className="text-black-100">
                              Estado
                            </Label>
                            <Select
                              onValueChange={(value) =>
                                setFormData({ ...formData, state: value })
                              }
                              value={formData.state}
                            >
                              <SelectTrigger className="w-full bg-black-800 text-black-50 border-black-700 placeholder:text-black-300">
                                <SelectValue placeholder="Selecione" />
                              </SelectTrigger>
                              <SelectContent className="bg-black-900 text-black-50 border-black-700">
                                <SelectItem value="AC">AC</SelectItem>
                                <SelectItem value="AL">AL</SelectItem>
                                <SelectItem value="AP">AP</SelectItem>
                                <SelectItem value="AM">AM</SelectItem>
                                <SelectItem value="BA">BA</SelectItem>
                                <SelectItem value="CE">CE</SelectItem>
                                <SelectItem value="DF">DF</SelectItem>
                                <SelectItem value="ES">ES</SelectItem>
                                <SelectItem value="GO">GO</SelectItem>
                                <SelectItem value="MA">MA</SelectItem>
                                <SelectItem value="MT">MT</SelectItem>
                                <SelectItem value="MS">MS</SelectItem>
                                <SelectItem value="MG">MG</SelectItem>
                                <SelectItem value="PA">PA</SelectItem>
                                <SelectItem value="PB">PB</SelectItem>
                                <SelectItem value="PR">PR</SelectItem>
                                <SelectItem value="PE">PE</SelectItem>
                                <SelectItem value="PI">PI</SelectItem>
                                <SelectItem value="RJ">RJ</SelectItem>
                                <SelectItem value="RN">RN</SelectItem>
                                <SelectItem value="RS">RS</SelectItem>
                                <SelectItem value="RO">RO</SelectItem>
                                <SelectItem value="RR">RR</SelectItem>
                                <SelectItem value="SC">SC</SelectItem>
                                <SelectItem value="SP">SP</SelectItem>
                                <SelectItem value="SE">SE</SelectItem>
                                <SelectItem value="TO">TO</SelectItem>
                              </SelectContent>
                            </Select>
                            {errors.state && (
                              <p className="text-destructive text-sm mt-1">
                                {errors.state}
                              </p>
                            )}
                          </div>

                          <div>
                            <Label htmlFor="zipCode" className="text-black-100">
                              CEP
                            </Label>
                            <Input
                              id="zipCode"
                              name="zipCode"
                              value={formData.zipCode}
                              onChange={handleChange}
                              placeholder="00000-000"
                              className="bg-black-900 text-black-50 border-black-700 placeholder:text-black-300"
                            />
                            {errors.zipCode && (
                              <p className="text-destructive text-sm mt-1">
                                {errors.zipCode}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="pt-4">
                        <Button
                          type="button"
                          className="w-full bg-black-700 hover:bg-black-600 text-black-50"
                          onClick={handleNextStep}
                        >
                          Continuar para Pagamento
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  )}

                  {step === 2 && (
                    <div className="space-y-6">
                      <h2 className="text-2xl font-bold text-black-50">
                        Detalhes do Pagamento
                      </h2>

                      <div className="bg-shark-50 p-4 rounded-md border border-shark-200 mb-6">
                        <div className="flex items-center mb-2">
                          <CreditCard className="mr-2 h-5 w-5 text-shark-700" />
                          <h3 className="font-medium text-shark-800">
                            Cartão de Crédito
                          </h3>
                        </div>

                        <div className="space-y-3">
                          <div>
                            <Label
                              htmlFor="cardNumber"
                              className="text-black-100"
                            >
                              Número do Cartão
                            </Label>
                            <Input
                              id="cardNumber"
                              name="cardNumber"
                              value={formData.cardNumber}
                              onChange={handleChange}
                              placeholder="0000 0000 0000 0000"
                              className="bg-black-900 text-black-50 border-black-700 placeholder:text-black-300"
                            />
                            {errors.cardNumber && (
                              <p className="text-destructive text-sm mt-1">
                                {errors.cardNumber}
                              </p>
                            )}
                          </div>

                          <div>
                            <Label
                              htmlFor="cardName"
                              className="text-black-100"
                            >
                              Nome no Cartão
                            </Label>
                            <Input
                              id="cardName"
                              name="cardName"
                              value={formData.cardName}
                              onChange={handleChange}
                              placeholder="Nome impresso no cartão"
                              className="bg-black-900 text-black-50 border-black-700 placeholder:text-black-300"
                            />
                            {errors.cardName && (
                              <p className="text-destructive text-sm mt-1">
                                {errors.cardName}
                              </p>
                            )}
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <Label
                                htmlFor="expiry"
                                className="text-black-100"
                              >
                                Data de Expiração (MM/AA)
                              </Label>
                              <Input
                                id="expiry"
                                name="expiry"
                                value={formData.expiry}
                                onChange={handleChange}
                                placeholder="MM/AA"
                                className="bg-black-900 text-black-50 border-black-700 placeholder:text-black-300"
                              />
                              {errors.expiry && (
                                <p className="text-destructive text-sm mt-1">
                                  {errors.expiry}
                                </p>
                              )}
                            </div>

                            <div>
                              <Label htmlFor="cvv" className="text-black-100">
                                CVV
                              </Label>
                              <Input
                                id="cvv"
                                name="cvv"
                                value={formData.cvv}
                                onChange={handleChange}
                                placeholder="CVC"
                                className="bg-black-900 text-black-50 border-black-700 placeholder:text-black-300"
                              />
                              {errors.cvv && (
                                <p className="text-destructive text-sm mt-1">
                                  {errors.cvv}
                                </p>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button
                          type="button"
                          variant="outline"
                          className="border-black-700 hover:bg-black-700 text-black-100"
                          onClick={handlePreviousStep}
                        >
                          <ArrowLeft className="mr-2 h-4 w-4" />
                          Voltar
                        </Button>

                        <Button
                          type="submit"
                          className="flex-1 bg-black-700 hover:bg-black-600 text-black-50"
                          disabled={isProcessing}
                        >
                          {isProcessing ? (
                            <>
                              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                              Processando...
                            </>
                          ) : (
                            "Finalizar Compra"
                          )}
                        </Button>
                      </div>
                    </div>
                  )}
                </form>
              </div>
            </div>

            {/* Order summary */}
            <div className="lg:w-1/3">
              {/* Coupon Section */}
              <div className="bg-black-900 rounded-lg shadow border border-black-700 p-6 mb-6">
                <h2 className="text-xl font-bold text-black-50 mb-4 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 mr-2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 6h.008v.008H6V6Z"
                    />
                  </svg>
                  Adicionar um Cupão
                </h2>
                <div className="flex gap-2 mb-4">
                  <Input
                    placeholder="Código promocional"
                    className="flex-1 bg-black-900 text-black-50 border-black-700 placeholder:text-black-300"
                  />
                  <Button
                    variant="outline"
                    className="border-black-700 hover:bg-black-700 text-black-100"
                  >
                    Aplicar
                  </Button>
                </div>
                <div className="flex items-center text-sm text-black-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-5 h-5 mr-2 text-yellow-500"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
                    />
                  </svg>
                  Para poderes aplicar os cupões, o teu carrinho deve cumprir
                  com os requisitos da loja.
                </div>
              </div>
              {/* End Coupon Section */}
              <div className="bg-black-900 rounded-lg shadow border border-black-700 p-6 sticky top-24">
                <h2 className="text-2xl font-bold text-black-50 mb-4">
                  Resumo do Pedido
                </h2>

                <div className="space-y-4 mb-6">
                  {items.map((item) => (
                    <div
                      key={item.product.id}
                      className="flex items-center gap-4"
                    >
                      <div className="bg-black-800 w-16 h-16 rounded-md flex-shrink-0">
                        <img
                          src={import.meta.env.BASE_URL + item.product.image}
                          alt={item.product.name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-black-50 line-clamp-1">
                          {item.product.name}
                        </p>
                        <div className="flex items-baseline gap-1 text-sm">
                          <span className="text-white">
                            Qtd: {item.quantity}
                          </span>
                          <span>·</span>
                          <span className="text-white">
                            R${" "}
                            {(
                              (item.product.discountPrice ||
                                item.product.price) * item.quantity
                            )
                              .toFixed(2)
                              .replace(".", ",")}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-2 text-sm border-t border-black-700 pt-4">
                  <div className="flex justify-between">
                    <span className="text-white">Subtotal</span>
                    <span className="font-medium text-black-50">
                      R$ {subtotal.toFixed(2).replace(".", ",")}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white">Frete</span>
                    {shipping === 0 ? (
                      <span className="font-medium text-green-600">Grátis</span>
                    ) : (
                      <span className="font-medium text-black-50">
                        R$ {shipping.toFixed(2).replace(".", ",")}
                      </span>
                    )}
                  </div>
                  {shipping === 0 && (
                    <div className="text-xs text-green-600">
                      Frete grátis para compras acima de R$ 300,00
                    </div>
                  )}
                </div>

                <div className="flex justify-between border-t border-black-700 pt-4 mt-4">
                  <span className="font-medium text-black-50">Total</span>
                  <span className="font-bold text-xl text-black-50">
                    R$ {total.toFixed(2).replace(".", ",")}
                  </span>
                </div>

                <div className="mt-6 text-xs text-black-300">
                  <p className="mb-2">
                    Ao finalizar a compra, você concorda com os{" "}
                    <Link to="/terms" className="text-blue-600 hover:underline">
                      Termos e Condições
                    </Link>{" "}
                    e a{" "}
                    <Link
                      to="/privacy"
                      className="text-blue-600 hover:underline"
                    >
                      Política de Privacidade
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CheckoutPage;
