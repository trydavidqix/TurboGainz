import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ChevronRight, Package, History, FileText, Copy } from "lucide-react";
import { useState } from 'react';

// Dados fictícios de encomendas
const fictionalOrders = [
  {
    id: "1",
    orderNumber: `TGZ/${Math.floor(10000000 + Math.random() * 90000000)}`,
    date: "2025-02-19",
    total: 120.00,
    paymentMethod: "Pix",
    shippingMethod: "TURBO Pickup",
    deliveryAddress: {
      name: "Nome Fictícia",
      address: "Rua Fictícia, 123",
      zip: "19999-999",
      city: "SP",
      country: "Brasil",
      apartmentNumber: "H000001",
    },
    billingAddress: {
      name: "Nome Fictícia",
      address: "Rua Fictícia, 123",
      zip: "19999-999",
      city: "SP",
      country: "Brasil",
    },
    Turbo: {
      used: 0,
      accumulated: 567,
      bonus: 100,
    },
    items: [
      { product: "Stanozolol", price: 120.00, quantity: 1, subtotal: 120.00 },
    ],
  },
  {
    id: "2",
    orderNumber: `TGZ/${Math.floor(10000000 + Math.random() * 90000000)}`,
    date: "2024-11-28",
    total: 180.00,
    paymentMethod: "Pix",
    shippingMethod: "Correios",
    deliveryAddress: {
      name: "Nome Fictícia",
      address: "Rua Fictícia, 123",
      zip: "19999-999",
      city: "SP",
      country: "Brasil",
      apartmentNumber: "-",
    },
    billingAddress: {
      name: "Nome Fictícia",
      address: "Rua Fictícia, 123",
      zip: "19999-999",
      city: "SP",
      country: "Brasil",
    },
    Turbo: {
      used: 0,
      accumulated: 450,
      bonus: 50,
    },
    items: [
      { product: "Oxandrolona (Anavar)", price: 180.00, quantity: 1, subtotal: 180.00 },
    ],
  },
  {
    id: "3",
    orderNumber: `TGZ/${Math.floor(10000000 + Math.random() * 90000000)}`,
    date: "2024-11-28",
    total: 250.00,
    paymentMethod: "Pix",
    shippingMethod: "TURBO Pickup",
    deliveryAddress: {
      name: "Nome Fictícia",
      address: "Rua Fictícia, 123",
      zip: "19999-999",
      city: "SP",
      country: "Brasil",
      apartmentNumber: "H000001",
    },
    billingAddress: {
      name: "NomeFictícia",
      address: "Rua Fictícia, 123",
      zip: "19999-999",
      city: "SP",
      country: "Brasil",
    },
    Turbo: {
      used: 100,
      accumulated: 1500,
      bonus: 200,
    },
    items: [
      { product: "Clenbuterol  Dianabol  T3 (Liotironina)", price: 250.00, quantity: 1, subtotal: 250.00 },
    ],
  },
  {
    id: "4",
    orderNumber: `TGZ/${Math.floor(10000000 + Math.random() * 90000000)}`,
    date: "2024-11-15",
    total: 350.00,
    paymentMethod: "Pix",
    shippingMethod: "Correios",
    deliveryAddress: {
      name: "Nome Fictícia",
      address: "Rua Fictícia, 123",
      zip: "19999-999",
      city: "SP",
      country: "Brasil",
      apartmentNumber: "-",
    },
    billingAddress: {
      name: "Nome Fictícia",
      address: "Rua Fictícia, 123",
      zip: "19999-999",
      city: "SP",
      country: "Brasil",
    },
    Turbo: {
      used: 0,
      accumulated: 1400,
      bonus: 150,
    },
    items: [
      { product: "Testosterona Enantato  Sustanon 250  Decanoato de Nandrolona  Masteron (Drostanolona)", price: 350.00, quantity: 1, subtotal: 350.00 },
    ],
  },
  {
    id: "5",
    orderNumber: `TGZ/${Math.floor(10000000 + Math.random() * 90000000)}`,
    date: "2024-06-25",
    total: 400.00,
    paymentMethod: "Pix",
    shippingMethod: "TURBO Pickup",
    deliveryAddress: {
      name: "Nome Fictícia",
      address: "Rua Fictícia, 123",
      zip: "19999-999",
      city: "SP",
      country: "Brasil",
      apartmentNumber: "H000001",
    },
    billingAddress: {
      name: "Nome Fictícia",
      address: "Rua Fictícia, 123",
      zip: "19999-999",
      city: "SP",
      country: "Brasil",
    },
    Turbo: {
      used: 50,
      accumulated: 600,
      bonus: 80,
    },
    items: [
      { product: "Trembolona Testosterona Enantato Decanoato de Nandrolona", price: 400.00, quantity: 1, subtotal: 400.00 },
    ],
  },
];

const OrderHistoryPage = () => {
  const [selectedOrder, setSelectedOrder] = useState(fictionalOrders[0]); // Seleciona a primeira encomenda por padrão

  return (
    <div className="flex flex-col min-h-screen bg-[#0A0D0D] text-black-100">
      <Header />

      <main className="flex-1 py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Header section */}
          <div className="flex items-center mb-8">
            <Package className="h-6 w-6 text-red-600 mr-3" />
            <h1 className="text-2xl font-bold text-black-50">Encomendas</h1>
          </div>

          {/* Filter section */}
          <div className="bg-black-900 p-6 rounded-lg shadow border border-black-700 mb-8 flex flex-col md:flex-row gap-4 items-center">
             <div className="flex-1 w-full md:w-auto">
              <Input type="text" placeholder="Encomenda nº" className="w-full bg-black-800 border-black-700 bg-black-700 text-black-50 hover:bg-black-600" />
            </div>
             <div className="flex-1 w-full md:w-auto flex gap-4">
                <Input type="date" placeholder="Desde" className="w-1/2 bg-black-800 border-black-700 bg-black-700 text-black-50 hover:bg-black-600" />
                <Input type="date" placeholder="Até" className="w-1/2 bg-black-800 border-black-700 bg-black-700 text-black-50 hover:bg-black-600" />
             </div>
             <Button className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded w-full md:w-auto">FILTRAR</Button>
          </div>

          {/* Content Area */}
          <div className="flex flex-col md:flex-row gap-8">
            {/* Order List (Left Sidebar) */}
            <div className="md:w-1/3 bg-black-900 rounded-lg shadow border border-black-700 overflow-hidden">
              <h2 className="text-xl font-bold text-black-50 p-4 border-b border-black-700">Histórico</h2>
              <ul className="divide-y divide-black-700">
                {fictionalOrders.map((order) => (
                  <li
                    key={order.id}
                    className={`p-4 cursor-pointer hover:bg-black-800 transition-colors flex justify-between items-center ${selectedOrder?.id === order.id ? 'bg-black-800' : ''}`}
                    onClick={() => setSelectedOrder(order)}
                  >
                    <div>
                      <p className="font-semibold text-black-50">{order.orderNumber}</p>
                      <p className="text-sm text-black-300">Data: {order.date} Total: {order.total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                    </div>
                    <ChevronRight className="h-5 w-5 text-black-300" />
                  </li>
                ))}
              </ul>
            </div>

            {/* Order Details (Right Content) */}
            <div className="md:w-2/3 bg-black-900 p-8 rounded-lg shadow border border-black-700">
              {selectedOrder ? (
                <div>
                  <h2 className="text-xl font-bold text-black-50 mb-6">Detalhes da Encomenda {selectedOrder.orderNumber}</h2>

                  {/* Action Buttons */}
                  <div className="flex gap-4 mb-6">
                    <Button variant="outline" className="border-black-700 text-black-100 hover:bg-black-800"><History className="mr-2 h-4 w-4" /> Estado da encomenda</Button>
                    <Button variant="outline" className="border-black-700 text-black-100 hover:bg-black-800"><FileText className="mr-2 h-4 w-4" /> Fatura/Recibo</Button>
                    <Button variant="outline" className="border-black-700 text-black-100 hover:bg-black-800"><Copy className="mr-2 h-4 w-4" /> Duplicar</Button>
                  </div>

                  {/* Payment and Shipping */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="p-4 border border-black-700 rounded-lg">
                      <h3 className="font-semibold text-black-50 mb-2">Modo de Pagamento:</h3>
                      <p className="text-black-100">{selectedOrder.paymentMethod}</p>
                    </div>
                    <div className="p-4 border border-black-700 rounded-lg">
                      <h3 className="font-semibold text-black-50 mb-2">Método de envio:</h3>
                      <p className="text-black-100">{selectedOrder.shippingMethod}</p>
                    </div>
                  </div>

                   {/* Addresses */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="p-4 border border-black-700 rounded-lg">
                      <h3 className="font-semibold text-black-50 mb-2">Endereço de entrega:</h3>
                      <p className="text-black-100">{selectedOrder.deliveryAddress.name}</p>
                      <p className="text-black-100">{selectedOrder.deliveryAddress.address}</p>
                      <p className="text-black-100">{selectedOrder.deliveryAddress.zip} {selectedOrder.deliveryAddress.city}</p>
                      <p className="text-black-100">{selectedOrder.deliveryAddress.country}</p>
                       {selectedOrder.deliveryAddress.apartmentNumber !== '-' && (
                         <p className="text-black-100">Número do apartado: {selectedOrder.deliveryAddress.apartmentNumber}</p>
                       )}
                    </div>
                    <div className="p-4 border border-black-700 rounded-lg">
                      <h3 className="font-semibold text-black-50 mb-2">Endereço de facturação:</h3>
                      <p className="text-black-100">{selectedOrder.billingAddress.name}</p>
                      <p className="text-black-100">{selectedOrder.billingAddress.address}</p>
                      <p className="text-black-100">{selectedOrder.billingAddress.zip} {selectedOrder.billingAddress.city}</p>
                      <p className="text-black-100">{selectedOrder.billingAddress.country}</p>
                    </div>
                  </div>

                   {/* Turbo */}
                   <div className="p-4 border border-black-700 rounded-lg mb-6">
                      <h3 className="font-semibold text-black-50 mb-2">Turbo:</h3>
                      <div className="flex space-x-4">
                         <div>
                            <p className="text-black-100">Utilizados:</p>
                            <p className="text-red-600 font-bold">{selectedOrder.Turbo.used}</p>
                         </div>
                          <div>
                            <p className="text-black-100">A acumular:</p>
                            <p className="text-red-600 font-bold">{selectedOrder.Turbo.accumulated}</p>
                         </div>
                          <div>
                            <p className="text-black-100">Pontos de Bónus:</p>
                            <p className="text-red-600 font-bold">{selectedOrder.Turbo.bonus}</p>
                         </div>
                      </div>
                   </div>

                  {/* Shopping Cart Summary */}
                  <div className="p-4 border border-black-700 rounded-lg">
                    <h3 className="font-semibold text-black-50 mb-4">Carrinho de compras</h3>
                    <div className="grid grid-cols-4 gap-4 text-black-300 border-b border-black-700 pb-2 mb-2">
                      <span>Produtos</span>
                      <span>Preço</span>
                      <span>Quantidade</span>
                      <span className="text-right">Subtotal</span>
                    </div>
                     {selectedOrder.items.map((item, index) => (
                        <div key={index} className="grid grid-cols-4 gap-4 text-black-100 mb-2">
                           <span>{item.product}</span>
                           <span>{item.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
                           <span>{item.quantity}</span>
                           <span className="text-right">{item.subtotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
                        </div>
                     ))}
                  </div>

                </div>
              ) : (
                <p className="text-black-300">Selecione uma encomenda no histórico para ver os detalhes.</p>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default OrderHistoryPage; 