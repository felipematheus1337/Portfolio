import * as C from "./index";
import phone from "../../assets/images/contact.gif";
import { useTheme } from "../../hooks/ThemeContext";
import { Theme } from "../../@types/Theme";
import gmailIcon from "../../assets/images/gmail.png";
import insta from "../../assets/images/instagram.png";
import zap from "../../assets/images/zap.png";
import { useTranslation } from 'react-i18next';


const Contact = () => { 
    const { theme, setTheme } = useTheme();
    const { t, i18n } = useTranslation();

    return (
        <C.Container id="contact" theme={theme == Theme.Light ? 'light' : 'dark'}>
           <h1>{t('contatos')}  <img src={phone} alt="telefone" /></h1>

           <C.ContactIcons>
            <a href="https://www.linkedin.com/in/felipe-matheus-34232b162/" target="_blank">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" />
            </a>

            <a href="https://github.com/felipematheus1337/" target="_blank">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" />
            </a>

            <a href="mailto: lipehbr@gmail.com">
                <img src={gmailIcon} alt="gmail"/>
            </a>

            <a href="https://www.instagram.com/felipemath.dev/" target="_blank">
                <img src={insta} alt="instagram"/>
            </a>

            <a href="https://web.whatsapp.com/send?phone=5521986657239" target="_blank">
                <img src={zap} alt="whatsapp"/>
            </a>

            
           </C.ContactIcons>
           <p> 
            <a href="https://www.linkedin.com/in/felipe-matheus-34232b162/" target="_blank"> 
            Tradução realizada por Mariana Cardoso
            <img className="icon-lk" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" />
            
             </a>
            
            </p>
        </C.Container>
    )
}

export default Contact;