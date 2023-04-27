import styled from "styled-components";

export const ContainerModal = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    z-index: 1;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0,0,0,0.8);
    overflow-y: scroll;

    animation:modalSlide 0.3s ease-out forwards;
    transform: translateY(50%);
`

export const Container = styled.div`
    position: relative;
    width: 80vw;
    max-width: 700px;
    height: max-content;
    background: var(--gray-color-0);
    border-radius: 8px;
    padding-bottom: 10px;

    header{
        display: flex;
        gap: 10px;
        background-color: var(--primary-3-color);
        min-height: 120px;
        width: 100%;
        padding: 20px;

        div{
            display: flex;
            flex-direction: column;
            width: 80%;
            gap: 20px;
            color: var(--gray-color-0);
            padding: 10px;

            span{
                font-size: 12px;
            }
        }

        .buttonClose{
            align-self: flex-start;
            transform: translateY(-20px) translateX(15px);
            background-color: var(--gray-color-0);
            border-radius: 50%;
            padding: 8px;
        }
    }

    .modalContent{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 10px;
        padding: 20px 10px; 
        height: max-content;
        
        section{
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            background-color: var(--gray-color-light);
            border-radius: 5px;
            padding: 10px;

            h2{
                font-size: 19px;
                text-align: center;
            }
        }

        .jobDescription{
            gap: 20px;
            justify-content: flex-start;

            >p{
                display: flex;
                align-items: center;
                flex-wrap: wrap;
                gap: 5px;
            }

            .stack{
                text-transform: capitalize;
                background: rgb(77,22,122);
                background: linear-gradient(90deg, rgba(77,22,122,1) 13%, rgba(187,154,240,0.835171568627451) 94%);
                padding: 5px 10px;
                border-radius: 5px;
                color: var(--gray-color-0);
                font-weight: 500;
            }
        }

        .jobDetails{
            justify-content: space-between;
            padding: 30px 10px 20px ;

            p{
                display: flex;
                align-items: center;
                gap: 5px;
                margin-bottom: 5px;
            }

            > button{
                margin-top: 20px;
                align-self: center;
            }
        }

    }


    @media screen and (min-width: 768px){
        .modalContent{
            flex-direction: row;
        
            section{
                width: calc(50% - 10px);
            }
        }
    }

` 