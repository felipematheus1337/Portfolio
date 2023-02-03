import * as C from "./index";
import computer from "../../assets/images/computer.gif";
import { useTheme } from "../../hooks/ThemeContext";
import { Theme } from "../../@types/Theme";
import { useTranslation } from 'react-i18next';

const About = () => {
    const { theme, setTheme } = useTheme();
    const { t, i18n } = useTranslation();

    return (
        <C.Container theme={theme == Theme.Light ? 'light' : 'dark'}>
            <C.AboutText id="about">
            <h4>{t('welcUva')}
            </h4>
            <h4>{t('softSkills')}</h4>
            </C.AboutText>
            
            <img src="https://media3.giphy.com/media/iIqmM5tTjmpOB9mpbn/giphy.gif?cid=790b76112d193a2d966b37aab59634e1874ee75596d1cd4c&rid=giphy.gif&ct=g" />
            
          


        </C.Container>
    )
}

export default About;