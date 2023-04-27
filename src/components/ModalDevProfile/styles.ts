import styled from "styled-components";

export const Container = styled.div`
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

    .devProfile{
        position: relative;
        width: 80vw;
        max-width: 900px;
        height: max-content;
        background: var(--gray-color-0);
        border-radius: 8px;
        padding-bottom: 10px;


        header{
            display: flex;
            align-items: center;
            flex-direction: column;
            gap: 20px;
            background-color: var(--primary-3-color);
            height: 100px;
            width: 100%;

            .buttonClose{
                align-self: flex-end;
                transform: translateY(-10px);
                background-color: var(--gray-color-0);
                border-radius: 50%;
                padding: 8px;
            }

            img{
                border-radius: 50%;;
                width: 120px;
                height: 120px;
                object-fit: cover;
            }

        }

        .devDetails{
            margin-top: 120px;
            display: flex;
            flex-direction: column;
            gap: 20px;
            padding: 30px 20px;

            section{
                width: 100%;
                background: var(--gray-color-light);
                padding: 15px;
                border-radius: 8px;
                display: flex;
                flex-direction: column;
                gap: 10px;

                h2{
                    text-align: center;
                }

                p{
                    display: flex;
                    align-items: center;
                    gap: 5px;
                    max-width: 45ch;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
            }

            .devStacks{
                display: flex;
                align-items: center;
                flex-wrap: wrap;
                gap: 5px; 
                margin-top: 10px ;
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
        
        .emailButton{  
            margin: 0 auto 10px auto;
            border-radius: 8px;
            background-color: var(--primary-3-color);
            padding: 15px 30px;
            color: var(--gray-color-0);
            text-decoration: none;
            width: max-content;
        }

    }


    @media screen and (min-width: 768px) {
        .devProfile header{
            height: 150px;
        }

        .devProfile header img{
            width: 180px;
            height: 180px;
            margin-top: 30px;
            object-fit: cover;
        }

        .devProfile .devDetails{
                flex-direction: row;
                justify-content: space-between;
                margin-top: 150px;

                section{
                    width: calc(50% - 15px);
                }
            } 
    }

`