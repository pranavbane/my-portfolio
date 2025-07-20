import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import htmllogo from "../Icons/html5-logo.png"
import csslogo from "../Icons/css-logo.png"
import jslogo from "../Icons/js-logo.png"
import reactlogo from "../Icons/react-logo.svg"
import gitlogo from "../Icons/git-logo.png"
import gitHublogo from "../Icons/github-logo.png"
import Tailwindlogo from "../Icons/tailwind-logo.png"
const skills = [
  { icon: htmllogo, title: 'HTML', desc: 'Standard markup language for Web pages' },
  { icon: csslogo, title: 'CSS', desc: 'Responsive design, animations' },
  { icon: jslogo, title: 'JavaScript', desc: 'ES6+, TypeScript, modern syntax' },
  { icon: reactlogo, title: 'React', desc: 'Advanced experience building complex applications' },
  { icon: Tailwindlogo, title: 'Tailwind', desc: 'Utility-first CSS framework' },
  { icon: gitlogo, title: 'Git', desc: 'Version control system for tracking changes' },
  { icon: gitHublogo, title: 'GitHub', desc: 'Web-based version control and collaboration platform' },
  // { icon: 'fab fa-node', color: 'text-green-500', title: 'Node.js', desc: 'API development, server-side logic' },
  // { icon: 'fas fa-database', color: 'text-blue-400', title: 'MongoDB', desc: 'Database design and queries' },
  // { icon: 'fas fa-fire', color: 'text-orange-500', title: 'Firebase', desc: 'Authentication, Realtime DB' },
  // { icon: 'fab fa-docker', color: 'text-blue-500', title: 'Docker', desc: 'Containerization and deployment' },
  // { icon: 'fab fa-aws', color: 'text-orange-600', title: 'AWS', desc: 'Cloud infrastructure management' },
];

const Skills = () => {
  const { textColor, mode } = useContext(ThemeContext);
  return (
    <section id="skills" className={`py-6 flex justify-between items-center bg-white ${mode}:bg-gray-800 border ${mode}:border-gray-700 p-4 rounded-lg shadow-md relative`}>
      <div className="max-w-4xl mx-auto">
        <h2 className={`text-3xl font-bold mb-12 text-center ${textColor}`}>Skills & Expertise</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 p-4">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card bg-white dark:bg-gray-700 p-6 rounded-xl shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg flex md:block border">
              <div className="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center mb-4">
                {/* <i className={`${skill.icon} ${skill.color} text-2xl`}></i> */}
                <img src={skill.icon} alt={skill.title} style={{ maxWidth: skill.title == "HTML" || skill.title == "CSS" ? "87%" : "100%" }} />
              </div>
              <div className="ms-3 md:ms-0">
                <h3 className="font-semibold mb-2 dark:text-white">{skill.title}</h3>
                <p className="text-gray-600 dark:text-white text-sm">{skill.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
