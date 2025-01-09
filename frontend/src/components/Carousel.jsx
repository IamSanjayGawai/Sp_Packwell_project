// import React, { useState, useEffect } from "react";
// import slider1 from "../assets/Photo/Photo/Mydoc/slider1.jpg"
// import slider2 from "../assets/Photo/Photo/Mydoc/slider2.jpg"
// import slider3 from "../assets/Photo/Photo/Mydoc/slider3.jpg"
// import slider4 from "../assets/Photo/Photo/Mydoc/slider4.jpg"
// import slider5 from "../assets/Photo/Photo/Mydoc/slider5.jpg"


// const Carousel = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const slides = [
//     slider1,
//     slider2,
//     slider3,
//     slider4,
//     slider5,
//   ];

//   // Automate slide transition every 2 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
//     }, 3000);

//     return () => clearInterval(interval); // Clear interval on component unmount
//   }, [slides.length]);

//   const handlePrev = () => {
//     setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
//   };

//   const handleNext = () => {
//     setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
//   };

//   const handleIndicatorClick = (index) => {
//     setCurrentSlide(index);
//   };

//   return (
//     <div className="w-full flex justify-center items-center border py-10  shadow-xl">
//     <div id="default-carousel" className="relative w-[95%]  shadow-xl">

//       <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
//         {slides.map((slide, index) => (
//           <div
//             key={index}
//             className={`absolute inset-0 duration-700 ease-in-out ${
//               currentSlide === index ? "block" : "hidden"
//             }`}
//             data-carousel-item
//           >
 
//             <img
//   src={slide}
//   alt={`Slide ${index + 1}`}
//   className="absolute block w-full h-full object-cover top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
// />

//           </div>
//         ))}
//       </div>

//       {/* Slider Indicators */}
//       <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             type="button"
//             className={`w-3 h-3 rounded-full ${
//               currentSlide === index ? "bg-white" : "bg-gray-400"
//             }`}
//             aria-current={currentSlide === index}
//             aria-label={`Slide ${index + 1}`}
//             onClick={() => handleIndicatorClick(index)}
//           ></button>
//         ))}
//       </div>

//       {/* Slider Controls */}
//       <button
//         type="button"
//         className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
//         onClick={handlePrev}
//       >
//         <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/300 group-hover:bg-white/50g-gray-800/60 group-focus:ring-4 group-focus:ring-whiteing-gray-800/70">
//           <svg
//             className="w-4 h-4 "
//             aria-hidden="true"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 6 10"
//           >
//             <path
//               stroke="currentColor"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M5 1 1 5l4 4"
//             />
//           </svg>
//           <span className="sr-only">Previous</span>
//         </span>
//       </button>
//       <button
//         type="button"
//         className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
//         onClick={handleNext}
//       >
//         <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/300 group-hover:bg-white/50g-gray-800/60 group-focus:ring-4 group-focus:ring-whiteing-gray-800/70">
//           <svg
//             className="w-4 h-4"
//             aria-hidden="true"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 6 10"
//           >
//             <path
//               stroke="currentColor"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="m1 9 4-4-4-4"
//             />
//           </svg>
//           <span className="sr-only">Next</span>
//         </span>
//       </button>
//     </div>
//     </div>
//   );
// };

// export default Carousel;
import React, { useState, useEffect } from "react";
import bgimage from "../assets/hero-side-bg.png";
import bgright1 from "../assets/hero-right1.png";
import bgright2 from "../assets/hero-right2.png";
import bgright3 from "../assets/hero-right3.png";

// Data for both sections
const slides = [
  {
    title: "Welcome to SP Packwell",
    subtitle: "Redefining Adhesive BOP Tapes",
    description:
      "At SP Packweel, we specialize in manufacturing high-quality adhesive BOP tapes tailored for businesses across industries. With a focus on durability, strong adhesion, and versatility, our tapes ensure your packaging stays secure every time.",
    image: bgright1,
  },
  {
    title: "Innovative Packaging Solutions",
    subtitle: "Designed for Reliability",
    description:
      "Our adhesive BOP tapes are designed to meet the diverse needs of businesses, providing unmatched reliability and performance to ensure your products are packaged securely.",
    image: bgright2,
  },
  {
    title: "Commitment to Quality",
    subtitle: "Your Trusted Packaging Partner",
    description:
      "With SP Packweel, experience superior quality adhesive tapes that offer durability and efficiency, empowering your business to deliver excellence.",
    image: bgright3,
  },
];

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Automatically cycle through slides every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval); // Cleanup the interval
  }, []);

  return (
    <div className="w-full h-screen flex items-center justify-between flex-col lg:flex-row">
      {/* Left Section */}
      <div className="w-full lg:w-[39%] h-screen flex justify-center items-center px-10">
        <div
          key={currentSlide} // Ensure smooth transitions
          className="text-center transition-opacity duration-1000 ease-in-out"
        >
          <h1 className="text-[#22D378] text-5xl font-extrabold">
            {slides[currentSlide].title}
          </h1>
          <h2 className="text-black text-3xl font-semibold mt-2">
            {slides[currentSlide].subtitle}
          </h2>
          <p className="text-gray-600 text-xl mt-4 leading-relaxed">
            {slides[currentSlide].description}
          </p>
          <button className="text-white bg-[#22D378] font-bold py-3 px-6 mt-6 rounded-lg shadow-lg transition duration-300">
            Explore Our Products
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div
        className="w-full lg:w-[60%] h-screen flex items-center justify-center border-0"
        style={{
          backgroundImage: `url(${bgimage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          border: "none",
        }}
      >
        <div className="w-full flex items-center justify-center">
          <img
            key={currentSlide} // Ensure smooth transitions
            className="h-[400px] w-[400px] transition-opacity duration-1000 ease-in-out ml-[250px]"
            src={slides[currentSlide].image}
            alt={`Slide ${currentSlide + 1}`}
          />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
