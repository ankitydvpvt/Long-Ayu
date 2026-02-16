import React from "react";
import { ArrowRight } from "lucide-react";
const features = [
  "Genetic-Guided Care",
  "Personalized Prevention",
  "Data-Driven Decisions",
  "Smarter Therapies",
];
const medicine = () => {
  return (
    <div
      className="
        bg-gradient-to-r from-[#705302] via-[#f3ba1d] to-[#f5ce67]
        min-h-screen w-full
        flex justify-center items-center
        px-4
      "
    >
      <div
        className="
          bg-black/30 rounded-3xl pb-10
          h-auto w-full max-w-6xl sm:mt-10
        "
      >
        {/* Heading */}
        <div
          className="
            flex justify-center items-center flex-wrap
            mt-10
            text-3xl lg:text-6xl
            text-[#34403d]
          "
        >
          Precision
          <div className="bg-[#9e6503] text-white rounded-xl p-1 ml-2">
            Medicine
          </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-6 px-4 lg:px-10">
      
      {/* LEFT */}
      <div className="mt-2 flex flex-col items-center lg:items-start">
        <p className="text-sm sm:text-base text-center lg:text-left">
          We Research personalized healthcare solutions designed around Indian's 
          Unique biology, lifestyle, and health goals.
        </p>

        {features.map((item, index) => (
          <div
            key={index}
            className="
              relative z-10
              bg-black/50
              
              hover:scale-[1.03]
              transition-all duration-300
              
              rounded-4xl
              p-5
              grid grid-cols-2
              items-center
              text-white
              w-full sm:w-[80%]
              mt-4
            "
            // cursor-pointer
            //  hover:bg-black/80
          >
            <div>{item}</div>
            <div className="flex justify-end">
              {/* <ArrowRight /> */}
            </div>
          </div>
        ))}
      </div>

      {/* RIGHT IMAGE */}
      <div className="flex justify-center items-center">
        <img
          // src="https://static.scientificamerican.com/sciam/cache/file/B48356B9-7870-420F-881E346C37EFF76F_source.jpg?w=600"
          src="/precision_medicine.webp"
          alt="Healthcare visualization"
          className="
            rounded-2xl
            w-full max-w-xs sm:max-w-sm md:max-w-md
            mt-6 lg:mt-10
            shadow-2xl shadow-amber-50
          "
        />

      </div>
    </div>
      </div>
    </div>
  );
};

export default medicine;
