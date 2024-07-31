import React, { useState } from "react";
import Section from "./Section";
import Lottie from "lottie-react";
import animationData from "../assets/contactAnimation.json";



const ContactsMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form Data:', formData);
  };
  
  return (
    <Section crosses id="contact">
      <h1 className="justify-center align-middle text-center text-5xl">Contact Me!</h1>
      <div className=" mt-[3rem] mx-[20rem] flex align-middle justify-center text-2xl text-center max-sm:mx-1">
        <h1>
        I’d love to hear from you. Whether you have a question, feedback, or just want to say hi, feel free to drop me a message!
        </h1>
      </div>
      <div className=" h-auto w-full py-[2rem] px-[15rem] flex flex-row max-sm:flex-col max-sm:py-1 max-sm:px-2">
        <div className="h-[100%] w-[100%] flex max-sm:hidden">
          <Lottie animationData={animationData}></Lottie>
        </div>
        <div className=" h-[100%] w-[100%] p-0 max-sm:mt-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-200"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 bg-n-7 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-200"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 bg-n-7 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-200"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="mt-1 bg-n-7 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
            <div className="max-h-[100%] max-w-[100%] overflow-hidden rounded-md ">
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white py-2 px-4 rounded-md shadow-sm focus:outline-none focus:ring-2 hover:scale-110  transition-transform duration-500 ease-in-out focus:ring-offset-2 focus:ring-indigo-500"
              >
              Send Message
            </button>
              </div>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default ContactsMe;
