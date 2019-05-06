import styled from "styled-components";

// Card form wrapper styles

const CardFormWrapper = styled.div`

	background: linear-gradient(113.88deg, #f5f5dc 14.66%, #b6b6a0 83.68%);

	font-family: 'Montserrat', serif;
	box-shadow: 20px 20px 30px rgba(0, 0, 0, 0.75);
	p {
		font-size: 2rem;
	}
	.error {
		color: red;
	}
	.header-container {
		display: flex;
		justify-content: center;
		align-items: center;
		
		height: 50px;
		width: 100%;
		background-color: #DCA67B;
		h1 {
			color: #FFF;
			font-size: 3rem;
			text-align: center;
			
		}
	}
	form {
		margin-top: 20px;
		padding: 10px;
		display: flex;
		flex-direction: column;
		align-items: center;
		font-size: 1.8rem;
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
		.button-container {
			display: flex;
			justify-content: space-between;
			margin-left: 127px;
			width: 300px;
			margin-botton: 10px;
			
			button {
				background-color: #AC4D00;
				font-size: 1.8rem;
				color: #fff;
				width: 140px;
				height: 40px;
				cursor: pointer;
				&:hover {
					background-color: #fff;
					color: #000;
					border: 1px solid #000;
				}
			}
		}
	}
	@media (max-width: 500px) {
		form {
			div {
				label {
					width: 120px;
				}
				input {
					width: 200px;
				}
				textarea {
					width: 200px;
				}
			}
			.button-container {
				width: 200px;
	
				button {
					width: 90px;
				}
			}
		}
		width: 90%%;
	}
`;


export default CardFormWrapper;
