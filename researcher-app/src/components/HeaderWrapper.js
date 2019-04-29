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

`;


export default HeaderWrapper;
