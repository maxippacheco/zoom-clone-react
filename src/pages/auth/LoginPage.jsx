import React from 'react';
import { Container, CustomInput, CustomLabel, Form, SubmitButton, Title } from './AuthStyles';

export const LoginPage = () => {
  return (
	  	<Container>
			<Form>
					<Title style={{ margin: '20'}}>Login</Title>
					
					<CustomLabel>Email: </CustomLabel>
					<CustomInput type="email"  />
					
					<CustomLabel>Password: </CustomLabel>
					<CustomInput type="password"  />

					<SubmitButton type="submit">Submit</SubmitButton>
			</Form>
		</Container>
  );
};
