import Image from "next/image";
import Link from "next/link";
import { footerLinks } from "../utils/landingInfo";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="container py-12 mx-auto max-w-7xl">
      <div className="flex flex-col items-center gap-5">
        <div className="flex flex-col lg:flex-row">
          <div className="flex items-center justify-center">
            <Link href="/">
              <Image
                src="/images/play-attention_logo.webp"
                alt="Logo Play Attention"
                width={200}
                height={48}
                className="hidden object-cover lg:block"
              />
              <Image
                src="/images/Play-Attention-Logo-Responsive.svg"
                alt="Logo Play Attention"
                width={400}
                height={215}
                className="object-cover mb-5 lg:hidden"
              />
            </Link>
          </div>

          <div className="flex flex-col-reverse lg:flex-row gap-2 lg:gap-0 text-white font-bold text-base">
            {footerLinks.map((block, index) => (
              <div
                className="flex flex-col items-center justify-center gap-2 lg:items-start lg:flex-row"
                key={index}
              >
                <div className="h-1.5 w-[196px] lg:h-[196px] lg:w-1.5 border-gradient mx-16 my-auto" />
                {block.type === "links" && (
                  <ul>
                    {block.items.map((link) => (
                      <li
                        key={link.label}
                        className={`text-center lg:text-start ${
                          index < block.items.length - 1 ? "mb-4" : ""
                        }`}
                      >
                        <Link href={link.href}>{link.label}</Link>
                      </li>
                    ))}
                  </ul>
                )}
                {block.type === "social" && (
                  <div className="flex flex-col gap-7 lg:gap-9 mt-1">
                    <h3 className="text-center lg:text-start">
                      SOCIALIZA CON NOSOTROS
                    </h3>
                    <ul className="flex flex-row gap-5 mb-1">
                      {block.items.map((social) => (
                        <li key={social.name}>
                          <Link href={social.href}>
                            <Image
                              src={social.icon}
                              width={32}
                              height={32}
                              alt={`icono de ${social.name}`}
                            />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
          <div className="w-full h-px mx-auto my-5 border-gradient" />
          <div className="flex flex-row items-center justify-center gap-1">
            <span className="text-white text-xs">
              &copy; {currentYear} Play Attention{" "}
            </span>
            <Image
              src="/icons/AR.svg"
              alt="Bandera de Argentina"
              width={24}
              height={18}
              priority
            />
            <span className="text-white text-xs">
              Derechos reservados
            </span>
          </div>
      </div>
    </footer>
  );
};

export default Footer;
