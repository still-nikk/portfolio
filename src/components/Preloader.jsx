import { useState, useEffect } from 'react';

const Preloader = ({ onComplete }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const words = ["Design", "Develop", "Deliver"];

  useEffect(() => {
    if (currentWordIndex < words.length) {
      const timer = setTimeout(() => {
        setCurrentWordIndex(currentWordIndex + 1);
      }, 1000); // Change to adjust timing between words
      return () => clearTimeout(timer);
    } else {
      // Once all words have been displayed, call onComplete
      const redirectTimer = setTimeout(onComplete, 500); // Adjust delay before redirect
      return () => clearTimeout(redirectTimer);
    }
  }, [currentWordIndex, onComplete, words.length]);

  return (
    <div className="preloader fixed inset-0 flex items-center justify-center bg-gray-900 text-white">
      <h1 className="text-3xl font-bold">
        {words[currentWordIndex]}
      </h1>
    </div>
  );
};

export default Preloader;
