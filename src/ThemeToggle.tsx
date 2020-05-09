import React, { useState } from 'react';

interface Styles {
    primary: string;
    secondary: string;
    text: string;
    textHover: string;
}

function changeTheme(dark: boolean) {
    const documentStyles = window.getComputedStyle(document.documentElement);
    const darkStyles: Styles = {
        primary: documentStyles.getPropertyValue('--primary-dark-background'),
        secondary: documentStyles.getPropertyValue('--secondary-dark-background'),
        text: documentStyles.getPropertyValue('--secondary-light-background'),
        textHover: documentStyles.getPropertyValue('--primary-light-background'),
    };

    const lightStyles: Styles = {
        primary: documentStyles.getPropertyValue('--primary-light-background'),
        secondary: documentStyles.getPropertyValue('--secondary-light-background'),
        text: documentStyles.getPropertyValue('--secondary-dark-background'),
        textHover: documentStyles.getPropertyValue('--primary-dark-background'),
    };
    const theme: Styles = dark ? darkStyles : lightStyles;
    document.documentElement.style.setProperty('--primary-background', theme.primary);
    document.documentElement.style.setProperty('--secondary-background', theme.secondary);
    document.documentElement.style.setProperty('--text-color', theme.text);
    document.documentElement.style.setProperty('--text-color-hover', theme.textHover);
}
const ThemeToggle = () => {
    const [darkMode, setDarkMode] = useState(false);
    function toggleTheme() {
        changeTheme(!darkMode);
        setDarkMode((prev) => !prev);
    }
    return (
        <div
            className="w-12 rounded-full h-6 bg-contrast cursor-pointer flex items-center px-1/2 relative select-none"
            onClick={toggleTheme}
        >
            <div
                className={`${
                    darkMode ? 'translate-x-6' : 'translate-x-0'
                } h-5 w-5 bg-secondary rounded-full transform transition-transform duration-200`}
            />

            <span
                className={`text-center text-sm flex-shrink ml-auto absolute top-50 -translate-y-1/2 ${
                    darkMode ? 'ml-1/4 left-0' : 'right-0 mr-1/4'
                }`}
                role="img"
                aria-label="theme emoji"
            >
                {darkMode ? '🌜' : '🌞'}
            </span>
        </div>
    );
};

export default ThemeToggle;
