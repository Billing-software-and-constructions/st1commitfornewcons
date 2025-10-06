import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import heroSlide1 from "@/assets/hero-slide-1.jpg";
import heroSlide2 from "@/assets/hero-slide-2.jpg";
import heroSlide3 from "@/assets/hero-slide-3.jpg";
import heroSlide4 from "@/assets/hero-slide-4.jpg";
import heroSlide5 from "@/assets/hero-slide-5.jpg";
import heroSlide6 from "@/assets/hero-slide-6.jpg";

const Hero = () => {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, duration: 20 },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  );

  const slides = [
    { image: heroSlide1, opacity: "opacity-100" },
    { image: heroSlide2, opacity: "opacity-70" },
    { image: heroSlide3, opacity: "opacity-90" },
    { image: heroSlide4, opacity: "opacity-60" },
    { image: heroSlide5, opacity: "opacity-85" },
    { image: heroSlide6, opacity: "opacity-75" },
  ];

  return (
    <section id="home" className="relative h-[600px] flex items-center justify-center overflow-hidden" aria-label="Hero banner showcasing construction projects">
      <div className="embla absolute inset-0" ref={emblaRef} aria-label="Slideshow of construction projects">
        <div className="embla__container flex h-full">
          {slides.map((slide, index) => (
            <div
              key={index}
              className="embla__slide relative flex-[0_0_100%] min-w-0"
              role="group"
              aria-label={`Slide ${index + 1} of ${slides.length}`}
            >
              <div 
                className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${slide.opacity}`}
                style={{ backgroundImage: `url(${slide.image})` }}
                role="img"
                aria-label={`Construction project showcase ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="absolute inset-0 bg-black/45" aria-hidden="true" />
      
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <p className="text-lg mb-4 tracking-wider">Top Builders in Pondicherry</p>
        <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
          Quality Construction Company Pondicherry
        </h1>
        <Button variant="hero" aria-label="Get a construction quote from New Star Construction">GET A QUOTE</Button>
      </div>
    </section>
  );
};

export default Hero;
