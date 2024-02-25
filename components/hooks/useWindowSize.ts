import { useEffect, useState } from "react";

const isBrowser = typeof window !== "undefined";
const useWindowSize = (initialWidth = Infinity, initialHeight = Infinity) => {
  const [state, setState] = useState<{ width: number; height: number }>({
    width: isBrowser ? window.innerWidth : initialWidth,
    height: isBrowser ? window.innerHeight : initialHeight,
  });

  useEffect((): (() => void) | void => {
    if (isBrowser) {
      const handler = () => {
        setState({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };

      window.addEventListener("resize", handler);

      return () => {
        window.removeEventListener("resize", handler);
      };
    }
  }, [setState]);

  return state;
};

export default useWindowSize;
