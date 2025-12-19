"use client";

import { useInView } from "react-intersection-observer";
import { ReactNode } from "react";

type AnimatedSectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};

export default function AnimatedSection({
  children,
  className,
  id,
}: AnimatedSectionProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id={id}
      ref={ref}
      className={`fade-in-section ${inView ? "is-visible" : ""} ${className || ""}`}
    >
      {children}
    </section>
  );
}
