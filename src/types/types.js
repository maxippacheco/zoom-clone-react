

export const types = {
	register: '[ AUTH ] Register',
	login: '[ AUTH ] Login',

	startChecking: '[ CHECKING ] Start checking',
	finishChecking: '[ CHECKING ] Finish checking',

	addError: '[ ERROR ] New Error',
	removeError: '[ ERROR ] Errors removed',

	connectSocket: '[ SOCKET ] Connect Socket',
	disconnectSocket: '[ SOCKET ] Disconnect Socket',

	createRoom: '[ ROOM ] Create Room',
	joinRoom:   '[ ROOM ] Join Room',
	connectUser: '[ ROOM ] Connect user',
	leaveRoom:  '[ ROOM ] Leave Room'
}