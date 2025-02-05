import React, { useState, useEffect } from 'react';

const BackToTopButton = () => {
  const [visible, setVisible] = useState(false);

  // Function to handle scroll event
  const handleScroll = () => {
    if (window.scrollY > 300) { // Show the button after scrolling 300px
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scroll
    });
  };

  // Adding scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-5 right-5 bg-yellow-500 text-white p-3 rounded-full shadow-lg transition-opacity duration-300 ${visible ? 'opacity-100' : 'opacity-0'}`}
      style={{ transition: 'opacity 0.3s ease' }}
    >
      Back to ↑
    </button>
  );
};

export default BackToTopButton;
