import styled from "styled-components";

export const Container = styled.section`
  font-family: "roboto", sans-serif;

  background-color: var(--gray-color-0);
  height: 100vh;
  width: 100vw;

  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 60%;
  }

  h2 {
    max-width: 70%;

    font-size: 32px;
    font-weight: 600;
    color: var(--gray-color-1);
    text-align: justify;
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  div:nth-child(2) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    width: 100%;
    height: 100%;

    background-image: url("./vector.svg");
    background-repeat: no-repeat;
    background-size: 100% 100vh;
  }

  button {
    width: 7rem;
    height: 3rem;

    border: none;
    border-radius: 8px;
  }

  button:hover {
    background-color: var(--primary-color);
  }

  @media (max-width: 730px) {
    img {
      width: 50%;
    }

    h2 {
      font-size: 24px;
    }
  }

  @media (max-width: 471px) {
    div:nth-child(1) {
      margin: 2rem 0px;

      img {
        margin-bottom: 2rem;
      }

      h2 {
        font-size: 20px;
      }
    }
  }

  @media (max-width: 550px) {
  }

  @media (max-width: 475px) {
  }
`;
