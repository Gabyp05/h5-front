import Image from "next/image";
import { Button } from "../ui/button";
import { toBusiness } from "@/app/utils/landingInfo";
import useIsMobile from "@/app/hooks/useIsMobile";
import useEmblaCarouselReact from "embla-carousel-react";
import { useEmblaCarousel } from "@/app/hooks/useEmblaCarousel";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Element, Link as LinkScroll } from "react-scroll";

const ToBusiness = () => {
  const isMobile = useIsMobile();
  const [emblaRef, emblaApi] = useEmblaCarouselReact({
    loop: true,
    align: "start",
    slidesToScroll: 1,
    containScroll: "trimSnaps",
  });
  const { scrollPrev, scrollNext } = useEmblaCarousel(emblaApi);
  return (
    <div className="relative">
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/vectorToBusiness.webp"
          alt="Vector de lineas"
          width={1455}
          height={503}
          className="z-0 object-cover w-full h-full mt-80 overflow-visible"
          priority
        />
      </div>
      <section className="container relative mx-auto my-10 z-1 lg:mt-40 max-w-7xl">
        <Element name="empresas">
          <div className="flex flex-col gap-16">
            <div className="flex flex-col justify-between gap-4 px-2.5">
              <div className="flex flex-col items-start">
                <div className="text-start text-balance text-white text-3xl md:text-4xl uppercase">
                  <h1 className="font-bold">SOLUCIONES PARA<br className="md:hidden"/> <span className="font-light lg:font-bold">EMPRESAS</span></h1>
                  <span className="font-light hidden md:block">
                    BIENESTAR Y PRODUCTIVIDAD EN EL TRABAJO
                  </span>
                </div>              
                <div className="flex flex-row items-center justify-center mx-auto lg:mx-0 my-5 lg:my-10 lg:justify-start gap-x-3.5">
                  <LinkScroll to="contacto" spy smooth>
                    <Button className="px-5 py-6 text-base font-bold shadow-md md:px-10 text-primary bg-[#C0B7E8]">
                      Programas empresariales
                    </Button>
                  </LinkScroll>
                </div>
              </div>

              {isMobile ? (
                <div className="relative w-full max-w-[320px] md:max-w-3xl mx-auto">
                  <div className="absolute top-1/3 -left-4.5 md:left-2.5 transform -translate-y-1/2 z-10 p-3 rounded-full bg-black/30">
                    <button
                      onClick={scrollPrev}
                      className="flex items-center justify-center w-8 h-8 bg-[#C0B7E8] rounded-full shadow"
                      aria-label="Anterior"
                    >
                      <ChevronLeft size={20} color="#211E2E" />
                    </button>
                  </div>
                  <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex">
                      {toBusiness.map((info) => (
                        <div key={info.id} className="flex-[0_0_100%] min-w-0">
                          <div className="flex flex-col justify-around p-5 gradient-radial rounded-6xl text-white h-full">
                            <div className="flex flex-col items-center gap-2">
                              <Image
                                src={info.icon}
                                alt={`Icon of ${info.title}`}
                                width={64}
                                height={64}
                                className="object-contain size-12 md:size-16"
                              />
                              <h2 className="mb-4 text-center text-2xl font-bold md:mb-8 md:text-2xl">
                                {info.title}
                              </h2>
                            </div>
                            <p className="text-base text-pretty">
                              {info.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="absolute top-1/3 -right-4.5 md:right-2.5 transform -translate-y-1/2 z-10 p-3 rounded-full bg-black/30">
                    <button
                      onClick={scrollNext}
                      className="flex items-center justify-center w-8 h-8 bg-[#C0B7E8] rounded-full shadow"
                      aria-label="Siguiente"
                    >
                      <ChevronRight size={20} color="#211E2E" />
                    </button>
                  </div>
                </div>
              ) : (
                <div className="w-full">
                  <div className="grid grid-cols-1 gap-4 px-4 py-6 md:grid-cols-3 md:py-12 md:px-8">
                    {toBusiness.map((info) => (
                      <div
                        key={info.id}
                        className="flex flex-col justify-around p-5 gradient-radial rounded-6xl text-white h-full"
                      >
                        <div className="flex flex-col items-start gap-2">
                          <Image
                            src={info.icon}
                            alt={`Icon of ${info.title}`}
                            width={64}
                            height={64}
                            className="object-contain size-12 md:size-16"
                          />
                          <h2 className="mb-4 text-xl font-bold md:mb-8 md:text-2xl">
                            {info.title}
                          </h2>
                        </div>
                        <p className="text-sm md:text-base">
                          {info.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </Element>
      </section>
    </div>
  );
};

export default ToBusiness;
