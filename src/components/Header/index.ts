import styled from "styled-components";

export const Container = styled.header`
display: flex;
margin: 0 60px 10px auto;
width: 100vh;
max-width: auto;
justify-content: space-between;
background-color: ${props => props.theme == 'dark' ? '#383c4a' : '#bdb9b9'};
border: none;

padding: 7px;

a {
    margin: 2px auto;
    font-size: 1.3rem;
    color:${props => props.theme == 'dark' ? 'white' : 'black'};
}

a:hover {
    background-color: ${props => props.theme == 'dark' ? 'white' : 'black'};
    color: ${props => props.theme == 'dark' ? 'black' : 'white'};
    cursor: pointer;
    opacity: 0.5;
}



svg {
    cursor: pointer;
    font-size: 1.3rem;
    margin-top: 3px;
}

.svg-theme {
    background: none;
}

.svg-theme:hover {
    background: none;
}

.moon {
    color: black;
}

.sun {
    color: #FEB125;
}

.dropdown-icon {
    margin: auto;
}

.lng-icon {
    width: 35px;
    cursor: pointer;
    
}


.lngs-dropped {
    border: 3px solid black;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    margin: 4px auto;
    position: absolute;
    z-index: 999;
    heigth: auto;
    width: auto;
    background-color: ${props => props.theme == 'dark' ? '#383c4a' : '#948d8d'};
    color: ${props => props.theme == 'light' ? 'black' : 'white'};
    padding: 6px;
    margin-left: -20px;
    
    h4 {
        text-align: center;
        margin: 0;
    }
    
    
}

.lngs-dropped ul {
    display: flex;
    flex-direction: column;
    list-style: none;
    margin: 5px;
    width: auto;
}

.lngs-dropped ul li img {
    width: 30px;
    margin: 0;
}

.lngs-dropped ul li {
    margin: 5px;
}

.lngs-dropped ul li:hover {
    cursor: pointer;
    background-color: ${props => props.theme == 'dark' ? '#948d8d' : '#383c4a'};
    color: ${props => props.theme == 'light' ? 'white' : 'black'};
    width: 100%;
}

.lngs-dropped h5 {
    margin: 0;
    display: inline;
    font-size: 1rem;
}






























@media only screen and (max-width: 962px) {
display: flex;
flex-direction: column;
margin: auto;
justify-content: space-between;
width: auto;


.lngs-dropped {
    margin-left: -50px;
}
}


`;