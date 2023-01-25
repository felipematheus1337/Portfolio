import styled from "styled-components";

export const Body = styled.body ` 
margin: 0;
padding: 0;
border: 1px solid transparent;
`

export const Container = styled.div`
background-color: ${props => props.theme == 'dark' ? '#383c4a' : '#bdb9b9'}
`


  