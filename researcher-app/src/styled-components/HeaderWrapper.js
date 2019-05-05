import styled from "styled-components";

// Header wrapper styles

const HeaderWrapper = styled.div `
	width: 100%;
	background-image: linear-gradient(180deg, #AC4D00 0%, #5f2b00 100%, #8A3E00);
	border-bottom: 1px solid #8A3E00;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 2;
	height: 80px;
	display: flex;
	flex-direction: row;
	justify-content: center;
	webkit-box-shadow: 0 8px 6px -6px black;
	-moz-box-shadow: 0 8px 6px -6px black;
	box-shadow: 0 2px 6px 2px black;
			
	.header-content {
		max-width: 1024px;
		width: 100%;
		color: white;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	.left {
		width: 34%;
		font-size: 1.8rem;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
	}

	.right {
		width: 34%;
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		align-items: center;
	}

	.center {
		width: 30%;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		text-align: center;
		font-size: 3rem;
	}

	.greet {
		font-size: 1.8rem;
		padding: 10px;
	}

	a {
		height: 40px;
		width: 100px;
		background-color: #DCA67B;
		color: white;
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		
		font-size: 1.6rem;
		font-family: 'Caudex', serif;
		text-decoration: none;
		cursor: pointer;
		margin: 0 10px;
		webkit-box-shadow: 0 8px 6px -6px black;
		box-shadow: 0px 4px 3px rgba(0, 0, 0, 0.35);
	}

	a:hover {
		background-image: linear-gradient(180deg, #AC4D00 0%, #5f2b00 100%, #8A3E00);
		background-color: #AC4D00;
		border-bottom: 2px solid #5f2b00;
		border-left: 2px solid  #AC4D00;
		border-top: 1px solid #DCA67B; 
		border-right: 1px solid #DCA67B;
	}

	.show-cats {
		height: 40px;
		width: 100px;
		background-color: #DCA67B;
		color: white;
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		
		font-size: 1.6rem;
		font-family: 'Caudex', serif;
		text-decoration: none;
		cursor: pointer;
		margin: 0 10px;
		webkit-box-shadow: 0 8px 6px -6px black;
		box-shadow: 0px 4px 3px rgba(0, 0, 0, 0.35);
	}
	
	.show-cats:hover {
		background-image: linear-gradient(180deg, #AC4D00 0%, #5f2b00 100%, #8A3E00);
		background-color: #AC4D00;
		border-bottom: 2px solid #5f2b00;
		border-left: 2px solid  #AC4D00;
		border-top: 1px solid #DCA67B; 
		border-right: 1px solid #DCA67B;
	}


	//media query for mobile
	@media only screen and (max-width: 700px){
		.left > a {
			padding-left: 20px;
		}
		.center {
			font-size: 24px;
		}
	}

	
	@media only screen and (max-width: 525px) {
		.left > a  {
			padding: 5px;
		}

		.center {
			font-size: 23px;
		
		}

	  }

`;



export default HeaderWrapper;

