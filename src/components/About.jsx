import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";


const About = () => {
  const { textColor, mode } = useContext(ThemeContext);

  return (
    <section id="about" className={`py-20 text-center bg-white ${mode}:bg-gray-800 border ${mode}:border-gray-700`}>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className={`text-3xl font-bold mb-6 ${textColor}`}>About Me</h2>
        <p className={`${textColor} mb-8`}>
          I'm a passionate developer with expertise in JavaScript, React, Node.js, and modern web technologies.
          I specialize in building performant, accessible, and responsive web applications with excellent user experiences.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-10">
          <div className="flex justify-center gap-4">
            <a href="#contact" className="px-8 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition">Get in Touch</a>
          </div>
          {/* <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={`bi bi-envelope mx-3 ${textColor}`} viewBox="0 0 16 16">
              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
            </svg>
            <span className={`${textColor}`}><a href="mailto:pranavbane987@gmail.com">pranavbane987@gmail.com</a></span>
          </div>
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={`bi bi-github mx-3 ${textColor}`} viewBox="0 0 16 16">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
            </svg>
            <span className={`${textColor}`}>github.com/johndoe</span>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default About;
