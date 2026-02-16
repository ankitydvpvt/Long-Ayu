import React from 'react'

const team = () => {
    const testimonials = [
  {
    id: 1,
    name: "Dr. Arun Gupta",
    department: "Department of Interventional Radiology",
    image: "https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?semt=ais_hybrid&w=740&q=80",
    review:
      "Excellent work done by the team. The website experience was smooth and flawless. Everything was explained clearly and support was always available."
  },
  {
    id: 2,
    name: "Dr. Ashish Kumar",
    department: "Hepatologist & Gastroenterologist",
    image: "/images/doctors/ashish-kumar.jpg",
    review:
      "Highly appreciated the work. Very professional website with a great user experience. Would strongly recommend their services."
  },
  {
    id: 3,
    name: "Dr. Vinay Kumar Singal",
    department: "Rheumatology & Clinical Immunology",
    image: "/images/doctors/vinay-singal.jpg",
    review:
      "I am fully satisfied with the services. The team prepared an excellent website and guided me on how to improve it further."
  },
  {
    id: 4,
    name: "Dr. Neha Sharma",
    department: "Consultant Gynecologist",
    image: "/images/doctors/neha-sharma.jpg",
    review:
      "The website design was elegant and easy to navigate. The entire process was smooth and very well coordinated."
  },
  {
    id: 5,
    name: "Dr. Rohit Mehta",
    department: "Orthopedic Surgeon",
    image: "/images/doctors/rohit-mehta.jpg",
    review:
      "Outstanding experience. The team understood my requirements perfectly and delivered more than expected."
  },
  {
    id: 6,
    name: "Dr. Pooja Verma",
    department: "Dermatologist",
    image: "/images/doctors/pooja-verma.jpg",
    review:
      "Professional approach and timely delivery. The website looks modern and performs very well on mobile."
  },
  {
    id: 7,
    name: "Dr. Sanjay Malhotra",
    department: "Cardiologist",
    image: "/images/doctors/sanjay-malhotra.jpg",
    review:
      "Very impressed with the quality of work. Everything was explained in detail and the support team was responsive."
  },
  {
    id: 8,
    name: "Dr. Anjali Kapoor",
    department: "Pediatrician",
    image: "/images/doctors/anjali-kapoor.jpg",
    review:
      "Loved the clean design and smooth functionality. Parents find it easy to use and book appointments."
  },
  {
    id: 9,
    name: "Dr. Rajesh Nair",
    department: "Neurologist",
    image: "/images/doctors/rajesh-nair.jpg",
    review:
      "Exceptional service and attention to detail. The website reflects professionalism and trust."
  },
];


 return (
    <section className="w-auto mt-10 rounded-2xl sm:m-2 m-5 bg-gradient-to-r from-[#705302] via-[#f3ba1d] to-[#f5ce67]
       py-14">
      <div className="max-w-7xl mx-auto px-4">
        {/* <div><img src="https://static.vecteezy.com/system/resources/previews/020/297/302/non_2x/web-concept-illustration-national-doctor-day-doctor-man-woman-black-doctor-flat-cartoon-style-vector.jpg" className='rounded-4xl h-[30vh] w-full' alt="" /></div> */}
        <div className='text-6xl text-center text-[#2c6a5b] font-bold m-5 '>Team</div>
        {/* Grid */}
        <div className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          lg:grid-cols-3 
          gap-10
        ">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="
                flex flex-col items-center text-center
                bg-[#a59e72] rounded-2xl p-6
                shadow-sm hover:shadow-md
                transition
              "
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.name}
                className="
                  w-24 h-24 
                  sm:w-28 sm:h-28 
                  lg:w-32 lg:h-32
                  rounded-full object-cover
                "
              />

              {/* Name */}
              <h3 className="
                mt-4
                text-lg sm:text-xl
                font-semibold italic
                text-amber-300
              ">
                {item.name}
              </h3>

              {/* Department */}
              <p className="
                text-green-600
                text-sm sm:text-base
                font-medium
              ">
                {item.department}
              </p>

              {/* Review */}
              <p className="
                mt-3
                text-gray-700
                text-sm sm:text-base
                leading-relaxed
              ">
                {item.review}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default team
