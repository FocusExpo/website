import { useState, useEffect, useRef } from 'react';

export function useInView(options = {}) {
    const [isInView, setIsInView] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsInView(true);
                if (options.triggerOnce) {
                    observer.disconnect();
                }
            } else if (!options.triggerOnce) {
                setIsInView(false);
            }
        }, options);

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [options.triggerOnce, options.rootMargin, options.threshold]);

    return [ref, isInView];
}
