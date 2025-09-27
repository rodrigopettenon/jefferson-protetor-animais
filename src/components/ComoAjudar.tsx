import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Users, ShoppingBag } from "lucide-react";

const ComoAjudar = () => {
  const helpOptions = [
    {
      icon: Heart,
      title: "Vaquinha – O Sonho da Chácara dos Animais",
      description:
        "A maior vontade do Jefferson é poder oferecer um lar seguro e acolhedor para os animais que ele cuida nas ruas. Com a compra da chácara, ele poderá tornar esse sonho possível. Cada contribuição aproxima esse sonho da realidade. Junte-se a nós nessa missão!",
      buttonText: "Contribuir com a Vaquinha",
      link: "https://www.vakinha.com.br/vaquinha/ter-um-santuario?fbclid=PAZXh0bgNhZW0CMTEAAacsIwuAc_mFeV0x9agxG0RvxkUYncxNBCoHaqsJwEFFdLTpOvoBVz4iECvrTg_aem_VGBKPDG34q5wKbI0fIJBmQ&utm_campaign=showcampaign&utm_content=5638942&utm_medium=share-bottom-link&utm_source=socialshares-app-share",
    },
    {
      icon: Users,
      title: "Seja Membro no YouTube",
      description:
        "Com apenas uma pequena contribuição mensal, a partir de um valor acessível, descontado diretamente do seu cartão, você já apoia diretamente o trabalho diário do Jefferson. Ao se tornar membro do canal no YouTube, você ainda garante benefícios exclusivos.",
      buttonText: "Torne-se Membro",
      link: "https://www.youtube.com/@jeffersonprotetor",
    },
    {
      icon: ShoppingBag,
      title: "Compre pelo TikTok Shop",
      description:
        "Dá uma conferida no TikTok Shop e encontre os produtos que combinam com você. Parte do valor das suas compras ajuda a apoiar o trabalho do Jefferson.",
      buttonText: "Apoiar pelo TikTok Shop",
      link: "https://vt.tiktok.com/ZSD4As5fh/?page=TikTokShop",
    },
  ];

  return (
    <section id="como-ajudar" className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Como Ajudar
          </h2>
        </div>

        <div className="flex flex-col gap-6 max-w-6xl mx-auto">
          {helpOptions.map((option, index) => {
            const IconComponent = option.icon;
            return (
              <Card
                key={index}
                className="bg-card border-border/20 rounded-3xl p-6 shadow-gentle hover:shadow-warm transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6">
                  {/* Icon Section */}
                  <div className="flex-shrink-0">
                    <div className="p-4 bg-secondary/10 rounded-full w-fit">
                      <IconComponent className="w-8 h-8 text-secondary" />
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="flex-1 text-center lg:text-left space-y-4">
                    <CardTitle className="text-xl md:text-2xl font-bold text-foreground">
                      {option.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground text-base leading-relaxed">
                      {option.description}
                    </CardDescription>
                  </div>
                  
                  {/* Button Section */}
                  <div className="flex-shrink-0 w-full lg:w-auto">
                    <Button
                      asChild
                      className="w-full lg:w-auto bg-secondary hover:bg-secondary/90 text-secondary-foreground py-4 px-6 text-base rounded-2xl shadow-warm hover:shadow-gentle transition-all duration-300"
                    >
                      <a
                        href={option.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {option.buttonText}
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ComoAjudar;