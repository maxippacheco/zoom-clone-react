import Swal from "sweetalert2";
import { fetchSinToken } from "../api/fetch";
import { types } from "../types/types";

export const register = ( name, email, password ) => {
	return async ( dispatch ) => {
		
		const resp = await fetchSinToken('usuarios/', { name, email, password }, 'POST');

		(resp.ok) && 
			Swal.fire('Success', 'The user has been registered in our system', 'success');

		dispatch({
			type: types.register
		})

	};
	  
};

export const login = () => {
  
};


