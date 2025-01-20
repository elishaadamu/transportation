// import { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';



// const SectionBackgroundImg = ({ src, isVisible }) => {
//   const imgRef = useRef(null);

//   useEffect(() => {
//     if (imgRef.current) {
//       gsap.to(imgRef.current, {
//         opacity: isVisible ? 0.5 : 0,
//         duration: 0.4,
//         scale: isVisible ?  1: 1.5 ,
//         filter: isVisible ? "blur(0px)" : "blur(4px)",
//         ease: 'power2.inOut'
//       });
//     }
//   }, [isVisible]);

//   return (
//     <div 
//       ref={imgRef}
//       className="fixed inset-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-0 transition-opacity duration-500 ease-in-out z-[1]"
//       style={{ backgroundImage: `url(${src})` }}
//     />
//   );
// };

// export default SectionBackgroundImg;

