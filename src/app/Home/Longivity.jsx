import React from "react";
import { Notebook } from "lucide-react";

const longevityResearchPoints = [
  {
    point: "Air Pollution & Longevity",
    definition:
      "Chronic exposure to high air pollution accelerates lung aging, increases cardiovascular risk, and drives systemic inflammation. In India, pollution significantly shortens healthspan.",
  },
  {
    point: "Toxin Exposure",
    definition:
      "Daily exposure to toxins from food, water, plastics, and pesticides disrupts hormones and damages cells, accelerating biological aging.",
  },
  {
    point: "Genetic Predisposition (Indian Population)",
    definition:
      "Indians have higher genetic susceptibility to insulin resistance, diabetes, and heart disease at younger ages and lower BMI.",
  },
  {
    point: "Dietary Patterns (Indian Context)",
    definition:
      "Carbohydrate-heavy diets with low protein and fiber contribute to metabolic dysfunction and nutrient deficiencies.",
  },
  {
    point: "Diagnostics & Early Detection",
    definition:
      "Tracking advanced biomarkers and micronutrients enables early intervention and slows aging.",
  },
  {
    point: "AI/Software",
    definition:
      "Developing advanced apps to track Nutrition, Biomarkers, Biological Ageing integrated with wearables ",
  },
];

const Longivity = () => {
  return (
    <div className="bg-[#f2eceb] pt-10 pb-10 min-h-screen flex items-center justify-center px-6">
      <section className="relative w-full max-w-7xl rounded-3xl bg-gradient-to-r from-[#705302] via-[#f3ba1d] to-[#f5ce67]
     p-10 overflow-hidden">

        {/* Badge */}
        <span className="absolute top-6 left-8 bg-white/20 text-white px-4 py-1 rounded-full text-sm">
          Longevity Research
        </span>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">

          {/* LEFT CONTENT */}
          <div className="text-white">
            <h2 className="text-4xl font-bold leading-tight">
              SCIENCE BEHIND <br /> LONGEVITY IN INDIA
            </h2>

            <p className="text-white/80 mt-5 max-w-md">
              Longevity is about extending healthspan, not just lifespan.
              Understanding environmental, genetic, and lifestyle risks helps
              slow biological aging and prevent chronic disease.
            </p>

            <button className="mt-6 bg-black text-white px-6 py-3 rounded-full hover:bg-gray-900 transition">
              {/* Learn More → */}
              Scroll to see
            </button>
            <div className=" mt-10">
              <img src="Longivity.avif" className="rounded-3xl h-[50vh] shadow-2xl shadow-amber-50" alt="" />
            </div>
          </div>

          {/* RIGHT CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {longevityResearchPoints.map((item, index) => (
              <LongevityCard key={index} {...item} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const LongevityCard = ({ point, definition }) => {
  return (
    <div className="bg-[#141414] rounded-2xl p-6 text-white shadow-lg hover:scale-105 transition duration-300">
      <div className="w-10 h-10 flex items-center justify-center bg-[#2f403c] rounded-lg mb-4">
        <Notebook size={20} />
      </div>

      <h3 className="font-semibold text-lg">{point}</h3>
      <p className="text-sm text-gray-400 mt-2 leading-relaxed">
        {definition}
      </p>
    </div>
  );
};

export default Longivity;
