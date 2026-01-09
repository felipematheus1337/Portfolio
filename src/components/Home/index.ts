import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-wrap: nowrap;
  max-width: 100%;
  padding: 100px;
  background-color: ${(props) =>
    props.theme == "dark" ? "#4b5162" : "#dcdcdc"};
  border-top: 2px solid
    ${(props) => (props.theme == "light" ? "black" : "#dcdcdc")};
  color: ${(props) => (props.theme == "light" ? "black" : "white")};

  @media only screen and (max-width: 968px) {
    display: flex;
    flex-direction: column;
    width: auto;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;

  /* “card” da imagem */
  padding: 12px;
  border-radius: 18px;

  background: none;

  img {
    width: min(360px, 100%);
    aspect-ratio: 3 / 4; /* mantém proporção consistente */
    object-fit: cover; /* não estica */
    border-radius: 14px;

    border: 2px solid
      ${(props) => (props.theme == "light" ? "black" : "rgba(220,220,220,0.8)")};
    display: block;
  }

  @media (max-width: 700px) {
    img {
      width: min(240px, 100%);
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
