import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;

  .title {
    text-align: center;
    margin: 15px;
    font-family: var(--font-family-2);
    h2 {
      font-weight: 400;
    }
  }

  .recruiterContainer {
    display: flex;
    margin: 30px;
    justify-content: space-evenly;
  }

  .recruiterMain {
    display: flex;
    flex-direction: column;
    gap: 30px;

    min-width: 700px;
    width: 65%;
    border: 1px solid lightgray;
    border-radius: 8px;

    background-color: var(--gray-color-new);
  }

  .recruiterMainHeader {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;

    nav {
      display: flex;
      align-items: center;
      justify-content: space-evenly;

      width: 100%;
    }

    .buttons {
      button {
        padding: 10px;
      }
      display: flex;
      gap: 12px;
    }

    .search {
      display: flex;
      /* height: 32px; */

      input {
        border: 1px solid #b1b5ba;
        border-radius: 5px 0 0 5px;
        padding: 11px 5px;
      }

      button {
        width: 66px;
        border: 1px solid #b1b5ba;
        border-left: 0px;
        border-radius: 0 5px 5px 0;

        background-color: #ffffff;
      }

      svg {
        color: var(--primary-3-color);

        &:hover {
          color: var(--primary-focus-color);
        }
      }
    }

    .filter {
      display: flex;
      align-items: center;

      p {
        font-size: 12px;
        span {
          font-size: 16px;
        }
      }
      select {
        height: 38px;
        border-radius: 5px;
        border: 1px solid #b1b5ba;
      }

      svg {
        cursor: pointer;
      }

      .filterOptions {
        text-align: center;

        p {
          font-size: 16px;
        }
      }
    }
  }

  .recruiterMainList {
    width: 100%;
    padding: 40px 55px;

    .btnArrowBack {
      position: relative;
      right: 0;
      cursor: pointer;
    }

    ul {
      display: flex;
      flex-direction: column;
      gap: 30px;
    }

    overflow-x: hidden;
    clip-path: clip;

    .card:nth-child(1) {
      animation-delay: 0s;
      /* transform-origin: 0, 0; */
      /* transform: translateX(800px); */
    }
    .card:nth-child(2) {
      animation-delay: 0.1s;
      /* transform-origin: 0, 0; */
      /* transform: translateX(800px); */
    }
    .card:nth-child(3) {
      animation-delay: 0.2s;
      /* transform-origin: 0, 0; */
      /* transform: translateX(800px); */
    }
    .card:nth-child(4) {
      animation-delay: 0.3s;
      /* transform-origin: 0, 0; */
      /* transform: translateX(800px); */
    }
    .card:nth-child(5) {
      animation-delay: 0.35s;
      /* transform-origin: 0, 0; */
      /* transform: translateX(800px); */
    }
    .card:nth-child(6) {
      animation-delay: 0.4s;
      /* transform-origin: 0, 0; */
      /* transform: translateX(800px); */
    }
    .card:nth-child(7) {
      animation-delay: 0.45s;
      /* transform-origin: 0, 0; */
      /* transform: translateX(800px); */
    }
    .card:nth-child(8) {
      animation-delay: 0.5s;
      /* transform-origin: 0, 0; */
      /* transform: translateX(800px); */
    }
    .card:nth-child(9) {
      animation-delay: 0.55s;
      /* transform-origin: 0, 0; */
      /* transform: translateX(800px); */
    }
    .card:nth-child(10) {
      animation-delay: 0.6s;
      /* transform-origin: 0, 0; */
      /* transform: translateX(800px); */
    }
  }

  .card {
    border: 1px solid transparent;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px;

    line-height: 25px;
    gap: 10px;

    animation: cheguei 0.4s both;

    cursor: pointer;
    &:hover {
      transition: 0.2s ease;
      border: 1px solid lightgrey;
      border-radius: 8px;
      background-color: #ffffff;
    }
  }

  @keyframes cheguei {
    from {
      transform-origin: 0, 0;
      transform: translateX(800px);
      opacity: 0;
      transition-property: transform, opacity;
      transition-duration: 1s;
      transition-timing-function: ease;
    }
    to {
      transform: translateX(0);
      opacity: 100%;
    }
  }

  .pic {
    img {
      height: 80px;
      border-radius: 50%;
    }
  }

  .content {
    width: 100%;

    display: flex;
    justify-content: space-between;
  }

  .presentation {
    span {
      font-size: 12px;
    }
  }

  .details {
    display: flex;
    flex-direction: column;

    text-align: end;
  }
`;
