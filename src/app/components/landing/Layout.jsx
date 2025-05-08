import Navbar from "@/app/components/Navbar";
import { useEffect, useRef } from "react";
import useIsMobile from "@/app/hooks/useIsMobile";
import Footer from "@/app/components/Footer";

export default function LandingLayout({ children }) {
  const isMobile = useIsMobile();
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current && !isMobile) {
      videoRef.current.play().catch((error) => {
        console.log("Error al reproducir el video automáticamente:", error);
      });
    }
  }, [isMobile, videoRef]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-primary">
      {/* Video de fondo - solo visible en desktop */}
      {!isMobile && (
        <div className="hidden lg:block absolute top-0 left-0 w-full max-h-[685px] z-0">
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            className="absolute top-0 left-0 min-w-full max-h-[685px] object-cover"
          >
            <source src="/videos/hero-video.mp4" type="video/mp4" />
            Tu navegador no soporta videos HTML5.
          </video>
        </div>
      )}

      {/* Contenido de la página */}
      <div className="relative z-10 xl:flex xl:flex-col xl:items-center mx-auto max-w-[1500px]">
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  );
}
