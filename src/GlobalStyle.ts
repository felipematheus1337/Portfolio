import styled from "styled-components";

export const Body = styled.body ` 
margin: 0;
padding: 0;
height: 100vh;
width: 100vh;
`

export const Container = styled.div`
background-color: ${props => props.theme == 'dark' ? '#404552' : 'white'}
`


  