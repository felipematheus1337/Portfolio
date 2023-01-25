import * as C from "./index";
import me from "../../assets/myself.jpeg";
import { useTheme } from "../../hooks/ThemeContext";
import { Theme } from "../../@types/Theme";

export const Home = () => {
    const { theme, setTheme } = useTheme();
    
    return (
        <C.Container id="home" theme={theme == Theme.Light ? 'light' : 'dark'}>
            <C.ImageContainer>
           <img src={me} alt="myself"/>
           </C.ImageContainer>
           <C.HomeAbout>
             <h2>Bem-vindo ao meu portfolio! 🎉</h2>
             <h4>Me chamo Felipe Matheus, Sou um desenvolvedor Fullstack, abaixo há mais informações sobre mim, pegue um ☕  e fique a vontade!</h4>
           </C.HomeAbout>
        </C.Container>
    )
}

export default Home;