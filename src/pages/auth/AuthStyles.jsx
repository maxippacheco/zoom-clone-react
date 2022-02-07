
import styled from "styled-components";
import { colors } from "../../theme/app-theme";


export const Container = styled.div`
	height: 100vh;
	width: 100vw;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${colors.dark};
`;

export const Form = styled.form`
	width: 35%;
	height: 70%;
	background-color: ${colors.dark_less};
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	border-radius: 10px;

	@media only screen and ( max-width: 1058px ){
		width: 70%;
		height: 75%;
	}

	@media only screen and ( max-width: 608px ){
		width: 90%;
	}
	
	@media only screen and ( max-height: 600px ){
		height: 90%;
	}
	
	@media only screen and ( max-width: 375px ){
		height: 90%;
	}
`;



export const Title = styled.h1`
	text-align: center;
	color: ${colors.white};
	font-weight: normal;
	font-size: 50px;
	margin: 0;

	@media only screen and ( max-height: 600px ){
	}
`;


export const CustomInput = styled.input`
	width: 60%;
	margin-bottom: 20px;
	padding: 20px;
	border: 1px solid ${colors.gray};
	background-color: ${colors.dark_less};
	font-size: 17px;
	color: ${colors.white};

	&:focus{
		outline: 1px solid ${colors.white};
	}
	
	@media only screen and ( max-width: 608px ){
		width: 75%;
	}
`;

export const CustomLabel = styled.label`
	width: 65%;
	margin-bottom: 10px;
	font-size: 25px;
	text-align: left;
	color: ${colors.white};

	@media only screen and ( max-width: 608px ){
		width: 80%;
	}
`;

export const SubmitButton = styled.button`
	width: 30%;
	margin-top: 10px;
	padding: 20px 12px;
	border: 0;
	font-size: 18px;
	background-color: ${colors.gray};
	color: ${colors.white};
	border-radius: 8px;

	@media only screen and ( max-width: 608px ){
		width: 50%;
	}

`;