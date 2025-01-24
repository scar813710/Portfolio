import React from "react";
// import map from "./public/map.svg"

const Contact = () => {
  return (
    <div className="relative" id="contact">
      <h2>Contact Me</h2>
      <div className="grid grid-cols-2 ">
        <div className="px-10">
          <div className="flex w-full grid grid-cols-2 gap-5 ">
            <div className="">
              <p className="text-[#f0f0f0] text-left py-4">Subject : </p>
              <input
                type="text"
                className="bg-white bg-opacity-15 hover:bg-opacity-35 duration-200 rounded-md p-4 w-full"
              />
            </div>
            <div className="">
              <p className="text-[#f0f0f0] text-left py-4">Name : </p>
              <input
                type="text"
                className="bg-white bg-opacity-15 hover:bg-opacity-35 duration-200 rounded-md p-4 w-full"
              />
            </div>
          </div>
          <div>
            <p className="text-[#f0f0f0] text-left py-4">Email : </p>
            <input
              type="text"
              className="bg-white bg-opacity-15 hover:bg-opacity-35 duration-200 rounded-md p-4 w-full"
            />
          </div>
          <div>
            <p className="text-[#f0f0f0] text-left py-4">Text : </p>
            <textarea
              name=""
              id=""
              className="bg-white bg-opacity-15 hover:bg-opacity-35 duration-200 rounded-md p-4 w-full"
              rows={6}
            ></textarea>
          </div>
          <div className="w-full">
            <button className="w-full border border-white bg-white bg-opacity-0 hover:bg-opacity-30 text-white p-4 rounded-md my-8">
              Send
            </button>
            <div className="py-6">
              <ul className="flex mx-auto w-fit gap-12">
                <li>
                  <a href="">
                    <img
                      src="./contacts/iconmonstr-linkedin-3.svg"
                      alt="contacts"
                      className="hover:shadow-[4px_4px_8px_rgba(0,0,0,0.85)] duration-500"
                      width={35}
                      height={35}
                    />
                  </a>
                </li>
                <li>
                  <a href="">
                    <img
                      src="./contacts/iconmonstr-github-3.svg"
                      alt="contacts"
                      className="hover:shadow-[4px_4px_8px_rgba(0,0,0,0.85)] duration-500"
                      width={35}
                      height={35}
                    />
                  </a>
                </li>
                <li>
                  <a href="">
                    <img
                      src="./contacts/iconmonstr-email-10.svg"
                      alt="contacts"
                      className="hover:shadow-[4px_4px_8px_rgba(0,0,0,0.85)] duration-500 rounded-full"
                      width={35}
                      height={35}
                    />
                  </a>
                </li>
                <li>
                  <a href="">
                    <img
                      src="./contacts/iconmonstr-telegram-3.svg"
                      alt="contacts"
                      className="hover:shadow-[4px_4px_8px_rgba(0,0,0,0.85)] duration-500"
                      width={35}
                      height={35}
                    />
                  </a>
                </li>
                <li>
                  <a href="">
                    <img
                      src="./contacts/iconmonstr-discord-1.svg"
                      alt="contacts"
                      className="hover:shadow-[4px_4px_8px_rgba(0,0,0,0.85)] duration-500"
                      width={35}
                      height={35}
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-right flex justify-end">
          <img src="/map3.svg" alt="map" className="mr-0 opacity-60" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
