

export default function Footer() {

  return (
    <footer className="bg-green-1 py-6 sm:py-8">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="bg-green-1 p-4 sm:p-8 rounded-lg">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8 text-black-1">Idealizadores</h2>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-6 sm:mb-8">
            {[
              { image: "/foto1.jpg", link: "https://www.linkedin.com/in/jo%C3%A3o-tavares-19937b24b/" },
              { image: "/foto2.jpeg", link: "https://www.linkedin.com/in/edson-henrique-pereira-dsm/" },
              { image: "/foto3.png", link: "https://github.com/joseantoniojuniord" },
              { image: "/foto4.jpg", link: "https://www.linkedin.com/in/lucas-maciel-650711217/" },
              { image: "/foto5.jpg", link: "https://www.linkedin.com/in/higor-v-padilha-41aaa4236/" },
            ].map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 sm:w-20 sm:h-20 lg:w-28 lg:h-28"
              >
                <img
                  src={item.image}
                  alt={`Imagem do idealizador ${index + 1}`}
                  className="w-full h-full object-cover rounded-full shadow-lg"
                />
              </a>
            ))}
          </div>
          <p className="text-center text-base sm:text-lg text-black-1 font-semibold">© Copyright 2024 | BIOSYNC</p>
        </div>
      </div>
    </footer>
  );
}

