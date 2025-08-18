import React, { useState } from "react";

const ContactSection2 = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const whatsappMessage = `Hello, I'm ${formData.firstName} ${formData.lastName}. My email is ${formData.email} and my phone number is ${formData.phone}. ${formData.message}`;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=+919958878741&text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  const isFormValid = () => {
    return Object.values(formData).every(value => value !== "");
  };

  return (
    <section className="flex flex-col lg:flex-row w-full min-h-[70vh]">
      {/* Left Section */}
      <div className="bg-lime-500 w-full lg:w-1/2 p-8 flex flex-col justify-center text-white">
      <div>
          <p className="text-sm font-medium mb-2 flex items-center font-serif">
            <span className="mr-2">•</span> GET IN TOUCH
          </p>
          <h2 className="text-4xl font-bold mb-4 font-serif">Send Message Us</h2>
          <p className="text-base mb-8">
            Just send us your questions or concerns to starting a new project.
          </p>

          {/* Image + Phone */}
          <div className="flex items-center mb-6">
            {/* <img
              src="https://via.placeholder.com/60"
              alt="profile"
              className="w-14 h-14 rounded-full object-cover mr-4"
            /> */}
            <div>
              <p className="text-xs">HAVE A QUESTION?</p>
              <a href="tel:+919958878741" className="text-xl font-bold">+919958878741</a>
            </div>
          </div>

          {/* Working Hours */}
          <div className="mb-8 text-sm">
            <p>Monday – Friday 9.00 – 6.00</p>
            <p>Sunday & Public Holidays (Closed)</p>
          </div>

          {/* Request Callback */}
          {/* <button className="flex items-center gap-2 text-black font-medium hover:underline">
            REQUEST A CALL BACK <span>→</span>
          </button> */}
        </div>
      </div>

      {/* Right Section */}
      <div className="bg-gray-100 w-full lg:w-1/2 flex items-center justify-center p-8">
        <form onSubmit={handleSubmit} className="bg-white w-full max-w-lg p-8 rounded-2xl shadow-md">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleInputChange}
              className="border border-gray-300 p-3 rounded-lg w-full"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleInputChange}
              className="border border-gray-300 p-3 rounded-lg w-full"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleInputChange}
              className="border border-gray-300 p-3 rounded-lg w-full"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="border border-gray-300 p-3 rounded-lg w-full"
            />
          </div>
          <textarea
            name="message"
            placeholder="Message Write Here"
            rows="5"
            value={formData.message}
            onChange={handleInputChange}
            className="border border-gray-300 p-3 rounded-lg w-full mb-6"
          ></textarea>
          <button
            type="submit"
            disabled={!isFormValid()}
            className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 flex items-center gap-2"
          >
            SEND MESSAGE →
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection2;


