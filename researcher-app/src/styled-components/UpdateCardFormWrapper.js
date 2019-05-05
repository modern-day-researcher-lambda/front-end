import styled from "styled-components";

// Update Card Form wrapper styles

const UpdateCardFormWrapper = styled.div`
	font-family: 'Montserrat', serif;
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.17);
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
`;


export default UpdateCardFormWrapper;
