import { types } from "../types/types";

const initialState = {
	active: false,
	roomId: null,
	users: []
}

export const roomReducer = (state = initialState, action) => {

	switch (action.type) {
		
		case types.joinRoom:
			return{
				...state,
				roomId: action.payload,
				active: true
			}

		case types.connectUser:
			return{
				...state,
				users: [action.payload, ...state.users]
			}

		default:
			return state;
	}

}



