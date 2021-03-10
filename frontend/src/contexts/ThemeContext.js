import {createContext} from 'react';

export const themes = {
    light: {
        background: '#ffffff',
        textcolor: '#333'
    },
    dark: {
        background: '#222222', 
        textcolor: "#ffffff"
    }
}

export const ThemeContext = createContext(themes.light);