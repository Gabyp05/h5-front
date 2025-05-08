import Image from "next/image";
import { Button } from "../ui/button";
import { Element, Link as LinkScroll } from "react-scroll";

const ToProfessionals = () => {
  return (
    <section className="container relative flex flex-col gap-16 mx-auto mt-10 lg:mt-20 mb-10 max-w-7xl">
      <Element name="profesionales">
        <Image
          src="/images/vectorToProfessionals.webp"
          alt="Vector de lineas"
          width={1777}
          height={946}
          className="absolute inset-0 z-0 object-bottom w-full h-full rotate-90 md:rotate-none"
        />
        <div className="z-1 flex flex-col items-center justify-between gap-4 lg:flex-row px-2.5">
          <Image
            src="/images/toProfessionals.webp"
            alt="Mujer usando BrainAware"
            width={524}
            height={557}
            className="hidden lg:block order-4 lg:order-none object-cover z-1 clipImgProfessionals"
          />

          <div className="flex flex-col items-start z-2">
            <div className="order-1 lg:order-none text-balance md:text-start text-white text-3xl md:text-4xl uppercase">
              <h1 className="font-bold">
                Soluciones <br className="hidden lg:block" />{" "}
                <span className="font-bold lg:font-light">
                  Para <br className="hidden md:block lg:hidden" />{" "}
                </span>
                <span className="font-light">
                  profesionales
                </span>
              </h1>
            </div>
            <div className="order-3 lg:order-none mx-auto lg:mx-0 flex flex-row items-center justify-center my-4 lg:my-10 lg:justify-start gap-x-3.5">
              <LinkScroll to="contacto" spy smooth>
                <Button className="px-5 py-6 text-base font-bold shadow-md md:px-10 text-primary cursor-pointer">
                  Solicitar información
                </Button>
              </LinkScroll>
            </div>
            <p className="order-2 lg:order-none text-xl font-bold text-start text-white lg:pb-6">
              Psicólogos, Terapeutas y Educadores
            </p>
            <Image
              src="/images/toProfessionals.webp"
              alt="Mujer usando BrainAware"
              width={524}
              height={557}
              className="order-4 lg:order-none lg:hidden object-cover z-1 clipImgProfessionals"
            />
            <div className="order-5 lg:order-none mt-2.5 lg:mt-0 flex flex-col items-center lg:items-start text-white gap-6">
              <p className="text-xl max-w-[556px] leading-7 text-balance text-center md:text-start">
                Play Attention ofrece beneficios clínicos y educativos
                respaldados por investigaciones. Integra esta tecnología en tu
                práctica para optimizar los resultados de tus pacientes y
                estudiantes.
              </p>
              <ul className="ml-10 list-disc md:ml-5 text-start">
                <li>Mejora la concentración y el enfoque</li>
                <li>Aumenta la capacidad de aprendizaje</li>
                <li>Facilita la regulación emocional</li>
              </ul>
            </div>
          </div>
        </div>
      </Element>
    </section>
  );
};

export default ToProfessionals;
