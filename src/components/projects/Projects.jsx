import { ExternalLink } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import projects from "../projectArray";
const Projects = () => {
  // my project===============================

  return (
    <>
      {/* Projects Section */}
      <main
        id="projects"
        className="min-h-screen border-b border-gray-200 dark:bg-[#121928] flex items-center justify-center px-4 py-20 pb-10"
      >
        <section className="max-w-7xl mx-auto w-full">
          <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            My Projects
          </h2>
          <section className="grid sm:grid-cols-2 lg:grid-cols-3  gap-8">
            {projects.slice(0,6).map((project, index) => (
              <section
                key={index}
                 target="_blank"
                className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3"
              >
                <section className="relative overflow-hidden h-56">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-125 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-4">
                    <a
                      href={project.link}
                      target="_blank"
                      className="px-6 py-2 bg-white text-gray-900 rounded-full font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 flex items-center space-x-2"
                    >
                      <span>View Project</span>
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </section>

                <section className="p-6">
                  <h3 className="text-2xl dark:text-white font-bold mb-3 group-hover:text-blue-500 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <section className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-blue-500/10 text-blue-500 dark:bg-blue-500/20 rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </section>
                </section>
              </section>
            ))}
          </section>
          <section className="flex justify-center">
          <Link to="/AllProjects" className="text-white   px-8 py-4 cursor-pointer mt-7  capitalize bg-linear-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl font-medium">see more</Link>
          </section>
        </section>
      </main>
    </>
  );
};

export default Projects;
