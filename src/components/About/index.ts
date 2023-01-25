import styled from "styled-components";

export const Container = styled.div`
margin: 0px auto;
display: flex;
flex-wrap: nowrap;
max-width: 1400px;
padding: 60px;




color: ${props => props.theme == 'light' ? 'black' : 'white'};

img {
    border-radius: 4px;
}

@media only screen and (max-width: 700px) {
    display: flex;
    flex-direction: column;
    margin: auto;
    width: auto;
}

`;

export const AboutText = styled.div`
border-top: 2px solid black;
border-bottom: 2px solid black;
border-right: 2px solid black;
margin: auto;
display: flex;
flex-direction: column;
font-size: 1.5em;
width: 500px;
padding: 10px;

h4 {
    margin-bottom: 1px;
}


@media only screen and (max-width: 700px) {
    display: flex;
    flex-direction: column;
    margin: auto;
    width: auto;

    h4:nth-child(2) {
        margin-bottom: 20px;
    }
}



`;