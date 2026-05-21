"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, ZoomOut, RotateCcw } from "lucide-react";

interface Props {
  src: string;
  alt: string;
  open: boolean;
  onClose: () => void;
}

const MIN_SCALE = 1;
const MAX_SCALE = 5;
const ZOOM_STEP = 0.4;

export function Lightbox({ src, alt, open, onClose }: Props) {
  const [mounted, setMounted] = useState(false);
  const [scale, setScale] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const dragStart = useRef<{ x: number; y: number; ox: number; oy: number } | null>(null);
  const isDragging = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const scaleRef = useRef(scale);
  const offsetRef = useRef(offset);

  useEffect(() => { scaleRef.current = scale; }, [scale]);
  useEffect(() => { offsetRef.current = offset; }, [offset]);
  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    if (open) { setScale(1); setOffset({ x: 0, y: 0 }); }
  }, [open, src]);

  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onClose]);

  // Native wheel listener with passive:false so preventDefault works
  useEffect(() => {
    const el = containerRef.current;
    if (!el || !open) return;

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      e.stopPropagation();

      const prev = scaleRef.current;
      const next = e.deltaY < 0
        ? Math.min(MAX_SCALE, prev + ZOOM_STEP)
        : Math.max(MIN_SCALE, prev - ZOOM_STEP);

      if (next <= 1) {
        setOffset({ x: 0, y: 0 });
      } else {
        setOffset((o) => clamp(o.x, o.y, next, el));
      }
      setScale(next);
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [open]);

  const clamp = (x: number, y: number, s: number, el: HTMLElement) => {
    if (s <= 1) return { x: 0, y: 0 };
    const maxX = (el.clientWidth  * (s - 1)) / 2;
    const maxY = (el.clientHeight * (s - 1)) / 2;
    return { x: Math.max(-maxX, Math.min(maxX, x)), y: Math.max(-maxY, Math.min(maxY, y)) };
  };

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (scaleRef.current <= 1) return;
    e.preventDefault();
    isDragging.current = true;
    dragStart.current = { x: e.clientX, y: e.clientY, ox: offsetRef.current.x, oy: offsetRef.current.y };
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!dragStart.current || !containerRef.current) return;
    const dx = e.clientX - dragStart.current.x;
    const dy = e.clientY - dragStart.current.y;
    setOffset(clamp(dragStart.current.ox + dx, dragStart.current.oy + dy, scaleRef.current, containerRef.current));
  }, []);

  const handleMouseUp = useCallback(() => {
    dragStart.current = null;
    isDragging.current = false;
  }, []);

  const zoom = (delta: number) => {
    const el = containerRef.current;
    setScale((prev) => {
      const next = Math.max(MIN_SCALE, Math.min(MAX_SCALE, prev + delta));
      if (next <= 1) setOffset({ x: 0, y: 0 });
      else if (el) setOffset((o) => clamp(o.x, o.y, next, el));
      return next;
    });
  };

  const reset = () => { setScale(1); setOffset({ x: 0, y: 0 }); };

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="absolute inset-0 bg-black/85 backdrop-blur-sm" onClick={onClose} />

          {/* Controls */}
          <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
            <div className="flex items-center gap-1 bg-black/50 rounded-full px-1 py-1">
              <button
                onClick={() => zoom(-ZOOM_STEP)}
                disabled={scale <= MIN_SCALE}
                className="p-1.5 rounded-full text-white/70 hover:text-white disabled:opacity-30 transition-all"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              <span className="text-white/60 text-xs w-10 text-center font-mono select-none">
                {Math.round(scale * 100)}%
              </span>
              <button
                onClick={() => zoom(ZOOM_STEP)}
                disabled={scale >= MAX_SCALE}
                className="p-1.5 rounded-full text-white/70 hover:text-white disabled:opacity-30 transition-all"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
              {scale > 1 && (
                <button
                  onClick={reset}
                  className="p-1.5 rounded-full text-white/70 hover:text-white transition-all"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              )}
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-black/50 text-white/70 hover:text-white hover:bg-black/70 transition-all"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Image container — receives wheel + drag events */}
          <div
            ref={containerRef}
            className="relative z-10 w-full h-full flex items-center justify-center p-4 overflow-hidden"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            style={{ cursor: scale > 1 ? (isDragging.current ? "grabbing" : "grab") : "default" }}
          >
            {/* motion.div handles entry animation only */}
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              {/* Plain img handles zoom/pan transform */}
              <img
                src={src}
                alt={alt}
                draggable={false}
                className="max-w-full max-h-[90vh] rounded-xl shadow-2xl object-contain select-none block"
                style={{
                  transform: `scale(${scale}) translate(${offset.x / scale}px, ${offset.y / scale}px)`,
                  transition: dragStart.current ? "none" : "transform 0.12s ease",
                  transformOrigin: "center center",
                }}
                onClick={(e) => e.stopPropagation()}
              />
            </motion.div>
          </div>

          {scale > 1 && (
            <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/30 text-xs select-none pointer-events-none">
              Scroll to zoom · Drag to pan
            </p>
          )}
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
