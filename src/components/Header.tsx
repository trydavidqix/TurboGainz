import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import ShoppingCartDrawer from "./ShoppingCartDrawer";
import { Menu, X, User, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { products } from "@/data/products";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (value.length > 0) {
      const filtered = products.filter(
        (p) =>
          p.name.toLowerCase().includes(value.toLowerCase()) ||
          p.description.toLowerCase().includes(value.toLowerCase())
      );
      setSearchResults(filtered);
    } else {
      setSearchResults([]);
    }
  };

  const renderMobileMenu = () => (
    <div
      className={`
      fixed inset-0 z-40 bg-[#0A0D0D] transform transition-transform duration-300 ease-in-out
      ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full"}
    `}
    >
      <div className="flex justify-between items-center p-4 border-b">
        <Link to="/" className="text-xl font-bold text-white">
          Turbo<span style={{ color: "#4A0B0B" }}>Gainz</span>
        </Link>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setMobileMenuOpen(false)}
          aria-label="Fechar menu"
        >
          <X className="h-6 w-6" aria-hidden="true" />
        </Button>
      </div>

      <nav className="p-4">
        <ul className="space-y-4">
          <li>
            <Link
              to="/"
              className={`block p-2 rounded-md ${
                isActive("/") ? "bg-[#0A0D0D] font-medium" : ""
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Início
            </Link>
          </li>
          <li>
            <Link
              to="/products"
              className={`block p-2 rounded-md ${
                isActive("/products") ? "bg-[#0A0D0D] font-medium" : ""
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Produtos
            </Link>
          </li>
          <li className="border-b pb-4">
            <span className="block p-2 font-medium">Categorias</span>
            <ul className="pl-4 space-y-2 mt-2">
              <li>
                <Link
                  to="/category/men"
                  className="block p-2 rounded-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Homens
                </Link>
              </li>
              <li>
                <Link
                  to="/category/women"
                  className="block p-2 rounded-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Mulheres
                </Link>
              </li>
              <li>
                <Link
                  to="/category/injectable"
                  className="block p-2 rounded-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Injetáveis
                </Link>
              </li>
              <li>
                <Link
                  to="/category/oral"
                  className="block p-2 rounded-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Comprimidos
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link
              to="/about"
              className={`block p-2 rounded-md ${
                isActive("/about") ? "bg-[#0A0D0D] font-medium" : ""
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Sobre
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={`block p-2 rounded-md ${
                isActive("/contact") ? "bg-[#0A0D0D] font-medium" : ""
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Contato
            </Link>
          </li>
        </ul>
      </nav>

      <div className="absolute bottom-0 left-0 right-0 p-4 border-t">
        <Button
          className="w-full bg-highlight hover:bg-highlight/90 text-highlight-foreground"
          asChild
        >
          <Link to="/account" onClick={() => setMobileMenuOpen(false)}>
            <User className="mr-2 h-4 w-4" />
            Conta
          </Link>
        </Button>
      </div>
    </div>
  );

  const renderSearch = () => (
    <div
      className={`
      fixed inset-0 z-40 bg-[#0A0D0D]/95 transform transition-all duration-300 ease-in-out
      ${
        searchOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }
    `}
    >
      <div className="container max-w-3xl mx-auto pt-20 px-4">
        <div className="relative">
          <Input
            type="text"
            placeholder="O que você procura?"
            className="w-full h-14 text-lg pl-12 bg-black-800 border-black-700 bg-black-700 text-black-50 hover:bg-black-600 rounded-lg"
            autoFocus={searchOpen}
          />
          <Search
            className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white"
            aria-hidden="true"
          />
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-1/2 transform -translate-y-1/2"
            onClick={() => setSearchOpen(false)}
            aria-label="Fechar pesquisa"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </Button>
        </div>

        <div className="mt-8">
          <h3 className="font-medium text-white mb-2">Categorias populares</h3>
          <div className="flex flex-wrap gap-2">
            {[
              "Testosterona",
              "Anabolizantes",
              "Injetáveis",
              "Comprimidos",
              "Para Homens",
              "Para Mulheres",
            ].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-[#0A0D0D] hover:bg-[#0A0D0D] rounded-full text-sm cursor-pointer"
                onClick={() => {
                  setSearchOpen(false);
                  // adicional logic to filter by tag...
                }}
                role="button"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <header className="sticky top-0 z-30 w-full bg-[#0A0D0D] shadow-sm">
      <div className="container mx-auto px-4">
        <div className="h-16 flex items-center justify-between">
          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Abrir menu"
          >
            <Menu className="h-6 w-6" aria-hidden="true" />
          </Button>

          {/* Logo */}
          <Link to="/" className="text-xl font-bold text-white">
            Turbo<span style={{ color: "#4A0B0B" }}>Gainz</span>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link to="/">
                    <NavigationMenuLink
                      asChild
                      className={cn(
                        "flex select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#0A0D0D] hover:text-white focus:bg-[#0A0D0D] focus:text-white",
                        isActive("/") ? "font-medium bg-[#0A0D0D]" : ""
                      )}
                    >
                      Início
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/products">
                    <NavigationMenuLink
                      asChild
                      className={cn(
                        "flex select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#0A0D0D] hover:text-white focus:bg-[#0A0D0D] focus:text-white",
                        isActive("/products") ? "font-medium bg-[#0A0D0D]" : ""
                      )}
                    >
                      Produtos
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                {/* Conditionally render Categories or Search Bar */}
                {[
                  "/account",
                  "/orders",
                  "/manage-account",
                  "/contact",
                  "/about",
                ].includes(location.pathname) ? (
                  <NavigationMenuItem className="flex items-center w-80">
                    <div className="relative w-full">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-black-300" />
                      <Input
                        type="text"
                        placeholder="Procurar produtos"
                        value={searchTerm}
                        onChange={handleSearchChange}
                        className="w-full bg-black-800 border-black-700 bg-black-700 text-black-50 hover:bg-black-600 pl-10 pr-3 py-2 rounded-full placeholder-black-300 focus:outline-none focus:ring-1 focus:ring-white"
                      />
                      {searchTerm && searchResults.length > 0 && (
                        <div className="absolute left-0 right-0 mt-2 bg-black-900 border border-black-700 rounded-lg shadow-lg z-50 max-h-72 overflow-y-auto">
                          {searchResults.map((product) => (
                            <Link
                              key={product.id}
                              to={`/product/${product.id}`}
                              className="block px-4 py-2 hover:bg-black-800 text-black-50 border-b border-black-800 last:border-b-0"
                              onClick={() => {
                                setSearchTerm("");
                                setSearchResults([]);
                              }}
                            >
                              <div className="flex items-center gap-2">
                                <img
                                  src={
                                    product.image.startsWith("/")
                                      ? `${
                                          import.meta.env.BASE_URL
                                        }${product.image.substring(1)}`
                                      : product.image
                                  }
                                  alt={product.name}
                                  className="w-8 h-8 object-contain rounded"
                                />
                                <span>{product.name}</span>
                              </div>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  </NavigationMenuItem>
                ) : (
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Categorias</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="p-6 bg-black-900 border border-black-700 rounded-xl shadow-xl flex gap-6">
                        {/* Bloco de Produtos */}
                        <div className="w-1/2">
                          <NavigationMenuLink asChild>
                            <Link
                              className="flex h-full w-full select-none flex-col items-center justify-center rounded-md bg-gradient-to-b from-black-800 to-black-900 p-6 no-underline outline-none focus:shadow-md hover:bg-black-800 transition-colors"
                              to="/products"
                            >
                              <img
                                src={`${
                                  import.meta.env.BASE_URL
                                }icons/icons8-steroids-64.png`}
                                alt="Ícone de Esteroides para Produtos"
                                className="w-12 h-12 mb-2"
                              />
                              <div className="text-lg font-bold text-black-50">
                                Todos os Produtos
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        </div>

                        {/* Lista de Categorias */}
                        <ul className="w-1/2 space-y-2">
                          <li>
                            <NavigationMenuLink asChild>
                              <Link
                                to="/category/men"
                                className="flex select-none rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-black-800 hover:text-white text-black-100 items-center gap-2"
                              >
                                <img
                                  src={`${
                                    import.meta.env.BASE_URL
                                  }icons/icons8-muscle-flexing-skin-type-3-96.png`}
                                  alt="Ícone Para Homens"
                                  className="w-5 h-5 mr-2"
                                />
                                <div className="text-base font-semibold">
                                  Homens
                                </div>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                          <li>
                            <NavigationMenuLink asChild>
                              <Link
                                to="/category/women"
                                className="flex select-none rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-black-800 hover:text-white text-black-100 items-center gap-2"
                              >
                                <img
                                  src={`${
                                    import.meta.env.BASE_URL
                                  }icons/icons8-weightlift-64.png`}
                                  alt="Ícone Para Mulheres"
                                  className="w-5 h-5 mr-2"
                                />
                                <div className="text-base font-semibold">
                                  Mulheres
                                </div>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                          <li>
                            <NavigationMenuLink asChild>
                              <Link
                                to="/category/injectable"
                                className="flex select-none rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-black-800 hover:text-white text-black-100 items-center gap-2"
                              >
                                <img
                                  src={`${
                                    import.meta.env.BASE_URL
                                  }icons/icons8-injection-64.png`}
                                  alt="Ícone Injetáveis"
                                  className="w-5 h-5 mr-2"
                                />
                                <div className="text-base font-semibold">
                                  Injetáveis
                                </div>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                          <li>
                            <NavigationMenuLink asChild>
                              <Link
                                to="/category/oral"
                                className="flex select-none rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-black-800 hover:text-white text-black-100 items-center gap-2"
                              >
                                <img
                                  src={`${
                                    import.meta.env.BASE_URL
                                  }icons/icons8-pills-50.png`}
                                  alt="Ícone Comprimidos"
                                  className="w-5 h-5 mr-2"
                                />
                                <div className="text-base font-semibold">
                                  Comprimidos
                                </div>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        </ul>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                )}

                <NavigationMenuItem>
                  <Link to="/about">
                    <NavigationMenuLink
                      asChild
                      className={cn(
                        "flex select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#0A0D0D] hover:text-white focus:bg-[#0A0D0D] focus:text-white",
                        isActive("/about") ? "font-medium bg-[#0A0D0D]" : ""
                      )}
                    >
                      Sobre
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/contact">
                    <NavigationMenuLink
                      asChild
                      className={cn(
                        "flex select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#0A0D0D] hover:text-white focus:bg-[#0A0D0D] focus:text-white",
                        isActive("/contact") ? "font-medium bg-[#0A0D0D]" : ""
                      )}
                    >
                      Contato
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {/* Search button for other pages */}
            {![
              "/account",
              "/orders",
              "/manage-account",
              "/contact",
              "/about",
            ].includes(location.pathname) && (
              <Button
                variant="ghost"
                size="icon"
                className="text-white md:hidden"
                onClick={() => setSearchOpen(true)}
              >
                <Search className="h-5 w-5" aria-label="Procurar" />
              </Button>
            )}

            <ShoppingCartDrawer />

            {/* Botão/Ícone para /account */}
            <Button
              variant="ghost"
              size="icon"
              className="hidden md:flex text-white"
              asChild
              aria-label="Minha Conta"
            >
              <Link to="/account">
                <User className="h-5 w-5" aria-hidden="true" />
              </Link>
            </Button>

            {/* Botão/Link para /login */}
            <Button
              variant="default"
              size="sm"
              className="hidden md:flex bg-highlight hover:bg-highlight/90 text-highlight-foreground"
              asChild
            >
              <Link to="/login">Conta</Link>
            </Button>
          </div>
        </div>
      </div>

      {renderMobileMenu()}
      {renderSearch()}
    </header>
  );
};

export default Header;
