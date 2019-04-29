import styled from "styled-components";

// HeaderSpacer styles
// Note--the purpose of this component is to match the vertical
// spacing of the Header so that lower content is not hidden

const HeaderSpacer = styled.div`

	width: 100%;
	
	height: 60px;
	${props => props.height && `height: ${props.height};`}

`;


export default HeaderSpacer;
