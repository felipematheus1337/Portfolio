import { Theme } from "../../@types/Theme";
import { useTheme } from "../../hooks/ThemeContext";
import * as C from "./index";
import { useTranslation } from 'react-i18next';

const Experience = () => {
    const { t, i18n } = useTranslation();
    const { theme, setTheme } = useTheme();
    return (
        <C.Container id="experience" theme={theme == Theme.Light ? 'light' : 'dark'}>
            <h1>{t('experiencia')}</h1>
            <C.ExperienceContainer>

            <C.ExperienceDiv theme={theme == Theme.Light ? 'light' : 'dark'}>
                <h3>{t('estagio')}</h3>
                <h4>DATAPREV</h4>
                <p>{t('respDataPrev')}</p>
            </C.ExperienceDiv>

            <C.ExperienceDiv theme={theme == Theme.Light ? 'light' : 'dark'}>
                <h3>{t('estagio')}</h3>
                <h4>Fi-Analytics</h4>
                <p>{t('respNetQuant')}</p>
            </C.ExperienceDiv>
            </C.ExperienceContainer>
        </C.Container>
    )
}

export default Experience;