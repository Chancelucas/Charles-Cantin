import React, { useState, useEffect } from 'react';
import './_scrollToUpButton.scss';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const scrollHeight = window.pageYOffset;
    if (scrollHeight > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div
      className={`scroll-to-top ${isVisible ? 'show' : ''}`}
      onClick={scrollToTop}
    >
      ↑
    </div>
  );
};

export default ScrollToTopButton;
