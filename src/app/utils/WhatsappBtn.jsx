import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const WhatsappBtn = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.pageYOffset > 500);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const bottomPositionClass = isScrolled ? "bottom-22" : "bottom-6";

  return (
    <Link
      href="https://api.whatsapp.com/send?phone=584142931360&text=Hola!%20Quiero%20más%20información%20sobre%20PlayAttention"
      target="_blank"
      className={`size-10 rounded-full fixed right-6 z-30 transition-all duration-300 ease-in-out ${bottomPositionClass}`}
      style={{
        transitionProperty: "bottom",
      }}
      title="¡Contáctanos!"
    >
      <Image
        src="/icons/whatsapp.svg"
        alt="Whatsapp icon"
        width={70}
        height={70}
        className="size-10"
      />
    </Link>
  );
};

export default WhatsappBtn;
