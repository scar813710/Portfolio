import React, { useEffect, useState } from "react";

const Testimonial = () => {
  const testimonials = [
    {
      name: "Cameron Sumrell",
      company: "Owner at Prestige Worldwide Apps LLC",
      description:
        "Mach showed excellent skills as both a mobile developer and consultant but most of all as an excellent developer in chief for the product management in our start-up company. He is easy to work with, creative and enthusiastic. I can highly recommend him for similar positions.",
    },
    {
      name: "Chedo Todorovski",
      company: "Mobile App Developer at Expetitle",
      description:
        "Mach was a pleasure to work with. He completed assigments on time, worked well with our team and was able to add input when working with high-level planning meetings for both our company and its clients. Project managers often left Mach to handle client face-to-face meetings in their absence. Highly recommended",
    },
    {
      name: "John Amuesi",
      company: "CTO at Sarchitech LLC",
      description:
        "Working with Mach was an absolute pleasure. He brought a fresh perspective to the project and was always eager to learn and improve the quality of the service we built. He dealt with many unseen problems in a graceful and educational way. Would love to work with him again!",
    },
    {
      name: "David Miller",
      company: "CEO at LiteracyPro Systems, Inc",
      description:
        "Mach is an amazing Software developer! We hired him to improve our employment website, and he did a building out technical architecture and met our product requirements. I was particularly impressed by Mach's ability to break down complex problems and write scalable code. ...",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };
  return (
    <div className="relative" id="testimonial">
      <h2 className="text-left">Testimonial</h2>
      <div className="relative w-full max-w-md mx-auto  p-4 ">
        <div className="text-center shadow-2xl p-5">
          <h3 className="text-2xl font-bold text-[#ff7373] py-3">
            {testimonials[currentIndex]?.name}
          </h3>
          <h4 className="text-md italic text-[#8fff73] py-3">
            {testimonials[currentIndex]?.company}
          </h4>
          <p className="text-base text-[#ffffff] text-wrap">{testimonials[currentIndex]?.description}</p>
        </div>
      </div>
        <div className="absolute left-0 right-0 top-[65%] w-[70%] mx-auto transform -translate-y-1/2 flex justify-between">
          <button
            onClick={prevTestimonial}
            className="text-white px-4 py-2 rounded hover:bg-white hover:bg-opacity-25 duration-300"
          >
            ❮
          </button>
          <button
            onClick={nextTestimonial}
            className="text-white px-4 py-2 rounded hover:bg-white hover:bg-opacity-25 duration-300"
          >
            ❯
          </button>
        </div>
    </div>
  );
};

export default Testimonial;
