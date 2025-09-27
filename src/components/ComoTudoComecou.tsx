const ComoTudoComecou = () => {
  return (
    <section className="bg-primary py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto text-center">
          {/* YouTube Video Embed */}
          <div className="relative w-full max-w-4xl mx-auto mb-12">
            <div className="aspect-video">
              <iframe
                className="w-full h-full rounded-3xl shadow-warm"
                src="https://www.youtube.com/embed/WZEogvjrjRc"
                title="Como Tudo Começou - Jefferson Protetor"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComoTudoComecou;