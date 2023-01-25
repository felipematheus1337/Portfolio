import { Theme } from "../../@types/Theme";
import { useTheme } from "../../hooks/ThemeContext";
import * as C from "./index";

const Experience = () => {
    const { theme, setTheme } = useTheme();
    return (
        <C.Container id="experience" theme={theme == Theme.Light ? 'light' : 'dark'}>
            <h1>Experiências</h1>
            <C.ExperienceContainer>

            <C.ExperienceDiv theme={theme == Theme.Light ? 'light' : 'dark'}>
                <h3>Estágio de Desenvolvimento de Software</h3>
                <h4>DATAPREV</h4>
                <p>Responsável pela parte de Desenvolvimento fullstack, na parte do Frontend utilizando ReactJS,
com bibliotecas como Bootstrap, realizando implementação de novas funcionalidades, correção de
bugs, criação de novas telas, manutenção e code review.
No Backend com Java EE e Spring Boot, realizando manutenção, implementação de novas
funcionalidades como novos endpoints, controllers, services, montar Querys com JPA/JPQL.</p>
            </C.ExperienceDiv>

            <C.ExperienceDiv theme={theme == Theme.Light ? 'light' : 'dark'}>
                <h3>Estágio de Desenvolvimento de Software</h3>
                <h4>Fi-Analytics</h4>
                <p>Responsável pela parte de Desenvolvimento fullstack, na parte do Frontend utilizando ReactJS,
com bibliotecas como: Bootstrap, Styled Components, utilizando também préprocessadores como
SASS, realizando implementação de novas funcionalidades como: light/dark mode, tradução do site
usando Context API, code review, correção de bugs, manutenção do código, criação de novas telas.
Backend com Ruby and Rails, criação de rotas, controllers, endpoints, correção e manutenção,
WebScrapping/Scrapping utilizando Python e bibliotecas como Pandas e BeautifulSoup, integrando
com serviços da AWS, como Lambdas, Api-Gateway, S3, EC2.</p>
            </C.ExperienceDiv>
            </C.ExperienceContainer>
        </C.Container>
    )
}

export default Experience;