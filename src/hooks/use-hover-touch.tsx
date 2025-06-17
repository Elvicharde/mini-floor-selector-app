import { useState, useRef } from "react";

export function useHoverTouch() {
  const [isActive, setIsActive] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  const handlers = {
    onMouseEnter: () => setIsActive(true),
    onMouseLeave: () => setIsActive(false),
    onTouchStart: () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      setIsActive(true);
    },
    onTouchEnd: () => {
      timeoutRef.current = window.setTimeout(() => {
        setIsActive(false);
      }, 1000); // or any duration you prefer
    },
  };

  return { isActive, handlers };
}
