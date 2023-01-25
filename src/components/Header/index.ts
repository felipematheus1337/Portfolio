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

a:hover:nth-child(7) {
    background-color: ${props => props.theme == 'dark' ? 'black' : '#bdb9b9'};
}

svg {
    cursor: pointer;
    font-size: 1.3rem;
    margin-top: 3px;
}

.moon {
    color: black;
}

.sun {
    color: #FEB125;
}

@media only screen and (max-width: 700px) {
display: flex;
flex-direction: column;
margin: auto;
justify-content: space-between;
width: auto;
}

`;