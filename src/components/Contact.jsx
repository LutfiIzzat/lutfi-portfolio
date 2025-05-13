import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-screen max-w-full overflow-y-hidden bg-[#130918] text-[#ECE2D0] py-20 px-4 md:px-20 lg:px-40"
    >
      {/* Line Animation */}
      <div className="w-full flex justify-center mb-10">
        <div className="w-1/4 h-[2px] bg-[#ECE2D0] animate-line"></div>
      </div>

      {/* Contact Section Title */}
      <div className="w-full text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold flex items-center justify-center">
          <FaPhoneAlt size={28} className="mr-3" />
          Contacts
        </h1>
        <p className="text-md md:text-lg mt-4">Feel free to reach out!</p>
      </div>

      {/* Contact Information */}
      <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-8">
        {/* Email */}
        <div className="flex items-center space-x-3">
          <FaEnvelope size={24} />
          <a
            href="mailto:faizeet.izzat03@gmail.com"
            className="text-md md:text-lg text-[#ECE2D0] hover:text-[#d5c2b2]"
          >
            faizeet.izzat03@gmail.com
          </a>
        </div>

        {/* GitHub */}
        <div className="flex items-center space-x-3">
          <FaGithub size={24} />
          <a
            href="https://github.com/LutfiIzzat"
            target="_blank"
            rel="noopener noreferrer"
            className="text-md md:text-lg text-[#ECE2D0] hover:text-[#d5c2b2]"
          >
            GitHub
          </a>
        </div>

        {/* LinkedIn */}
        <div className="flex items-center space-x-3">
          <FaLinkedin size={24} />
          <a
            href="https://www.linkedin.com/in/lutfiizzat/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-md md:text-lg text-[#ECE2D0] hover:text-[#d5c2b2]"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
