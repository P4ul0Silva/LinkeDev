import styled from "styled-components";

export const SubsContainer = styled.div`
  width: 100%;
  display: flex;

  justify-content: space-between;
  flex-direction: column;

  .backArrow {
    display: flex;
    align-self: flex-end;
  }

  svg {
    cursor: pointer;
    color: var(--primary-3-color);
    background: transparent;

    &:hover {
      color: var(--primary-focus-color);
    }
  }
`;
