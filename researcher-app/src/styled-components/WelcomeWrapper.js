import styled from "styled-components";

// Welcome wrapper styles

const WelcomeWrapper = styled.div`

	max-width: 800px;
	
	margin-top: 20px;
	background-color: beige;

	display: flex;
	flex-direction: column;
	align-items: center;
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.17);
	font-family: 'Montserrat', serif;
	h1 {
		padding: 3rem;
		margin-bottom: 5px;
		width: 100%;
		color: #FFFFFF;
		font-size: 5rem;
		text-align: center;
		background: #DCA67B;
	}
	p {
		font-size: 2rem;
		margin: 30px;
		text-align: center;
	}
`;


export default WelcomeWrapper;
