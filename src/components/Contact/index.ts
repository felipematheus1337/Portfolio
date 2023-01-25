import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
margin: 5px auto;
padding: 30px;
align-items: center;
text-align: center;
max-height: auto;
max-width: auto;

background-color: ${props => props.theme == 'dark' ? '#383c4a' : '#948d8d'};
color: ${props => props.theme == 'light' ? 'black' : 'white'};

img {
    margin-left: 10px;
    margin-top: 3px;
    width: 60px;
    
}

h1 {
    text-align: center;
    align-items: center;
}


`;

export const ContactIcons = styled.div`
display: flex;
flex-direction: row;
margin: 5px auto;




img {
    width: 45px;
    margin-right: 50px;
}

@media only screen and (max-width: 1018px) {
    display: flex;
    flex-direction: column;
    max-width: 100vh;
    max-height: 100vh;
    
    img {
        margin: 10px;
    }
}

`;