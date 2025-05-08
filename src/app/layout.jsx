import { Montserrat } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import "./globals.css";

const montserrat = Montserrat({
    weight: ["300", "400", "500", "600", "700"],
    subsets: ["latin"],
    display: "swap",
});

export const metadata = {
    title: "Play Attention",
    description:
        "Play Attention es un programa de entrenamiento cerebral que mejora habilidades cognitivas y funciones ejecutivas, utilizando la tecnología BrainAware™ para ayudar a personas con TDAH a controlar ejercicios interactivos con su concentración.",
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon.ico",
        apple: "/apple-touch-icon.png",
    },
    openGraph: {
        title: "Play Attention AR",
        description: "Play Attention es un programa de entrenamiento cerebral que mejora habilidades cognitivas y funciones ejecutivas, utilizando la tecnología BrainAware™ para ayudar a personas con TDAH a controlar ejercicios interactivos con su concentración.",
        url: "https://playattention.vercel.app/",
        siteName: "Play Attention",
        locale: "es-AR",
        images: [
            {
                url: '/CP_Full_Logo.png',
                width: 1200, 
                height: 630,
                alt: 'Imagen de Play Attention para compartir',
            },
        ],
    },
    manifest: '/site.webmanifest',
    applicationName: "Play Attention Argentina",
    category: "Healthtech",
    classification: "Healthtech",
    keywords: ["PlayAttention", "Neurociencia", "TDAH", "Habilidades cognitivas", "BrainAware™"],
    authors: [
        {
        name: "Gabriela Patiño, Maria Alarcon, Sebastian Tournier, Rene Silva, Pablo Silva, Allan Morales, Lucas Segovia, Agostina Belen, Fernando Vergel, Diego Yako",
        },
    ],
};

export default function RootLayout({ children }) {
    return (
        <html lang="es">
        <body className={montserrat.className}>
            <NextTopLoader color="#000" />
            {children}
        </body>
        </html>
    );
};