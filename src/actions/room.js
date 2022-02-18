import { uuidv4 as v4 } from 'uuid';
import { types } from '../types/types';




export const joinRoom = (room_id) => ({
	type: types.joinRoom,
	payload: room_id
})

export const connectUser = (userId) => ({
	type: types.connectUser,
	payload: userId
})

// const createRoom = () => { second }

// const leaveRoom = () => { second }