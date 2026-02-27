"use client";

import { useEffect, useState } from "react";

import Impact from "@/app/home/Impact";
import Team from "@/app/home/team";
import Awarness from "@/app/home/Awarness";
import Research from "@/app/home/Research";
import Medicine from "@/app/home/medicine";
import Longivity from "@/app/home/Longivity";
import Instalink from "@/app/Home/Instalink";
import LongivityQuestion from "@/app/Home/LongivityQuestion";

const Page = () => {
  const [show, setShow] = useState(false);


  return (
    <div className="w-full">
<Instalink/>

      {/* Hero Section */}
      <div className="relative mt-5 w-full min-h-screen overflow-hidden bg-gradient-to-r from-[#705302] via-[#f3ba1d] to-[#f5ce67] flex flex-col-reverse md:flex-row items-center">
        {/* 🤖 Chatbot Widget */}
 <LongivityQuestion/>
        


        {/* 📱 Social Icons Left */}
        <div className="fixed left-0 top-1/3 flex flex-col gap-3 bg-[#2f403c] p-2 rounded-r-lg z-50">
  <a href="https://www.instagram.com/longayuu?utm_source=qr&igsh=cXIwbGRwNGFvamJt">
    <img
      src="/instagram.avif"
      alt="Instagram"
      className="w-10 h-10 rounded-full hover:scale-110 transition-transform duration-300"
    />
  </a>

  <a href="https://youtube.com/@longayuu?si=XfSoibDAyb9Eos39">
    <img
      src="/youtube.avif"
      alt="YouTube"
      className="w-10 h-10 rounded-full hover:scale-110 transition-transform duration-300"
    />
  </a>
</div>
        
        

        {/* 📝 Content */}
        <div className="relative z-10 w-full md:w-1/2 px-6 md:pl-12 md:pr-5 py-10">
          <div className="bg-[#e7ffed] max-w-3xl mx-auto md:ml-0 p-8 md:p-10 rounded-2xl shadow-lg">
            <div className="space-y-6 text-black">
              <h1 className="lg:text-6xl md:text-4xl text-2xl capitalize tracking-wide">
                India focused longevity initiative
              </h1>

              <h2 className="text-4xl md:text-6xl font-bold leading-tight">
                About
              </h2>

              <p className="lg:text-xl md:text-lg text-base leading-relaxed">
                We are a multidisciplinary team of experienced doctors
                pharmacologists and AI/Software Professionals with a deep
                interest in Longevity Science. As a first step to spread longevity awareness in India we are creating short engaging AI videos and publishing them on Instagram and Youtube. Objective is to make complex topics interesting and easy to understand
              </p>
            </div>
          </div>
        </div>

        {/* 🖼 Image */}
        <div className="w-[70%] md:w-1/2 h-64 md:h-full">
          <img
            src="home.avif"
            alt="Health background"
            className="w-full h-full object-cover md:rounded-full"
          />
        </div>
      </div>

      {/* Sections */}
      <Awarness />
      <Longivity />
      <Research />
      {/* <Medicine /> */}
    </div>
  );
};

export default Page;