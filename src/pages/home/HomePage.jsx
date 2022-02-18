import React from 'react';

import { AiOutlineSend } from 'react-icons/ai';
import { MdMeetingRoom } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { joinRoom } from '../../actions/room';
import { useForm } from '../../hooks/useForm';
import { v4 as uuidv4 } from 'uuid';
import { 
	Container, 
	CreateRoom,
	CustomInput, 
	Form, 
	PrincipalPanel, 
	SubmitButton, 
	Title, 
	UserData, 
	UserID 
} from './HomePageStyles';
import { useEffect } from 'react';
import { types } from '../../types/types';

export const HomePage = () => {

	const dispatch = useDispatch();
	const auth = useSelector( state => state.auth );
	const { active, roomId } = useSelector( state => state.room );
	const { socketIO } = useSelector( state => state.socket );
	
	const { user } = auth;
	const navigate = useNavigate();

	const [ formValues , handleInputChange ] = useForm({
		joinRoomId: ''
	});

	const { joinRoomId } = formValues;

	useEffect(() => {
		// socketIO.on('create-room', (payload) => {
			dispatch({
				type: types.joinRoom,
				payload: user._id
			});
		// });			  
	}, [])
	
	
	const onCreateRoom = () => {
		

		(active) &&
			navigate(`/room/${ roomId }`)
		
	}
	

	const onJoinRoom = ev => {
		ev.preventDefault();

		const roomId = joinRoomId;

		( !roomId )
			&& Swal.fire('Error', 'Not valid ID', 'error');

		dispatch( joinRoom(roomId) );

		(active) &&
			navigate(`/room/${ roomId }`)


	}



 	return(
		<Container>
			<PrincipalPanel>
				<Title>Join into a room</Title>

				<Form onSubmit={ onJoinRoom }>
					<CustomInput
						type='text' 
						placeholder='Join Room'
						name='joinRoomId'
						value={ joinRoomId }
						onChange={ handleInputChange }
					/>
						
						<SubmitButton type="submit">
							<MdMeetingRoom />
						</SubmitButton>

				</Form>

				<UserData>
					<UserID>
						Your room ID: { `${ (roomId) && roomId }` }	
					</UserID>

					<div style={{ width: '100%', display: 'flex', justifyContent:'center'}}>
						<CreateRoom onClick={ onCreateRoom }>
							Create room
							<AiOutlineSend style={{ marginLeft: '10px'}} />
						</CreateRoom>
					</div>
				</UserData>
			</PrincipalPanel>
		</Container>
  );
};
