import React, { useEffect, useState, useContext } from "react";
import file from '../documents/Graph.pdf'
import { ThemeContext } from './ThemeContext';
const Hero = () => {
  const [typed, setTyped] = useState("");
  const [isTypingDone, setIsTypingDone] = useState(false);
  const { textColor } = useContext(ThemeContext);
  const text = " Hi, I'm Pranav Bane";

  useEffect(() => {
    let i = 0;
    const delay = setTimeout(() => {
      const interval = setInterval(() => {
        i++;
        if (i < text.length) {
          setTyped(prev => prev + text[i]);
        } else {
          clearInterval(interval);
          setIsTypingDone(true);
        }
      }, 100);
    }, 1000);

    return () => clearTimeout(delay);
  }, []);

  return (
    <header className="py-20 text-center bg-white dark:bg-gray-800 border dark:border-gray-700" id="home">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
          <span className="gradient-text">{typed}</span>
          {!isTypingDone && <span className="cursor">|</span>}
        </h1>
        <p className={`text-base sm:text-lg md:text-xl ${textColor} mb-8`}>
          {/* Proficient front-end developer effective at creating robust websites that meet customer objective. */}
          Front-End Developer with 2 years of experience building modern web applications.
        </p>
        {/* <div className="flex justify-center gap-4">
          <a href="#contact" className="px-8 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition">Get in Touch</a>
        </div> */}
        <div className="flex justify-center gap-4">
          <div className="flex items-center">
            <a href={file} className="px-8 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition" download="Resume">Download CV +</a>
          </div>
          <div className="flex items-center">

            <a href="mailto:pranavbane987@gmail.com" title="pranavbane987@gmail.com"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={`bi bi-envelope mx-3 ${textColor}`} viewBox="0 0 16 16">
              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
            </svg></a>
          </div>
          <div className="flex items-center">
            <a href="mailto:pranavbane987@gmail.com" title="Github">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={`bi bi-github mx-3 ${textColor}`} viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="mt-16">
        <img
          src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c7ec58e0-74b4-49b2-8b5b-ff1ab35f14af.png"
          alt="Developer working on laptop"
          className="mx-auto rounded-xl shadow-xl"
        />
      </div>
    </header>
  );
};

export default Hero;
