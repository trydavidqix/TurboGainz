import { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface BaseLayoutProps {
  children: ReactNode;
  className?: string;
}

const BaseLayout = ({ children, className = "" }: BaseLayoutProps) => {
  return (
    <div className={`flex flex-col min-h-screen bg-[#0A0D0D] ${className}`}>
      <Header />
      <main id="main-content" role="main" className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default BaseLayout;
