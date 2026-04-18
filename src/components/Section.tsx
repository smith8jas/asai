import type { ReactNode } from "react";
import useScrollAnimation from "./useScrollAnimation";

interface SectionProps {
  children: ReactNode;
  className?: string;
  bg?: "surface" | "low" | "container" | "high" | "primary";
  id?: string;
}

const bgMap = {
  surface: "bg-surface",
  low: "bg-surface-container-low",
  container: "bg-surface-container",
  high: "bg-surface-container-high",
  primary: "bg-primary text-on-primary",
};

export default function Section({ children, className = "", bg = "surface", id }: SectionProps) {
  const ref = useScrollAnimation<HTMLElement>();

  return (
    <section
      ref={ref}
      id={id}
      className={`animate-on-scroll py-24 md:py-32 ${bgMap[bg]} ${className}`}
    >
      <div className="max-w-7xl mx-auto px-8">{children}</div>
    </section>
  );
}
