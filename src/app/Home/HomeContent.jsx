import Impact from "@/app/home/Impact";
import Team from "@/app/home/team";
import Awarness from "@/app/home/Awarness";
import Research from "@/app/home/Research";
import Medicine from "@/app/home/medicine";
import Longivity from "@/app/home/Longivity";
// import Research from "@/app/home/Awarness"

const Page = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div
  className="
    relative w-full min-h-screen overflow-hidden
    bg-gradient-to-r from-[#705302] via-[#f3ba1d] to-[#f5ce67]
    flex flex-col-reverse md:flex-row items-center
  "
>
  
  {/* Content */}
  <div className="relative z-10 w-full md:w-1/2 px-6 md:pl-12 md:pr-5 py-10">

      <div className="fixed left-0 top-1/3 flex flex-col gap-3 bg-[#2f403c] p-2 rounded-r-lg z-50">
 <a href="https://www.instagram.com/longayuu?utm_source=qr&igsh=cXIwbGRwNGFvamJt"> <img
    src="/instagram.avif"
    alt="Instagram"
    className="w-10 h-10 cursor-pointer rounded-full"
  /></a>


  <a href="https://youtube.com/@longayuu?si=XfSoibDAyb9Eos39">
    <img
    src="/youtube.avif"
    alt="YouTube"
    className="w-10 h-10 cursor-pointer rounded-full"
  />
  </a>
</div>

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
          pharmacologists and AI/Software Professionals with a deep interest in Longevity Science. We intend to bring real change with our work.
        </p>
      </div>
    </div>
  </div>

  {/* Image */}
  <div className="w-[70%] md:w-1/2 h-64 md:h-full">
    <img
      src="home.avif"
      alt="Health background"
      className="
        w-full rounded-4xl h-full object-cover pt-0
        md:rounded-full
      "
    />
  </div>
</div>


      {/* Impact Section */}
      {/* <Impact /> */}
      {/* <Team/> */}
      <Awarness/>
      <Longivity/>
      <Research/>
      <Medicine/>
    </div>
  );
};

export default Page;
