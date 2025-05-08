import { pricing } from "@/app/utils/landingInfo";
import Image from "next/image";
import { Button } from "../ui/button";
import useIsMobile from "@/app/hooks/useIsMobile";
import useEmblaCarouselReact from "embla-carousel-react";
import { useEmblaCarousel } from "@/app/hooks/useEmblaCarousel";

const Pricing = () => {
  const isMobile = useIsMobile();
  const [emblaRef, emblaApi] = useEmblaCarouselReact({
    loop: true,
    align: "start",
    slidesToScroll: 1,
    containScroll: "trimSnaps",
  });
  const { selectedIndex, scrollSnaps, scrollTo } = useEmblaCarousel(emblaApi);

  return (
    <section className="container relative mx-auto mb-10 z-1 px-2.5 max-w-7xl">
      <div className="flex flex-col gap-4 text-center text-white text-3xl md:text-4xl mb-14">
        <h1 className="font-bold uppercase">Precios y planes</h1>
        <div className="h-px w-full max-w-[200px] lg:max-w-[414px] border-gradient mx-auto" />
        <span className="hidden md:block font-light text-3xl">
          Encuentra la solución perfecta para ti.
        </span>
      </div>
      {isMobile ? (
        <div className="relative w-full max-w-[320px] md:max-w-3xl mx-auto">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {pricing.map((plan) => (
                <div key={plan.id} className="flex-[0_0_100%] min-w-0">
                  <div className="flex flex-col justify-between p-8 gradient-radial rounded-6xl text-white h-full">
                    <div className="flex flex-col items-center gap-2">
                      <div className="flex flex-col gap-2.5 items-center">
                        <h2 className="font-semibold text-xl">{plan.plan}</h2>
                        <div className="h-px w-24 border-gradient mx-auto" />
                      </div>
                      <div className="my-9">
                        {plan.benefits.map((benefit, index) => (
                          <div
                            key={index}
                            className="text-base flex flex-row items-center gap-1"
                          >
                            <span className="size-8 flex-shrink-0">
                              <Image
                                src="/icons/icon-check.webp"
                                alt="Icon Check"
                                width={32}
                                height={32}
                                className="object-contain w-full h-full"
                              />
                            </span>
                            <span>{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <Button className="text-primary w-fit px-4 mx-auto">
                      Consultar precio
                    </Button>
                    <div className="flex justify-center gap-2 mt-5">
                      {scrollSnaps.map((_, index) => (
                        <button
                          key={index}
                          className={`size-3 rounded-full transition-colors duration-300 ${
                            selectedIndex === index
                              ? "bg-[#C0B7E8]"
                              : "bg-[#C0B7E8]/30"
                          }`}
                          onClick={() => scrollTo(index)}
                          aria-label={`Ir a la diapositiva ${index + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 px-4 py-6 md:grid-cols-3 md:py-12 md:px-8">
          {pricing.map((plan) => (
            <div
              key={plan.id}
              className="flex flex-col justify-between p-10 gradient-radial rounded-6xl text-white h-full"
            >
              <div className="flex flex-col items-center gap-2">
                <div className="flex flex-col gap-2.5 items-center">
                  <h2 className="font-semibold text-xl">{plan.plan}</h2>
                  <div className="h-px w-24 border-gradient mx-auto" />
                </div>
                <div className="my-9">
                  {plan.benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="text-base flex flex-row items-center gap-1"
                    >
                      <span className="size-8 flex-shrink-0">
                        <Image
                          src="/icons/icon-check.webp"
                          alt="Icon Check"
                          width={32}
                          height={32}
                          className="object-contain w-full h-full"
                        />
                      </span>
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <Button className="text-primary w-fit px-4 mx-auto">
                Consultar precio
              </Button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Pricing;
