"use client";
import { toPerson } from "@/app/utils/landingInfo";
import { Button } from "../ui/button";
import Image from "next/image";
import useIsMobile from "@/app/hooks/useIsMobile";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarouselReact from "embla-carousel-react";
import { useEmblaCarousel } from "@/app/hooks/useEmblaCarousel";
import { Element, Link as LinkScroll } from "react-scroll";

const ToPerson = () => {
  const isMobile = useIsMobile();
  const [emblaRef, emblaApi] = useEmblaCarouselReact({
    loop: true,
    align: "start",
    slidesToScroll: 1,
    containScroll: "trimSnaps",
  });
  const { scrollPrev, scrollNext } = useEmblaCarousel(emblaApi);

  return (
    <section className="container flex flex-col gap-16 mt-5 mx-auto mb-10 px-2.5 max-w-7xl">
      <Element name="personas">
        <div className="flex flex-col items-start">
          <div className="text-start text-balance text-white text-3xl md:text-4xl uppercase">
            <h1 className="font-bold">
              SOLUCIONES PARA
              <br className="md:hidden" />{" "}
              <span className="font-light lg:font-bold">PERSONAS</span>
            </h1>
            <span className="font-light hidden md:block">
              MEJORA LA ATENCIÓN EN CASA
            </span>
          </div>

          <div className="flex flex-row items-center justify-center mx-auto lg:mx-0 my-4 lg:justify-start gap-x-3.5">
            <LinkScroll to="contacto" spy smooth>
              <Button className="px-5 py-6 text-base font-bold shadow-md md:px-10 text-primary">
                Quiero mejorar mi atención
              </Button>
            </LinkScroll>
          </div>
        </div>

        {isMobile ? (
          <div className="relative w-full max-w-[320px] md:max-w-3xl mx-auto">
            <div className="absolute top-1/2 -left-4.5 md:left-2.5 transform -translate-y-1/2 z-10 p-3 rounded-full bg-black/30">
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
                {toPerson.map((info) => (
                  <div
                    key={info.id}
                    className="flex-[0_0_100%] md:flex-[0_0_50%] min-w-0"
                  >
                    <div className="w-[310px] h-[550px] flex flex-col items-center justify-around py-5 px-12.5 rounded-6xl gradient-radial mx-auto">
                      <div className="p-3.5 bg-black/30 rounded-full">
                        <Image
                          src={info.image}
                          alt={`Image of ${info.title}`}
                          width={190}
                          height={190}
                          className="object-cover rounded-full"
                        />
                      </div>
                      <div className="flex flex-col gap-2 pt-3.5 items-center max-w-52 text-white">
                        <h2 className="text-2xl font-bold text-center">
                          {info.title}
                        </h2>
                        <div className="h-px w-36 mx-auto bg-[#C0B7E8] opacity-70" />
                        <p className="text-base font-normal">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute top-1/2 -right-4.5 md:right-2.5 transform -translate-y-1/2 z-10 p-3 rounded-full bg-black/30">
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
          <div className="flex flex-row items-center gap-3">
            {toPerson.map((info) => (
              <div
                key={info.id}
                className="w-[310px] h-[550px] flex flex-col items-center justify-around py-5 px-7 rounded-6xl gradient-radial"
              >
                <div className="p-3.5 bg-black/30 rounded-full">
                  <Image
                    src={info.image}
                    alt={`Image of ${info.image}`}
                    width={190}
                    height={190}
                    className="object-cover"
                  />
                </div>
                <h2 className="text-2xl font-bold text-center text-white">
                  {info.title}
                </h2>
                <div className="h-px w-36 mx-auto bg-[#C0B7E8] opacity-70" />
                <p className="text-base font-normal text-white text-balance">
                  {info.description}
                </p>
              </div>
            ))}
          </div>
        )}
      </Element>
    </section>
  );
};

export default ToPerson;
