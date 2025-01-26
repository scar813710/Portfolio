import React, { useEffect, useState } from "react";
const testimonials = [
  {
    name: "Cameron Sumrell",
    image: "./testimonial/1.jpg",
    company: "Owner at Prestige Worldwide Apps LLC",
    description:
      "Mach showed excellent skills as both a mobile developer and consultant but most of all as an excellent developer in chief for the product management in our start-up company. He is easy to work with, creative and enthusiastic. I can highly recommend him for similar positions.",
  },
  {
    name: "Chedo Todorovski",
    image: "./testimonial/2.jpg",
    company: "Mobile App Developer at Expetitle",
    description:
      "Mach was a pleasure to work with. He completed assigments on time, worked well with our team and was able to add input when working with high-level planning meetings for both our company and its clients. Project managers often left Mach to handle client face-to-face meetings in their absence. Highly recommended",
  },
  {
    name: "John Amuesi",
    image: "./testimonial/3.webp",
    company: "CTO at Sarchitech LLC",
    description:
      "Working with Mach was an absolute pleasure. He brought a fresh perspective to the project and was always eager to learn and improve the quality of the service we built. He dealt with many unseen problems in a graceful and educational way. Would love to work with him again!",
  },
];

const Testimonial = () => {
  return (
    <div className="" id="testimonial">
      <h2 className="text-left">Testimonial</h2>
      <div className="grid grid-cols-3 text-white gap-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="  bg-white bg-opacity-15 p-6 rounded-md  hover:shadow-[10px_10px_8px_#00000066] duration-300"
          >
            <div className="flex justify-around">
              <img src={testimonial.image} alt="" width={60} height={30} className="rounded-full"/>
              <h3 className="text-[24px] text-[#ff4c4c] py-3">
                {testimonial.name}
              </h3>
            </div>
            <p className="italic py-3">{testimonial.company}</p>
            <p>{testimonial.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
