"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, ChevronDown, ChevronUp, SlidersHorizontal } from "lucide-react";

interface Props {
  groupedTech: Record<string, string[]>;
  selected: string[];
  onToggle: (tech: string) => void;
  onClear: () => void;
}

const MAX_VISIBLE = 3;

export function ProjectFilter({ groupedTech, selected, onToggle, onClear }: Props) {
  const [search, setSearch] = useState("");
  const [expandedGroups, setExpandedGroups] = useState<Record<string, boolean>>({});
  const [panelOpen, setPanelOpen] = useState(true);

  const toggleGroup = (cat: string) =>
    setExpandedGroups((prev) => ({ ...prev, [cat]: !prev[cat] }));

  const filteredGroups = useMemo(() => {
    const q = search.toLowerCase().trim();
    if (!q) return groupedTech;
    return Object.fromEntries(
      Object.entries(groupedTech)
        .map(([cat, items]) => [cat, items.filter((i) => i.toLowerCase().includes(q))])
        .filter(([, items]) => (items as string[]).length > 0)
    ) as Record<string, string[]>;
  }, [search, groupedTech]);

  const totalOptions = Object.values(groupedTech).flat().length;

  return (
    <div className="glass-card overflow-hidden">
      {/* Header bar */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-primary-900/30">
        <button
          onClick={() => setPanelOpen(!panelOpen)}
          className="flex items-center gap-2 text-sm font-semibold text-primary-300 hover:text-primary-200 transition-colors"
        >
          <SlidersHorizontal className="w-4 h-4" />
          Filter by Tech
          {selected.length > 0 && (
            <span className="ml-1 px-2 py-0.5 text-xs rounded-full bg-primary-600 text-white font-bold">
              {selected.length}
            </span>
          )}
          {panelOpen ? (
            <ChevronUp className="w-4 h-4 text-primary-600" />
          ) : (
            <ChevronDown className="w-4 h-4 text-primary-600" />
          )}
        </button>

        {selected.length > 0 && (
          <button
            onClick={onClear}
            className="flex items-center gap-1.5 text-xs text-primary-400 hover:text-primary-200 border border-primary-700/40 hover:border-primary-500/60 px-3 py-1.5 rounded-full transition-all"
          >
            <X className="w-3 h-3" />
            Clear all
          </button>
        )}
      </div>

      <AnimatePresence>
        {panelOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="p-5 space-y-5">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-primary-600 pointer-events-none" />
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder={`Search ${totalOptions} technologies...`}
                  className="w-full bg-[#0a0f0e] border border-primary-800/40 focus:border-primary-500/60 rounded-lg pl-9 pr-4 py-2.5 text-sm text-primary-200 placeholder:text-primary-700 outline-none transition-colors"
                />
                {search && (
                  <button
                    onClick={() => setSearch("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-primary-600 hover:text-primary-400"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* Category groups */}
              {Object.keys(filteredGroups).length === 0 ? (
                <p className="text-sm text-primary-200/40 text-center py-2">
                  No results for &ldquo;{search}&rdquo;
                </p>
              ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-5">
                  {Object.entries(filteredGroups).map(([category, items]) => {
                    const isExpanded = expandedGroups[category];
                    const visible = isExpanded ? items : items.slice(0, MAX_VISIBLE);
                    const hiddenCount = items.length - MAX_VISIBLE;

                    return (
                      <div key={category} className="space-y-2">
                        {/* Category label */}
                        <p className="text-xs font-semibold text-primary-600 uppercase tracking-widest">
                          {category}
                        </p>

                        {/* Pills */}
                        <div className="flex flex-col gap-1.5">
                          {visible.map((item) => {
                            const isActive = selected.includes(item);
                            return (
                              <motion.button
                                key={item}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => onToggle(item)}
                                className={`flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg text-left transition-all duration-150 border ${
                                  isActive
                                    ? "bg-primary-600/30 border-primary-500/60 text-primary-300 font-medium"
                                    : "bg-transparent border-primary-900/40 text-primary-400/80 hover:border-primary-700/60 hover:text-primary-300"
                                }`}
                              >
                                {isActive && (
                                  <span className="w-1.5 h-1.5 rounded-full bg-primary-400 flex-shrink-0" />
                                )}
                                <span className="truncate">{item}</span>
                              </motion.button>
                            );
                          })}

                          {/* Show more/less */}
                          {hiddenCount > 0 && (
                            <button
                              onClick={() => toggleGroup(category)}
                              className="text-xs text-primary-600 hover:text-primary-400 text-left px-1 py-0.5 transition-colors flex items-center gap-1"
                            >
                              {isExpanded ? (
                                <>
                                  <ChevronUp className="w-3 h-3" /> Show less
                                </>
                              ) : (
                                <>
                                  <ChevronDown className="w-3 h-3" /> +{hiddenCount} more
                                </>
                              )}
                            </button>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Active filter chips */}
              <AnimatePresence>
                {selected.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="pt-3 border-t border-primary-900/30 overflow-hidden"
                  >
                    <div className="flex flex-wrap gap-2 items-center">
                      <span className="text-xs text-primary-600 font-medium">Active:</span>
                      {selected.map((tech) => (
                        <motion.button
                          key={tech}
                          layout
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          onClick={() => onToggle(tech)}
                          className="flex items-center gap-1 text-xs px-2.5 py-1 rounded-full bg-primary-600/20 border border-primary-500/50 text-primary-300 hover:bg-primary-600/30 transition-all"
                        >
                          {tech}
                          <X className="w-3 h-3" />
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
