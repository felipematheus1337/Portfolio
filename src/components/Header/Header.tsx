import * as C from "./index";
import {BsSun} from "react-icons/bs";
import {BsFillMoonFill} from "react-icons/bs";
import { useTheme } from "../../hooks/ThemeContext";
import { Theme } from "../../@types/Theme";
import {Link} from "react-scroll";
import global from "../../assets/global.png";
import brflag from "../../assets/brazil.png";
import usaflag from "../../assets/usa.png";
import { useState } from "react";


export const Header = () => {
    const { theme, setTheme } = useTheme();
    const [isOpen,setIsOpen] = useState<boolean>(false);
    const [languages,setLanguanges] = useState<String>('pt');


    console.log(languages);
    
    

    return (
        <C.Container theme={theme == Theme.Light ? 'light' : 'dark'}>
            <Link to="home"    spy={true} smooth={true} offset={-100} duration={500}>Home</Link>
           <Link to="about"    spy={true} smooth={true} offset={-100} duration={500} >Sobre</Link>
           <Link to="experience"  spy={true} smooth={true} offset={-100} duration={500} >Experiências</Link>
           <Link to="tec"  spy={true} smooth={true} offset={-100} duration={500} >Tecnologias</Link>
           <Link to="projects" spy={true} smooth={true} offset={-100} duration={500} >Projetos</Link>
           <Link to="contact"  spy={true} smooth={true} offset={-100} duration={500} >Contato</Link>
           <p className="dropdown-icon"  onClick={() => setIsOpen(!isOpen)}><img className="lng-icon" src={global} alt="change-language-icon"/>
            {isOpen && <div className="lngs-dropped">
                <h4>Idioma</h4>
                    <ul>
                    <li className="flag-div" onClick={() => setLanguanges('pt')}><img className="img-flag" src={brflag} alt="br-flag" /> <h5>Português</h5></li>
                    <li className="flag-div" onClick={() => setLanguanges('en')}><img className="img-flag" src={usaflag} alt="usa-flag" /> <h5>Inglês</h5></li>
                    </ul>

                </div>}
            </p>
                <a className="svg-theme">{theme == Theme.Light ?
                 (<BsFillMoonFill className="moon"
                  onClick={() => {
                    localStorage.setItem("tema",Theme.Dark);
                    setTheme(Theme.Dark);
                 }}
                    />)
                 :
                 (<BsSun className="sun"
                  onClick={() => {
                    localStorage.setItem("tema",Theme.Light);
                    setTheme(Theme.Light)
                }}
                />)
                  }
            </a>
          
            
        </C.Container>
    )
}

export default Header;