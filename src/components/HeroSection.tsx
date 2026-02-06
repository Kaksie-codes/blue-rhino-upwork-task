import Button from "./Button";
import ScrollIndicator from "./ScrollIndicator";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen w-full max-h-[1080px] w-full overflow-hidden">
      <div className="absolute inset-0 bg-[#0C225C]" />
      <div className="absolute inset-0 bg-cover bg-center opacity-15" style={{ backgroundImage: "url('/cloud.png')" }}/>  
        <div className="relative container mx-auto  z-10 flex h-full flex-col items-center justify-center text-center">
            <div className="absolute top-8 left-0">
                <img 
                src="/blue-rhino-logo.png" 
                alt="Blue Rhino" 
                className="h-12 w-auto"
                />
            </div> 
        
        {/* Airplane image */}
        <div className="absolute z-10 top-[4%] right-[10%]">
            <img 
            src="/airplane.png" 
            alt="Private Jet" 
            className="h-48 w-auto drop-shadow-2xl md:h-72"
            />
        </div>
        
        {/* Large text behind */}
        <div className="absolute top-[7%] left-[25%]">
            <h1 className="text-[200px] font-bold text-[#092459] md:text-[180px]">
            FLY
            </h1>
        </div>

        <div className="absolute top-[23%] right-[18%] ">
            <h1 className="text-[200px] font-bold text-[#092459] md:text-[180px]">
            HIGH
            </h1>
        </div>
        
        {/* Main heading */}
        <h2 className="mb-8 max-w-3xl text-4xl mt-[60vh] font-bold text-white md:text-5xl lg:text-6xl">
            Expert web design for the
            <br />
            Aviation Industry
        </h2>
        
        {/* CTA Button */}
        <Button text="BOOK A CALL"/>
        <ScrollIndicator/>
        </div>
    </section>
  );
};

export default HeroSection;

{/* <div className="absolute inset-0 bg-gradient-to-b from-[#132E6E] via-[#2563eb] to-[#3b82f6]" /> */}