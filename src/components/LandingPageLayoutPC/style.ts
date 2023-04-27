import styled from "styled-components";

export const Container = styled.section`
  font-family: "roboto", sans-serif;

  width: 100vw;
  /* max-height: 100vh; */

  background-color: var(--gray-color-0);

  /* padding-top: 2rem; */

  display: flex;
  flex-direction: column;
  /* max-width: 1464px; */
  margin: auto;
  /* justify-content: space-between; */

  button {
    width: fit-content;
    height: fit-content;
    border: none;
    border-radius: 8px;
    padding: 15px 20px;
  }

  .signupBtn {
    background-color: var(--gray-color-3);
    border: 1px solid black;
  }

  .signupBtn:hover {
    background-color: white;
    color: black;
    transition: ease-in-out 0.2s;
  }

  .headerLanding {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0px 8.5%;
    /* margin-top: 2%; */

    /* margin-left: -2px; */

    img {
      width: 50rem;
      max-width: 700px;
    }
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

    p:nth-child(2) {
      font-weight: 700;
    }

    div:nth-child(2) {
      display: flex;
      flex-direction: column;
      gap: 5%;
      align-items: center;
      justify-content: center;
      width: 45.9%;
    }
  }

  @media (max-width: 2560px) {
    /* padding-top: 3rem; */
    /* padding: 0px 8.5%; */
    /* margin: 0px 7.9%; */
    height: 100vh;

    .headerLanding {
      img {
        width: 350px;
        height: 120px;
      }
    }

    .mainLanding {
      height: 100vh;
      display: flex;
      flex-direction: row;
      /* align-items: flex-end; */

      div:nth-child(1) {
        display: flex;
        align-items: flex-end;
      }
      
      img {
        width: 100%;
        /* margin-left: -23px; */
      }


      div:nth-child(2) {
        /* height: 80%; */
        display: flex;
        flex-direction: column;
        gap: 6%;
        align-items: center;
        justify-content: center;
      }
    }
  }

  /* @media (max-width: 1798px) {
    padding-top: 10rem;
    padding: 0px 10%;

    .headerLanding {
      img {
        width: 350px;
        height: 120px;
      }

      .mainLanding {
        height: 100vh;

        display: flex;
        flex-direction: row;
        align-items: flex-end;

        img {
          width: 90vh;
        }

        div:nth-child(2) {
          height: 80%;

          display: flex;
          flex-direction: column;
          gap: 6%;
          align-items: center;
          justify-content: center;
        }
      }
    } */

    /* @media (max-width: 1522px) {
      padding-top: 10rem;
      padding: 0px 10%;

      .headerLanding {
        img {
          margin: 2.1px -5px;
          width: 350px;
        }

        div {
          h3 {
          font-size: 18px;
          margin: -6px 0px 0px 15.5px;
        }
        }
      }

      .mainLanding {
        img {
          width: 100vh;
          margin-top: 30px;
          margin-left: -27px;

        }

        p {
          font-size: 20px;
          font-weight: 300;
        }

        p:nth-child(2) {
          font-weight: 600;
        }
      }
    }

    /* @media (max-width: 1127px) {
      padding-top: 10rem;
      padding: 0px 10%;

      .headerLanding {
        img {
          width: 15rem;
        }

        h2 {
          font-size: 24px;
        }
      }

      .mainLanding {
        img {
          width: 30rem;
        }

        p {
          font-size: 20px;
          font-weight: 300;
        }

        p:nth-child(2) {
          font-weight: 600;
        }
      }
    }
  } */
`;
