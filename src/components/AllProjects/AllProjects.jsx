import React from "react";
import NavBar from "../navbar/NavBar";
import { ExternalLink } from "lucide-react";
import projects from "../projectArray";
const AllProjects = () => {

  
  return (
    <>
      <NavBar All={true} />
      <section className="grid sm:grid-cols-2 lg:grid-cols-3  gap-8 pt-24 pb-10 px-5 md:px-7">
        {projects.map((project, index) => (
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
    </>
  );
};

export default AllProjects;
