"use client";

import Image from "next/image";

import type { Translation } from "@/data/types";
import type { Language } from "@/data/types";

interface IphoneFrameProps {
  src: string;
  alt: Translation;
  language: Language;
  priority?: boolean;
  className?: string;
  imageClassName?: string;
}

export function IphoneFrame({
  src,
  alt,
  language,
  priority = false,
  className = "",
  imageClassName = "object-cover",
}: IphoneFrameProps) {
  return (
    <div
      className={`relative mx-auto aspect-[393/852] w-full max-w-[260px] rounded-[14%] border-[10px] border-zinc-950 bg-zinc-950 p-1 shadow-2xl ring-1 ring-white/10 ${className}`}
    >
      <div className="pointer-events-none absolute left-1/2 top-[2.5%] z-20 h-[3%] w-[38%] -translate-x-1/2 rounded-full bg-zinc-950 shadow-sm" />
      <div className="relative h-full w-full overflow-hidden rounded-[10%] bg-muted">
        <Image
          src={src}
          alt={alt[language]}
          fill
          priority={priority}
          sizes="260px"
          className={imageClassName}
        />
      </div>
    </div>
  );
}
