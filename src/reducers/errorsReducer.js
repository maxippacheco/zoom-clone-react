import { types } from "../types/types";

const initialState = {
	msgError: null
}

export const errorsReducer = (state = initialState, action) => {
	
	switch ( action.type ) {
		case types.addError:
			return{
				...state,
				msgError: {
					...action.payload.errors
				}	
			}
			
		case types.removeError:
			return {
				...state,
				msgError: null
			}
	
		default:
			return state;
	}
};
