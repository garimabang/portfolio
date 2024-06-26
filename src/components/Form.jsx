import React, { useState } from "react";
import emailjs from "emailjs-com";

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = "service_hvkj7yc"; // Replace with your EmailJS service ID
    const templateID = "template_qyjmg2s"; // Replace with your EmailJS template ID
    const userID = "Eh1znpPgkoEcF6tdW"; // Replace with your EmailJS user ID

    emailjs
      .send(serviceID, templateID, formData, userID)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Form submitted successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("FAILED...", error);
        alert("Failed to submit form. Please try again.");
      });
  };

  return (
    <div className="max-w-sm lg:max-w-lg mx-auto mt-20 p-6 border-2 border-[#1e1e1e] shadow-md">
      <h2 className="text-xl font-bold mb-8 text-center font-roboto-mono">
        Get in touch!
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row md:gap-4">
          <div className="mb-4 w-full">
            <label
              htmlFor="firstName"
              className="block font-roboto text-sm font-medium text-gray-700"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#1e1e1e] focus:border-[#1e1e1e] sm:text-sm"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4 w-full">
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-gray-700"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#1e1e1e] focus:border-[#1e1e1e] sm:text-sm"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#1e1e1e] focus:border-[#1e1e1e] sm:text-sm"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#1e1e1e] focus:border-[#1e1e1e] sm:text-sm"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full font-roboto-mono font-semibold text-lg bg-[#1e1e1e] hover:bg-blue-500 hover:text-white text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F1CF30] focus:ring-opacity-50 transition-transform"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
