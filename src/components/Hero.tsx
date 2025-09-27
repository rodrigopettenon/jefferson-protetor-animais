import { Button } from "@/components/ui/button";
import ImageCarousel from "./ImageCarousel";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Carousel */}
          <div className="order-2 lg:order-1">
            <ImageCarousel />
          </div>

          {/* Right Column - Content */}
          <div className="order-1 lg:order-2 space-y-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              A missão de{" "}
              <span className="text-graphite-gray">
                salvar vidas
              </span>
            </h2>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Jefferson é um protetor de animais independente. Ele se dedica diariamente a cães em situação de abandono nas ruas e beiras de estrada. Ele constrói casinhas para oferecer abrigo, leva comida e água, e quando possível, leva esses animais para castrar, ajudando a prevenir a superpopulação de cães de rua. Seu trabalho faz a diferença na vida de cada um deles, e sua atitude é um exemplo de compaixão e cuidado, mostrando como pequenos gestos podem transformar realidades.
            </p>

            <Button
              size="lg"
              onClick={() => scrollToSection("como-ajudar")}
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-6 text-lg rounded-2xl shadow-warm hover:shadow-gentle transition-all duration-300 hover:scale-105"
            >
              Quero Ajudar
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;