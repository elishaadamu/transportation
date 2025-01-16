import { useEffect, useRef, useState } from 'react';
import SectionBackgroundImg from './SectionBackgroundImg';
import SubSectionContent from '../layouts/SubSectionContenet';

const SectionContent = ({ backgroundSrc, subsections }) => {
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
      <div className="relative z-10 max-w-[50rem]">
        {subsections?.map((subsection, index) => (
          <SubSectionContent key={index} content={subsection} />
        ))}
      </div>
    </section>
  );
};

export default SectionContent;

