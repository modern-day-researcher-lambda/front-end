import styled from "styled-components";

// Header wrapper styles

const HeaderWrapper = styled.div`

	width: 100%;
	background-color: white;
	border-bottom: 1px solid #CCC;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 2;

	height: 80px;

	display: flex;
	flex-direction: column;
	justify-content: center;

	.logged-in {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;

		.greet {
			border: 1px solid black;
			font-size: 1.8rem;
			padding: 10px 20px;
		}
	}


	.logged-out {
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		align-items: center;
		margin: 0 50px;
	}


	a {
		height: 40px;
		width: 100px;
		background-color: dodgerblue;
		color: white;

		display: flex;
		justify-content: center;
		align-items: center;

		font-size: 1.6rem;
		text-decoration: none;
		cursor: pointer;

		margin: 0 20px;
	}

`;


export default HeaderWrapper;
