import styled from 'styled-components';

export const Form = styled.form`
	width: 100%;
	max-height: 85vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 10px;

	@media (max-width: 400px) {
		max-width: 90vw;
	}

	input {
		width: 100%;
		height: 55px;
		border: 1px solid var(--primary-3-color);
		border-radius: 4px;
		padding: 0 10px;
		color: var(--primary-3-color);
	}

	input::placeholder {
		color: var(--primar-focus-color);
	}

	input:not(:placeholder-shown) {
		font-weight: 700;
		color: #000;
	}

	.submitButton {
		width: 100%;
	}

	button {
		border-radius: 4px;
		padding: 15px 0;
	}
`;