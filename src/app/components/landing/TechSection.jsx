import { Play } from "lucide-react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Element } from "react-scroll";

const TechSection = () => {
  return (
    <section className="container flex flex-col justify-center pt-20 mx-auto mb-10 lg:pt-40 max-w-7xl">
      <Element name="video">
        <div className="relative mx-2.5 rounded-[160px] h-auto w-fit shadow-xl">
          <Image
            src="/images/banda-BodyWave.webp"
            alt="imagen de la Banda body wave"
            width={1278}
            height={303}
            className="object-cover rounded-[160px] overflow-hidden"
          />
          <div className="absolute inset-0 hidden lg:flex flex-col lg:items-end justify-center">
            <div className="flex flex-col items-center gap-1 lg:pr-10">
              <h2 className="text-lg lg:text-5xl text-center lg:text-start font-bold text-shadow-lg bg-gradient-to-r from-[#5129F4] to-[#271379] bg-clip-text text-transparent">
                TECNOLOGÍA BRAINAWARE™
              </h2>
              <span className="text-white text-center text-shadow-lg font-medium text-base lg:text-4xl max-w-[615px]">
                EL PODER DE LA NEUROCIENCIA <br /> A TU ALCANCE
              </span>
            </div>
          </div>
          <Dialog>
            <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 p-2.5 rounded-full bg-black/30 animate-bounce-btn">
              <DialogTrigger asChild>
                <button
                  className="flex items-center justify-center size-10 bg-[#C0B7E8] rounded-full shadow cursor-pointer"
                  aria-label="Reproducir video"
                >
                  <Play size={20} color="#211E2E" />
                </button>
              </DialogTrigger>
              <DialogContent className="bg-radial from-[#211E2E] to-[#C0B7E8] border-none">
                <DialogHeader>
                  <DialogTitle className="text-white text-center mb-2">
                    ¿Qué es PlayAttention?
                  </DialogTitle>
                  <div className="aspect-video">
                    <video
                      className="size-full"
                      width="560"
                      height="315"
                      title="Video sobre PlayAttention"
                      controls
                      preload="metadata"
                    >
                      <source src="/videos/video_ES.mp4" type="video/mp4" />
                      Tu navegador no soporta la etiqueta de video.
                    </video>
                  </div>
                </DialogHeader>
              </DialogContent>
            </div>
          </Dialog>
        </div>
        <div className="flex flex-col items-center gap-1 mt-10 text-white lg:hidden">
          <h2 className="text-[28px] lg:text-5xl text-center font-bold text-shadow ">
            TECNOLOGÍA BRAINAWARE™
          </h2>
          <span className="text-center text-shadow font-light text-[28px] text-balance">
            El poder de la Neurociencia a tu alcance
          </span>
        </div>
      </Element>
    </section>
  );
};

export default TechSection;
