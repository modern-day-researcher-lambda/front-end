import styled from "styled-components";

// Cards wrapper styles

const CardsWrapper = styled.div`

	width: 100vw;
	max-width: 1200px;
	display: flex;


	.card-container {

		width: 100%;

		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}


	.categories {
		width: 19%;
		min-width: 160px;
		height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		border-right: 1px solid #CCC;

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

		button.selected-cat {
			background-color: grey;
		}

	}

	.cards {
		width: 80%;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-around;
		align-items: flex-start;
		align-content: flex-start;
		

	}

`;


export default CardsWrapper;
