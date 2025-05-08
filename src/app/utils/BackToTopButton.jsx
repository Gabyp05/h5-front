import { useState, useEffect, useCallback } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;

      setIsVisible(scrollTop > 500);
    };

    const optimizedHandleScroll = () => requestAnimationFrame(handleScroll);
    window.addEventListener("scroll", optimizedHandleScroll);

    return () => window.removeEventListener("scroll", optimizedHandleScroll);
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  if (!isVisible) return null;

  return (
    
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 flex items-center justify-center bg-linear-to-t from-[#8176AF] to-[#C0B7E8] rounded-full shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black/30 transition-all duration-300 z-30 cursor-pointer animate-bounce"
        aria-label="Back to top"
      >
        <ArrowUp className="size-10 text-primary" />
      </button>
   
  );
}
