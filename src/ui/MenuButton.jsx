import { Flame, Send } from 'lucide-react';
import { useRef, useState, useEffect } from "react";
import gsap from "gsap";

export default function StretchButton() {
  const btnRef = useRef(null);
  const formRef = useRef(null);
  const overlayRef = useRef(null);

  const [open, setOpen] = useState(false);

  const handleEnter = () => {
    gsap.to(btnRef.current, {
      scaleX: 1.08,
      scaleY: 0.98,
      skewX: 10, // Reduced slightly for better look
      rotation: -3,
      duration: 0.25,
      ease: "power2.out",
    });
  };

  const handleLeave = () => {
    gsap.to(btnRef.current, {
      scaleX: 1,
      scaleY: 1,
      skewX: 0,
      rotation: 0,
      duration: 0.25,
      ease: "power2.out",
    });
  };

  const openForm = () => setOpen(true);

  const closeForm = () => {
    const tl = gsap.timeline({
      onComplete: () => setOpen(false),
    });

    tl.to(formRef.current, {
      x: "100%",
      opacity: 0,
      duration: 0.4,
      ease: "power3.in",
    })
    .to(overlayRef.current, { opacity: 0, duration: 0.25 }, "-=0.2");
  };

  useEffect(() => {
    if (!open) return;
    const tl = gsap.timeline();
    gsap.set(formRef.current, { x: "100%", opacity: 0 });
    gsap.set(overlayRef.current, { opacity: 0 });

    tl.to(overlayRef.current, {
      opacity: 1,
      duration: 0.3,
      ease: "power2.out",
    })
    .to(formRef.current, {
      x: "0%",
      opacity: 1,
      duration: 0.5,
      ease: "power4.out",
    }, "-=0.2");
  }, [open]);

  return (
    <>
      <button
        ref={btnRef}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        onClick={openForm}
        className="flex items-center gap-2 bg-[#F7C0EB] hover:bg-[#f4a9e3] px-5 py-3 rounded-2xl font-bold origin-center"
      >
        <span>Get Results</span>
        <div className="bg-white rounded-lg p-1">
          <Flame size={18} className="text-orange-500 fill-orange-500" />
        </div>
      </button>

      {open && (
        <>
          {/* Overlay */}
          <div
            ref={overlayRef}
            onClick={closeForm}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
          />

          {/* Form Container - Added overflow-y-auto here */}
          <div
            ref={formRef}
            className="fixed top-0 right-0 h-full w-full md:max-w-3xl bg-[#FAF7F2] shadow-2xl z-50 overflow-y-auto"
          >
            {/* Inner Content Wrapper - Added padding bottom for scroll space */}
            <div className="relative p-6 md:p-12 pb-24">
              
              {/* Close Button */}
              <button 
                onClick={closeForm} 
                className="absolute top-8 right-8 border border-black rounded-xl px-5 py-2 text-sm font-semibold hover:bg-black hover:text-white transition-colors z-10"
              >
                Sluit
              </button>

              <div className="max-w-2xl mx-auto mt-16">
                {/* Heading */}
                <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-16 leading-[0.9]">
                  Leave us a message
                </h1>

                <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                  {/* Name Field */}
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold uppercase tracking-wide">Voor- en achternaam *</label>
                    <input
                      type="text"
                      placeholder="Wie ben je?"
                      className="w-full bg-transparent border border-gray-300 rounded-xl p-5 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-orange-500 transition-all"
                      required
                    />
                  </div>

                  {/* Email Field */}
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold uppercase tracking-wide">E-mail *</label>
                    <input
                      type="email"
                      placeholder="Hoe kunnen we je bereiken?"
                      className="w-full bg-transparent border border-gray-300 rounded-xl p-5 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-orange-500 transition-all"
                      required
                    />
                  </div>

                  {/* Phone Field */}
                  <div className="flex flex-col gap-2">
                    <div className="flex justify-between items-center">
                      <label className="text-sm font-bold uppercase tracking-wide">Telefoonnummer</label>
                      <span className="text-xs font-bold text-gray-400 uppercase">Optioneel</span>
                    </div>
                    <input
                      type="tel"
                      placeholder="Je telefoonnummer (als je liever belt dan mailt)"
                      className="w-full bg-transparent border border-gray-300 rounded-xl p-5 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-orange-500 transition-all"
                    />
                  </div>

                  {/* Message Field */}
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold uppercase tracking-wide">Bericht *</label>
                    <textarea
                      placeholder="Vertel ons wat je zoekt (of gewoon iets leuks)."
                      rows={6}
                      className="w-full bg-transparent border border-gray-300 rounded-xl p-5 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-orange-500 transition-all resize-none"
                      required
                    ></textarea>
                  </div>

                  {/* Checkbox Section */}
                  <div className="pt-8 border-t border-gray-200">
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input 
                        type="checkbox" 
                        className="w-5 h-5 rounded border-gray-300 text-[#FF5C2D] focus:ring-[#FF5C2D]"
                        required 
                      />
                      <span className="text-sm text-gray-600 font-medium">
                        Ik accepteer de <a href="#" className="underline decoration-1 underline-offset-2">Privacyvoorwaarden</a> <span className="text-[#FF5C2D]">*</span>
                      </span>
                    </label>
                  </div>

                  {/* Submit Footer */}
                  <div className="flex flex-col md:flex-row md:items-center gap-8 pt-4">
                    <button
                      type="submit"
                      className="bg-[#FF5C2D] text-white pl-8 pr-2 py-2 rounded-2xl flex items-center justify-between gap-6 font-bold text-xl hover:opacity-90 transition-opacity w-full md:w-fit"
                    >
                      Verstuur bericht
                      <div className="bg-white rounded-xl p-3 flex items-center justify-center">
                        <Send className="text-[#FF5C2D] w-6 h-6 fill-current" />
                      </div>
                    </button>

                    <p className="text-xl font-bold">
                      Of bel <a href="tel:+31615337496" className="text-[#FF5C2D]">+31 6 1533 7496</a>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}