import * as C from "./index";
import {BsSun} from "react-icons/bs";
import {BsFillMoonFill} from "react-icons/bs";
import { useTheme } from "../../hooks/ThemeContext";
import { Theme } from "../../@types/Theme";
import {Link} from "react-scroll";
import global from "../../assets/images/global.png";
import brflag from "../../assets/images/brazil.png";
import usaflag from "../../assets/images/usa.png";
import { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';




export const Header = () => {
    const { theme, setTheme } = useTheme();
    const [isOpen,setIsOpen] = useState<boolean>(false);
    
    const { t, i18n } = useTranslation();
    
    useEffect(() => {
        const lng = navigator.language;
        i18n.changeLanguage(lng);
      }, [])

      

    return (
        <C.Container theme={theme == Theme.Light ? 'light' : 'dark'}>
            <Link to="home"    spy={true} smooth={true} offset={-100} duration={500}>Home</Link>
           <Link to="about"    spy={true} smooth={true} offset={-100} duration={500} >{t('sobre')}</Link>
           <Link to="experience"  spy={true} smooth={true} offset={-100} duration={500}>{t('experiencia')}</Link>
           <Link to="tec"  spy={true} smooth={true} offset={-100} duration={500} >{t('tecnologias')}</Link>
           <Link to="projects" spy={true} smooth={true} offset={-100} duration={500} >{t('sobre')}</Link>
           <Link to="contact"  spy={true} smooth={true} offset={-100} duration={500} >{t('contatos')}</Link>
          <p className="dropdown-icon"  onClick={() => setIsOpen(!isOpen)}><img className="lng-icon" src={global} alt="change-language-icon"/>
            {isOpen && <div className="lngs-dropped">
                <h4>{t('idioma')}</h4>
                    <ul>
                    <li className="flag-div" onClick={() => {
                        i18n.changeLanguage('pt')
                        localStorage.setItem('language','pt');
                        }}>
                        <img className="img-flag" src={brflag} alt="br-flag" />
                         <h5>{t('lngPt')}</h5>
                         </li>

                    <li className="flag-div" onClick={() => {
                        i18n.changeLanguage('en')
                        localStorage.setItem('language','en');
                        }}>
                         <img className="img-flag" src={usaflag} alt="usa-flag" />
                         <h5>{t('lngEn')}</h5>
                         </li>
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