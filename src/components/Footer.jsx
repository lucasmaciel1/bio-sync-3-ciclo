

export default function Footer(){

    return(    
      <footer className="bg-green-1 py-6 sm:py-8">
            <div className="container mx-auto px-4 sm:px-6">
              <div className="bg-green-1 p-4 sm:p-8 rounded-lg">
                <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8 text-black-1">Idealizadores</h2>
                <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-6 sm:mb-8">
                  {[1, 2, 3, 4, 5].map((item) => (
                    <div key={item} className="w-16 h-16 sm:w-20 sm:h-20 lg:w-28 lg:h-28 bg-white-1 rounded-full shadow-lg"></div>
                  ))}
                </div>
                <p className="text-center text-base sm:text-lg text-black-1 font-semibold">© Copyright 2024 | BIOSYNC</p>
              </div>
            </div>
          </footer>
    );
    }
    
    