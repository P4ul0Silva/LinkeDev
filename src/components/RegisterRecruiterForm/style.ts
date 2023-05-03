import styled from "styled-components";

interface Props {
  page: boolean;
}

export const Container = styled.div<Props>`
  min-height: 100vh;
  background-color: var(--gray-color-0);
  color: var(--gray-color-3);
  display: ${(props) => {
    if (props.page) return "flex";
    else return "none";
  }};
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  .buttonBack {
    text-decoration: none;
    color: var(--gray-color-0);
    background-color: var(--gray-color-3);
    border: 1px solid var(--gray-color-0);

    width: 120px;
    height: 40px;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 600;
    margin-top: 5px;
    padding: 0px;
  }

  .buttonBack:hover {
    overflow: hidden;
    background-color: var(--gray-color-0);
    color: var(--gray-color-3);
    border: 1px solid var(--gray-color-3);
  }

  .divRegister {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-self: center;
  }

  .landingImage {
    display: none;
  }

  h2 {
    width: 280px;
    height: 36px;
    padding: 10px;
    background-color: var(--primary-2-color);
    border-radius: 10px 10px 0px 0px;
    color: var(--gray-color-0);
    font-size: 14px;
    font-weight: 700;
    text-align: center;
  }

  h3 {
    visibility: hidden;
  }

  @media screen and (max-height: 768px) {
    .landingImage {
      width: 100%;
      min-width: 50vw;
      /* display: flex; */
    }

    @media screen and(max-width: 900px) {
      .landingImage {
        display: none;
      }
    }
  }

  @media (min-width: 900px) {
    display: ${(props) => {
      if (props.page) return "flex";
      else return "none";
    }};
    flex-direction: column;
    min-height: 100vh;
    justify-content: space-between;

    .landingImage {
      width: 100%;
      min-width: 50vw;
      display: flex;
    }
    }

    h3 {
    visibility: visible;
    font-size: 18px;
    margin: -12px 0px 0px 20px;
    }

    .divRegister {
      display: flex;
      flex-direction: column;
      width: 50vw;
    }


  @media (min-width: 900px) {

  .mainLanding {
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }

  .landingImageContainer {
    display: flex;
  }

    h2 {
      width: 300px;
      height: 38px;
      font-size: 14px;
    }

    .landingImage {
      width: 100%;
      min-width: 50vw;
      display: flex;
    }
  }
`;

// export const Header = styled.header`
//   display: flex;
//   align-items: center;
//   justify-content: center;

//   .logoLinke {
//     width: 250px;
//     margin-top: 20px;
//   }

//   @media (min-width: 900px) {
//     display: none;
//   }
// `;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
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

  select {
    box-sizing: border-box;

    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px 12px;
    gap: 8px;

    width: 280px;
    height: 38px;

    background-color: #d0cbd3;

    border: 1px solid var(--gray-color-0);
    border-radius: 4px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 22px;

    color: #343b41;
  }

  p {
    color: #b9030f;
    font-size: 9px;
    font-weight: 600;
  }

  .back {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }

  .buttonRegister {
    width: 120px;
    height: 40px;
    margin-right: 2px;
    border-radius: 8px;
    font-size: 16px;
    margin-top: 5px;
    padding:0px;
  }

  .buttonRegister:hover {
    background-color: var(--primary-focus-color);
  }

  @media (min-width: 900px) {
    width: 300px;

    label {
      font-size: 10px;
    }

    input {
      width: 300px;
      height: 30px;
    }

    select {
      width: 300px;
      height: 30px;
    }
  }
`;
