import styled from "styled-components";

// Register form wrapper styles

const RegisterWrapper = styled.div`

	p {
		font-size: 2rem;
	}

	.error {
		color: red;
	}


	form {
		margin-top: 20px;
		padding: 10px;

		display: flex;
		flex-direction: column;
		align-items: center;

		font-size: 1.8rem;
		border: 1px solid black;

		div {
			display: flex;
			flex-direction: row;
			justify-content: flex-end;
			align-items: center;
		
			label {
				width: 100px;
				margin: 10px 0 10px 10px;
			}

			input {
				width: 240px;
				height: 30px;
				margin: 10px;
				font-size: 1.6rem;
			}

		}

		button {
			font-size: 1.6rem;
			margin: 10px;
		}

	}

`;


export default RegisterWrapper;
