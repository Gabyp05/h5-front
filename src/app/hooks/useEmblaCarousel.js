"use client";

import { useState, useEffect, useCallback } from "react";

/**
 * Hook personalizado para manejar la lógica de Embla Carousel
 * @param {Object} emblaApi - La instancia de la API de Embla Carousel
 * @returns {Object} - Objeto con estados y funciones para controlar el carrusel
 */
export const useEmblaCarousel = (emblaApi) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState([]);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    const scrollTo = useCallback(
        (index) => emblaApi && emblaApi.scrollTo(index),
        [emblaApi]
    );

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;

        setScrollSnaps(emblaApi.scrollSnapList());

        emblaApi.on("select", onSelect);

        onSelect();

        return () => {
            emblaApi.off("select", onSelect);
        };
    }, [emblaApi, onSelect]);

    return {
        selectedIndex,
        scrollSnaps,
        scrollTo,
        scrollPrev,
        scrollNext,
    };
};
