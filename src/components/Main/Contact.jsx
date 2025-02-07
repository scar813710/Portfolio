import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    subject: "",
    name: "",
    email: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .send("service_m6liepl", "template_f5ska5n", formData, "j_1vJqt4M2fN0SO_J")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Message sent successfully!");
      })
      .catch((err) => {
        console.error("FAILED...", err);
        alert("Failed to send message, please try again later.");
      });
    console.log(formData);
    
  };
  return (
    <div className="relative" id="contact">
      <h2>Contact Me</h2>
      <div className="lg:grid lg:grid-cols-2">
        <div className="px-10">
          <form onSubmit={sendEmail} className="text-white">
            <div className="flex w-full grid sm:grid-cols-2 grid-cols-1 gap-5 ">
              <div className="">
                <p className="text-[#f0f0f0] text-left py-4">Subject : </p>
                <input
                  name="subject"
                  id="subject"
                  type="text"
                  onChange={handleChange}
                  className="bg-white bg-opacity-15 hover:bg-opacity-35 duration-200 rounded-md p-4 w-full"
                />
              </div>
              <div className="">
                <p className="text-[#f0f0f0] text-left py-4">Name : </p>
                <input
                  name="name"
                  id="name"
                  type="text"
                  onChange={handleChange}
                  className="bg-white bg-opacity-15 hover:bg-opacity-35 duration-200 rounded-md p-4 w-full"
                />
              </div>
            </div>
            <div>
              <p className="text-[#f0f0f0] text-left py-4">Email : </p>
              <input
                name="email"
                id="email"
                type="text"
                onChange={handleChange}
                className="bg-white bg-opacity-15 hover:bg-opacity-35 duration-200 rounded-md p-4 w-full"
              />
            </div>
            <div>
              <p className="text-[#f0f0f0] text-left py-4">Text : </p>
              <textarea
                name="description"
                id="description"
                className="bg-white bg-opacity-15 hover:bg-opacity-35 duration-200 rounded-md p-4 w-full"
                rows={6}
                onChange={handleChange}
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full border border-white bg-white bg-opacity-0 hover:bg-opacity-30 text-white p-4 rounded-md my-8 flex justify-center items-center gap-5"
            >
              <img src="./contacts/send-message-icon.svg" alt="" width={25} height={25} />
              Send Message
            </button>
          </form>
          <div className="w-full">
            <div className="py-6">
              <ul className="flex mx-auto w-fit gap-12">
                <li>
                  <a href="https://www.linkedin.com/in/rodolfo-guerrero-peinado">
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
                  <a href="https://github.com/scar813710">
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
                  <a href="mailto:rodolfguerr@gmail.com">
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
                  <a href="https://t.me/chainshifu">
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
                  <a href="https://discord.gg/1279986793160376425">
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
        <div className=" absolute top-[300px] right-0 -z-10 lg:w-[50%]">
          <img src="/map.svg" alt="map" className="mr-0 opacity-60" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
