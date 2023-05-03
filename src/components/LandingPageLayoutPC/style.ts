import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;

  .mainLanding {
      height: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
    }

  .signUpSection {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 10px;
    gap: 30px;
    width: 50vw;

    p {
      font-weight: 400;
      color: var(--gray-color-1);
      line-height: 1;
    }

    p:nth-child(2) {
      font-weight: 700;
    }

    .signUpDiv {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .landingImageContainer {
    display: flex;
    .landingImage {
      /* width: 100%; */
    }
  }

  @media screen and (max-height: 768px) {
    .landingImage {
      width: 100%;
      min-width: 50vw;
    }
  }

  @media screen and (max-width: 900px) {
    .mainLanding {
      flex-direction: column-reverse;
    }

    .signUpSection {
      align-items: center;
      gap: 15px;
      position: absolute;
      background-color: rgba(202, 178, 206, .9);
      padding: 30px;
      text-align: center;
      width: 100%;

      p {
        color: white;
      }
    }

    .landingImage {
      filter: blur(4px);
    }
  }

  @media screen and (max-height: 768px) {
    .landingImage {
      width: 100%;
      min-width: 50vw;
    }
  }
`;
