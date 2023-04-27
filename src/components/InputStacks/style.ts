import styled from "styled-components";

export const Tags = styled.ul`
	width: 100%;
	max-height: 3rem;
	min-height: 3rem;
	display: flex;
	flex-wrap: wrap;
	align-items: flex-start;
	justify-content: flex-start;
	gap: 10px;
	list-style: none;
	font-size: 14px;
	overflow: hidden;
	background-color: #fff;
	padding: 0.5rem;
	border-bottom: 1px solid var(--primary-3-color);

	& > div {
		width: fit-content;
		display: flex;
		align-items: center;
		gap: 5px;

		li {
			width: fit-content;
			padding: 5px 10px;
			border-radius: 4px;
			border: 1px solid var(--primary-3-color);
			color: var(--primary-3-color);
		}

		span {
			color: var(--primary-3-color);
			cursor: pointer;
		}
	}
`;