import React, { useEffect, useState } from "react";

const personalDatas = [
  {
    number: 18, // target value
    unit: "+",
    type: "Project Completed",
    color: "#f7c0a1",
  },
  {
    number: 100, // target value
    unit: "%",
    type: "Satisfaction of Customers",
    color: "#f7a1a1",
  },
  {
    number: 24500, // target value
    unit: "+",
    type: "Development Hours",
    color: "#94ebcb",
  },
  {
    number: 900, // target value
    unit: "K+",
    type: "Total Earning",
    color: "#dedede",
  },
];

const myRole = [
  "Rodolfo Guerrero",
  "Frontend Developer",
  "Backend Developer",
  "Lead Developer",
];

const Home = () => {
  const [data, setData] = useState(
    personalDatas.map((item) => ({ ...item, current: 0 })) // Initialize with current values as 0
  );

  const [fullText, setFullText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    data.forEach((item, index) => {
      const endValue = item.number;
      const duration = 1500; // duration of the animation in ms
      const stepTime = Math.floor(duration / endValue);

      let currentValue = 0;
      const interval = setInterval(() => {
        if (currentValue < endValue) {
          if (endValue > 10000) currentValue = currentValue + 101;
          else if (endValue > 100) currentValue = currentValue + 5;
          else currentValue++;
          setData((prevData) => {
            const newData = [...prevData];
            newData[index].current = currentValue; // Update current value
            return newData;
          });
        } else {
          clearInterval(interval);
        }
      }, stepTime);
    });
  }, []);

  useEffect(() => {
    const typeEffect = () => {
      if (index < myRole.length) {
        const role = myRole[index];
        const updatedFullText = isDeleting
          ? role.substring(0, fullText.length - 1)
          : role.substring(0, fullText.length + 1);

        setFullText(updatedFullText);

        if (!isDeleting && updatedFullText === role) {
          setTimeout(() => setIsDeleting(true), 2000);
        } else if (isDeleting && updatedFullText === "") {
          setIsDeleting(false);
          setIndex((prevIndex) => (prevIndex + 1) % myRole.length);
        }
      }
    };

    const timeout = setTimeout(typeEffect, isDeleting ? 60 : 60);

    return () => clearTimeout(timeout);
  }, [fullText, isDeleting, index]);
  return (
    <div className="mb-5" id="home">
      <div className="text-white grid lg:grid-cols-2 grid-cols-1 h-[600px]">
        <div className="w-full flex items-center justify-center">
          <img src="./avatar1.jpg" alt="" className="rounded-[50%] w-[50%]" />
        </div>
        <div className="my-auto">
          <h1 className="text-4xl ml-0 text-left">
            Who am I and <br />
            What I 'm great at?
          </h1>
          <p className="text-left py-3 text-[18px] text-[#dedede] flex sm:flex-row  flex-col">
            <span>I am</span> &nbsp;{" "}
            <span className="text-[#c55648]">
              {fullText}{" "}
              <span className="caret text-white">|</span>
            </span>
          </p>
          <p className="text-left py-3 text-[18px] text-[#dedede]">
            I am very passionate about web development. <br />I try my best in
            every project.
          </p>
        </div>
      </div>
      <div className="mb-32 bg-white bg-opacity-30 rounded-md text lg:flex lg:justify-around grid sm:grid-cols-2  gap-8 py-6 px-6">
        {data.map((item, index) => {
          return (
            <div key={index}>
              <p
                style={{ color: item.color }}
                className={`font-extrabold text-[28px]`}
              >
                {item.current}
                {item.unit}
              </p>
              <p className={`text-[#dedede]`}>{item.type}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
