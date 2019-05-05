import styled from "styled-components";

// Login form wrapper styles

const LoginWrapper = styled.div`

	margin-top: 20px;

	p {
		font-size: 2rem;
		background-color: beige;
		padding: 20px;
		border-radius: 5px;
	}
	.error {
		background-color: beige;
		color: red;
		padding: 20px;
		border-radius: 5px;
	}
	form {
        background: #dca67b; /* Old browsers */
        background: -moz-linear-gradient(-45deg, #dca67b 0%, #ac4d00 100%); /* FF3.6-15 */
        background: -webkit-linear-gradient(-45deg, #dca67b 0%,#ac4d00 100%); /* Chrome10-25,Safari5.1-6 */
        background: linear-gradient(135deg, #dca67b 0%,#ac4d00 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#dca67b', endColorstr='#ac4d00',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
        -webkit-box-shadow: 1px 10px 20px -6px rgba(0,0,0,0.86);
        -moz-box-shadow: 1px 10px 20px -6px rgba(0,0,0,0.86);
        box-shadow: 1px 10px 20px -6px rgba(0,0,0,0.86);
		margin-top: 20px;
		padding: 10px;
		display: flex;
		flex-direction: column;
		align-items: center;
		font-size: 1.8rem;
		
        border-radius: 5px;
		div {
			display: flex;
			flex-direction: row;
			justify-content: flex-end;
			align-items: center;
		
			label {
				width: 100px;
				margin: 10px 0 10px 10px;
			}
			input {
				width: 240px;
				height: 30px;
				margin: 10px;
				font-size: 1.6rem;
                border-radius: 5px;
			}
            button:hover{
            background-color: #dca67b;
            }
            button:active {
                background-color: #AC4D00;
            }
		}
		button {
			font-size: 1.6rem;
			margin: 10px;
		}
	}
`;


export default LoginWrapper;