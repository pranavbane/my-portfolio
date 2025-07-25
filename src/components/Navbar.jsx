import React, { useState, useEffect, useContext } from "react";
import logo from "../Icons/pb-letter.png";
import { ThemeContext } from "./ThemeContext";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { textColor, toggleTheme, isLight } = useContext(ThemeContext);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    const handleResize = () => {
      if (!mediaQuery.matches) setMenuOpen(false);
    };
    handleResize();
    mediaQuery.addEventListener("change", handleResize);
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  const navItems = [
    {
      label: 'Home', href: '#home', svg: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-house-door" viewBox="0 0 16 16">
        <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4z" />
      </svg>
    },
    {
      label: 'About', href: '#about', svg: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
        <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
      </svg>
    },
    {
      label: 'Skills', href: '#skills', svg: <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="15" height="15" viewBox="0 0 300.000000 300.000000" fill="currentColor" className="hover:text-indigo-600 transition" style={{ filter: !isLight ? 'invert(1)' : 'none' }}>
        <metadata>
          Created by potrace 1.10, written by Peter Selinger 2001-2011
        </metadata>
        <g transform="translate(0.000000,300.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none" className="hover:text-indigo-600">
          <path d="M1275 2975 c-90 -20 -169 -50 -260 -99 -100 -53 -172 -105 -181 -129 -6 -18 20 -57 39 -57 5 0 48 26 96 58 178 119 349 167 566 159 252 -10 442 -89 624 -262 124 -117 205 -251 258 -422 24 -80 27 -103 27 -258 1 -136 -3 -184 -18 -239 -29 -109 -71 -200 -136 -299 -54 -82 -59 -93 -46 -111 7 -12 23 -22 34 -24 49 -7 181 227 229 404 24 87 27 118 27 259 0 181 -15 266 -77 412 -147 347 -529 623 -862 623 -53 -1 -58 -2 -42 -14 18 -14 18 -14 -2 -21 -22 -7 -121 -4 -121 3 0 3 8 11 18 18 15 12 8 13 -48 13 -36 0 -92 -7 -125 -14z" />
          <path d="M1371 2704 c-18 -15 -33 -39 -37 -60 -5 -26 -14 -39 -33 -46 -14 -6 -50 -22 -80 -34 l-53 -24 -25 20 c-16 12 -41 20 -65 20 -35 0 -48 -7 -105 -62 -77 -74 -96 -111 -83 -158 5 -18 17 -41 25 -50 15 -17 15 -21 -3 -57 -11 -21 -25 -54 -31 -74 -10 -31 -18 -38 -48 -44 -20 -3 -49 -19 -65 -35 -27 -28 -28 -31 -28 -135 0 -104 1 -107 29 -136 22 -21 39 -29 66 -29 25 0 37 -5 42 -17 3 -10 17 -44 31 -77 21 -47 23 -61 14 -75 -54 -73 -46 -120 30 -199 88 -89 128 -100 194 -56 35 24 42 25 69 14 16 -7 49 -20 73 -29 36 -13 42 -20 42 -44 0 -43 28 -87 65 -103 44 -18 166 -18 210 0 37 16 65 60 65 103 0 24 6 31 43 44 23 9 56 22 72 29 27 11 34 10 69 -14 66 -44 106 -33 194 56 76 79 84 126 30 199 -9 14 -7 28 14 75 14 33 28 67 31 77 5 12 17 17 42 17 27 0 44 8 66 29 28 29 29 32 29 136 0 104 -1 107 -28 135 -16 16 -45 32 -65 35 -30 6 -38 13 -48 44 -6 20 -20 53 -31 74 -18 37 -18 37 3 66 22 31 28 86 11 117 -6 11 -39 47 -75 82 -58 55 -70 62 -105 62 -24 0 -49 -8 -64 -20 l-25 -19 -79 34 c-72 31 -80 37 -87 70 -5 19 -22 46 -39 60 -27 23 -37 25 -128 25 -91 0 -101 -2 -129 -26z m213 -98 c9 -47 43 -77 120 -104 36 -13 68 -28 72 -33 9 -14 88 -10 110 6 31 23 47 18 98 -34 l49 -49 -22 -35 c-27 -45 -27 -82 4 -151 14 -31 25 -63 25 -71 0 -29 55 -77 96 -84 l39 -6 3 -69 c3 -76 -6 -96 -48 -96 -40 0 -76 -34 -98 -93 -11 -28 -27 -65 -36 -82 -23 -44 -20 -89 9 -123 14 -17 25 -34 25 -38 0 -15 -98 -104 -114 -104 -9 0 -16 4 -16 8 0 5 -15 17 -33 27 -41 22 -66 18 -171 -26 -86 -36 -116 -68 -116 -126 l0 -33 -80 0 -80 0 0 33 c0 58 -30 90 -116 126 -105 44 -130 48 -171 26 -18 -10 -33 -22 -33 -27 0 -4 -7 -8 -16 -8 -16 0 -114 89 -114 104 0 4 12 22 26 39 32 38 29 72 -15 177 -35 84 -68 120 -110 120 -43 0 -52 19 -49 96 l3 69 39 6 c41 7 96 55 96 84 0 8 11 40 25 71 31 69 31 106 4 151 l-22 35 49 49 c51 52 67 57 98 34 22 -16 101 -20 110 -6 4 5 36 20 72 33 77 27 111 57 120 104 l6 34 78 0 78 0 6 -34z" />
          <path d="M1421 2429 c-83 -14 -179 -65 -242 -129 -228 -227 -165 -592 125 -736 79 -39 81 -39 195 -39 113 0 118 1 194 37 239 115 333 390 213 626 -89 173 -292 275 -485 241z m235 -118 c172 -81 255 -273 194 -455 -12 -36 -24 -66 -26 -66 -2 0 -20 17 -39 39 -19 21 -55 49 -79 61 -43 24 -44 24 -28 49 11 15 17 45 16 80 0 72 -31 132 -86 168 -35 24 -52 28 -108 28 -56 0 -73 -4 -108 -28 -55 -36 -86 -96 -86 -168 -1 -35 5 -65 16 -80 16 -25 15 -25 -28 -49 -24 -12 -60 -40 -79 -61 -19 -22 -37 -39 -39 -39 -2 0 -14 30 -26 66 -70 208 53 430 267 484 66 16 168 4 239 -29z m-80 -215 c40 -40 45 -83 15 -132 -57 -93 -201 -47 -201 65 0 51 54 101 110 101 34 0 48 -6 76 -34z m-168 -207 c-7 -3 -25 -9 -39 -13 l-26 -6 16 34 16 34 23 -21 c16 -15 19 -23 10 -28z m235 14 l15 -33 -26 7 c-15 3 -32 6 -39 6 -7 0 -13 3 -13 6 0 6 43 52 45 48 1 -1 9 -17 18 -34z m-151 -71 c31 -2 66 1 77 8 31 16 99 -17 156 -76 l46 -47 -28 -23 c-45 -37 -123 -73 -185 -84 -97 -18 -220 16 -301 84 l-28 23 46 47 c49 51 121 90 145 79 8 -4 40 -9 72 -11z m-293 -63 c30 17 33 14 16 -20 -9 -17 -14 -38 -11 -46 11 -28 -19 -7 -46 33 -34 49 -35 59 -4 39 19 -13 29 -14 45 -6z m602 1 c13 -8 25 -7 39 0 27 14 25 2 -5 -43 -25 -36 -50 -51 -39 -23 3 8 -2 28 -11 45 -17 33 -14 37 16 21z" />
          <path d="M708 2628 c-30 -25 -97 -124 -136 -203 -84 -169 -119 -334 -109 -524 11 -216 91 -426 224 -589 126 -155 188 -241 228 -317 36 -68 38 -77 23 -86 -54 -31 -75 -136 -38 -196 20 -33 20 -33 0 -65 -26 -44 -26 -113 1 -157 19 -32 19 -34 2 -53 -26 -29 -25 -133 2 -170 26 -34 66 -58 98 -58 22 0 26 -6 31 -44 13 -83 85 -156 154 -156 34 0 35 0 17 20 -18 20 -17 20 295 20 312 0 313 0 295 -20 -18 -20 -17 -20 17 -20 69 0 141 73 154 156 5 38 9 44 31 44 32 0 72 24 98 58 27 37 28 141 2 170 -17 19 -17 21 2 53 27 44 27 113 1 157 -20 32 -20 32 0 65 37 60 16 166 -38 196 -15 8 -13 16 17 73 18 35 51 89 72 122 22 32 39 66 39 76 0 25 -26 43 -52 37 -25 -7 -111 -135 -150 -224 l-23 -53 -462 0 -463 0 -36 73 c-49 96 -102 174 -191 279 -95 113 -156 208 -193 301 -57 142 -65 188 -65 367 0 142 3 176 23 245 28 98 98 243 149 310 52 68 57 81 33 105 -23 23 -31 24 -52 8z m307 -1708 c20 -22 21 -21 -18 -38 -39 -17 -39 -16 -23 17 9 16 12 31 9 35 -4 3 -2 6 4 6 5 0 18 -9 28 -20z m1020 -48 c-2 -2 -53 17 -64 25 -2 2 4 12 14 23 l19 21 17 -33 c9 -18 16 -34 14 -36z m-16 -48 c27 -34 26 -50 -4 -79 l-24 -25 -491 0 -491 0 -24 25 c-30 29 -31 45 -4 79 l20 26 499 0 499 0 20 -26z m-1044 -120 c31 -20 31 -28 1 -47 -24 -16 -24 -16 -28 23 -2 22 -2 40 0 40 1 0 14 -7 27 -16z m1080 -28 l0 -43 -27 20 c-34 25 -34 30 -5 50 31 22 32 22 32 -27z m-60 -46 c46 -17 53 -85 11 -112 -6 -4 -168 -8 -360 -8 -311 0 -351 -2 -368 -17 -22 -20 -23 -37 -2 -57 13 -14 61 -16 369 -16 l354 0 20 -26 c27 -34 26 -50 -4 -79 l-24 -25 -491 0 -491 0 -24 25 c-30 29 -31 45 -4 79 18 23 28 26 79 26 80 0 111 30 73 72 -12 13 -31 18 -72 18 -62 0 -73 5 -90 37 -15 29 1 70 31 83 32 12 960 13 993 0z m-1003 -178 c-9 -7 -24 -18 -32 -25 -13 -11 -15 -6 -15 34 l0 46 32 -21 c30 -19 31 -22 15 -34z m1063 14 l0 -44 -27 16 c-35 20 -35 25 0 51 15 11 27 20 27 21 0 0 0 -20 0 -44z m-945 -223 c-1 -12 -26 -43 -35 -43 -9 0 -34 31 -35 43 0 4 16 7 35 7 19 0 35 -3 35 -7z m850 -1 c0 -5 -9 -17 -20 -27 -20 -18 -21 -18 -35 1 -22 29 -18 34 20 34 19 0 35 -4 35 -8z m-80 -55 c0 -27 -27 -75 -49 -87 -12 -6 -138 -10 -336 -10 l-317 0 -29 31 c-17 18 -29 42 -29 58 l0 26 380 0 c359 0 380 -1 380 -18z" />
        </g>
      </svg>
    },
    {
      label: 'Experience', href: '#experience', svg: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-folder-plus" viewBox="0 0 16 16">
        <path d="m.5 3 .04.87a2 2 0 0 0-.342 1.311l.637 7A2 2 0 0 0 2.826 14H9v-1H2.826a1 1 0 0 1-.995-.91l-.637-7A1 1 0 0 1 2.19 4h11.62a1 1 0 0 1 .996 1.09L14.54 8h1.005l.256-2.819A2 2 0 0 0 13.81 3H9.828a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 6.172 1H2.5a2 2 0 0 0-2 2m5.672-1a1 1 0 0 1 .707.293L7.586 3H2.19q-.362.002-.683.12L1.5 2.98a1 1 0 0 1 1-.98z" />
        <path d="M13.5 9a.5.5 0 0 1 .5.5V11h1.5a.5.5 0 1 1 0 1H14v1.5a.5.5 0 1 1-1 0V12h-1.5a.5.5 0 0 1 0-1H13V9.5a.5.5 0 0 1 .5-.5" />
      </svg>
    },
    {
      label: 'Contact', href: '#contact', svg: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-lines-fill" viewBox="0 0 16 16">
        <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z" />
      </svg>
    },
  ];

  return (
    <nav className="py-6 flex justify-between items-center bg-white dark:bg-gray-800 border dark:border-gray-700 p-4 rounded-lg shadow-md relative">
      <img
        src={logo}
        alt="Logo"
        className="w-[100px] md:w-[150px] h-[30px] md:h-[50px]"
        style={{ filter: !isLight ? "invert(1)" : "none" }}
      />

      {/* Desktop Menu */}
      <div className="hidden md:flex md:space-x-10 items-center border p-4 rounded-lg shadow bg-white dark:bg-gray-800 border dark:border-gray-700">
        {navItems.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            className={`${textColor} hover:text-indigo-600 transition`}
          >
            {label}
          </a>
        ))}
        <button
          onClick={toggleTheme}
          className="flex items-center space-x-2 text-gray-600 hover:text-indigo-600 border border-gray-500 rounded-md px-2 py-1 transition duration-150 shadow"
        >
          {isLight ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-moon" viewBox="0 0 16 16">
              <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278"/>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-brightness-high text-white" viewBox="0 0 16 16">
              <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0"/>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center bg-white dark:bg-gray-800 border dark:border-gray-700 p-3 rounded-lg shadow-md">
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-600">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className={`bi bi-list ${textColor}`} viewBox="0 0 16 16">
            <path d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className={`md:hidden absolute top-20 right-4 w-64 bg-white dark:bg-gray-800 border dark:border-gray-700 p-4 rounded-lg shadow-lg z-10 space-y-4`}>
          {navItems.map(({ label, href, svg }) => (
            <a key={label} href={href} className={`flex ${textColor} hover:text-indigo-600 transition`}><span className="mx-4 py-1">{svg}</span>{label}</a>
          ))}

          <div className="relative">
            <button onClick={toggleTheme}
              className="flex items-center space-x-2 text-gray-600 hover:text-indigo-600 border border-500 rounded-md px-2 ms-3 py-1 transition duration-150 shadow"
            >
              {isLight ? <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-moon" viewBox="0 0 16 16">
                <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278M4.858 1.311A7.27 7.27 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.32 7.32 0 0 0 5.205-2.162q-.506.063-1.029.063c-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286" />
              </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-brightness-high text-white" viewBox="0 0 16 16">
                <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708" />
              </svg>}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
