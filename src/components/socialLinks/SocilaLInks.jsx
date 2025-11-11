import React from "react";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const SocilaLInks = () => {
  const whatsappNumber = "201028091251";
  const message = "Thanks for Contacting Me";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;
  return (
    <>
      {/* Social Links */}
      <div className="flex justify-center space-x-6">
        <a
          href="https://github.com/Islamkandi1"
          target="_blank"
          className="p-4 dark:text-white bg-gray-200 dark:bg-gray-800 rounded-xl hover:bg-linear-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white transition-all duration-400 transform hover:scale-110 hover:rotate-6"
        >
          <Github size={28} />
        </a>
        <a
          href="https://www.linkedin.com/in/islam-kandil/"
          target="_blank"
          className="p-4 dark:text-white bg-gray-200 dark:bg-gray-800 rounded-xl hover:bg-linear-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white transition-all duration-400 transform hover:scale-110 hover:rotate-6"
        >
          <Linkedin size={28} />
        </a>
        <a
          href="mailto:eslamkandil097@email.com"
          target="_blank"
          className="p-4 dark:text-white bg-gray-200 dark:bg-gray-800 rounded-xl hover:bg-linear-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white transition-all duration-400 transform hover:scale-110 hover:rotate-6"
        >
          <Mail size={28} />
        </a>
        <a
            href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 dark:text-white bg-gray-200 dark:bg-gray-800 rounded-xl hover:bg-linear-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white transition-all duration-400 transform hover:scale-110 hover:rotate-6"
        >
            <Phone size={24} />
        </a>
      </div>
    </>
  );
};

export default SocilaLInks;
