import styled from "styled-components";

export const Tags = styled.ul`
	width: 100%;
	max-height: 3rem;
	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
	list-style: none;
	font-size: 14px;
	overflow-x: scroll;
	background-color: #fff;
	

	& > div {
		width: fit-content;
		display: flex;
		align-items: center;
		gap: 5px;
		margin-left: 5px;

		li {
			display: inline;
			width: fit-content;
			border-radius: 4px;
			padding: 0px 2px;
			border: 1px solid var(--primary-3-color);
			color: var(--primary-3-color);
		}

		span {
			color: var(--primary-3-color);
			cursor: pointer;
		}
	}
`;