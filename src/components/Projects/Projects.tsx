import { Theme } from "../../@types/Theme";
import { useTheme } from "../../hooks/ThemeContext";
import * as C from "./index";
import projectExample from "../../assets/images/projects.jpeg";
import chatSW from "../../assets/images/chatsw.jpeg";
import { useTranslation } from 'react-i18next';

const Projects = () => {
    const { theme, setTheme } = useTheme();
    const { t, i18n } = useTranslation();

 return (
    <C.Container id="projects" theme={theme == Theme.Light ? 'light' : 'dark'}>
     <h1>{t('projetosMaior')}</h1>
     <p>{t('maisProjetos')}
     <a href="https://github.com/felipematheus1337?tab=repositories" target="_blank"><img className="git-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" /></a></p>
          

     <C.ProjectContainer>


      <C.ProjectCard theme={theme == Theme.Light ? 'light' : 'dark'}>
         <img src="https://github.com/felipematheus1337/movieRate_Spring_React/blob/master/frontend/.github/menu.png?raw=true" alt="projetos" />
         <h3>Movie Rate</h3>
         <p>{t('movieRate')}</p>
             <h4>{t('tecnologias')}</h4>
         <p className="tec-icons">
         <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" />   
         <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg" />
         <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original-wordmark.svg" />
         <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" />
         </p>
         
         <a href="https://github.com/felipematheus1337/movieRate_Spring_React" target="_blank">{t('repositorio')}</a>    
      </C.ProjectCard>


      <C.ProjectCard theme={theme == Theme.Light ? 'light' : 'dark'}>
         <img src={projectExample} alt="projetos" />
         <h3>Customer API</h3>
         <p>{t('employeeApi')}</p>
         <h4>{t('tecnologias')}</h4>
         <p className="tec-icons">
         <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain-wordmark.svg" />   
         <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
         <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" />
         </p>
         <a href="https://github.com/felipematheus1337/Customer_API_TypeScript_Node" target="_blank">{t('repositorio')}</a>    
      </C.ProjectCard>


      <C.ProjectCard theme={theme == Theme.Light ? 'light' : 'dark'}>
         <img src={chatSW} alt="projetos" />
         <h3>Star Wars Chat APP</h3>
         <p>{t('starwars')}</p>
         <h4>Tecnologias:</h4>
         <p className="tec-icons">
         <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg" />
         <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain-wordmark.svg" />
         <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
         <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" />
          
          
         </p>
         <a href="https://github.com/felipematheus1337/Star-Wars-Chat-SocketIO-NodeJS" target="_blank">{t('repositorio')}</a>    
      </C.ProjectCard>


     </C.ProjectContainer>

     
    </C.Container>
 )
}

export default Projects;