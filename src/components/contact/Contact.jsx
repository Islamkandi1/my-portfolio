import React from "react";
import SocilaLInks from "../socialLinks/SocilaLInks";

const Contact = () => {
  return (
    <>
      {/* Contact Section */}
      <main
        id="contact"
        className="min-h-screen  px-4 py-20 dark:bg-[#121928]"
      >
        <section className="flex items-center justify-center mb-5">
        <section className="max-w-2xl mx-auto w-full">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-center bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 text-lg">
            Have a project in mind? Let's work together to create something
            amazing!
          </p>

          <section className="bg-white dark:bg-gray-800 rounded-3xl p-8 md:p-12 shadow-2xl">
            <section className="space-y-6">
              <section>
                <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                  Your Name
                </label>
                <input
                  type="text"
                  className="w-full px-6 py-4 rounded-xl bg-gray-50 dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 focus:border-blue-500 dark:focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 outline-none transition-all text-gray-900 dark:text-white"
                  placeholder="John Doe"
                />
              </section>

              <section>
                <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-6 py-4 rounded-xl bg-gray-50 dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 focus:border-blue-500 dark:focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 outline-none transition-all text-gray-900 dark:text-white"
                  placeholder="john@example.com"
                />
              </section>

              <section>
                <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                  Your Message
                </label>
                <textarea
                  rows="5"
                  className="w-full px-6 py-4 rounded-xl bg-gray-50 dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 focus:border-blue-500 dark:focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 outline-none transition-all resize-none text-gray-900 dark:text-white"
                  placeholder="Tell me about your project..."
                />
              </section>

              <button className="w-full text-white py-4 bg-linear-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl font-medium text-lg">
                Send Message
              </button>
            </section>
          </section>
        </section>
        </section>
        <SocilaLInks />
      </main>
    </>
  );
};

export default Contact;
