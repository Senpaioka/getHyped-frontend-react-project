// import { useRef, useEffect } from "react";
// import gsap from "gsap";

// const StatsSection = () => {
//   const cardsRef = useRef([]);

//   const cards = [
//     {
//       type: 'color',
//       bgColor: 'bg-[#007AFF]',
//       number: '10M+',
//       title: 'Organische views',
//       subtitle: 'Groei door slimme content',
//       rotation: -6,
//     },
//     {
//       type: 'image',
//       imgSrc: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=500',
//       rotation: 3,
//     },
//     {
//       type: 'color',
//       bgColor: 'bg-[#34D399]',
//       number: '30+',
//       title: 'Merken geholpen',
//       subtitle: 'Van start-up tot multinational',
//       rotation: -2,
//     },
//     {
//       type: 'image',
//       imgSrc: 'https://images.unsplash.com/photo-1614200187524-dc4b892acf16?q=80&w=500',
//       rotation: 6,
//       overlayText: 'ORIGINEEL NATUURLIJK'
//     }
//   ];

//   // ✅ Set initial rotation with GSAP
//   useEffect(() => {
//     cardsRef.current.forEach((el, i) => {
//       gsap.set(el, { rotation: cards[i].rotation });
//     });
//   }, []);

//   const handleEnter = (index) => {
//   cardsRef.current.forEach((el, i) => {
//     if (i === index) {
//       // The Hovered Card
//       gsap.to(el, {
//         zIndex: 100,
//         rotation: 0,
//         scale: 1.1,
//         x: 0, // Keep centered
//         duration: 0.4,
//         ease: "power3.out",
//       });
//     } else if (i < index) {
//       // Cards to the LEFT move further left
//       gsap.to(el, {
//         x: -40, 
//         scale: 0.95, // Slight scale down adds depth
//         duration: 0.4,
//         ease: "power3.out",
//       });
//     } else {
//       // Cards to the RIGHT move further right
//       gsap.to(el, {
//         x: 40,
//         scale: 0.95,
//         duration: 0.4,
//         ease: "power3.out",
//       });
//     }
//   });
// };

// const handleLeave = () => {
//   cardsRef.current.forEach((el, i) => {
//     gsap.to(el, {
//       rotation: cards[i].rotation,
//       scale: 1,
//       x: 0, // Reset position
//       zIndex: i + 10,
//       duration: 0.4,
//       ease: "power3.out",
//     });
//   });
// };



//   return (
//     <section className="bg-[#F9F5F0] pt-28 pb-28 px-4 overflow-hidden">
//       <div className="max-w-7xl mx-auto flex flex-wrap justify-center items-center gap-4 py-10">
//         {cards.map((card, index) => (
//           <div
//             key={index}
//             ref={(el) => (cardsRef.current[index] = el)}
//             onMouseEnter={() => handleEnter(index)}
//             onMouseLeave={() => handleLeave(index)}
//             className="relative w-72 h-96 rounded-[2.5rem] overflow-hidden shadow-xl -ml-4 first:ml-0 cursor-pointer"
//           >
//             {card.type === 'color' ? (
//               <div className={`${card.bgColor} w-full h-full p-8 flex flex-col justify-between text-black`}>
//                 <span className="text-6xl font-bold tracking-tighter">
//                   {card.number}
//                 </span>
//                 <div>
//                   <h3 className="text-2xl font-bold leading-tight border-b border-black/20 pb-2 mb-2">
//                     {card.title}
//                   </h3>
//                   <p className="text-sm font-medium opacity-90">
//                     {card.subtitle}
//                   </p>
//                 </div>
//               </div>
//             ) : (
//               <div className="w-full h-full relative">
//                 <img 
//                   src={card.imgSrc} 
//                   alt="Feature" 
//                   className="w-full h-full object-cover"
//                 />
//                 {card.overlayText && (
//                   <div className="absolute inset-0 flex items-center justify-center">
//                     <span className="text-white text-3xl font-black uppercase tracking-tighter italic drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] -rotate-12 border-2 border-white px-4 py-1">
//                       {card.overlayText}
//                     </span>
//                   </div>
//                 )}
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default StatsSection;














import { useRef, useEffect } from "react";
import gsap from "gsap";

const StatsSection = () => {
  const cardsRef = useRef([]);

  const cards = [
    {
      type: 'color',
      bgColor: 'bg-[#007AFF]',
      number: '10M+',
      title: 'Organische views',
      subtitle: 'Groei door slimme content',
      rotation: -6,
    },
    {
      type: 'video',
      videoSrc: 'https://gethyped.b-cdn.net/Salontopper/Loop%20Salontopper.mp4',
      rotation: 3,
    },
    {
      type: 'color',
      bgColor: 'bg-[#34D399]',
      number: '30+',
      title: 'Merken geholpen',
      subtitle: 'Van start-up tot multinational',
      rotation: -2,
    },
    {
      type: 'video',
      videoSrc: 'https://gethyped.b-cdn.net/Salontopper/Loop%20Salontopper.mp4',
      rotation: 3,
    },
  ];

  // ✅ Set initial rotation with GSAP
  useEffect(() => {
    cardsRef.current.forEach((el, i) => {
      gsap.set(el, { rotation: cards[i].rotation });
    });
  }, []);

  const handleEnter = (index) => {
  cardsRef.current.forEach((el, i) => {
    if (i === index) {
      // The Hovered Card
      gsap.to(el, {
        zIndex: 100,
        rotation: 0,
        scale: 1.1,
        x: 0, // Keep centered
        duration: 0.4,
        ease: "power3.out",
      });
    } else if (i < index) {
      // Cards to the LEFT move further left
      gsap.to(el, {
        x: -40, 
        scale: 0.95, // Slight scale down adds depth
        duration: 0.4,
        ease: "power3.out",
      });
    } else {
      // Cards to the RIGHT move further right
      gsap.to(el, {
        x: 40,
        scale: 0.95,
        duration: 0.4,
        ease: "power3.out",
      });
    }
  });
};

const handleLeave = () => {
  cardsRef.current.forEach((el, i) => {
    gsap.to(el, {
      rotation: cards[i].rotation,
      scale: 1,
      x: 0, // Reset position
      zIndex: i + 10,
      duration: 0.4,
      ease: "power3.out",
    });
  });
};



  return (
    <section className="bg-[#F9F5F0] pt-28 pb-28 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center items-center gap-4 py-10">
        {cards.map((card, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            onMouseEnter={() => handleEnter(index)}
            onMouseLeave={() => handleLeave(index)}
            className="relative w-72 h-96 rounded-[2.5rem] overflow-hidden shadow-xl -ml-4 first:ml-0 cursor-pointer"
          >
            {card.type === 'color' ? (
              <div className={`${card.bgColor} w-full h-full p-8 flex flex-col justify-between text-black`}>
                <span className="text-6xl font-bold tracking-tighter">
                  {card.number}
                </span>
                <div>
                  <h3 className="text-2xl font-bold leading-tight border-b border-black/20 pb-2 mb-2">
                    {card.title}
                  </h3>
                  <p className="text-sm font-medium opacity-90">
                    {card.subtitle}
                  </p>
                </div>
              </div>
            ) : card.type === 'image' ? (
  /* Image Card */
  <div className="w-full h-full relative">
    <img 
      src={card.imgSrc} 
      alt="Feature" 
      className="w-full h-full object-cover"
    />
  </div>
) : (
  /* 🎥 Video Card */
  <div className="w-full h-full relative">
    <video
      src={card.videoSrc}
      autoPlay
      muted
      loop
      playsInline
      className="w-full h-full object-cover"
    />

    {card.overlayText && (
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-white text-3xl font-black uppercase tracking-tighter italic drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] -rotate-12 border-2 border-white px-4 py-1">
          {card.overlayText}
        </span>
      </div>
    )}
  </div>)
            }
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;



