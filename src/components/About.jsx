import { ArrowRight, ArrowDown } from 'lucide-react';

const ContentImpactSection = () => {
  return (
    <section className="bg-[#F9F5F0] py-20 px-4 md:px-8 lg:px-16 min-h-screen flex flex-col justify-center">
      <div className="max-w-350 mx-auto w-full">
        
        {/* Large Headline */}
        <h2 className="text-2xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1] text-[#1A1A1A] max-w-6xl mb-24">
          Wij maken content die opvalt. Die blijft hangen. Die jouw doelgroep 
          raakt en jouw merk in beweging brengt. Snel, krachtig en energiek.
        </h2>

        {/* Lower Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
          
          {/* Left Image */}
          <div className="md:col-span-3">
            <div className="rounded-[2.5rem] overflow-hidden aspect-4/5 shadow-sm">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600" 
                alt="Team member" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Text Block */}
          <div className="md:col-span-6 md:col-start-5 pb-4">
            <p className="text-xl md:text-2xl font-bold leading-snug text-[#1A1A1A] mb-8 max-w-lg">
              We stoppen niet bij mooie plaatjes en vette beelden. We maken het meetbaar. 
              Zo weet je precies wat werkt en wat niet. Nooit meer content zonder strategie. 
              Nooit meer content zonder resultaat.
            </p>

            {/* Pill Button */}
            <button className="group flex items-center gap-3 bg-white border border-gray-200 hover:border-black transition-colors rounded-full px-2 py-2 pr-6 font-bold text-sm">
              <div className="bg-[#1A1A1A] text-white p-2 rounded-full group-hover:scale-110 transition-transform">
                <ArrowRight size={18} />
              </div>
              <span className="uppercase tracking-wide">Leer ons kennen</span>
            </button>
          </div>

          {/* Bottom Right Scroll Icon */}
          <div className="md:col-span-1 md:col-start-12 flex justify-end">
            <div className="border border-orange-200 p-4 rounded-2xl text-orange-600 hover:bg-orange-50 transition-colors cursor-pointer">
              <ArrowDown size={24} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContentImpactSection;