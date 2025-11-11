import React from "react";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import img from "./../../assets/images/portfolio.jpg";
export default function Home() {
  const whatsappNumber = "201028091251";
   const message = "Thanks for Contacting Me";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;
  return (
    <main>
      {/* Home Section */}
      <section
        id="home"
        className="min-h-screen flex items-center border-b border-gray-200 justify-center px-4 pt-20 dark:bg-[#121928]"
      >
        <section className="max-w-6xl mx-auto w-full">
          <section className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <section className="order-2 md:order-1 space-y-6">
              <section className="space-y-2">
                <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 animate-fade-in-up">
                  Hello, I'm
                </h2>
                <h1 className="text-5xl capitalize md:text-7xl font-bold bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-fade-in-up animation-delay-200">
                  islam kandil
                </h1>
                <p className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 animate-fade-in-up animation-delay-400">
                  Frontend Developer
                </p>
              </section>

              <p className="text-lg  text-gray-600 dark:text-gray-400 animate-fade-in-up animation-delay-600">
                I enjoy turning ideas into beautiful, functional websites and
                I’m always learning to improve my skills and deliver better user
                experiences, create beautiful, functional, and user-friendly.
              </p>

              <section className="flex flex-wrap gap-4 animate-fade-in-up animation-delay-800">
                <a
                  href="#projects"
                  className="text-white px-8 py-4 bg-linear-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl font-medium"
                >
                  View My Work
                </a>
                <a
                  href="#contact"
                  className="px-8 py-4 border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white rounded-xl transition-all duration-300 transform hover:scale-105 font-medium"
                >
                  Contact Me
                </a>
              </section>

              <section className="flex space-x-4 pt-4 animate-fade-in-up animation-delay-1000 mb-5">
                <a
                  href="https://github.com/Islamkandi1"
                  target="_blank"
                  className="p-3 dark:text-white bg-gray-200 dark:bg-gray-800 rounded-xl hover:bg-linear-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white transition-all duration-400 transform hover:scale-110 hover:rotate-6"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/islam-kandil/"
                  target="_blank"
                  className="p-3 dark:text-white bg-gray-200 dark:bg-gray-800 rounded-xl hover:bg-linear-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white transition-all duration-400 transform hover:scale-110 hover:rotate-6"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="mailto:eslamkandil097@email.com"
                  target="_blank"
                  className="p-3 dark:text-white bg-gray-200 dark:bg-gray-800 rounded-xl hover:bg-linear-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white transition-all duration-400 transform hover:scale-110 hover:rotate-6"
                >
                  <Mail size={24} />
                </a>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 dark:text-white bg-gray-200 dark:bg-gray-800 rounded-xl hover:bg-linear-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white transition-all duration-400 transform hover:scale-110 hover:rotate-6"
                >
                  <Phone size={24} />
                </a>
              </section>
            </section>
            {/* Profile Image */}
            <section className="order-1 md:order-2 flex justify-center">
              <section className="relative group">
                <section className="absolute -inset-1 bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full blur-2xl opacity-75 group-hover:opacity-100 animate-pulse"></section>
                <figure className="relative">
                  <img
                    src={img}
                    alt="islam kandil"
                    className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-2xl transform group-hover:scale-105 transition-all duration-500"
                  />
                </figure>
              </section>
            </section>
          </section>
        </section>
      </section>
    </main>
  );
}
