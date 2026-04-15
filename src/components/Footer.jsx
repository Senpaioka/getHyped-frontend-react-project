import React, { useLayoutEffect, useRef } from "react";
import { FaLinkedinIn, FaTiktok, FaInstagram, FaYoutube } from "react-icons/fa6";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const FooterSection = () => {
  const badgeRef = useRef(null);
  const footerRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Animation logic
      gsap.to(badgeRef.current, {
        rotation: 360, // Rotate 360 degrees
        ease: "none",
        scrollTrigger: {
          trigger: footerRef.current, // Start tracking when footer enters
          start: "top bottom",       // Animation starts when top of footer hits bottom of viewport
          end: "bottom bottom",    // Animation ends when bottom of footer hits bottom of viewport
          scrub: 1,                 // Smoothly follows the scrollbar (1 second delay for smoothness)
        },
      });
    });

    return () => ctx.revert(); // Cleanup on unmount
  }, []);

  return (
    <footer ref={footerRef} className="relative bg-[#F9F5F0] pt-22 overflow-hidden">
      {/* The Angled Footer Background */}
      <div className="relative">
        
        {/* Floating Circular Badge */}
        <div 
          ref={badgeRef} 
          className="absolute -top-8 right-4 md:-top-16 md:right-24 z-20"
        >
          <div className="relative w-24 h-24 md:w-32 md:h-32 flex items-center justify-center bg-[#F7C0EB] rounded-full shadow-lg border-2 border-dashed border-pink-400">
             {/* Circular text SVG */}
            <div className="absolute inset-0 flex items-center justify-center text-[8px] font-bold uppercase tracking-[0.2em]">
                <svg className="w-full h-full p-2" viewBox="0 0 100 100">
                  <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
                  <text className="fill-black">
                    <textPath href="#circlePath">GET HYPED • GET NOTICED • GET RESULTS • </textPath>
                  </text>
                </svg>
            </div>
            <span className="text-3xl font-black italic relative z-10">GH</span>
          </div>
        </div>

        {/* Diagonal Background Shape */}
        <div 
          className="bg-[#EFE9E1] pt-32 pb-12 px-8 md:px-16 lg:px-24"
          style={{ clipPath: 'var(--footer-clip)' }}
        >
          <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
            
            {/* Logo Column */}
            <div className="md:col-span-4">
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" height="100%" viewBox="0 0 208 84" fill="none">
                  {/* ... (Your existing SVG paths) ... */}
                  <path d="M207.793 18.4091V68.8219C207.793 77.2049 200.998 84 192.615 84H7.46524C3.34207 84 0 80.6579 0 76.5348V37.5951C0 33.8732 2.69331 30.6933 6.36831 30.0829L186.384 0.251801C197.596 -1.60491 207.793 7.04266 207.793 18.4049" fill="#FAF4EC"></path>
                  <path d="M188.876 80.0646H55.9061V25.8317L186.618 5.34814C195.454 3.96521 203.444 10.7945 203.444 19.7408V65.4969C203.444 73.5427 196.922 80.0646 188.876 80.0646Z" fill="black"></path>
                  <path d="M71.2635 26.8177V47.2585L67.5415 47.5957V27.3683L59.9312 28.4866V76.7781L67.5415 76.7055V56.478L71.2635 56.2305V76.6714L79.3818 76.5945V25.6226L71.2635 26.8177Z" fill="white"></path>
                  <path d="M94.7092 23.3646L92.5452 42.7512L92.4427 44.4116L92.2378 44.4329L92.1354 42.7939L90.0055 24.0561L81.2256 25.3494L87.9482 58.2622V76.5134L96.8391 76.4323V57.75L104.142 21.9731L94.7092 23.3646Z" fill="white"></path>
                  <path d="M159.835 25.0207V13.7695L135.377 17.3719V76.0695L159.835 75.839V64.5921L147.179 65.0274V51.2238L159.101 50.4384V39.2854L147.179 40.3695V26.5701L159.835 25.0207Z" fill="white"></path>
                  <path d="M120.844 48.8506L116.226 49.2006V29.3018L120.844 28.7256V48.8506ZM105.943 21.7085V76.347L116.149 76.2488V58.5396L120.882 58.2878C127.071 57.9591 131.92 52.8457 131.92 46.6482V31.3805C131.92 24.2695 125.603 18.8146 118.565 19.8518L105.943 21.7128V21.7085Z" fill="white"></path>
                  <path d="M182.598 64.7713L176.494 64.9677V21.7768L182.598 21.0128V64.7713ZM162.993 13.3042V75.8091L185.769 75.5957C192.163 75.536 197.315 70.3372 197.315 63.9433V21.7469C197.315 14.636 190.998 9.18108 183.959 10.2183L162.989 13.3085L162.993 13.3042Z" fill="white"></path>
                  <path d="M21.5464 80.0646H34.7482V70.4738L27.1336 70.6957V59.8585L34.2873 59.4018V49.8835L27.1336 50.5494V39.7079L34.7482 38.739V29.1481L21.5464 31.214V80.0646Z" fill="black"></path>
                  <path d="M36.7714 28.828V38.4829L42.03 37.8128V80.0646H48.3812V37.0061L54.0239 36.289V26.1262L36.7714 28.828Z" fill="black"></path>
                  <path d="M14.2348 51.7488V41.2829L8.49394 42.0128V71.5152L14.2348 71.3488V62.6969L10.7092 62.8976V54.5146L19.5616 53.7634V80.0604H14.2391V77.3159L13.3128 78.225C12.1134 79.4031 10.5 80.0604 8.8226 80.0604H7.90491C5.48905 80.0604 3.53418 78.1012 3.53418 75.6896V39.0207C3.53418 36.1524 5.62563 33.7067 8.45978 33.2628L14.5165 32.3152C17.1671 31.9012 19.5659 33.95 19.5659 36.6305V51.2494L14.2433 51.7445L14.2348 51.7488Z" fill="black"></path>
                </svg>
              </a>
            </div>

            {/* Nav & Socials Column */}
            <div className="md:col-span-4 flex flex-col items-center gap-12">
              <nav className="hidden md:flex items-center bg-white rounded-2xl px-2 py-2 shadow-sm border border-gray-100">
                {['Expertise', 'Work', 'About', 'Contact'].map((item) => (
                  <a key={item} className="px-6 py-2 font-semibold cursor-pointer hover:bg-gray-50 rounded-xl transition-colors">
                    <span>{item}</span>
                  </a>
                ))}
              </nav>

              <nav className="flex md:hidden flex-col gap-2">
                {['Expertise', 'Work', 'About', 'Contact'].map((item) => (
                  <a key={item} href="#" className="py-2 font-semibold hover:underline transition-colors">
                    {item}
                  </a>
                ))}
              </nav>

              <div className="flex items-center gap-4">
                <span className="font-bold text-xl">Follow us</span>
                <div className="flex gap-2">
                  {[FaLinkedinIn, FaTiktok, FaInstagram, FaYoutube].map((Icon, i) => (
                    <div key={i} className="bg-white p-2 rounded-full border border-gray-200 cursor-pointer hover:bg-black hover:text-white transition-all">
                      <Icon size={18} />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Info Column */}
            <div className="md:col-span-4 flex flex-col items-end text-right gap-8">
              <div>
                <h4 className="font-bold mb-2">Contact</h4>
                <p className="text-sm font-medium">info@gethyped.nl</p>
                <p className="text-sm font-medium">+31 6 1533 7496</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Adres</h4>
                <p className="text-sm font-medium">Beltrumsestraat 6,</p>
                <p className="text-sm font-medium">7141 AL Groenlo</p>
              </div>
            </div>
          </div>

          {/* Copyright Bar */}
          <div className="max-w-[1400px] mx-auto mt-24 flex flex-col md:flex-row justify-between items-center text-[10px] font-bold text-gray-500 uppercase tracking-widest gap-4">
            <p>© 2025 Get Hyped</p>
            <p>© Design by Dylan</p>
            <a href="#" className="hover:text-black">Privacyvoorwaarden</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;

