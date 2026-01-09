import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  padding: 40px 20px;

  background-color: ${(props) =>
    props.theme == "dark" ? "#4b5162" : "#dcdcdc"};
  border-top: 2px solid
    ${(props) => (props.theme == "light" ? "black" : "#dcdcdc")};
  color: ${(props) => (props.theme == "light" ? "black" : "white")};

  h1 {
    text-align: center;
    margin: 0 0 24px 0;
  }
`;

export const ExperienceContainer = styled.div`
  width: 100%;
  display: grid;

  /* quebra automaticamente conforme a tela */
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 20px;

  /* evita qualquer scroll horizontal */
  overflow-x: hidden;
`;

export const ExperienceDiv = styled.div`
  display: flex;
  flex-direction: column;

  background-color: ${(props) =>
    props.theme == "dark" ? "#383c4a" : "#bdb9b9"};
  border-radius: 12px;

  padding: 22px;
  text-align: center;

  /* remove width fixa (o grid controla) */
  width: 100%;
  box-sizing: border-box;

  img {
    width: 84px;
    height: 84px;
    object-fit: contain;
    display: block;
    margin: 0 auto 10px auto;
  }

  h3,
  h4 {
    margin: 6px 0;
    padding-bottom: 6px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.35);
  }

  p {
    margin: 12px 0 0 0;
    font-size: 1.05em;
    line-height: 1.55;
    text-align: justify;

    /* evita palavras grandes estourarem a largura */
    overflow-wrap: anywhere;
    word-break: break-word;
  }

  @media (max-width: 700px) {
    padding: 18px;

    img {
      width: 56px;
      height: 56px;
    }

    p {
      font-size: 1em;
    }
  }
`;
