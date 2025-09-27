// Import social media logos
import youtubeLogoImg from "@/assets/youtube-logo.png";
import tiktokLogoImg from "@/assets/tiktok-logo.png";
import instagramLogoImg from "@/assets/instagram-logo.png";
import facebookLogoImg from "@/assets/facebook-logo.webp";

const RedesSociais = () => {
  const socialLinks = [
    {
      name: "YouTube",
      url: "https://youtube.com/@jeffersonprotetor?si=j9dfm-fFmtDG7Bbb",
      logo: youtubeLogoImg,
      alt: "YouTube do Jefferson Protetor",
    },
    {
      name: "TikTok",
      url: "https://www.tiktok.com/@jeffersonaraujo567?_t=ZM-900TCD0cHL1&_r=1",
      logo: tiktokLogoImg,
      alt: "TikTok do Jefferson Araújo",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/jeffersonprotetor/?igsh=MTEyOXdweTZscWc5bA%3D%3D&utm_source=qr#",
      logo: instagramLogoImg,
      alt: "Instagram do Jefferson Protetor",
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/share/1YnsKL9WkQ/?mibextid=wwXIfr",
      logo: facebookLogoImg,
      alt: "Facebook do Jefferson",
    },
  ];

  return (
    <section id="redes-sociais" className="bg-primary py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Redes Sociais
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Acompanhe o trabalho diário de Jefferson e veja como você pode fazer parte dessa missão de amor e cuidado com os animais
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center space-y-4 p-6 rounded-3xl bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-all duration-300 hover:scale-110 hover:shadow-warm"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 overflow-hidden rounded-2xl shadow-gentle group-hover:shadow-warm transition-all duration-300">
                <img
                  src={social.logo}
                  alt={social.alt}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-primary-foreground font-semibold text-lg group-hover:text-secondary transition-colors duration-300">
                {social.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RedesSociais;