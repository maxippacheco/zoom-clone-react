import styled from "styled-components";
import { colors } from "../../theme/app-theme";

export const Container = styled.main`
	height: 100vh;
	width: 100vw;
	background-color: ${colors.dark};
	display: flex;
	justify-content: center;
	align-items: center;	
`;

export const PrincipalPanel = styled.div`
	width: 40%;
	height: 70%;
	background-color: ${ colors.dark_less };
	border-radius: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	@media only screen and ( max-width: 1042px ){
		width: 60%;
	}

	@media only screen and ( max-width: 734px ){
		width: 80%;
	}

	@media only screen and ( max-width: 536px ){
		width: 90%;
	}

`;


export const Title = styled.h1`
	text-align: center;
	color: ${colors.white};
	font-weight: normal;
	font-size: 40px;
	/* margin: 0; */
`;

export const Form = styled.form`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const CustomInput = styled.input`
	width: 50%;
	padding: 16px 8px;
	background-color: ${ colors.dark_less };
	border: 0;
	font-size: 20px;
	border-bottom: 2px solid ${ colors.white};
	color: ${ colors.white };
	margin-bottom: 20px;

	&::placeholder{
		color: ${ colors.gray };
	}

	&:focus{
		outline: none;
	}

`;

export const SubmitButton = styled.button`
	border: 0;
	background-color: ${colors.primary_color};
	color: ${ colors.white };
	font-size: 30px;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-left: 10px;
	border-radius: 999px;
	height: 43px;
	

	&:hover{
		cursor: pointer;
		background-color: #1158af;
	}
`;

export const UserData = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	flex-direction: column;
	text-align: center;
`;

export const UserID = styled.span`
	margin-top: 20px;
	margin-bottom: 20px;
	font-size: 23px;
	color: ${ colors.primary_color };
	
	@media only screen and ( max-width: 420px ){
		font-size: 18px;
	}
`;


export const CreateRoom = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 40%;
	padding: 12px 8px;
	margin-top: 20px;
	border: 0;
	font-size: 19px;
	color: white;
	background-color: ${ colors.primary_color };
	border-radius: 10px;

	&:hover{
		cursor: pointer;
		background-color: #1158af;
	}


	@media only screen and ( max-width: 420px ){
		width: 60%;
	}
`;