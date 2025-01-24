import React from "react";

const Education = () => {
  return (
    <div>
      <h2>Education</h2>
      <div className="flex justify-center gap-20 border max-w-[900px] mx-auto border-white  rounded-md bg-white bg-opacity-15 duration-300 hover:bg-opacity-40">
        <img src="./education.svg" alt="" width={100} height={100}/>
        <div className="text-[#cfcfcf]">
          <p className="text-[30px] py-3 text-[#fc8383] font-extrabold">University of the Andes</p>
          <p className="text-2xl text-[#94ebcb] italic">2009.4 - 2013.10</p>
          <p className="text-[28px] py-6">Bachelor's in Computer Science</p>
        </div>
      </div>
    </div>
  );
};

export default Education;
