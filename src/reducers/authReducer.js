import { types } from "../types/types";

const initialState = {
	user: null,
	token: null,
	checking: false
}


export const authReducer = (state = initialState, action) => {
	
	switch (action.type) {
		
		case types.login:
			return{
				...state,
				user: action.payload.user,
				token: action.payload.token,
				checking: false
			}

		default:
			return state;
	}

};
