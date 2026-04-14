// // import React from 'react';
// // import { ArrowRight } from 'lucide-react';

// // const ExpertiseSection = () => {
// //   const expertises = [
// //     {
// //       id: '01',
// //       title: 'Social strategy',
// //       tag: 'Expertise',
// //       subTitle: 'Slimme strategie. Sterke start.',
// //       desc: 'We duiken diep in jouw merk, doelgroep en doelen. En vertalen data naar een duidelijk plan met formats die écht impact maken. Zo weet je precies waarom het werkt.',
// //       bgColor: 'bg-white',
// //       textColor: 'text-black',
// //       btnColor: 'bg-[#FF5C35]',
// //       btnTextColor: 'text-white',
// //       img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600',
// //     },
// //     {
// //       id: '02',
// //       title: 'Content creation',
// //       tag: 'Expertise',
// //       subTitle: 'Content die opvalt en raakt.',
// //       desc: 'We maken content die opvalt. Blijft hangen. En jouw doelgroep raakt. Creatief, snel en energiek. Altijd met het doel voor ogen.',
// //       bgColor: 'bg-[#F7C0EB]', // Light Pink
// //       textColor: 'text-black',
// //       btnColor: 'bg-black',
// //       btnTextColor: 'text-white',
// //       img: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?q=80&w=600',
// //     },
// //     {
// //       id: '03',
// //       title: 'Activation',
// //       tag: 'Expertise',
// //       subTitle: 'Zichtbaar waar en wanneer het telt.',
// //       desc: 'De juiste content verdient het om gezien te worden. We verspreiden de content waar jouw doelgroep is. Zo raakt jouw merk de juiste mensen, precies waar en wanneer het telt.',
// //       bgColor: 'bg-[#3DD69C]', // Mint Green
// //       textColor: 'text-black',
// //       btnColor: 'bg-black',
// //       btnTextColor: 'text-white',
// //       img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600',
// //     },
// //     {
// //       id: '04',
// //       title: 'Data',
// //       tag: 'Expertise',
// //       subTitle: 'Inzichten die impact maken.',
// //       desc: 'We duiken in de cijfers om te snappen wat echt werkt. En sturen jouw content scherp bij.',
// //       bgColor: 'bg-[#007AFF]', // Bright Blue
// //       textColor: 'text-black',
// //       btnColor: 'bg-black',
// //       btnTextColor: 'text-white',
// //       img: 'https://images.unsplash.com/photo-1551288049-bbbda536339a?q=80&w=600',
// //     }
// //   ];

// //   return (
// //     <section className="bg-[#F9F5F0] py-12 px-4 md:px-8">
// //       <div className="max-w-6xl mx-auto flex flex-col gap-6">
// //         {expertises.map((item) => (
// //           <div 
// //             key={item.id} 
// //             className={`${item.bgColor} ${item.textColor} rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row justify-between min-h-[450px] shadow-sm`}
// //           >
// //             {/* Background Number */}
// //             <span className="absolute top-4 right-10 text-8xl md:text-[10rem] font-bold opacity-10 select-none">
// //               {item.id}
// //             </span>

// //             {/* Content Side */}
// //             <div className="flex flex-col justify-between z-10 max-w-xl">
// //               <div>
// //                 <span className="inline-block bg-black/5 px-3 py-1 rounded text-xs font-semibold mb-6 uppercase tracking-wider opacity-60">
// //                   {item.tag}
// //                 </span>
// //                 <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-12">
// //                   {item.title}
// //                 </h2>
// //               </div>

// //               <div className="space-y-4 max-w-sm">
// //                 <h4 className="font-bold text-lg">{item.subTitle}</h4>
// //                 <p className="text-sm md:text-base leading-relaxed opacity-90 font-medium">
// //                   {item.desc}
// //                 </p>
                
// //                 {/* Custom Button */}
// //                 <button className="flex items-center gap-3 bg-white rounded-full pl-4 pr-1 py-1 mt-6 group transition-all hover:pr-2 border border-gray-100 shadow-sm">
// //                   <span className="text-[13px] font-bold uppercase tracking-tight text-black">
// //                     Meer over {item.title.toLowerCase()}
// //                   </span>
// //                   <div className={`${item.btnColor} ${item.btnTextColor} p-2 rounded-full`}>
// //                     <ArrowRight size={16} />
// //                   </div>
// //                 </button>
// //               </div>
// //             </div>

// //             {/* Image Side */}
// //             <div className="mt-12 md:mt-0 flex items-center justify-center md:justify-end z-10">
// //               <div className="relative group">
// //                 {/* Image Border/Frame effect */}
// //                 <div className="absolute inset-0 border-4 border-white/20 rounded-4xl translate-x-3 translate-y-3 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform"></div>
// //                 <img 
// //                   src={item.img} 
// //                   alt={item.title} 
// //                   className="w-64 h-80 md:w-72 md:h-96 object-cover rounded-4xl border-4 border-white shadow-xl relative z-10"
// //                 />
// //               </div>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </section>
// //   );
// // };

// // export default ExpertiseSection;






// import { ArrowRight } from 'lucide-react';

// const ExpertiseSection = () => {
//   const expertises = [
//     {
//       id: '01',
//       title: 'Social strategy',
//       tag: 'Expertise',
//       subTitle: 'Slimme strategie. Sterke start.',
//       desc: 'We duiken diep in jouw merk, doelgroep en doelen. En vertalen data naar een duidelijk plan met formats die écht impact maken. Zo weet je precies waarom het werkt.',
//       bgColor: 'bg-white',
//       textColor: 'text-black',
//       btnColor: 'bg-[#FF5C35]',
//       btnTextColor: 'text-white',
//       video: 'https://gethyped.b-cdn.net/MD/MD%20Loop%20Schaken.mp4',
//     },
//     {
//       id: '02',
//       title: 'Content creation',
//       tag: 'Expertise',
//       subTitle: 'Content die opvalt en raakt.',
//       desc: 'We maken content die opvalt. Blijft hangen. En jouw doelgroep raakt. Creatief, snel en energiek. Altijd met het doel voor ogen.',
//       bgColor: 'bg-[#F7C0EB]', // Light Pink
//       textColor: 'text-black',
//       btnColor: 'bg-black',
//       btnTextColor: 'text-white',
//       video: 'https://gethyped.b-cdn.net/Expertises/Loop%20BTS%20comp.mp4',
//     },
//     {
//       id: '03',
//       title: 'Activation',
//       tag: 'Expertise',
//       subTitle: 'Zichtbaar waar en wanneer het telt.',
//       desc: 'De juiste content verdient het om gezien te worden. We verspreiden de content waar jouw doelgroep is. Zo raakt jouw merk de juiste mensen, precies waar en wanneer het telt.',
//       bgColor: 'bg-[#3DD69C]', // Mint Green
//       textColor: 'text-black',
//       btnColor: 'bg-black',
//       btnTextColor: 'text-white',
//       video: 'https://gethyped.b-cdn.net/Over%20de%20Top/overdetop-loop.mp4',
//     },
//     {
//       id: '04',
//       title: 'Data',
//       tag: 'Expertise',
//       subTitle: 'Inzichten die impact maken.',
//       desc: 'We duiken in de cijfers om te snappen wat echt werkt. En sturen jouw content scherp bij.',
//       bgColor: 'bg-[#007AFF]', // Bright Blue
//       textColor: 'text-black',
//       btnColor: 'bg-black',
//       btnTextColor: 'text-white',
//       video: 'https://gethyped.b-cdn.net/Expertises/Data%20comp.mp4',
//     }
//   ];

//   return (
//     <section className="bg-[#F9F5F0] py-12 px-4 md:px-8">
//       <div className="max-w-6xl mx-auto flex flex-col gap-6">
//         {expertises.map((item) => (
//           <div 
//             key={item.id} 
//             className={`${item.bgColor} ${item.textColor} rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row justify-between min-h-[450px] shadow-sm`}
//           >
//             {/* Background Number */}
//             <span className="absolute top-4 right-10 text-8xl md:text-[10rem] font-bold opacity-10 select-none">
//               {item.id}
//             </span>

//             {/* Content Side */}
//             <div className="flex flex-col justify-between z-10 max-w-xl">
//               <div>
//                 <span className="inline-block bg-black/5 px-3 py-1 rounded text-xs font-semibold mb-6 uppercase tracking-wider opacity-60">
//                   {item.tag}
//                 </span>
//                 <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-12">
//                   {item.title}
//                 </h2>
//               </div>

//               <div className="space-y-4 max-w-sm">
//                 <h4 className="font-bold text-lg">{item.subTitle}</h4>
//                 <p className="text-sm md:text-base leading-relaxed opacity-90 font-medium">
//                   {item.desc}
//                 </p>
                
//                 {/* Custom Button */}
//                 <button className="flex items-center gap-3 bg-white rounded-full pl-4 pr-1 py-1 mt-6 group transition-all hover:pr-2 border border-gray-100 shadow-sm">
//                   <span className="text-[13px] font-bold uppercase tracking-tight text-black">
//                     Meer over {item.title.toLowerCase()}
//                   </span>
//                   <div className={`${item.btnColor} ${item.btnTextColor} p-2 rounded-full`}>
//                     <ArrowRight size={16} />
//                   </div>
//                 </button>
//               </div>
//             </div>

//             {/* video Side */}
//             <div className="mt-12 md:mt-0 flex items-center justify-center md:justify-end z-10">
//               <div className="relative group">
                
//                 {/* Frame effect */}
//                 <div className="absolute inset-0 border-4 border-white/20 rounded-4xl translate-x-3 translate-y-3 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform"></div>

//                 {/* Video instead of Image */}
//                 <video
//                   src={item.video}
//                   autoPlay
//                   muted
//                   loop
//                   playsInline
//                   className="w-64 h-80 md:w-72 md:h-96 object-cover rounded-4xl border-4 border-white shadow-xl relative z-10"
//                 />
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default ExpertiseSection;





import React, { useRef, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

const ExpertiseSection = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  const expertises = [
    {
      id: '01',
      title: 'Social strategy',
      tag: 'Expertise',
      subTitle: 'Slimme strategie. Sterke start.',
      desc: 'We duiken diep in jouw merk, doelgroep en doelen. En vertalen data naar een duidelijk plan met formats die écht impact maken.',
      bgColor: 'bg-white',
      textColor: 'text-black',
      btnColor: 'bg-[#FF5C35]',
      btnTextColor: 'text-white',
      video: 'https://gethyped.b-cdn.net/MD/MD%20Loop%20Schaken.mp4',
    },
    {
      id: '02',
      title: 'Content creation',
      tag: 'Expertise',
      subTitle: 'Content die opvalt en raakt.',
      desc: 'We maken content die opvalt. Blijft hangen. En jouw doelgroep raakt. Creatief, snel en energiek.',
      bgColor: 'bg-[#F7C0EB]', 
      textColor: 'text-black',
      btnColor: 'bg-black',
      btnTextColor: 'text-white',
      video: 'https://gethyped.b-cdn.net/Expertises/Loop%20BTS%20comp.mp4',
    },
    {
      id: '03',
      title: 'Activation',
      tag: 'Expertise',
      subTitle: 'Zichtbaar waar en wanneer het telt.',
      desc: 'De juiste content verdient het om gezien te worden. We verspreiden de content waar jouw doelgroep is.',
      bgColor: 'bg-[#3DD69C]', 
      textColor: 'text-black',
      btnColor: 'bg-black',
      btnTextColor: 'text-white',
      video: 'https://gethyped.b-cdn.net/Over%20de%20Top/overdetop-loop.mp4',
    },
    {
      id: '04',
      title: 'Data',
      tag: 'Expertise',
      subTitle: 'Inzichten die impact maken.',
      desc: 'We duiken in de cijfers om te snappen wat echt werkt. En sturen jouw content scherp bij.',
      bgColor: 'bg-[#007AFF]', 
      textColor: 'text-black',
      btnColor: 'bg-black',
      btnTextColor: 'text-white',
      video: 'https://gethyped.b-cdn.net/Expertises/Data%20comp.mp4',
    }
  ];

  useEffect(() => {
    const cards = cardsRef.current;
    
    cards.forEach((card, index) => {
      // We don't need to animate the last card's exit
      if (index === cards.length - 1) return;

      const nextCard = cards[index + 1];

      gsap.to(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 10%", // When the card hits the top
          endTrigger: nextCard,
          end: "top 10%",
          scrub: true, // Smooth animation tied to scroll
          // markers: true, // Uncomment for debugging
        },
        // As the next card comes up, this card will:
        scale: 0.9,           // Shrink slightly
        opacity: 0.6,         // Fade slightly
        filter: "blur(2px)", // Optional: Add a subtle blur for depth
        ease: "none"
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section ref={containerRef} className="bg-[#F9F5F0] py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto flex flex-col gap-0"> {/* Gap 0 because we handle spacing with sticky */}
        {expertises.map((item, index) => (
    
<div 
  key={item.id} 
  ref={(el) => (cardsRef.current[index] = el)}
  className="sticky top-[10vh] mb-[10vh] w-full"
>
  <div className={`${item.bgColor} ${item.textColor} rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row justify-between min-h-[500px] shadow-2xl border border-black/5`}>
    
    {/* FIXED ID NUMBER: Positioned top-left behind the title for better visibility */}
    <span className="absolute -top-10 left-6 text-[10rem] md:text-[14rem] font-bold opacity-[0.07] select-none z-0 pointer-events-none tracking-tighter">
      {item.id}
    </span>

    {/* Content Side - Added z-10 to stay above the number */}
    <div className="flex flex-col justify-between z-10 max-w-xl">
      <div>
        <span className="inline-block bg-black/5 px-3 py-1 rounded text-xs font-semibold mb-6 uppercase tracking-wider opacity-60">
          {item.tag}
        </span>
        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-12">
          {item.title}
        </h2>
      </div>

      <div className="space-y-4 max-w-sm">
        <h4 className="font-bold text-lg">{item.subTitle}</h4>
        <p className="text-sm md:text-base leading-relaxed opacity-90 font-medium">
          {item.desc}
        </p>
        
        <button className="flex items-center gap-3 bg-white rounded-full pl-4 pr-1 py-1 mt-6 group transition-all hover:pr-2 border border-gray-100 shadow-sm">
          <span className="text-[13px] font-bold uppercase tracking-tight text-black">
            Meer over {item.title.toLowerCase()}
          </span>
          <div className={`${item.btnColor} ${item.btnTextColor} p-2 rounded-full`}>
            <ArrowRight size={16} />
          </div>
        </button>
      </div>
    </div>

    {/* Video Side - Added z-10 to stay above the number */}
    <div className="mt-12 md:mt-0 flex items-center justify-center md:justify-end z-10">
      <div className="relative group">
        <div className="absolute inset-0 border-4 border-white/20 rounded-4xl translate-x-3 translate-y-3 transition-transform"></div>
        <video
          src={item.video}
          autoPlay
          muted
          loop
          playsInline
          className="w-64 h-80 md:w-72 md:h-96 object-cover rounded-4xl border-4 border-white shadow-xl relative"
        />
      </div>
    </div>
  </div>
</div>
        ))}
      </div>
    </section>
  );
};

export default ExpertiseSection;