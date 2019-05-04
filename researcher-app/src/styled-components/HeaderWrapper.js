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
	flex-direction: row;
	justify-content: center;


	.header-content {
		max-width: 1024px;
		width: 100%;

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

		font-size: 3rem;

	}

	.greet {
		font-size: 1.8rem;
		padding: 10px;
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

		margin: 0 10px;
	}

`;


export default HeaderWrapper;
