"use client";

import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

interface Props {
  images: string[];
  altPrefix?: string;
}

export function ImageGallery({ images, altPrefix = "Screenshot" }: Props) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  if (images.length === 0) return null;

  const slides = images.map((src) => ({ src }));

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-4">
        {images.map((src, i) => (
          <button
            key={i}
            onClick={() => {
              setIndex(i);
              setOpen(true);
            }}
            className="aspect-video rounded-lg overflow-hidden border border-primary-900/40 hover:border-primary-500/50 transition-all duration-200 group bg-[#0a0f0e] flex items-center justify-center"
          >
            <img
              src={src}
              alt={`${altPrefix} ${i + 1}`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              onError={(e) => {
                const img = e.target as HTMLImageElement;
                img.style.display = "none";
                img.parentElement!.innerHTML = `<span style="color:#0d9488;font-size:1.5rem;opacity:0.4">${i + 1}</span>`;
              }}
            />
          </button>
        ))}
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={slides}
        index={index}
      />
    </>
  );
}
