type LayoutShiftEntry = PerformanceEntry & {
  hadRecentInput?: boolean;
  sources?: { node?: Node | null }[];
};

export function redrawOnLayoutChange(elements: Element[], redraw: () => void) {
  const watched = new Set(elements);

  let timer: number | undefined;
  const schedule = () => {
    window.clearTimeout(timer);
    timer = window.setTimeout(redraw, 50);
  };

  const resizeObserver = new ResizeObserver(schedule);
  for (const el of watched) resizeObserver.observe(el);

  if ("PerformanceObserver" in window) {
    try {
      new PerformanceObserver((list) => {
        for (const entry of list.getEntries() as LayoutShiftEntry[]) {
          if (entry.hadRecentInput) continue;
          const moved = entry.sources?.some(
            (s) => s.node && watched.has(s.node as Element)
          );
          if (moved) {
            schedule();
            return;
          }
        }
      }).observe({ type: "layout-shift", buffered: true });
    } catch {
      // browser doesn't support layout-shift; ResizeObserver is enough
    }
  }

  redraw();
}
