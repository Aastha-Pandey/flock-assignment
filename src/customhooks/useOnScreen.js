import { useEffect, useRef, useState } from 'react';

export function useOnscreen(options) {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false); //true
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options]);
  return [ref, isVisible];
}
