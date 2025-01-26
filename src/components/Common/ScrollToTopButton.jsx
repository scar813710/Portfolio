// ScrollToTopButton.js
import React, { useEffect, useState } from 'react';

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        
        // Cleanup on unmount
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <button
            className="fixed bottom-12 right-12 w-12 h-12 border rounded-full text-white text-2xl hover:bg-[#ffffff54] duration-300 z-50"
            onClick={scrollToTop}
            style={{ display: isVisible ? 'block' : 'none' }}
        >
            ↑
        </button>
    );
};

export default ScrollToTopButton;