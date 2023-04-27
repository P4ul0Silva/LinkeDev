import styled from "styled-components";

export const Container = styled.header`
    box-shadow: var(--box-shadow);

    .container{
        background-color: var(--gray-color-0);
        height: 85px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 30px;
        margin: auto;
            
        img{
            height: 50px;
            width: 205px;
            margin-top: 8px;
        }

        .button{
            display: none;
        }
        
    }


    @media screen and (min-width: 768px) {
        > div{
            width: 80%;
            max-width: 1300px;

            > div{
            width: max-content;
            margin: 0;
            
                > button{
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
                }
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