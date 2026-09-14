import React, { useLayoutEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

// Animate real document height so everything below the view moves together.
export default function ViewTransition({ view, children }) {
    const contentRef = useRef(null);
    const [height, setHeight] = useState(null);
    const reduceMotion = useReducedMotion();

    useLayoutEffect(() => {
        const content = contentRef.current;
        const measure = () => setHeight(content.getBoundingClientRect().height);
        measure();
        const observer = new ResizeObserver(measure);
        observer.observe(content);
        return () => observer.disconnect();
    }, [view]);

    return (
        <motion.div
            initial={false}
            animate={{ height: height ?? 'auto' }}
            transition={{ duration: reduceMotion ? 0 : 0.55, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: 'hidden', overflowAnchor: 'none' }}
        >
            <div ref={contentRef} style={{ display: 'flow-root' }}>{children}</div>
        </motion.div>
    );
}
