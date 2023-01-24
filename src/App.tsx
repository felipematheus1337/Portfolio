import React from 'react';
import { Theme } from './@types/Theme';
import Header from './components/Header/Header';
import * as C from "./GlobalStyle";
import { ThemeContext } from './hooks/ThemeContext';

function App() {
  const [theme, setTheme] = React.useState(Theme.Light);
  
  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
    <C.Container theme={theme == Theme.Light ? 'light' : 'dark'}>
      <Header/>
    </C.Container>
    </ThemeContext.Provider>
  );
}

export default App;
