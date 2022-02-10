import { types } from "../types/types";

const initialState = {
	socketIO: null,
	online: false
}

export const socketReducer = (state = initialState, action) => {

	switch (action.type) {
		case types.connectSocket:
			return{
				...state,
				socketIO: action.payload.socket,
				online: true
			}
	
		
		case types.disconnectSocket:
			return{
				...state,
				socket: action.payload.socket,
				online: false
			}

		default:
			return state;
	}

}

