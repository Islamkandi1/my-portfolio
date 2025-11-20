import React, { useRef, useState } from "react";
import SocilaLInks from "../socialLinks/SocilaLInks";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { ScaleLoader } from "react-spinners";
const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  // send email=======================================
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    if (
      formState.name != "" &&
      formState.email != "" &&
      formState.phone != "" &&
      formState.message != ""
    ) {
      setLoading(true);
      emailjs
        .sendForm("service_ej0d47w", "template_7a2lb78", form.current, {
          publicKey: "ovA6iIl5A66aLwQHj",
        })
        .then(
          () => {
            setFormState({
              name: "",
              email: "",
              phone: "",
              message: "",
            });
            toast.success("message send Successfully!");
          },
          (error) => {
            toast.error(error | "some thing went wrong");
          }
        )
        .then(() => {
          setLoading(false);
        });
    } else {
      toast.error("inputs are required");
    }
  };
  // change input=================================
  function change() {
    const { value, name } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  }
  return (
    <>
      {/* Contact Section */}
      <main id="contact" className="min-h-screen  px-4 py-20 dark:bg-[#121928]">
        <Toaster />
        <section className="flex items-center justify-center mb-5">
          <section className="md:max-w-[70%] mx-auto w-full">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-center bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-12 text-lg">
              Have a project in mind? Let's work together to create something
              amazing!
            </p>

            <section className="bg-white dark:bg-gray-800 rounded-3xl p-8 md:p-12 shadow-2xl">
              <form className="space-y-6" ref={form} onSubmit={sendEmail}>
                <section>
                  <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                    Your Name
                  </label>
                  <input
                    onChange={change}
                    type="text"
                    name="name"
                    value={formState.name}
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
                    name="email"
                    onChange={change}
                    value={formState.email}
                    className="w-full px-6 py-4 rounded-xl bg-gray-50 dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 focus:border-blue-500 dark:focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 outline-none transition-all text-gray-900 dark:text-white"
                    placeholder="john@example.com"
                  />
                </section>
                <section>
                  <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    onChange={change}
                    name="phone"
                    value={formState.phone}
                    className="w-full px-6 py-4 rounded-xl bg-gray-50 dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 focus:border-blue-500 dark:focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 outline-none transition-all text-gray-900 dark:text-white"
                    placeholder="01000000000"
                  />
                </section>
                <section>
                  <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                    Your Message
                  </label>
                  <textarea
                    rows="5"
                    onChange={change}
                    name="message"
                    value={formState.message}
                    className="w-full px-6 py-4 rounded-xl bg-gray-50 dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 focus:border-blue-500 dark:focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 outline-none transition-all resize-none text-gray-900 dark:text-white"
                    placeholder="Tell me about your project..."
                  />
                </section>

                <button
                  type="submit"
                  className="w-full cursor-pointer text-white py-4 bg-linear-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl font-medium text-lg"
                >
                  {loading ? (
                    <ScaleLoader
                      height={22}
                      radius={2}
                      width={3}
                      color="#fff"
                    />
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            </section>
          </section>
        </section>
        <SocilaLInks />
      </main>
    </>
  );
};

export default Contact;
