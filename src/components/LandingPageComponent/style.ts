import styled from "styled-components";

export const Container = styled.section`
  font-family: "roboto", sans-serif;
  background-color: var(--gray-color-0);
  display: flex;

  button {
    width: fit-content;
    height: fit-content;
    border: none;
    border-radius: 8px;
    padding: 15px 20px;
  }

  .signupBtn {
    background-color: var(--primary-3-color);
  }

  .signupBtn:hover {
    background-color: var(--primary-focus-color);
    transition: ease-in-out 0.2s;
  }

  .headerLanding {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0px 8.5%;
    margin-top: 2%;

    margin-left: -2px;

    h3 {
      font-size: 18px;
      margin-top: -5px;
      margin-left: 20px;
    }
    div:nth-child(2) {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .mainLanding {
    display: flex;
    flex-direction: row;
    margin: 0px 8.5%;

    p {
      font-size: 16px;
      font-weight: 400;
      color: var(--gray-color-1);
      line-height: 1;
    }
  }

  @media (max-width: 2560px) {

    .mainLanding {
      height: 100vh;
      display: flex;
      flex-direction: row;
    }
  }
`;
