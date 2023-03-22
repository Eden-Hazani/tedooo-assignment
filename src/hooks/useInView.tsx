import { useEffect, useRef } from "react";

// create an observer hook that fires a callback when an element is in view
const useInView = (callback: () => void) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) callback();
        });

        if (ref.current)  observer.observe(ref.current);
        
        return () => {
            if (ref.current)  observer.unobserve(ref.current);
        };
    }, [callback]);

    return ref;
}

export default useInView;