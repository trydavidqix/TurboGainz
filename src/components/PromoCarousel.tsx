import { useEffect, useState, useCallback, useMemo } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import React from "react";

const promoImages = [
  {
    src: "/Promo/2x1.png",
    alt: "Promoção 2x1 em produtos selecionados",
  },
  {
    src: "/Promo/4x1.png",
    alt: "Promoção 4x1 em produtos selecionados",
  },
  {
    src: "/Promo/15.png",
    alt: "Promoção com 15% de desconto",
  },
  {
    src: "/Promo/hero.png",
    alt: "Promoção especial da semana",
  },
];

const PromoCarousel = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % promoImages.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + promoImages.length) % promoImages.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 2000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const currentImage = useMemo(() => promoImages[current], [current]);

  return (
    <div
      className="w-full max-w-4xl mx-auto relative h-96 pt-32 rounded-xl overflow-hidden"
      role="region"
      aria-label="Carrossel de promoções"
      aria-live="polite"
    >
      {promoImages.map((image, idx) => (
        <img
          key={image.src}
          src={image.src}
          alt={image.alt}
          className={`w-full h-full object-contain transition-opacity duration-700 absolute top-0 left-0 ${
            current === idx ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          style={{ borderRadius: 16 }}
          aria-hidden={current !== idx}
          loading="lazy"
        />
      ))}

      {/* Controles de navegação */}
      <div className="absolute inset-y-0 left-0 flex items-center">
        <Button
          variant="ghost"
          size="icon"
          onClick={prevSlide}
          className="h-12 w-12 rounded-full bg-black-800/50 hover:bg-black-800 text-white"
          aria-label="Slide anterior"
        >
          <ChevronLeft className="h-6 w-6" aria-hidden="true" />
        </Button>
      </div>

      <div className="absolute inset-y-0 right-0 flex items-center">
        <Button
          variant="ghost"
          size="icon"
          onClick={nextSlide}
          className="h-12 w-12 rounded-full bg-black-800/50 hover:bg-black-800 text-white"
          aria-label="Próximo slide"
        >
          <ChevronRight className="h-6 w-6" aria-hidden="true" />
        </Button>
      </div>

      {/* Indicadores */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {promoImages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-2 h-2 rounded-full transition-colors ${
              current === idx ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`Ir para slide ${idx + 1}`}
            aria-current={current === idx}
          />
        ))}
      </div>
    </div>
  );
};

export default React.memo(PromoCarousel);
