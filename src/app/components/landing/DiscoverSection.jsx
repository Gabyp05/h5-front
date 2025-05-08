import { discoverInfo } from "@/app/utils/landingInfo";
import useEmblaCarouselReact from "embla-carousel-react";
import { useEmblaCarousel } from "@/app/hooks/useEmblaCarousel";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const DiscoverSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarouselReact({
    loop: true,
    align: "start",
    slidesToScroll: 1,
    containScroll: "trimSnaps",
  });
  const { scrollPrev, scrollNext } = useEmblaCarousel(emblaApi);

  return (
    <section className="w-full">
      <div className="flex flex-col items-center">
        <p className="text-white text-center text-base md:text-xl text-balance">
        Descubre cómo nuestra tecnología BrainAware™ utiliza la neurociencia ofrecerte programas que se adaptan a tus necesidades y permiten monitorear tu progreso en tiempo real.
        </p>

        <div className="relative w-full py-14">
          <Image
            src="/images/VectorDiscoverSection.webp"
            alt="Vector de linea curvas"
            width={1471}
            height={164}
            className="absolute inset-0 top-32 md:top-20 z-0 object-center w-full h-auto"
          />

            {/* desktop */}
          <div className="relative container mx-auto z-[2] hidden lg:flex flex-row justify-between items-center max-w-7xl">
            {discoverInfo.map((info) => (
              <div
                key={info.step}
                className="flex flex-col gap-2 justify-center max-w-2xs"
              >
                <div className="mx-auto size-[198px] bg-black/30 rounded-full p-5">
                  <div className="bg-gradient-to-r from-[#8176AF] to-[#C0B7E8] size-40 rounded-full flex items-center justify-center text-primary text-6xl font-bold">
                    {info.step}
                  </div>
                </div>
                <div className="flex flex-row items-center gap-4">
                  <ArrowRight width={27} color="#C0B7E8" strokeWidth={4} />
                  <span className="text-2xl text-white font-bold">
                    {info.title}
                  </span>
                </div>
                <p className="text-xl text-white">
                  {info.description}
                </p>
              </div>
            ))}
          </div>

            {/* mobile y tablet */}
          <div className="lg:hidden relative w-full max-w-xl md:max-w-3xl mx-auto px-2.5">
            <div className="absolute top-1/2 left-1.5 md:left-2.5 transform -translate-y-1/2 z-10 p-3 rounded-full bg-black/30">
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
                {discoverInfo.map((info) => (
                  <div
                    key={info.step}
                    className="flex-[0_0_100%] md:flex-[0_0_50%] min-w-0"
                  >
                    <div className="flex flex-col gap-2 items-center justify-center">
                      <div className="size-[198px] bg-black/30 rounded-full p-5">
                        <div className="bg-gradient-to-r from-[#8176AF] to-[#C0B7E8] size-40 rounded-full flex items-center justify-center text-primary text-6xl font-bold">
                          {info.step}
                        </div>
                      </div>
                      <div className="flex flex-row items-center gap-4">
                        <span className="text-2xl text-white font-bold">
                          {info.title}
                        </span>
                      </div>
                      <p className="text-xl text-white text-center">
                        {info.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute top-1/2 right-1.5 md:right-2.5 transform -translate-y-1/2 z-10 p-3 rounded-full bg-black/30">
              <button
                onClick={scrollNext}
                className="flex items-center justify-center w-8 h-8 bg-[#C0B7E8] rounded-full shadow"
                aria-label="Siguiente"
              >
                <ChevronRight size={20} color="#211E2E" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscoverSection;
