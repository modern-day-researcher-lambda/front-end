import styled from "styled-components";

// Welcome wrapper styles

const WelcomeWrapper = styled.div`


	.welcome-container{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		
		height: 500px;

		background: radial-gradient(262px at 50% 50%, #000000 0%, #00000000 100%);

		.welcome-header {
			border-bottom: 3px solid white;

			color: white;
			font-size: 7.5rem;
			font-family: 'Prata', serif;

			white-space: nowrap;

			@media (max-width: 500px) {
				font-size: 5.5rem
			}
		}

		.welcome-message {
			text-align: center;

			width: 400px;
			margin-top: 30px;

			color: white;
			font-family: 'Caudex', serif;
			font-size: 2.2rem;

			p {
				margin-top: 20px;
			}

			@media (max-width: 500px) {
				font-size: 1.6rem
			}
		}
`;

export default WelcomeWrapper;
