import {
  IframeHTMLAttributes,
  useEffect,
  useRef,
  useState,
} from "react";

type DeferredIframeProps = IframeHTMLAttributes<HTMLIFrameElement> & {
  rootMargin?: string;
};

const DeferredIframe = ({
  className,
  loading = "lazy",
  rootMargin = "320px 0px",
  style,
  ...iframeProps
}: DeferredIframeProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    if (!("IntersectionObserver" in window)) {
      setShouldLoad(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setShouldLoad(true);
        observer.disconnect();
      },
      { rootMargin }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [rootMargin]);

  return (
    <div
      ref={containerRef}
      className={className}
      aria-busy={!shouldLoad}
      style={{ width: "100%", height: "100%" }}
    >
      {shouldLoad && (
        <iframe
          {...iframeProps}
          loading={loading}
          style={{
            display: "block",
            width: "100%",
            height: "100%",
            border: 0,
            borderRadius: "inherit",
            ...style,
          }}
        />
      )}
    </div>
  );
};

export default DeferredIframe;
