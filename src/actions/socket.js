import { io } from "socket.io-client";
import { types } from "../types/types";


export const connectSocket = ( serverPath ) => {

	return ( dispatch ) => {
      
		const token = localStorage.getItem('token');

		if (!token) return;

      const socketTemp = io.connect( serverPath, {
            transports: ['websocket'],
            autoConnect: true,
            forceNew: true,
            query: {
                'x-token': token
            }
      });

		console.log(socketTemp);


      dispatch({
			type: types.connectSocket,
			payload:{
				socket: socketTemp
			}
		})


	}

}


export const disconnectSocket = () => {

	return ( dispatch ) => {

		
	}

}


