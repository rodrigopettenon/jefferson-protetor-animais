import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Import images
import jeffersonPortrait from "@/assets/jefferson-portrait.png";
import dogsGrass from "@/assets/dogs-grass.png";
import dogsDirt from "@/assets/dogs-dirt.png";
import fluffyDog from "@/assets/fluffy-dog.png";
import dogsEating from "@/assets/dogs-eating.png";

const images = [
  { src: jeffersonPortrait, alt: "Jefferson com seus cães resgatados" },
  { src: dogsGrass, alt: "Cães sendo alimentados na grama" },
  { src: dogsDirt, alt: "Grupo de cães resgatados" },
  { src: fluffyDog, alt: "Cão peludo resgatado" },
  { src: dogsEating, alt: "Cães se alimentando juntos" },
];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative w-full h-96 md:h-[500px] overflow-hidden rounded-3xl shadow-gentle">
      {/* Images */}
      <div
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-cover flex-shrink-0"
          />
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background p-3 rounded-full shadow-gentle transition-all duration-300 hover:shadow-warm"
        aria-label="Imagem anterior"
      >
        <ChevronLeft className="w-6 h-6 text-foreground" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background p-3 rounded-full shadow-gentle transition-all duration-300 hover:shadow-warm"
        aria-label="Próxima imagem"
      >
        <ChevronRight className="w-6 h-6 text-foreground" />
      </button>

      {/* Dots indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-secondary shadow-warm"
                : "bg-background/60 hover:bg-background/80"
            }`}
            aria-label={`Ir para imagem ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;