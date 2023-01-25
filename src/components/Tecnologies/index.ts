import styled from "styled-components";

export const Container = styled.div`
display: flex;
padding: 30px;
flex-direction: column;
background-color: ${props => props.theme == 'dark' ? '#383c4a' : '#948d8d'};
color: ${props => props.theme == 'light' ? 'black' : 'white'};
max-width: auto;
flex-wrap: nowrap;
margin: 2px auto;


h1 {
    text-align: center;
    align-text: center;
    margin-bottom: 10px;
}

@media only screen and (max-width: 700px) {
    display: flex;
    flex-direction: column;
    margin: auto;
    width: auto;

    h1 {
        text-align: center;
        align-text: center;
        margin-bottom: 50px;
    }

    }
`;


export const DivIcons = styled.div`
display:flex;
flex-direction: row;
margin-top: 18px;

img {
    width: 85px;
    margin: 10px auto;
}

@media only screen and (max-width: 700px) {
    display: flex;
    flex-direction: column;
    margin: auto;
    width: auto;

    img {
        margin-top: 15px;
        margin-bottom: 10px;
    }

    }
`;
