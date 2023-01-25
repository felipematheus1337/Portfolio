import * as C from "./index";
import {BsSun} from "react-icons/bs";
import {BsFillMoonFill} from "react-icons/bs";
import { useTheme } from "../../hooks/ThemeContext";
import { Theme } from "../../@types/Theme";
import {Link} from "react-scroll";


export const Header = () => {
    const { theme, setTheme } = useTheme();
    

    return (
        <C.Container theme={theme == Theme.Light ? 'light' : 'dark'}>
            <Link to="home"    spy={true} smooth={true} offset={-100} duration={500}>Home</Link>
           <Link to="about"    spy={true} smooth={true} offset={-100} duration={500} >Sobre</Link>
           <Link to="experience"  spy={true} smooth={true} offset={-100} duration={500} >Experiências</Link>
           <Link to="projects" spy={true} smooth={true} offset={-100} duration={500} >Projetos</Link>
           <Link to="contact"  spy={true} smooth={true} offset={-100} duration={500} >Contato</Link>
                <a>{theme == Theme.Light ?
                 (<BsFillMoonFill className="moon" onClick={() => setTheme(Theme.Dark)}/>)
                 :
                 (<BsSun className="sun" onClick={() => setTheme(Theme.Light)}/>)
                  }
            </a>
            
        </C.Container>
    )
}

export default Header;