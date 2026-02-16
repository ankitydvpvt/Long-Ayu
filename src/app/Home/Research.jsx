import { div } from 'motion/react-client';
import React from 'react'
import { Notebook } from 'lucide-react';
const longevityResearchPoints = [
  {
    point: "Longevity Science",
    definition:
      "Longevity science focuses on extending both lifespan and healthspan by slowing biological aging and preventing chronic disease through lifestyle, medicine, and early intervention."
  },
  {
    point: "Genetics vs Lifestyle",
    definition:
      "Genetics account for only 10–20% of lifespan, while lifestyle and environmental factors contribute 80–90%, making daily habits the biggest drivers of long-term health."
  },
  {
    point: "Biological Aging Mechanisms",
    definition:
      "Aging is driven by chronic inflammation, oxidative stress, metabolic dysfunction, hormonal imbalance, and cellular damage over time."
  },
  {
    point: "Biomarkers of Aging",
    definition:
      "Biomarkers such as HbA1c, CRP, lipid ratios, insulin levels, and key vitamins help assess biological age and detect health risks before symptoms appear."
  },
  {
    point: "Nutrition and Longevity",
    definition:
      "Balanced diets rich in protein, fiber, and micronutrients support metabolic health, while excess sugar and processed foods accelerate aging."
  },
  {
    point: "Physical Activity",
    definition:
      "A combination of strength training, cardiovascular exercise, and mobility work preserves muscle mass, bone density, and long-term functional health."
  },
  {
    point: "Sleep and Stress",
    definition:
      "Quality sleep and stress management regulate hormones, reduce inflammation, and protect against metabolic and cardiovascular disease."
  },
  {
    point: "Mental and Social Health",
    definition:
      "Emotional well-being, social connection, and a sense of purpose are strong predictors of longer, healthier lives."
  },
  {
    point: "Environmental Impact",
    definition:
      "Exposure to air pollution and poor environmental conditions accelerates lung and heart aging and increases systemic inflammation."
  },
  {
    point: "India-Specific Health Risks",
    definition:
      "Indians face earlier onset of diabetes, heart disease, and nutrient deficiencies, making preventive care and awareness especially critical."
  },
];



const Longivity = () => {
  return (
    
    <div>
        <div className=' bg-[#b1afaf] text-center text-5xl text-[#34403d] font-bold pb-10 pt-5'>
            Research
       
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-5 h-auto p-5 items-center justify-center">
        
  {longevityResearchPoints.map((item, index) => (
    <div
      key={index}
      className="
        bg-[#e1ad2e] rounded-3xl p-4
        shadow-2xl
        text-[#34403d]
        flex flex-col justify-center
        text-center
        transition-transform duration-300
        hover:scale-105
      "
      >
      
      <div className="text-xl  font-bold mb-2 ">
      <Notebook className='absolute ' />
         
         <div className='ml-5'>
           {item.point}
         </div>
        
      </div>
      <hr className='border-1'  />
      <p className="text-sm opacity-90 mt-2">
        {item.definition}
      </p>
    </div>
  ))}
</div>
    </div>
     </div>

  )
}

export default Longivity
