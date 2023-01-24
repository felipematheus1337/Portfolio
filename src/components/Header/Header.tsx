import * as C from "./index";
import {BsSun} from "react-icons/bs";
import {BsFillMoonFill} from "react-icons/bs";
import { useTheme } from "../../hooks/ThemeContext";
import { Theme } from "../../@types/Theme";


export const Header = () => {
    const { theme, setTheme } = useTheme();
    

    return (
        <C.Container theme={theme == Theme.Light ? 'light' : 'dark'}>
            <a>Home</a>
            <a>About</a>
            <a>Projects</a>
            <a>Contact</a>
                <a>{theme == Theme.Light ?
                 (<BsFillMoonFill className="moon" onClick={() => setTheme(Theme.Dark)}/>)
                 :
                 (<BsSun className="sun" onClick={() => setTheme(Theme.Light)}/>)
                  }
            </a>
            
        </C.Container>
    )
}

export default Header;