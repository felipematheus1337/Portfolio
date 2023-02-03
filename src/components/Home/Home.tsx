import * as C from "./index";
import me from "../../assets/images/myself.jpeg";
import { useTheme } from "../../hooks/ThemeContext";
import { Theme } from "../../@types/Theme";
import { useTranslation } from 'react-i18next';

export const Home = () => {
    const { theme, setTheme } = useTheme();
    const { t, i18n } = useTranslation();

    return (
        <C.Container id="home" theme={theme == Theme.Light ? 'light' : 'dark'}>
            <C.ImageContainer>
           <img src={me} alt="myself"/>
           </C.ImageContainer>
           <C.HomeAbout>
             <h2>{t('welcome')} 🎉</h2> 
             <h4>{t('welcFelipe')}</h4>
           </C.HomeAbout>
        </C.Container>
    )
}

export default Home;