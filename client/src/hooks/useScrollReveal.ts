/**
 * useScrollReveal — Apple-style scroll-reveal hook
 * Adds 'in-view' class to elements with 'lb-reveal' class when they enter the viewport.
 * CSS in index.css handles the actual animation (opacity + translateY transition).
 */
import { useEffect } from "react";

export function useScrollReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll(".lb-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            // Once revealed, stop observing to avoid re-triggering
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}
