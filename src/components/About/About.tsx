import * as C from "./index";
import computer from "../../assets/computer.gif";
import { useTheme } from "../../hooks/ThemeContext";
import { Theme } from "../../@types/Theme";

const About = () => {
    const { theme, setTheme } = useTheme();

    return (
        <C.Container theme={theme == Theme.Light ? 'light' : 'dark'}>
            <C.AboutText id="about">
            <h4>Entusiasta de games e tecnologia, Atualmente no 7° período do bacharelado em Ciência da computação 
            na Universidade Veiga de Almeida - UVA (Graduação estimada em Jan 2024).
            </h4>
            <h4>Minhas principais soft-skills são: Estudo contínuo, pensar para resolver problemas, gerenciamento de tempo, trabalho em
equipe.</h4>
            </C.AboutText>
            
            <img src="https://media3.giphy.com/media/iIqmM5tTjmpOB9mpbn/giphy.gif?cid=790b76112d193a2d966b37aab59634e1874ee75596d1cd4c&rid=giphy.gif&ct=g" />
            
          


        </C.Container>
    )
}

export default About;