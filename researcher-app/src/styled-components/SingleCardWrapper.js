import styled from "styled-components";

// SingleCard wrapper styles

const SingleCardWrapper = styled.div`
	width: 320px;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 20px;
	font-family: 'Montserrat', sans-serif;
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.17);
	.title {
		width: 100%;
		font-size: 2rem;
		font-weight: bold;
		text-align: center;
		padding: 10px 0 10px 0;
		color: #fff;
		background-color: #DCA67B;
			span { font-weight: bold; }
	}
	.category {
		font-size: 1.6rem;
		margin-top: 14px;
			span { font-weight: bold; }
	}
	.complete {
		font-size: 1.6rem;
		margin-top: 14px;
			span { font-weight: bold; }
	}
	.link {
		font-size: 1.6rem;
		margin-top: 14px;
			span { font-weight: bold; }
			a {
				text-decoration: none;
				color: #AC4D00;
			}
	}
	.desc-label {
		font-size: 1.8rem;
		font-weight: bold;
		margin: 10px 0 3px;
	}
	.desc-text {
		font-size: 1.8rem;
		width: 90%;
		border: 1px solid black;
		padding: 10px;
		margin: 10px;
	}
	button {
		width: 80px;
		height: 30px;
		margin: 20px;
		font-size: 1.8rem;
		color: white;
		border: none;
		cursor: pointer;
	}
	.time {
		font-style: italic;
		font-size: 1.2rem;
		margin-top: 15px;
	}
	form { margin: 10px 0 14px 0; }
	.update {
		background-color: #AC4D00;
		color: #fff;
		width: 120px;
		height: 40px;
			&:hover {
				background-color: #fff;
				color: #000;
				border: 1px solid #000;
			}
	}
	.delete {
		background-color: #AC4D00;
		color: #fff;
		width: 120px;
		height: 40px;
			&:hover {
				background-color: #fff;
				color: #000;
				border: 1px solid #000;
			}
	}
`;

export default SingleCardWrapper;
