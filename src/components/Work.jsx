import { useRef, useEffect } from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const WorkSection = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  const projects = [
    {
      title: "Van nul naar vol, binnen 3 weken",
      tag: "Bullit",
      video: "https://gethyped.b-cdn.net/Bullit/Bullit%20%7C%20Loop.mp4",
      color: "text-[#FF5C2D]",
      borderColor: "border-[#FF5C2D]",
      tagColor: "bg-white/30",
    },
    {
      title: "Zacht in smaak, sterk in beeld",
      tag: "Roasta",
      video: "https://gethyped.b-cdn.net/Roasta/roasta-loop.mp4",
      color: "text-[#007AFF]",
      borderColor: "border-[#007AFF]",
      tagColor: "bg-white/20",
    },
    {
      title: "Content die écht smaakt (en raakt)",
      tag: "Loco",
      video: "https://gethyped.b-cdn.net/Loco/loco-bites-loop.mp4",
      color: "text-[#3DD69C]",
      borderColor: "border-[#3DD69C]",
      tagColor: "bg-white/20",
    }
  ];

  useEffect(() => {
    const cards = cardsRef.current;

    // Animation Logic
    // Index 0: No movement (static)
    // Index 1: Moves up moderately
    // Index 2: Moves up significantly

    if (window.innerWidth >= 768) {
      // Card 2 (Index 1)
      gsap.to(cards[1], {
        y: -80, // Move up 60px
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom", // Animation starts when section enters viewport
          end: "bottom top",    // Ends when section leaves viewport
          scrub: true,         // Ties animation to scroll progress
        }
      });

      // Card 3 (Index 2)
      gsap.to(cards[2], {
        y: -160, // Move up 120px (double the 2nd card)
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        }
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#FAF7F2] py-20 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-20">
          <h2 className="text-[clamp(2.5rem,10vw,9rem)] font-bold tracking-tighter mb-8 leading-[0.85]">
            Content<br />dat scoort.
          </h2>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <p className="text-xl md:text-2xl font-bold max-w-sm leading-tight text-[#1A1A1A]">
              Wij vertellen jouw verhaal. Op een manier die écht past bij jouw doelgroep. 
              Met creatieve content die werkt en het verschil maakt.
            </p>
            
            <button className="group flex items-center gap-4 bg-white border border-gray-200 rounded-full p-2 pr-8 font-bold text-base transition-all hover:border-black w-fit">
              <div className="bg-[#1A1A1A] text-white p-3 rounded-full group-hover:rotate-45 transition-transform">
                <ArrowRight size={20} />
              </div>
              <span>Bekijk al ons werk</span>
            </button>
          </div>
        </div>

        {/* Grid - Added pt-20 to allow room for upward floating cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pt-20">
          {projects.map((project, index) => (
            <div 
              key={index}
              ref={el => cardsRef.current[index] = el}
              className={`relative group rounded-[3.5rem] overflow-hidden border-8 ${project.borderColor} h-[420px] md:h-[550px] shadow-2xl transition-all duration-500 hover:-rotate-1`}
              onMouseEnter={(e) => e.currentTarget.querySelector("video")?.play()}
              onMouseLeave={(e) => {
                const video = e.currentTarget.querySelector("video");
                if(video) { video.pause(); video.currentTime = 0; }
              }}
            >
              {/* Video */}
              <video
                src={project.video}
                muted
                loop
                playsInline
                preload="metadata"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay Content */}
              <div className="absolute bottom-0 left-0 right-0 z-20 px-3 pb-3">

                {/* Arrow */}
                <div className="absolute top-0 right-5 bg-white text-black p-4 rounded-full shadow-xl cursor-pointer hover:scale-110 transition-all z-30">
                  <ArrowUpRight size={28} strokeWidth={3} />
                </div>

                {/* SVG Shape + Content */}
                <div className="relative w-full h-55">
                  <svg
                    viewBox="0 0 429 174"
                    preserveAspectRatio="none"
                    className={`absolute inset-0 w-full h-full ${project.color}`}
                  >
                    <path
                      d="M428.625 35.0943V136.589C428.625 152.326 428.625 167.249 428.625 173.088L0 173.082C0 170.148 0 166.808 0 159.068V77.9695C0 70.9826 5.03458 65.0132 11.904 63.8674L388.605 1.00885C409.565 -2.47661 428.625 13.7568 428.625 35.0862"
                      fill="currentColor"
                    />
                  </svg>

                  {/* Content inside shape */}
                  <div className="relative z-10 h-full flex flex-col justify-end p-6 md:p-10">
                    <h3 className="text-white text-3xl font-bold leading-[1.1] mb-5 tracking-tight">
                      {project.title}
                    </h3>
                    <span className={`${project.tagColor} text-white px-5 py-2 rounded-2xl text-sm font-bold backdrop-blur-sm inline-block w-fit`}>
                      {project.tag}
                    </span>
                  </div>
                </div>
              </div>

              {/* Global gradient */}
              <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;