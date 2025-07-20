import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const Footer = () => {
  const { mode } = useContext(ThemeContext);

  return (
    <footer className={`py-3 bg-white ${mode}:bg-gray-800 border ${mode}:border-gray-700 p-4 rounded-lg shadow-md relative text-center`}>
      <p className={`text-gray-600 ${mode}:text-gray-400`}>&copy; {new Date().getFullYear()} Pranav Bane. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
