"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { ProjectFeature } from "@/types";
import { ImageGallery } from "./ImageGallery";

interface Props {
  features: ProjectFeature[];
}

export function FeatureAccordion({ features }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {features.map((feature, i) => (
        <div key={i} className="glass-card overflow-hidden">
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-center justify-between p-5 text-left hover:bg-primary-900/10 transition-colors"
          >
            <span className="font-semibold text-[#f0fdfa]">{feature.title}</span>
            <motion.div
              animate={{ rotate: openIndex === i ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronDown className="w-5 h-5 text-primary-500" />
            </motion.div>
          </button>

          <AnimatePresence>
            {openIndex === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="px-5 pb-5 border-t border-primary-900/40">
                  <p className="text-primary-200/70 leading-relaxed mt-4">
                    {feature.description}
                  </p>
                  {feature.images.length > 0 && (
                    <ImageGallery images={feature.images} altPrefix={feature.title} />
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
