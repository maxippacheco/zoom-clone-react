import { Container, CustomInput, CustomLabel, Form, SubmitButton, Title } from "./AuthStyles";

export const RegisterPage = () => {


	return (
		<Container>
			<Form>
					<Title>Register</Title>

					<CustomLabel>Name: </CustomLabel>
					<CustomInput type="text"  />
					
					<CustomLabel>Email: </CustomLabel>
					<CustomInput type="email"  />
					
					<CustomLabel>Password: </CustomLabel>
					<CustomInput type="password"  />

					<SubmitButton type="submit">Submit</SubmitButton>
			</Form>
		</Container>
  	);
};

