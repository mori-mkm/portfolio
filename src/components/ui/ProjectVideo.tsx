"use client";

import { useEffect, useRef } from "react";

import type { MediaImage } from "@/content/home";

/**
 * Decorative product loop for a featured project (ADR-021). Muted, looped,
 * inline, no controls. It never autoplays from markup: it plays only after
 * mount when the visitor does not prefer reduced motion, so reduced-motion
 * visitors (and no-JS visitors) see the poster frame. Client Component only
 * because of that media-query check (ADR-005).
 */
type ProjectVideoProps = {
  sources: { src: string; type: "video/webm" | "video/mp4" }[];
  poster: MediaImage;
  focus?: string;
};

export function ProjectVideo({ sources, poster, focus }: ProjectVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => {
      if (reduce.matches) video.pause();
      else void video.play().catch(() => {});
    };
    sync();
    reduce.addEventListener("change", sync);
    return () => reduce.removeEventListener("change", sync);
  }, []);

  return (
    <video
      ref={ref}
      muted
      loop
      playsInline
      preload="metadata"
      poster={poster.src}
      aria-label={poster.alt}
      className="absolute inset-0 h-full w-full object-cover"
      style={{ objectPosition: focus ?? "50% 0%" }}
    >
      {sources.map((source) => (
        <source key={source.src} src={source.src} type={source.type} />
      ))}
    </video>
  );
}
