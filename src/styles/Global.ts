import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`

:root{
  //primary colors
  --primary-color: #A54BDC;
  --primary-focus-color: #5B2E76;
  --primary-2-color: #3E1E51;
  --primary-2-focus-color: #BF90DC;
  --primary-3-color: #45205C;


  //gray scale
  --gray-color-0:#fff;
  --gray-color-1:#9C95A0;
  --gray-color-2:#29262C;
  --gray-color-3:#131213;
  --gray-color-new: #FBFAFA;
  --gray-color-light: #F6F5F6;

  --black: #000000;
  
  //feedback palette
  --sucess-color:#48AD18;
  --negative-color:#FA5640;

  --box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.1);

  --font-family-1: 'Roboto', sans-serif;
  --font-family-2: 'Montserrat', sans-serif;

}


*{
    margin:0px;
    padding: 0px;
    outline: 0px;
    box-sizing: border-box;   
}

body{
    background: var(--gray-color-4);
    color: var(--gray-color-3);
    -webkit-font-smoothing: antialiased;
    font-family: var(--font-family-1);
    width: 100%;
    overflow-x: hidden;
}

h1, h2, h3, h4, h5, h6, strong{
    font-weight: 500;
} 

button{
    cursor: pointer;

    background-color: var(--primary-3-color);
    color: var(--gray-color-0);
    font-weight: 600;
    border: none;
}

button:hover{
    background-color: var(--primary-focus-color);
    color: #FFFFFF;
}

::-webkit-scrollbar{
    width: 7px;
}

::-webkit-scrollbar-track{
    background: var(--gray-color-1);
    margin: 1rem;
    border-radius: 1.6rem;
}

::-webkit-scrollbar-thumb{
    background: var(--primary-negative-color);
    border-radius: 1.6rem;
}

::-webkit-scrollbar-thumb:hover{
    background: var(--primary-focus-color);
}

button {
    border-radius: 4px;
}

@keyframes modalSlide {
  from {
    transform: translateY(100%);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
}

`;

export default Global;
