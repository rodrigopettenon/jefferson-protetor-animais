import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ComoTudoComecou from "@/components/ComoTudoComecou";
import ComoAjudar from "@/components/ComoAjudar";
import RedesSociais from "@/components/RedesSociais";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ComoTudoComecou />
        <ComoAjudar />
        <RedesSociais />
      </main>
    </div>
  );
};

export default Index;
