import { types } from "../types/types";

const initialState = {
	user: null,
	token: null,
	checking: false,
	authenticated: false
}


export const authReducer = (state = initialState, action) => {
	
	switch (action.type) {
		
		case types.login:
			return{
				...state,
				user: action.payload.user,
				token: action.payload.token,
				authenticated: true,
				checking: false
			}

		case types.startChecking:
			return{
				...state,
				checking: true
			}
			
		case types.finishChecking:
			return{
				...state,
				checking: false
			}
			
		default:
			return state;
	}

};
