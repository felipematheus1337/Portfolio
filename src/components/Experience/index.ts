import styled from "styled-components";

export const Container = styled.div`
display: flex;
padding: 30px;
flex-direction: column;
background-color: ${props => props.theme == 'dark' ? '#4b5162' : '#dcdcdc'};
border-top: 2px solid ${props => props.theme == 'light' ? 'black' : '#dcdcdc'};
color: ${props => props.theme == 'light' ? 'black' : 'white'};
max-width: auto;
flex-wrap: nowrap;
margin: 2px auto;

h1 {
    text-align: center;
    align-text: center;
}


@media only screen and (max-width: 700px) {
    display: flex;
    flex-direction: column;
    margin: auto;
    width: auto;
    }
`;



export const ExperienceContainer = styled.div`
display: flex;
flex-direction: row;
flex-wrap: nowrap;
margin: 5px auto;
padding: 50px;

@media only screen and (max-width: 1018px) {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: auto;
    margin-right: 100px;
    padding:0;
    }
`


export const ExperienceDiv = styled.div`
display: flex;
flex-direction: column;
margin: 10px 25px 10px 10px;
background-color: ${props => props.theme == 'dark' ? '#383c4a' : '#bdb9b9'};
width: 400px;
height: auto;
border-radius: 10px;
padding: 30px;


h4 {
    text-align: center;
    border-bottom: 0.5px solid black;
    padding: 3px;
    margin: 3px;
}

h3 {
    text-align: center;
    border-bottom: 0.5px solid black;
    padding: 3px;
    margin: 3px;
}

p {
    margin: 10px;
    font-size: 1.2em;
    text-aling: justify;
}

@media only screen and (max-width: 700px) {
    display: flex;
    flex-direction: column;
    width: auto;
    height: auto;
    margin: 10px auto;

    h4 {
        text-align: center;
        border-bottom: 0.5px solid black;
        padding: auto;
        margin: auto;
    }
    
    h3 {
        text-align: center;
        border-bottom: 0.5px solid black;
    }
    
    p {
        font-size: 1.2em;
        text-aling: justify;
    }

}

`;