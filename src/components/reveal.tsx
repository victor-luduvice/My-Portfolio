"use client";

import { animate, motion, useInView, useMotionValue, useReducedMotion, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import type { ReactNode } from "react";

/** `children` é o conteúdo animado; `className` adiciona estilos e `delay` posterga a entrada. */
export function Reveal({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const reduceMotion = useReducedMotion();
  return <motion.div className={className} initial={reduceMotion ? false : { opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.16 }}
    transition={{ duration: reduceMotion ? 0 : 0.55, delay, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>;
}

/** Conta até `value` uma única vez quando visível; `suffix` acrescenta texto ao número. */
export function AnimatedNumber({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(count, value, { duration: reduceMotion ? 0 : 1, ease: "easeOut" });
    return controls.stop;
  }, [count, isInView, reduceMotion, value]);

  return <span ref={ref}><motion.span>{rounded}</motion.span>{suffix}</span>;
}
