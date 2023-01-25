import React, { useEffect } from 'react';
import { Theme } from './@types/Theme';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Header from './components/Header/Header';
import Tecnologies from "./components/Tecnologies/Tecnologies";
import { Home } from './components/Home/Home';
import * as C from "./GlobalStyle";
import { ThemeContext } from './hooks/ThemeContext';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

function App() {
  const [theme, setTheme] = React.useState(
    localStorage.getItem("tema")! as Theme
    ||
    Theme.Light
    );

   useEffect(() => {
     localStorage.setItem("tema",theme);
   },[])


  
  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
    <C.Container theme={theme == Theme.Light ? 'light' : 'dark'}>
      <Header/>
      <Home/>
      <About/>
      <Experience/>
      <Tecnologies/>
      <Projects/>
      <Contact/>
    </C.Container>
    </ThemeContext.Provider>
  );
}

export default App;
