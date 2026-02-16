import React from "react";

// const longevityAwarenessIndia = [
//   {
//     point: "Diet Awareness (Indian Context)",
//     explanation:
//       "Indian diets are often high in carbohydrates and low in protein. Over time, this imbalance increases metabolic risk. Longevity requires balanced meals with adequate protein, fiber, and essential micronutrients.",
//   },
//   {
//     point: "Micronutrient Deficiency Awareness",
//     explanation:
//       "Vitamin D, B12, and Iron deficiencies are widespread in India due to indoor lifestyles and dietary gaps. These deficiencies affect energy, immunity, bones, and brain health, accelerating aging if untreated.",
//   },
//   {
//     point: "Preventive Care Awareness",
//     explanation:
//       "Most Indians seek medical help only after symptoms appear. Longevity begins with early screening and preventive care. Regular checks for blood pressure, blood sugar, and cholesterol help detect risks early and extend healthy lifespan.",
//   },
//   {
//     point: "Diabetes & Heart Risk Awareness",
//     explanation:
//       "Indians are genetically predisposed to early diabetes and heart disease. Even individuals with normal weight may carry hidden fat. Waist circumference and metabolic markers are more reliable indicators than body weight alone.",
//   },
//   {
//     point: "Sleep & Stress Awareness",
//     explanation:
//       "Chronic stress, late nights, and excessive screen time disrupt hormonal balance and increase inflammation. Quality sleep is essential for recovery, metabolic health, and long-term longevity.",
//   },
//   {
//     point: "Physical Activity Awareness",
//     explanation:
//       "Walking alone is insufficient for long-term health after the mid-30s. Strength training, mobility, and balance exercises are critical to preserve muscle mass, bone density, and injury prevention.",
//   },
//   {
//     point: "Mental Health & Purpose Awareness",
//     explanation:
//       "Mental well-being strongly influences lifespan. Loneliness, unresolved stress, and lack of purpose can shorten life, while emotional balance and meaning support healthier aging.",
//   },
//   {
//     point: "Environmental Awareness",
//     explanation:
//       "Air pollution accelerates lung and cardiovascular aging in Indian cities. Indoor air quality also plays a role. Simple protective measures can significantly reduce long-term damage.",
//   },
//   {
//     point: "Toxin Exposure Awareness",
//     explanation:
//       "Daily exposure to toxins through food, water, and plastics contributes to inflammation and cellular damage. Reducing toxin load supports long-term health and aging.",
//   },
//   {
//     point: "Biomarker Awareness",
//     explanation:
//       "Longevity depends on tracking health trends over time rather than relying on single test reports. Markers such as HbA1c, CRP, and lipid ratios provide early insight into future health risks.",
//   },
//   {
//     point: "Consistency Awareness",
//     explanation:
//       "Longevity is built through small, consistent habits maintained over years. Sustainable systems and daily routines outperform extreme diets or short-term health challenges.",
//   },
// ];

const longevityAwarenessIndia = [
  {
    point: "India-Specific Focus ",
    explanation:
      "Longevity strategies in India must account for unique challenges such as high air pollution, daily toxin exposure, carbohydrate-heavy diets, genetic predispositions to metabolic disease, and limited access to advanced diagnostics. Addressing these factors early is critical for healthier aging.",
  },
  {
  point: "Global Longevity Protocols ",
  explanation:
    "Most Indians are unaware of global longevity research and evidence-based protocols practiced worldwide. Educating people about international best practices in preventive care, aging science, and long-term health optimization is essential to improve both lifespan and healthspan.",
}

];
const Condition = () => {
  return (
    <div className="m-2 rounded-xl bg-gradient-to-r from-[#705302] via-[#f3ba1d] to-[#f5ce67]">
      
      {/* Heading */}
      <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl text-[#34403d] font-bold pt-8">
        Awareness
      </h2>

      {/* Main layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 p-6 sm:p-8 lg:p-10 min-h-screen">
        
        {/* Left Image (Sticky on desktop only) */}
        <div className="lg:sticky lg:top-24 self-start">
          <img
            src="Awarness.avif"
            alt="Longevity"
            className="w-full max-w-md lg:max-w-full mx-auto rounded-3xl shadow-2xl shadow-black"
          />
        </div>

        {/* Right Content */}
        <div className="space-y-6">
          {longevityAwarenessIndia.map((item, index) => (
            <div
              key={index}
              className="
                text-white
                bg-[#1e312d]
                rounded-3xl
                p-6
                shadow-2xl shadow-[#474a50]
                transition-all duration-300
                hover:bg-[#c8b5ad]
                hover:text-[#34403d]
              "
            >
              <h3 className="text-lg sm:text-xl font-semibold mb-2 underline">
                {item.point}
              </h3>
              <p className="text-sm leading-relaxed opacity-90">
                {item.explanation}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Condition;
