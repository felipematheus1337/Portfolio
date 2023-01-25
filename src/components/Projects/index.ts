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
text-align: center;

.git-icon {
    width: 30px;
    cursor: pointer;
    margin-left: 10px; 
}

h1 {
    margin: 0;
}

p {
    padding: 5px;
    margin-bottom: 40px;
}




`;

export const ProjectContainer = styled.div`
display: flex;
flex-direction: row;
flex-wrap: nowrap;
width: auto;
height: auto;
max-width: 1500px;

@media only screen and (max-width: 998px) {
    display: flex;
    flex-direction: column;
    margin: auto;
    width: auto;
    }

`;

export const ProjectCard = styled.div`
display: flex;
flex-direction: column;
width: 280px;
height: auto;
background-color: ${props => props.theme == 'dark' ? '#383c4a' : '#bdb9b9'};
border-radius: 10px;
padding: 15px;
margin: 10px auto;


margin:0;
padding: 0px;
margin-bottom: 20px;

margin-right: auto;

img {
    margin-top: 10px;
    margin-right:8px;
    margin-left: 8px;
}


a { 
    background-color: ${props => props.theme == 'dark' ? '#4b5162' : '#dcdcdc'};
    margin: 2px auto;
    padding: 8px;
    border-radius: 10px;
    cursor: pointer;
    text-decoration: none;
    color: ${props => props.theme == 'light' ? 'black' : 'white'};
    

}

a {
    margin-bottom: 16px;
}



 h4 {
    margin:0;
}



p {
    margin: 0;
    
}

.tec-icons {
    margin-top: 15px;
    margin-bottom: 15px;
}


p img {
    width: 40px;
    margin: 0px 0px 0px 10px;
}

@media only screen and (max-width: 1070px) { 
margin-left: 10px;
}

@media only screen and (max-width: 998px) {
   
    margin:0;
    padding: 0px;
    margin-bottom: 20px;

    img {
        width: auto;
        height: auto;
        margin-right:8px;
        margin-left: 8px;
    }
    
    h4 {
        margin:0;
    }

    .tec-icons {
        margin-top: 15px;
        margin-bottom: 15px;
    }

    a {
        margin-bottom: 16px;
    }

}


`;