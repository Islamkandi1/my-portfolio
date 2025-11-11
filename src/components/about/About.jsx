import React from "react";

const About = () => {
  const skills = [
    "Html5",
    "Css3",
    "Bootstrap",
    "Tailwind",
    "Scss",
    "Jquery",
    "Javascript",
    "TypeScript",
    "React",
    "Next.js",
    "Git",
    "Ajax",
  ];
  return (
    <>
      {/* About Section */}
      <main
        id="about"
        className="min-h-screen border-b border-gray-200 flex items-center justify-center px-6 py-20 dark:bg-[#121928]"
      >
        <section
          className={`max-w-4xl transition-all duration-1000 delay-200 
           opacity-100 translate-x-0 `}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-center">
            About Me
          </h2>
          <section
            className={`   bg-white dark:bg-[#1F2937]   rounded-lg p-8 dark:border shadow-lg`}
          >
            <p
              className={` text-gray-900 dark:text-white text-gray-600' text-lg mb-6 capitalize`}
            >
              I'm a skilled frontend developer specializing in React.js,
              crafting dynamic,responsive web applications. With expertise in
              state management, modern styling, and seamless API integration,I
              create efficient and user friendly interfaces, enhancing user
              experiences and ensuring robust performance, with 1+ years of
              experience building web applications. I love turning complex
              problems into simple, beautiful solutions.
            </p>
            <p className={`  text-gray-300 dark:text-gray-300 text-lg mb-8`}>
              When I'm not coding, you can find me exploring new technologies,
              contributing to open source, or sharing my knowledge through
              technical writing.
            </p>
            <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {skills.map((skill) => (
                <section
                  key={skill}
                  className={`'bg-gray-900  hover:border-blue-500 dark:bg-[#111827] dark:text-white   border-gray-300 bg-[#F9FAFB] px-4 py-3 rounded-lg text-center border transition-all transform hover:scale-105`}
                >
                  {skill}
                </section>
              ))}
            </section>
          </section>
        </section>
      </main>
    </>
  );
};

export default About;
