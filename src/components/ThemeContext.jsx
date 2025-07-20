import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [isLight, setIsLight] = useState(() => {
        return localStorage.getItem('lightMode') === 'true';
    });

    const toggleTheme = () => {
        setIsLight(prev => {
            const newMode = !prev;
            localStorage.setItem("lightMode", newMode);
            if (newMode) {
                document.documentElement.classList.add("light");
                document.documentElement.classList.remove("dark");
            } else {
                document.documentElement.classList.remove("light");
                document.documentElement.classList.add("dark");
            }
            return newMode;
        });
    };

    const textColor = isLight ? 'text-gray-600' : 'text-white';
    const mode = isLight ? 'light' : 'dark';

    useEffect(() => {
        if (isLight) {
            document.documentElement.classList.remove("dark");
            document.documentElement.classList.add("light");
        } else {
            document.documentElement.classList.remove("light");
            document.documentElement.classList.add("dark");
        }

    }, [isLight]);

    return (
        <ThemeContext.Provider value={{ isLight, toggleTheme, textColor, mode }}>
            {children}
        </ThemeContext.Provider>
    );
};
