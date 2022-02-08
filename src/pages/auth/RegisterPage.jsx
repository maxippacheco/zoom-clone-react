import { useDispatch } from "react-redux";
import { register } from "../../actions/auth";
import { useForm } from "../../hooks/useForm";
import { Container, CustomInput, CustomLabel, Form, SubmitButton, Title } from "./AuthStyles";

export const RegisterPage = () => {

	const dispatch = useDispatch();

	const [ loginValues, handleInputChange, reset ] = useForm({
		name: 'Test',
		email: 'test@test.com',
		password: '123456'
	});

	const { name, email, password } = loginValues;

	const onRegister = (ev) => {
		ev.preventDefault();

		dispatch(register(name, email, password));

	};
	


	return (
		<Container>
			<Form onSubmit={ onRegister }>
					<Title>Register</Title>

					<CustomLabel>Name: </CustomLabel>
					<CustomInput 
						type="text"  
						name='name'
						value={ name }
						onChange={ handleInputChange }
					/>
					
					<CustomLabel>Email: </CustomLabel>
					<CustomInput 
						type="email"  
						name='email'
						value={ email }
						onChange={ handleInputChange }

					/>
					
					<CustomLabel>Password: </CustomLabel>
					<CustomInput 
						type="password"  
						name='password'
						value={ password }
						onChange={ handleInputChange }
					/>

					<SubmitButton type="submit">Submit</SubmitButton>
			</Form>
		</Container>
  	);
};

