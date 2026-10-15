import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutScrollAnimation({ children }) {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const titleElements = section.querySelectorAll(
        ".section-label, .section-title"
      );

      const descriptions = section.querySelectorAll(
        ".about-description"
      );

      const cards = section.querySelectorAll(".about-card");

      // État initial des titres
      gsap.set(titleElements, {
        opacity: 0,
        y: 25,
        filter: "blur(3px)",
      });

      // État initial des descriptions
      gsap.set(descriptions, {
        opacity: 0,
        y: 20,
      });

      // État initial des cartes
      gsap.set(cards, {
        opacity: 0,
        y: 45,
        rotateX: -6,
        transformPerspective: 900,
      });

      // Animation déclenchée par le défilement
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 95%",
          end: "+=240",
          scrub: 0.2,
          pin: false,
          invalidateOnRefresh: true,
        },
      });

      timeline
        // Apparition des titres
        .to(titleElements, {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.35,
          stagger: 0.05,
        })

        // Apparition des descriptions
        .to(
          descriptions,
          {
            opacity: 1,
            y: 0,
            duration: 0.35,
            stagger: 0.05,
          },
          "-=0.25"
        )

        // Apparition successive des cartes
        .to(
          cards,
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 0.45,
            stagger: 0.08,
          },
          "-=0.2"
        );
    }, section);

    // Nettoyage des animations
    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="about-scroll-animation"
    >
      {children}
    </div>
  );
}
