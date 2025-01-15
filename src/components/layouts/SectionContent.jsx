import { useEffect, useRef, useState } from 'react';
import SectionBackgroundImg from './SectionBackgroundImg';



const SectionContent= ({ backgroundSrc, children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.4,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative flex items-center pb-[20rem] justify-center min-h-screen">
      <SectionBackgroundImg src={backgroundSrc} isVisible={isVisible} />
      <div className="relative z-10 p-8 mx-4 bg-opacity-75 rounded-lg shadow-lg max-w-[50rem] bg-bg">
        {children}
      </div>
    </section>
  );
};

export default SectionContent;

