import Swal from "sweetalert2";
import { fetchSinToken } from "../api/fetch";
import { history } from "../router/AppRouter";
import { types } from "../types/types";



export const register = ( name, email, password ) => {
	
	return async ( dispatch ) => {
	
		try {
			const resp = await fetchSinToken('usuarios/', { name, email, password }, 'POST');
		
			if(resp.ok){
				Swal.fire('Success', 'The user has been registered in our system', 'success').then(result => {
					if (result.isConfirmed) {
						history.push('/auth/login');	
					}
				});
	
				dispatch({
					type: types.removeError
				})
				
				dispatch({
					type: types.register
				});	
				
			}else{
	
					dispatch({
						type: types.addError,
						payload:{
							errors: resp.errors
						}
					})	
	
					Swal.fire('Error', resp.errors.errors[0].msg, 'error');
	

	
			}
			
			


		} catch (error) {
			console.log(error);
		}

		

	};
	  
};

export const login = () => {
  
};


