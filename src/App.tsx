import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ShoppingCartProvider } from "@/context/ShoppingCartContext";
import React, { lazy, Suspense } from "react";

// Importações lazy dos componentes de página
const Index = lazy(() => import("./pages/Index"));
const ProductsPage = lazy(() => import("./pages/ProductsPage"));
const CategoryPage = lazy(() => import("./pages/CategoryPage"));
const ProductDetailPage = lazy(() => import("./pages/ProductDetailPage"));
const CheckoutPage = lazy(() => import("./pages/CheckoutPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const NotFound = lazy(() => import("./pages/NotFound"));
const EnvioEntregaPage = lazy(() => import("@/pages/EnvioEntregaPage"));
const PoliticaPrivacidadePage = lazy(
  () => import("@/pages/PoliticaPrivacidadePage")
);
const TermosCondicoesPage = lazy(() => import("@/pages/TermosCondicoesPage"));
const PerguntasFrequentesPage = lazy(
  () => import("@/pages/PerguntasFrequentesPage")
);
const AccountPage = lazy(() => import("@/pages/AccountPage"));
const ManageAccountPage = lazy(() => import("@/pages/ManageAccountPage"));
const AddressesPage = lazy(() => import("@/pages/AddressesPage"));
const ChangePasswordPage = lazy(() => import("@/pages/ChangePasswordPage"));
const PaymentMethodsPage = lazy(() => import("@/pages/PaymentMethodsPage"));
const CreditCardPage = lazy(() => import("@/pages/CreditCardPage"));
const PixPaymentPage = lazy(() => import("@/pages/PixPaymentPage"));
const ProfilePage = lazy(() => import("@/pages/ProfilePage"));
const EditProfilePicturePage = lazy(
  () => import("@/pages/EditProfilePicturePage")
);
const DeactivateAccountPage = lazy(
  () => import("@/pages/DeactivateAccountPage")
);
const OrderHistoryPage = lazy(() => import("@/pages/OrderHistoryPage"));
const PermissionsPage = lazy(() => import("@/pages/PermissionsPage"));
const BecomePartnerPage = lazy(() => import("@/pages/BecomePartnerPage"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ShoppingCartProvider>
      <TooltipProvider>
        {/* <Toaster /> */}
        <Sonner />
        <BrowserRouter basename="/TurboGainz">
          <Suspense fallback={<div>Carregando...</div>}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route
                path="/product/:productId"
                element={<ProductDetailPage />}
              />
              <Route path="/category/:categoryId" element={<CategoryPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/envio-e-entrega" element={<EnvioEntregaPage />} />
              <Route
                path="/politica-de-privacidade"
                element={<PoliticaPrivacidadePage />}
              />
              <Route
                path="/termos-e-condicoes"
                element={<TermosCondicoesPage />}
              />
              <Route
                path="/perguntas-frequentes"
                element={<PerguntasFrequentesPage />}
              />
              <Route
                path="/shipping"
                element={<Navigate to="/envio-e-entrega" replace />}
              />
              <Route
                path="/privacy"
                element={<Navigate to="/politica-de-privacidade" replace />}
              />
              <Route
                path="/terms"
                element={<Navigate to="/termos-e-condicoes" replace />}
              />
              <Route
                path="/faq"
                element={<Navigate to="/perguntas-frequentes" replace />}
              />
              <Route path="/orders" element={<OrderHistoryPage />} />
              <Route path="/account" element={<AccountPage />} />
              <Route path="/manage-account" element={<ManageAccountPage />} />
              <Route
                path="/manage-account/addresses"
                element={<AddressesPage />}
              />
              <Route
                path="/manage-account/change-password"
                element={<ChangePasswordPage />}
              />
              <Route
                path="/manage-account/payment-methods"
                element={<PaymentMethodsPage />}
              />
              <Route
                path="/manage-account/payment-methods/credit-card"
                element={<CreditCardPage />}
              />
              <Route
                path="/manage-account/payment-methods/pix"
                element={<PixPaymentPage />}
              />
              <Route path="/manage-account/profile" element={<ProfilePage />} />
              <Route
                path="/manage-account/edit-profile-picture"
                element={<EditProfilePicturePage />}
              />
              <Route
                path="/manage-account/deactivate-account"
                element={<DeactivateAccountPage />}
              />
              <Route
                path="/manage-account/permissions"
                element={<PermissionsPage />}
              />
              <Route path="/become-partner" element={<BecomePartnerPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </ShoppingCartProvider>
  </QueryClientProvider>
);

export default App;
