
const GetHypedHero = () => {
  return (
    <div className="bg-[#F9F5F0] text-[#1A1A1A] font-sans selection:bg-pink-200">
      {/* Hero Section */}
      <main className="max-w-350 mx-auto px-4 md:px-8 pt-24 md:pt-32">
        <h1 className="text-[clamp(2.5rem,8vw,8.75rem)] leading-[0.9] font-bold tracking-tighter w-full">
          Get Hyped. Get<br /> 
          Noticed. Get Results.
        </h1>
        
        <div className="mt-12 max-w-md">
          <p className="text-2xl md:text-3xl font-semibold leading-tight">
            Klaar met gokken op content<br /> 
            die niets oplevert?
          </p>
        </div>
      </main>
    </div>
  );
};

export default GetHypedHero;