import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const experiences = [
  {
    title: 'Junior Frontend Developer',
    company: 'Scan Info Tech.',
    date: '2023 - Present',
    desc: 'Built responsive websites using JavaScript and jQuery. Collaborated with designers to implement pixel-perfect UIs.',
    tags: ['Html', 'CSS', 'Bootstrap', 'Metronics', 'JavaScript', 'Jquery'],
  },
  // {
  //   title: 'Full Stack Developer',
  //   company: 'Digital Solutions LLC',
  //   date: '2019 - 2021',
  //   desc: 'Developed and maintained web applications using MERN stack. Implemented CI/CD pipelines reducing deployment time by 30%.',
  //   tags: ['Node.js', 'MongoDB', 'Express'],
  // },
  // {
  //   title: 'Junior Web Developer',
  //   company: 'StartUp Ventures',
  //   date: '2017 - 2019',
  //       desc: 'Led the frontend team in migrating legacy systems to modern React architecture. Improved application performance by 40%.',
  //   tags: ['React', 'Redux', 'Webpack'],
  // }
];

const Experience = () => {
  const { textColor, mode } = useContext(ThemeContext);
  return (
    <section id="experience" className={`py-6 flex justify-between items-center bg-white ${mode}:bg-gray-800 border ${mode}:border-gray-700 p-4 rounded-lg shadow-md relative`}>
      <div className="max-w-4xl mx-auto p-4">
        <h2 className={`text-3xl font-bold mb-12 text-center ${textColor}`}>Work Experience</h2>
        <div className="relative pl-8 sm:pl-12">
          <div className="absolute left-4 sm:left-7 top-0 bottom-0 w-0.5 bg-gray-200"></div>
          {experiences.map((exp, i) => (
            <div key={i} className="relative mb-10 timeline-item">
              <div className="bg-white  dark:bg-gray-700 p-6 rounded-xl shadow-sm transition-colors duration-300 border">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-xl font-semibold dark:text-white">{exp.title}</h3>
                  <span className="text-indigo-600 font-medium dark:bg-gray-500 p-2 rounded-full dark:text-white w-32 text-center border">{exp.date}</span>
                </div>
                <p className="text-gray-600 mb-2 dark:text-white">{exp.company}</p>
                <p className="text-gray-600 mb-4 dark:text-white">{exp.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag, j) => (
                    <span key={j} className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-sm">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
