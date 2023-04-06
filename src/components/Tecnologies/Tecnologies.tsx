import { Theme } from "../../@types/Theme";
import { useTheme } from "../../hooks/ThemeContext";
import * as C from "./index";
import { useTranslation } from 'react-i18next';

const Tecnologies = () => {
    const { theme, setTheme } = useTheme();
    const { t, i18n } = useTranslation();

    return (
        <C.Container id="tec" theme={theme == Theme.Light ? 'light' : 'dark'}>
            <h1>{t('tecnologias')}</h1>
            <C.DivIcons>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original-wordmark.svg" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain-wordmark.svg" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg" />
          
          
                    
           
          
            </C.DivIcons>
        </C.Container>
    )
}

export default Tecnologies;

