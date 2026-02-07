import Button from "./Button";
import ScrollIndicator from "./ScrollIndicator";

const HeroSection = () => {
  return (
    <section className="relative h-screen max-h-[1080px] w-full overflow-hidden">
      {/* Backgrounds */}
      <div className="absolute inset-0 bg-[#0C225C]" />
      <div
        className="absolute inset-0 bg-cover bg-center opacity-15"
        style={{ backgroundImage: "url('/cloud.png')" }}
      />

      <div className="relative container mx-auto z-10 flex h-full flex-col items-center justify-center text-center px-4">
        {/* Logo */}
        <div className="absolute top-6 left-4 md:top-8 lg:left-1 xl:left-0">
          <img
            src="/blue-rhino-logo.png"
            alt="Blue Rhino"
            className="h-10 md:h-12 w-auto"
          />
        </div>

        {/* Airplane image */}
        <div className="absolute z-10 top-[30%] mx-auto md:top-[4%] md:right-[10%]">
          <img
            src="/airplane.png"
            alt="Private Jet"
            className="h-[132px] md:h-48 lg:h-72 w-auto drop-shadow-2xl"
          />
        </div>

        {/* Large background text (hidden on small screens) */}
        <div className="absolute top-[12%] left-[28%] hidden md:block">
          <h1 className="text-[140px] 2xl:text-[180px] font-bold text-[#092459]">
            FLY
          </h1>
        </div>

        <div className="absolute top-[25%] right-[24%] hidden md:block">
          <h1 className="text-[140px] 2xl:text-[180px] font-bold text-[#092459]">
            HIGH
          </h1>
        </div>

        {/* Main heading */}
        <h2 className="mt-[20vh] xl:mt-[300px]  mb-8 max-w-3xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
          Expert web design for the
          <br />
          Aviation Industry
        </h2>

        {/* CTA */}
        <Button text="BOOK A CALL" />

        {/* Scroll Indicator */}
        <ScrollIndicator />
      </div>
    </section>
  );
};

export default HeroSection;




// import Button from "./Button";
// import ScrollIndicator from "./ScrollIndicator";

// const HeroSection = () => {
//   return (
//     <section className="relative min-h-screen w-full max-h-[1080px] w-full overflow-hidden">
//       <div className="absolute inset-0 bg-[#0C225C]" />
//       <div className="absolute inset-0 bg-cover bg-center opacity-15" style={{ backgroundImage: "url('/cloud.png')" }}/>  
//         <div className="relative container mx-auto  z-10 flex h-full flex-col items-center justify-center text-center">
//             <div className="absolute top-8 left-0">
//                 <img 
//                 src="/blue-rhino-logo.png" 
//                 alt="Blue Rhino" 
//                 className="h-12 w-auto"
//                 />
//             </div> 
        
//         {/* Airplane image */}
//         <div className="absolute z-10 top-[4%] right-[10%]">
//             <img 
//             src="/airplane.png" 
//             alt="Private Jet" 
//             className="h-48 w-auto drop-shadow-2xl md:h-72"
//             />
//         </div>
        
//         {/* Large text behind */}
//         <div className="absolute top-[7%] left-[25%]">
//             <h1 className="text-[200px] font-bold text-[#092459] md:text-[180px]">
//             FLY
//             </h1>
//         </div>

//         <div className="absolute top-[23%] right-[18%] ">
//             <h1 className="text-[200px] font-bold text-[#092459] md:text-[180px]">
//             HIGH
//             </h1>
//         </div>
        
//         {/* Main heading */}
//         <h2 className="mb-8 max-w-3xl text-4xl mt-[60vh] font-bold text-white md:text-5xl lg:text-6xl">
//             Expert web design for the
//             <br />
//             Aviation Industry
//         </h2>
        
//         {/* CTA Button */}
//         <Button text="BOOK A CALL"/>
//         <ScrollIndicator/>
//         </div>
//     </section>
//   );
// };

// export default HeroSection;