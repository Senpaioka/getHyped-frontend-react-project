const BrandTickerSection = () => {
  // Placeholder logos - in a real app these would be SVG/PNG assets
  const logos = [
    { name: '8RHK', color: 'text-green-600', label: 'ambassadeurs' },
    { name: 'KNLTB', color: 'text-orange-600' },
    { name: 'Tho', color: 'text-teal-700', sub: 'KANTOORMEUBILAIR KAN CIRCULAIR' },
    { name: 'De Talenten tuin', isStamp: true },
    { name: 'ZWARTE CROSS', isComic: true },
  ];

  // We double the list to create a seamless infinite loop
  const displayLogos = [...logos, ...logos];

  return (
    <section className="bg-[#F9F5F0] py-24 overflow-hidden">
      <div className="max-w-350 mx-auto px-8 mb-16">
        <h2 className="text-[clamp(2rem,8vw,6.25rem)] font-bold tracking-tighter leading-[0.9] text-[#1A1A1A]">
          These brands<br />got hyped.
        </h2>
      </div>

      {/* Marquee Container */}
      <div className="relative flex">
        {/* The Animation Wrapper */}
        <div className="flex animate-marquee whitespace-nowrap gap-6 py-4">
          {displayLogos.map((logo, index) => (
            <div 
              key={index}
              className="w-40 h-40 sm:w-64 sm:h-64 md:w-80 md:h-80 shrink-0 bg-white/40 border border-gray-200/50 rounded-[2.5rem] flex flex-col items-center justify-center p-12 transition-all hover:bg-white hover:shadow-lg"
            >
              {/* Conditional rendering to mimic the different logo styles in the image */}
              {logo.isStamp ? (
                <div className="w-32 h-32 rounded-full border-4 border-dashed border-pink-700 flex items-center justify-center text-pink-700 font-bold text-center rotate-12 p-2">
                  <span className="text-sm">De Talenten tuin</span>
                </div>
              ) : logo.isComic ? (
                <div className="font-black text-4xl italic tracking-tighter bg-yellow-400 px-4 py-2 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  ZWARTE CROSS
                </div>
              ) : (
                <div className="text-center">
                  <span className={`text-4xl md:text-5xl font-black tracking-tighter ${logo.color}`}>
                    {logo.name}
                  </span>
                  {logo.sub && (
                    <p className="text-[8px] mt-2 font-bold tracking-widest text-gray-500 uppercase">
                      {logo.sub}
                    </p>
                  )}
                  {logo.label && (
                    <p className="text-xs font-bold text-gray-400">
                      {logo.label}
                    </p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Add custom animation to your Tailwind config or global CSS */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default BrandTickerSection;