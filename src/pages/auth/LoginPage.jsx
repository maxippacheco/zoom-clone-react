import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';
import { Container, CustomInput, CustomLabel, Form, SubmitButton, Title } from './AuthStyles';

export const LoginPage = () => {
	
	const dispatch = useDispatch();

	const [ loginValues, handleInputChange ] = useForm({
		lEmail: 'test@test.com',
		lPassword: '123456'
	})

	const { lEmail, lPassword } = loginValues;

	const onLogin = ev => { 

		ev.preventDefault();

		dispatch( login(lEmail, lPassword) )
		
	}

 	return (
	  	<Container>
			<Form onSubmit={ onLogin }>
					<Title style={{ margin: '20'}}>Login</Title>
					
					<CustomLabel>Email: </CustomLabel>
					<CustomInput 
						type="email"  
						name='lEmail'
						value={ lEmail }
						onChange={ handleInputChange }
					/>
					
					<CustomLabel>Password: </CustomLabel>
					<CustomInput 
						type="password"  
						name='lPassword'
						value={ lPassword }
						onChange={ handleInputChange }
					/>

					<SubmitButton type="submit">Submit</SubmitButton>
			</Form>
		</Container>
  );
};
