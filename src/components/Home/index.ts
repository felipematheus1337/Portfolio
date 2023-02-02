import styled from "styled-components";


export const Container = styled.div`
align-items: center;
justify-content: center;
display: flex;
flex-wrap: nowrap;
max-width: 100%;
padding: 100px;
background-color: ${props => props.theme == 'dark' ? '#4b5162' : '#dcdcdc'};
border-top: 2px solid ${props => props.theme == 'light' ? 'black' : '#dcdcdc'};
color: ${props => props.theme == 'light' ? 'black' : 'white'};

@media only screen and (max-width: 968px) {
display: flex;
flex-direction: column;
width: auto;
}



`;


export const ImageContainer = styled.div`
margin-top: 10px;
margin-left: 50px;
display: flex;
align-items: center;
justify-content: center;


img  {
    width: 300px;
    height: 370px;
    border-radius: 50%;
}

`;

export const HomeAbout = styled.div`
margin-top: 25px;
margin-left: 150px;
margin-right: 0;
flex-direction: column;
font-size: 1.5em;
width: 500px;

@media only screen and (max-width: 700px) {
   margin: auto;
   width: auto;
}





`;
