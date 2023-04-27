import styled from "styled-components";

export const HeaderModal = styled.header`
	width: 100%;
	height: 4rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding-bottom: 20px;

	h3 {
		color: var(--gray-color-3);
		font-size: 18px;
	}
`;

export const Container = styled.div`
	width: 100vw;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: rgba(0, 0, 0, 0.55);
	position: absolute;
	font-size: 14px;
	color: var(--gray-color-3);
	font-family: "Roboto", sans-serif;
	top: 0;
	left: 0;

	@media (max-width: 400px) {
		min-width: 90vw;
		min-height: 100vh;
	}

	.modalFrame {
		width: 100vw;
		max-height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		@media (max-width: 400px) {
			max-width: 90vw;
		}
	}

	.modal-body {
		width: 400px;
		max-height: fit-content;
		background: var(--gray-color-0);
		border-radius: 4px;
		padding: 20px;
		box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.5);
		border-top: 1px solid var(--primary-3-color);
		border-bottom: 1px solid var(--primary-3-color);

		@media (max-width: 400px) {
			max-width: 90vw;
		}
	}

	.submitButton {
		width: 100%;
		background: var(--primary-3-color);
	}

	.closeButton {
		width: fit-content;
		height: fit-content;
		padding: 10px;
		background: transparent;
		color: var(--gray-color-3);
	}
`;
