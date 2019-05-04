import styled from "styled-components";

// Cards wrapper styles

const CardsWrapper = styled.div`

	width: 100vw;
	max-width: 1024px;
	border: 1px solid black;
	display: flex;


	.card-container {
		border: 1px solid red;

		width: 100%;

		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}


	.categories {
		border: 1px solid green;
		width: 15%;
		display: flex;
		flex-direction: column;
		align-items: center;

		p {
			font-size: 1.8rem;
			margin: 5px 0;
		}

		button {
			width: 90%;
			height: 30px;
			margin: 5px 0;
			font-size: 1.6rem;
			color: white;
			background-color: dodgerblue;
			border: none;
		}

	}

	.cards {
		border: 1px solid blue;
		width: 84%;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-around;
		align-content: center;
		align-items: center;

	}

`;


export default CardsWrapper;
