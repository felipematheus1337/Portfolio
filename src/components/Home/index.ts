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
    width: 400px;
    height: 487px;
    border-radius: 10%;
    border: 3px solid black;
-webkit-box-shadow: 13px -8px 4px 2px rgba(97,101,117,0.36);
-moz-box-shadow: 13px -8px 4px 2px rgba(97,101,117,0.36);
box-shadow: 13px -8px 4px 2px rgba(97,101,117,0.78);
}

@media only screen and (max-width: 700px) {
    img  {
        width: 200px;
        height: 287px;
        border-radius: 10%;
        border: 3px solid black;
        box-shadow: 1px 1px black, -0.5em 0 0.1em black;
        margin: auto;
    }
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
