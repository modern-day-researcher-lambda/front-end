import styled from "styled-components";

// Cards wrapper styles

const CardsWrapper = styled.div`

	width: 100vw;
	max-width: 1024px;
	display: flex;


	.card-container {

		width: 100%;

		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}


	.categories {
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
