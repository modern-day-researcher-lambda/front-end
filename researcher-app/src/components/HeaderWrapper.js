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

	height: 60px;
	${props => props.height && `height: ${props.height};`}

	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-around;

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
	}

`;


export default HeaderWrapper;
