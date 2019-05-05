import styled from "styled-components";

// SingleCard wrapper styles

const SingleCardWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	width: 320px;
	height: 450px;
	margin: 20px;
	padding: 0 10px;
	font-family: 'Montserrat', sans-serif;
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.17);

	background-color: beige;

	.title {
		width: 107%;
		margin-left: -10px;    // <-- compensates for padding on conatiner
		padding: 10px 0 10px 0;
		color: #fff;
		font-size: 2rem;
		font-weight: bold;
		text-align: center;
		background-color: #DCA67B;
			span { 
				font-weight: bold; 
			}
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
	
		height: 100px;
		width: 100%;
		overflow: scroll-x;
			span { font-weight: bold; } // ** KURT **  I don't believe 'bold' works for this font, may want to try to import another font - Dave V.
			a {
				
				display: inline-block;
				text-decoration: none;
				color: #AC4D00;
				word-wrap: break-word;
				padding: 5px 0;
				height: 60px;
				width: 100%;
			}
	}
	.desc-label {
		font-size: 1.8rem;
		font-weight: bold;
		margin: 10px 0 3px;
		text-align: center;
		width: 100%;
	}
	.desc-text {
		font-size: 1.8rem;
		width: 95%;
		height: 150px;
		border: 1px solid black;
		padding: 10px;
		margin: 10px;
		resize: none;
	}
	button {
		width: 80px;
		height: 30px;
		margin: 10px;
		font-size: 1.8rem;
		color: white;
		border: none;
		cursor: pointer;
	}
	.time {
		text-align: center;
		font-style: italic;
		font-size: 1.2rem;
		width: 100%;
	}
	form { 
		align-self: center;
		margin: 10px 0 14px 0; 
	}
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
