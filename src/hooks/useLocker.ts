import { useEffect } from 'react';

const useScrollLock = () => {
  useEffect(() => {
    const originalOverflow = window.getComputedStyle(document.body).overflow;

    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);
};

export default useScrollLock;