import styled from "styled-components";

export const Container = styled.nav`
    color: var(--gray-color-3);
    width: max-content;

    .dropdown{
        height: max-content;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        position: absolute;
        top: 70px;
        box-shadow: var(--box-shadow);
        transform: translateX(-70%);
        transition: position 0.5s;
        width: max-content;

        background-color: var(--gray-color-0);
        color: var(--primary-3-color);
        border-radius: 8px;

        button{
            border: 0;
            background: transparent;
            color: var(--primary-3-color);
            font-size: 16px;
            font-weight: 600;
            display: flex;
            align-items: center;
            gap: 5px;
            width: 100%;
            padding: 15px;      
            
            svg{
                width: 30px;
            }
        }

        button:hover{
            background-color: var(--primary-2-focus-color);
            opacity: 0.8;
        }
    }
`