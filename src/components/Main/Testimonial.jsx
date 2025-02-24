import React from "react";

const testimonials = [
  {
    name: "Cameron Sumrell",
    image: "./testimonial/1.jpg",
    company: "Owner at Prestige Worldwide Apps LLC",
    description:
      "Rodolfo showed excellent skills as both a mobile developer and consultant but most of all as an excellent developer in chief for the product management in our start-up company. He is easy to work with, creative and enthusiastic. I can highly recommend him for similar positions.",
    rating: 5, // Add rating property
  },
  {
    name: "Chedo Todorovski",
    image: "./testimonial/2.jpg",
    company: "Mobile App Developer at Expetitle",
    description:
      "Rodolfo was a pleasure to work with. He completed assignments on time, worked well with our team and was able to add input when working with high-level planning meetings for both our company and its clients. Project managers often left Rodolfo to handle client face-to-face meetings in their absence. Highly recommended",
    rating: 5, // Add rating property
  },
  {
    name: "John Amuesi",
    image: "./testimonial/3.webp",
    company: "CTO at Sarchitech LLC",
    description:
      "Working with Rodolfo was an absolute pleasure. He brought a fresh perspective to the project and was always eager to learn and improve the quality of the service we built. He dealt with many unseen problems in a graceful and educational way. Would love to work with him again!",
    rating: 5, // Add rating property
  },
];

const Testimonial = () => {
  return (
    <div className="" id="testimonial">
      <h2 className="text-left">Testimonial</h2>
      <div className="grid xl:grid-cols-3 text-white gap-6 relative">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white bg-opacity-15 p-6 rounded-md hover:shadow-[10px_10px_8px_#00000066] dark:hover:shadow-[4px_4px_2px_#ffffff66] duration-300"
          >
            <div className="flex xl:justify-around justify-center gap-7 items-center">
              <img
                src={testimonial.image}
                alt=""
                width={90}
                className="rounded-full"
              />
              <div className="flex flex-col items-center">
                <div className="flex gap-2">
                  {/* Render stars based on rating */}
                  {[...Array(testimonial.rating)].map((_, starIndex) => (
                    <img
                      key={starIndex}
                      src="./viewstar.svg"
                      width={20}
                      height={20}
                      alt="star icon"
                    />
                  ))}
                </div>
                <h3 className="text-[24px] text-[#ff4c4c] py-3">{testimonial.name}</h3>
              </div>
            </div>
            <p className="italic py-3 text-[#ffbd90]">{testimonial.company}</p>
            <p>{testimonial.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;