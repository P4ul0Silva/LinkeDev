import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0px;
  left: 0px;
  right: 0px;

  padding: 0px 10px 24px 10px;
  gap: 16px;

  border-radius: 4px;
  background-color: #2c2c2c;
  animation:modalSlide 0.3s ease-out forwards;
  transform: translateY(50%);



  .modal {
    background-color: #fff;
    margin-top: 10px;
    padding: 10px 10px 0px 10px;
    border: 1px solid #b1b5ba;
    border-radius: 4px;
    overflow-y: scroll;
  }

  @media (min-width: 900px) {
    .modal {
      padding: 10px 20px 14px 20px;
      border-radius: 8px;
      overflow-y: hidden;
    }
  }
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 0px 0px 40px 0px;
  color: var(--gray-color-3);
  gap: 14px;

  h2 {
    width: 100%;
    padding: 25px;
    background-color: #f6f5f6;
    text-align: center;
    font-size: 18px;
    border-radius: 4px;
    font-weight: 700;
  }

  .vectorBack {
    width: 22px;
  }

`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 10px 14px 10px;

  border-radius: 4px;
  color: var(--gray-color-3);
  background-color: #f6f5f6;

  .divModal {
    margin-bottom: 10px;
  }

  .perfilDev {
    display: none;
  }

  .formdev {
    display: flex;
    flex-direction: column;
  }

  label {
    font-weight: 500;
    font-size: 11px;
  }

  input {
    padding: 0px 12px;
    margin-bottom: 10px;

    width: 230px;
    height: 32px;

    background: #d0cbd3;
    box-sizing: border-box;
    border: 1px solid #f8f9fa;
    border-radius: 4px;

    font-weight: 400;
    font-size: 12px;
    line-height: 22px;

    color: #000;
  }

  .formdev2 {
    display: flex;
    flex-direction: column;
  }

  textarea {
    padding: 6px;
    height: 80px;
    border: 1px solid #fff;
    background: #d0cbd3;
  }

  .divButton {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    /* background-color: #d0cbd3; */
  }

  .buttonEdit {
    width: 120px;
    height: 40px;
    margin-right: 2px;
    margin-bottom: 10px;
    margin-top: 10px;
    border-radius: 8px;
    font-size: 16px;
  }

  .buttonEdit:hover {
    background-color: var(--primary-focus-color);
  }

  @media (min-width: 900px) {
    .divModal {
      display: flex;
      flex-direction: row;
      margin-bottom: 20px;
      border-bottom: solid 1px black;
      gap: 50px;
    }

    .formdev {
      justify-content: space-around;
      margin: 5px 0;
    }

    label {
      font-size: 12px;
    }

    .perfilDev {
      margin-left: 70px;
      margin-bottom: 10px;
      padding: 2px;
      display: flex;
      width: 105px;
      height: 105px;
      border-radius: 50%;
      object-fit: cover;
    }

    textarea {
      margin-bottom: 20px;
    }
  }
`;
