import { useState } from "react";

export const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    "https://images.indianexpress.com/2021/01/myntra.png?w=640", // Replace with your image paths
    "https://flowbite.com/docs/images/carousel/carousel-2.svg",
    "https://flowbite.com/docs/images/carousel/carousel-1.svg",
    "https://flowbite.com/docs/images/carousel/carousel-4.svg",
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Carousel Wrapper */}
      <div className="relative h-64 overflow-hidden rounded-lg md:h-96">
        {slides.map((slide, index) =>
        (
          
          <div
            key={index}
            className={`absolute inset-0 left-10 transition-all duration-900 ease-in-out ${
              index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <img
              src={slide}
              alt={`Slide ${index + 1}`}
              className="absolute block w-full h-full object-cover"
            />
          </div>)
        )}
      </div>

      {/* Slider Indicators */}
      <div className="absolute flex justify-center w-full bottom-4">
        {slides.map((v, index) => (
          <button
            key={index}
            className={`w-3 h-3 mx-1 rounded-full ${
              index === currentSlide ? "bg-blue-500" : "bg-gray-300"
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>

      {/* Previous Button */}
      <button
        className="absolute top-1/2 left-4 transhtmlForm -translate-y-1/2 bg-white/50 p-2 rounded-full shadow-md hover:bg-white"
        onClick={prevSlide}
        aria-label="Previous Slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Next Button */}
      <button
        className="absolute top-1/2 right-4 transhtmlForm -translate-y-1/2 bg-white/50 p-2 rounded-full shadow-md hover:bg-white"
        onClick={nextSlide}
        aria-label="Next Slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default Slider;
