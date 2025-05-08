"use client";
import { testimonials } from "@/app/utils/landingInfo";
import Image from "next/image";
import useIsMobile from "@/app/hooks/useIsMobile";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarouselReact from "embla-carousel-react";
import { useEmblaCarousel } from "@/app/hooks/useEmblaCarousel";

const Testimonials = () => {
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
        <div className="absolute inset-0 size-full -top-1/8">
            <Image
                src="/images/VectorTestimonials.webp"
                alt="Vector de lineas"
                width={1442}
                height={549}
                className="z-0 object-cover size-full overflow-visible"
                priority
            />
        </div>
        <section className="container relative mx-auto mb-10 z-1 px-2.5 max-w-7xl">
        <div className="text-balance text-start text-white text-3xl md:text-4xl uppercase mb-14">
          <h1 className="font-bold uppercase">Casos de éxito</h1>
          <span className="font-light text-2xl">Historias que inspiran</span>
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
              {testimonials.map((info) => (
                <div
                  key={info.id}
                  className="flex-[0_0_100%] md:flex-[0_0_50%] min-w-0"
                >
                  <div className="w-[310px] h-[550px] flex flex-col items-center py-5 px-12.5 rounded-6xl gradient-radial mx-auto">
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
        <div className="flex flex-row items-center justify-center gap-3">
          {testimonials.map((info) => (
            <div
              key={info.id}
              className="w-[310px] h-[550px] flex flex-col items-center py-5 px-12.5 rounded-6xl gradient-radial"
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
              <div className="flex flex-col gap-2 pt-3.5 items-center max-w-52 text-white">
                <h2 className="text-2xl font-bold text-center">{info.title}</h2>
                <div className="h-px w-36 mx-auto bg-[#C0B7E8] opacity-70" />
                <p className="text-base font-normal">{info.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
        </section>
    </div>
  )
}

export default Testimonials