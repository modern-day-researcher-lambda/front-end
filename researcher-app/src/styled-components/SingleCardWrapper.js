import styled from "styled-components";

// SingleCard wrapper styles

const SingleCardWrapper = styled.div`

	width: 380px;

	display: flex;
	flex-direction: column;
	align-items: center;

	border: 1px solid black;
	border-radius: 10px;
	margin: 20px;

	.title {
		font-size: 2rem;
		font-weight: bold;
		margin: 15px 0 5px;
	}

	.category {
		font-size: 1.6rem;
		margin: 2px;
		padding: 5px;
		background-color: #DDD;
	}

	.complete {
		font-size: 1.6rem;
		margin: 2px;

		span {
			font-weight: bold;
		}
	}

	.link {
		font-size: 1.6rem;
		margin: 2px;
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
	}

	.update {
		background-color: grey;
	}

	.delete {
		background-color: red;
	}


`;


export default SingleCardWrapper;