import React from "react";

const personalData = [
  {
    number: 100,
    type: "Experienced teacher",
    color: "#f7c0a1"
  },
  {
    number: 50,
    type: "Country",
    color: "#f7a1a1"
  },
  {
    number: 500,
    type: "Country",
    color: "#94ebcb"
  },
  {
    number: 800,
    type: "Student",
    color: "#dedede"
  },
];

const Home = () => {
  return (
    <div className="mb-5">
      <div className="text-white grid grid-cols-2 h-[600px]">
        <div></div>
        <div className="my-auto">
          <h1 className="text-4xl">
           Hi,  I am <br /> Senior Full Stack Developer
          </h1>
        </div>
      </div>
      <div className="mx-8 bg-white bg-opacity-30 rounded-md text flex justify-around py-6 px-6">
        {personalData.map((data, index) => (
          <div key={index} >
            <p className={`text-[${data.color}] font-extrabold text-[28px]`}>{data.number}+</p>
            <p className="text-[#b4b3b3]">{data.type}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
