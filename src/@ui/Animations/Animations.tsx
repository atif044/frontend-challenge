import gsap from "gsap";

export const animateCompletion = (
  tickElement: HTMLSpanElement | null,
  textElement: HTMLSpanElement | null
) => {
  if (tickElement && textElement) {
    gsap
      .timeline()
      .fromTo(
        tickElement,
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.4, ease: "power4.out" }
      )
      .to(
        tickElement,
        { scale: 1.2, duration: 0.2, ease: "power4.out" },
        "-=0.1"
      )
      .fromTo(
        textElement,
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 0.6, ease: "power4.out" },
        "-=0.2"
      );
  }
};

export const animateRowDeletion = (
  rowElement: HTMLElement | null,
  onComplete: () => void
) => {
  if (rowElement) {
    gsap.to(rowElement, {
      opacity: 0,
      x: -200,
      duration: 0.3,
      ease: "power4.out",
      onComplete,
    });
  }
};
