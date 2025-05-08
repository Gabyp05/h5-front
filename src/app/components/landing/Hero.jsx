"use client";

import { Button } from "../ui/button";
import {
  ChevronLeft,
  ChevronRight,
  Mail,
  MapPin,
  PhoneCall,
} from "lucide-react";
import Image from "next/image";
import useEmblaCarouselReact from "embla-carousel-react";
import { contactItems } from "@/app/utils/contact";
import { useEmblaCarousel } from "@/app/hooks/useEmblaCarousel";
import useIsMobile from "@/app/hooks/useIsMobile";
import { Link as LinkScroll } from "react-scroll";

export default function Hero() {
  const isMobile = useIsMobile();
  const [emblaRef, emblaApi] = useEmblaCarouselReact({ loop: true });
  const { scrollPrev, scrollNext } = useEmblaCarousel(emblaApi);

  return (
    <div className="relative">
      <div className="absolute inset-0 w-full h-full -left-3/4 md:-left-3/7 md:-top-2/8 lg:left-0 -top-1/4 lg:top-0">
        <Image
          src="/images/Vector-HERO.webp"
          alt="Vector de lineas"
          width={1442}
          height={846}
          className="object-cover w-full h-full overflow-visible"
          priority
        />
      </div>
      <section className="container relative w-full h-auto mx-auto mt-7 md:mt-14 max-w-7xl">
        <div className="flex flex-col-reverse items-center justify-end w-full gap-2 top-32 lg:top-52 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-2xl text-white">
            <div className="relative z-10 p-4 md:rounded-5xl md:bg-black/30">
              <h1 className="text-center lg:text-start text-balance text-[32px] font-bold lg:text-[40px] text-white [&_span]:bg-gradient-to-r [&_span]:from-[#C0B7E8] [&_span]:to-[#8176AF] [&_span]:bg-clip-text [&_span]:text-transparent">
                <span>Potenciá</span> tu Atención, <br /> Alcanzá tu{" "}
                <br className="md:hidden" /> <span>Máximo Potencial</span>
              </h1>

              <p className="text-pretty text-center lg:text-start max-w-2xl mt-4 text-xl text-white">
              Con Play Attention® usás ejercicios cerebrales y juegos estimulantes para fortalecer tu atención, ayudando a manejar eficazmente lo retos del TDAH.
              </p>
            </div>

            <div className="flex flex-row items-center justify-center mt-4 lg:justify-start gap-x-3.5">
                  <LinkScroll
                    to="video"
                    offset={-20}
                    spy
                    smooth
                  >
                    <Button className="px-10 py-6 text-base font-bold shadow-md text-primary">
                      Conocé más
                    </Button>
                  </LinkScroll>
              <Image
                src="/icons/arrow.svg"
                alt="Arrow left image"
                width={130}
                height={57}
                className="object-contain hidden md:block"
              />
            </div>
          </div>

          <div className="z-10 relative flex justify-center items-center rounded-t-[100px] rounded-bl-[240px] rounded-br-[100px] p-2.5 bg-black/30">
            <Image
              src="/images/hero-img.webp"
              alt="Hombre usando la banda BrainAware"
              width={315}
              height={286}
              className="aspect-[315/286] object-center overflow-hidden xl:w-[490px] xl:h-[426px] rounded-t-[100px] rounded-bl-[240px] rounded-br-[100px]"
            />
          </div>
        </div>
        {/* {!isMobile && (
        <div className="hidden lg:block rounded-full border border-[#433679] bg-radial from-[#3A3456F2] to-[#211E2E] p-7 mt-20">
          <div className="flex flex-row items-center justify-between text-white">
            <div className="flex flex-row items-center gap-2">
              <MapPin color="#C0B7E8" size={65} />
              <h2 className="text-2xl font-bold">Agenda una reunión</h2>
            </div>

            <div className="h-16 w-px bg-[#C0B7E8] opacity-70"></div>

            <div className="flex flex-row items-center gap-2">
              <PhoneCall color="#C0B7E8" size={65} />
              <div className="flex flex-col items-start">
                <h2 className="text-2xl font-bold">Whatsapp</h2>
                <span className="text-sm">(110) 1111-1010</span>
              </div>
            </div>

            <div className="h-16 w-px bg-[#C0B7E8] opacity-70"></div>

            <div className="flex flex-row items-center gap-2">
              <Mail color="#C0B7E8" size={65} />
              <div className="flex flex-col items-start">
                <h2 className="text-2xl font-bold">Envianos un mensaje</h2>
                <span>Contacto@playattentionargentina.com</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {isMobile && (
        <div className="lg:hidden rounded-full border border-[#433679] bg-gradient-to-r from-[#3A3456F2] to-[#211E2E] p-6 mt-12">
          <div className="relative">
            <button
              onClick={scrollPrev}
              className="absolute top-1/2 -left-3 transform -translate-y-1/2 z-10 flex items-center justify-center w-8 h-8 bg-[#C0B7E8] rounded-full"
              aria-label="Anterior"
            >
              <ChevronLeft size={20} color="#211E2E" />
            </button>

            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {contactItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex-[0_0_100%] min-w-0 flex flex-col items-center justify-center text-white p-4"
                  >
                    <div className="flex flex-row items-center gap-4">
                      {item.icon}
                      <div className="flex flex-col items-start">
                        <h2 className="text-xl font-bold">{item.title}</h2>
                        <span className="text-sm">{item.subtitle}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={scrollNext}
              className="absolute top-1/2 -right-3 transform -translate-y-1/2 z-10 flex items-center justify-center w-8 h-8 bg-[#C0B7E8] rounded-full"
              aria-label="Siguiente"
            >
              <ChevronRight size={20} color="#211E2E" />
            </button>
          </div>
        </div>
      )} */}
      </section>
    </div>
  );
}
