import styled from "styled-components";

export const Container = styled.div`
    .job span{
        font-size: 14px;
        margin-right: 5px;
    }
    .job div{
        display: flex;
        flex-direction: column;
        gap: 10px;
     }
    .job h3{
        font-size: 20px;
        font-weight: 600;
        color: var(--primary-3-color);
    }

    .stack{
          background-color: var(--primary-3-color);
          color: var(--gray-color-0);
          padding: 3px 5px;
          border-radius: 5px;
    }
    .ticket{
        text-decoration: line-through;
    }
`