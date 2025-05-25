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
          src={
            image.src.startsWith("/")
              ? `${import.meta.env.BASE_URL}${image.src.substring(1)}`
              : image.src
          }
          alt={image.alt}
          className={`w-full h-full object-contain transition-opacity duration-1000 absolute top-0 left-0 ${
            current === idx ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          style={{ borderRadius: 16 }}
          aria-hidden={current !== idx}
          loading="lazy"
        />
      ))}
    </div>
  );
};

export default React.memo(PromoCarousel);
