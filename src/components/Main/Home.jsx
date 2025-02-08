import React, { useEffect, useState } from "react";
import "./Home.css";

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
  "Full Stack Developer",
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
    const intervals = []; // Array to hold interval IDs for cleanup

    data.forEach((item, idx) => {
      const endValue = item.number;
      const duration = 1500; // duration of the animation in ms
      const stepTime = Math.floor(duration / endValue);

      let currentValue = 0;

      const intervalId = setInterval(() => {
        if (currentValue < endValue) {
          currentValue =
            endValue > 10000
              ? currentValue + 101
              : endValue > 100
              ? currentValue + 5
              : currentValue + 1;

          setData((prevData) => {
            const newData = [...prevData]; // Avoid mutating state directly
            newData[idx].current = currentValue;
            return newData;
          });
        } else {
          clearInterval(intervalId);
        }
      }, stepTime);

      intervals.push(intervalId); // Store the interval ID for cleanup
    });

    // Cleanup function to clear intervals on component unmount
    return () => {
      intervals.forEach(clearInterval);
    };
  }, []); // This hook will run only once when the component mounts

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

    // Cleanup timeout on component unmount
    return () => clearTimeout(timeout);
  }, [fullText, isDeleting, index]);

  const handleDownload = () => {
    // URL of the file to download
    const fileUrl =
      "https://raw.githubusercontent.com/scar813710/resume/441a614ade661b83ae7a4cafc2e0c0566ad20bc4/Full%20stack.pdf";

    const link = document.createElement("a");
    link.href = fileUrl; // Setting the correct URL
    link.setAttribute("download", "RodolfoPeinadoGuerreroResume.pdf"); // Specify the filename and extension you want
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className=" mt-10 mb-5" id="home">
      <div className="text-white grid lg:grid-cols-2 grid-cols-1 ">
        <div className="w-full flex items-center justify-center relative z-10">
          <img
            src="./avatar.jpg"
            alt="avatar"
            className=" my-20 w-[50%] rounded-full"
          />
          <div className="absolute avatar top-20 w-[50%] aspect-square rounded-full"></div>
        </div>
        <div className="my-auto">
          <h1 className="text-4xl ml-0 lg:text-left mt-8 lg:mt-0">
            <span>I am</span>{" "}
            <span className="font-bold">Rodolfo Guerrero</span>
          </h1>
          <p className=" py-3 text-[18px] text-[#dedede] flex lg:justify-start justify-center">
            <span className="text-[#c55648]">
              {fullText} <span className="caret text-white">|</span>
            </span>
          </p>
          <p className="lg:text-left text-justify py-3 text-[18px] text-[#dedede]">
            Building and Engaging dynamic web applications that captivate <br />{" "}
            with a blend of creativity and technical expertise.
          </p>
          <div className="mx-auto lg:ml-0 w-fit">
            <button
              onClick={handleDownload}
              className="mt-3 border border-white bg-white bg-opacity-0 hover:bg-opacity-30 text-white p-4 rounded-md flex gap-2 items-center duration-300"
            >
              Resume{" "}
              <img
                src="./download-icon.svg"
                alt="icon"
                width={15}
                height={10}
              />
            </button>
          </div>
        </div>
      </div>
      <div className="mb-32 mt-32 bg-white bg-opacity-30 rounded-md text lg:flex lg:justify-around grid sm:grid-cols-2 gap-8 py-6 px-6">
        {data.map((item, index) => (
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
        ))}
      </div>
    </div>
  );
};

export default Home;
