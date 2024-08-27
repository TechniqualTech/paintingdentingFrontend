
import React, { useEffect, useRef } from 'react';

export default function Ptc() {
    const divRef = useRef(null);
    const [isVisible, setIsVisible] = React.useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            console.log(entries)
            if (entries[0].isIntersecting) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        }, { threshold: 1.0 });

        observer.observe(divRef.current);

        return () => {
            observer.unobserve(divRef.current);
        };
    }, []);

    return (
        <div ref={divRef}>
            {isVisible && <p>This div is visible on screen!</p>}
        </div>
    );
}
