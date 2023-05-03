import styled from "styled-components";

export const HeaderStyle = styled.header`
    background-color: var(--gray-color-0);
    height: 85px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0px 8.5%;

        
    img{
        display: flex;
        height: 85px;
        width: 350px;
    }
    button {
        width: fit-content;
        height: fit-content;
        border: none;
        border-radius: 8px;
        padding: 15px 20px;
    }
    .button{
        display: none;
    }

    .signinBtn {
        padding: 15px 20px;
        border: 1px solid black;
        background-color: var(--gray-color-3);
    }

    .signinBtn:hover {
      background-color: white;
      color: black;
      transition: ease-in-out 0.2s;
    }

    /* .signupBtn {
        background-color: var(--primary-color);
        border: 1px solid;
    }
    .signupBtn:hover {
      background-color: white;
      color: black;
      transition: ease-in-out 0.2s;
    } */
        


    @media screen and (min-width: 768px) {
        > div{
            width: 80%;
            max-width: 1300px;

            > div{
            width: max-content;
            margin: 0;
            
                /* > button{
                    font-weight: 200;
                    background-color: white;
                    border: 1px solid rgba(0, 0, 0, 0.15);
                    color: rgba(0, 0, 0, 0.3);
                    box-shadow: none;
                }
                button:hover {
                    background-color: black;
                    border: 1px solid black;
                    color: white;
                    transition: 0.5s ease-in-out;
                } */
            }
        
        }

        nav{
            display: none;
        } 

        .container .button{
            display: block;
        }

    }
    
`