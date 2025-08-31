import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="w-full bg-[#0D2226] text-white py-10 px-4 flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-6 tracking-wide text-center">Contact me</h2>
      <p className="mb-8 text-center text-lg text-gray-200 max-w-xl">
        I would love to hear from you! Whether you have a question, want to discuss a project, or just want to say hello, feel free to reach out to me through any of the channels below.
      </p>
      <div className="w-full max-w-md flex flex-col gap-6 items-center">
        <a
          href="tel:+91 9986642422"
          className="group flex items-center gap-3 bg-[#1b2a38] rounded-full p-4 hover:bg-[#223447] transition text-white w-full justify-center"
        >
          <FaPhoneAlt className="text-[#4fd1c5] text-2xl group-hover:animate-bounce" />
          <span className="font-medium text-center">+91 9986642422</span>
        </a>
        <a
          href='mailto:prajvaljk1234@gmail.com'
          className="group flex items-center gap-3 bg-[#1b2a38] rounded-full p-4 hover:bg-[#223447] transition text-white w-full justify-center"
        >
          <FaEnvelope className="text-[#4fd1c5] text-2xl group-hover:animate-bounce" />
          <span className="font-medium text-center">prajvaljk1234@gmail.com</span>
        </a>
        <a
          href="https://www.linkedin.com/in/prajval-j-6a52a637b/"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 bg-[#1b2a38] rounded-full p-4 hover:bg-[#0077b5] transition text-white w-full justify-center"
        >
          <FaLinkedin className="text-[#4fd1c5] text-2xl group-hover:animate-bounce" />
          <span className="font-medium text-center">LinkedIn Profile</span>
        </a>
        <a
          href="https://github.com/prajval226"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 bg-[#1b2a38] rounded-full p-4 hover:bg-[#1a73e8] transition text-white w-full justify-center"
        >
          <FaGithub className="text-[#4fd1c5] text-2xl group-hover:animate-bounce" />
          <span className="font-medium text-center">Github Profile</span>
        </a>
      </div>
    </section>
  );
}
export default Contact;