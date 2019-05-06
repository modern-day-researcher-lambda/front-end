import styled from "styled-components";

// Cards wrapper styles

const CardsWrapper = styled.div`
	width: 100vw;
	max-width: 1100px;
	display: flex;

		.card-container {
			width: 100%;
			display: flex;
			flex-flow: column wrap;
			justify-content: center;
			align-items: center; 
				@media(min-width: 600px) {
					flex-flow: row nowrap;
					align-items: flex-start;
				}
		}

		.categories {
			background: linear-gradient(113.88deg, #f5f5dc 14.66%, #b6b6a0 83.68%);

			display: flex;
			flex-flow: column wrap;
			align-items: center;
			width: 250px;
			padding: 20px;
			box-shadow: 20px 20px 30px rgba(0, 0, 0, 0.75);
				@media(min-width: 600px) { margin-top: 20px; }
			
			p {
				font-size: 1.8rem;
				margin: 5px 0;
				font-family: 'Prata', serif;
				padding: 6px 20px 6px 20px;
			}

			button {
				width: 90%;
				height: 30px;
				margin: 5px 0;
				font-size: 1.6rem;
				color: white;
				word-wrap: normal;
				background-color: #DCA67B;
				border: none;
				cursor: pointer;
					&:hover { background-color: #AC4D00; }
			}
			button.selected-cat { background-color: #AC4D00; }
		}

		.hide {
			display: none;
		}

		.cards {
			display: flex;
			flex-flow: column wrap;
			justify-content: space-around;
			align-items: flex-start;
			align-content: flex-start;
				@media(min-width: 1100px) {
					width: 800px;
					flex-flow: row wrap;
					justify-content: flex-end;
				}
		}
`;

export default CardsWrapper;
