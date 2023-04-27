import styled from "styled-components";

interface Props {
  page: boolean;
}

export const Container = styled.div<Props>`
  /* width: 100vw;
  max-height: 100vh; */
  height: 100vh;
  background-color: var(--gray-color-0);
  color: var(--gray-color-3);
  display: ${(props) => {
    if (props.page) return "flex";
    else return "none";
  }};

  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  h3 {
    font-size: 22px;
    text-align: center;
    /* padding: 10px; */
  }

  /* svg desktop */
  .imgLogin {
    display: none;
  }

  .logoLinke2 {
    display: none;
  }

  .vector {
    width: 100%;
    min-height: 100%;
    position: relative;
    bottom: 174px;
    background-size: 100vw;
    background-repeat: no-repeat;
    background-size: 100vw;
  }

  .optionDev:hover {
    color: var(--primary-color);
  }

  .optionRecruiter:hover {
    color: var(--primary-color);
  }

  /* ===================================================== */

  @media (min-width: 800px) {
    .vector {
      display: none;
    }
    .div {
      /* width: 83.9%; */
      /* max-width: 1464px; */
      /* margin: 0px 8%; */
      margin: 0px 8.5%;
      height: 100vh;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }

    .divImgDesktop {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      /* width: 50vw;
      max-width: 900px; */
    }

    .logoLinke2 {
      display: flex;
      width: 350px;
      height: 120px;
      /* margin-top: 4px; */
    }

    h3 {
      text-align: left;
      font-size: 18px;
      margin-left: 15px;
      margin-bottom: 50px;
      /* margin-bottom: 60px; */
      padding: 0px 0px 2px 5px;
      
    } 

    .imgLogin {
      display: flex;
      width: 100%;
      margin-top: -40px;
    }
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;

  .logoLinke {
    width: 250px;
    margin-top: 20px;
  }
  /* ===================================================== */
  @media (min-width: 800px) {
    display: none;
  }
`;

export const Div = styled.div`
  .text {
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: center;
    top: 80px;
    color: var(--gray-color-3);
    text-align: center;
    gap: 40px;
    z-index: 4;
  }
  h2 {
    font-size: 16px;
  }

  h4 {
    font-size: 20px;
    font-weight: 600;
  }

  span {
    cursor: pointer;
    margin: 2px;
    text-decoration: underline;
  }

  span:hover {
    cursor: pointer;
    margin: 2px;
    text-decoration: underline var(--primary-2-color);
    overflow: hidden;
  }

  .buttonBack {
    text-decoration: none;
    color: var(--gray-color-0);
    background-color: var(--gray-color-3);
    border: 1px solid var(--gray-color-0);

    width: 120px;
    height: 40px;
    margin-top: 10px;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 600;
  }

  .buttonBack:hover {
    overflow: hidden;
    background-color: var(--gray-color-0);
    color: var(--gray-color-3);
    border: 1px solid var(--gray-color-3);
  }

  /* ===================================================== */

  @media (min-width: 800px) {
    /* width: 45vw; */
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: space-between;
    /* margin-bottom: 200px; */
    margin: auto;
    width: 46%;

    .text {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      text-align: start;
      gap: 50px;
      /* margin-bottom: 100px; */
    }

    h2 {
      font-size: 22px;
    }

    h4 {
      font-size: 24px;
      font-weight: 600;
    }

    span {
      cursor: pointer;
      margin: 4px;
      text-decoration: underline;
    }

    span:hover {
      cursor: pointer;
      margin: 4px;
      text-decoration: underline var(--primary-2-color);
      overflow: hidden;
    }
  }
`;
