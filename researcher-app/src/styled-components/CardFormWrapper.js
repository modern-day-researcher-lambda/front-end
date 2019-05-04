import styled from "styled-components";

// Card form wrapper styles

const CardFormWrapper = styled.div`

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
				width: 120px;
				margin: 10px 0 10px 10px;
			}

			input {
				width: 300px;
				height: 30px;
				margin: 10px;
				padding: 5px;
				font-size: 1.6rem;
			}


			textarea {
				width: 300px;
				min-height: 200px;
				margin: 10px;
				padding: 5px;
				font-size: 2rem;
			}

		}

		button {
			font-size: 1.8rem;
			width: 60px;
			height: 30px;
			margin: 10px;
		}

	}

`;


export default CardFormWrapper;
