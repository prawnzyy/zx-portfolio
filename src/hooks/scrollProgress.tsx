import { useState, useEffect } from 'react';

export function scrollProgress() {
  const [completion, setCompletion] = useState(0);

  useEffect(() => {
    function updateScrollCompletion() {
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (scrollHeight) {
        setCompletion(
          Number(((document.documentElement.scrollTop / scrollHeight) * 100).toFixed(2))
        );
      }
    }

    window.addEventListener('scroll', updateScrollCompletion);

    return () => {
      window.removeEventListener('scroll', updateScrollCompletion);
    };
  }, []);

  return completion;
}