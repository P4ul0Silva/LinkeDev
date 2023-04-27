import styled from "styled-components";

interface Props {
  page: boolean;
}

export const Container = styled.div<Props>`
  display: flex;
  flex-direction: column;
  width: 100vw;
  min-height: 100vh;
  background-color: var(--gray-color-0);
  /* display: ${(props) => {
    if (props.page) return "block";
    else return "none";
  }}; */
  /* display: flex; */

  .div {
    margin: auto;
  }

  .buttonBack {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: var(--gray-color-0);
    background-color: var(--gray-color-3);
    border: 1px solid var(--gray-color-0);
    text-align: center;

    width: 120px;
    height: 40px;
    margin-top: 10px;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 500;
  }

  .buttonBack:hover {
    overflow: hidden;
    background-color: var(--gray-color-0);
    color: var(--gray-color-3);
    border: 1px solid var(--gray-color-3);
  }

  .divLogin {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .imgLogin {
    display: none;
  }

  h2 {
    width: 280px;
    height: 36px;
    padding: 10px;
    background-color: var(--primary-2-color);
    border-radius: 10px 10px 0px 0px;
    margin-top: 20px;
    color: var(--gray-color-0);
    font-size: 14px;
    font-weight: 700;
    text-align: center;
  }

  h3 {
    /* visibility: hidden; */
    font-weight: 200;
  }

  .logoLinke2 {
    display: none;
  }

  @media (min-width: 900px) {
    display: ${(props) => {
      if (props.page) return "flex";
      else return "none";
    }};
    flex-direction: column;
    /* justify-content: flex-end; */

    .div {
      display: flex;
      flex-direction: row;
      /* justify-content: space-evenly; */
      
    }
    .divImgDesktop {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .logoLinke2 {
      display: flex;
      width: 350px;
      height: 120px;
      /* margin-left: 21px; */
    }

    h3 {
      visibility: visible;
      font-size: 18px;
      font-weight: 300;
      margin-bottom: 60px;
      /* margin-left: 40px; */
    }

    .imgLogin {
      display: flex;
      width: 100vh;
      /* margin-top: 80px; */
    }

    .divLogin {
      /* margin-right: 20px; */
      display: flex;
      justify-content: center;
    }
  }

  @media (min-width: 1100px) {
    flex-direction: column;
    /* justify-content: flex-end; */
    .div {
      margin: 0px 8.5%;
      height: 100vh;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      /* justify-content: space-evenly; */
    }

    h3 {
      text-align: center;
      margin-bottom: 10px;
      /* margin-left: 40px; */
    }

    .imgLogin {
      display: flex;
      width: 88.6%;
      /* margin-top: 10px; */
    }

    .divLogin {
      /* margin-right: 40px; */
    }

    h2 {
      width: 300px;
      height: 38px;
      font-size: 14px;
    }
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;

  .logoLinke {
    width: 258px;
    margin-top: 20px;
  }

  @media (min-width: 900px) {
    display: none;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  width: 280px;

  label {
    color: var(--gray-color-3);
    font-size: 12px;
    font-weight: 600;
    margin-bottom: 4px;
    margin-top: 4px;
  }

  input {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px 12px;
    gap: 8px;

    width: 280px;
    height: 38px;

    background-color: #d0cbd3;

    box-sizing: border-box;
    border: 1px solid var(--gray-color-0);
    border-radius: 4px;

    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 22px;

    color: #343b41;
  }

  p {
    color: #b9030f;
    font-size: 10px;
    font-weight: 600;
  }

  .back {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }

  .buttonLogin {
    width: 120px;
    height: 40px;
    margin-top: 10px;
    background: var(--primary-2-color);
    border: none;
    color: var(--gray-color-0);
    border-radius: 8px;
    border: 1px solid var(--primary-2-color);
    font-size: 16px;
    font-weight: 500;
  }

  .buttonLogin:hover {
    background-color: var(--primary-focus-color);
  }

  @media (min-width: 900px) {
    margin-bottom: 40px;
  }

  @media (min-width: 1100px) {
    width: 300px;

    input {
      width: 300px;
      height: 38px;
    }
  }
`;
