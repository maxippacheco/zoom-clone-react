import React from 'react';

import { AiOutlineSend } from 'react-icons/ai';
import { MdMeetingRoom } from 'react-icons/md';
import { useSelector } from 'react-redux';

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

export const HomePage = () => {

	const { socketIO } = useSelector( state => state.socket );

	socketIO.emit('test', {
		maximo: 'Hola'
	})

 	return(
		<Container>
			<PrincipalPanel>
				<Title>Join into a room</Title>

				<Form>
					<CustomInput
						type='text' 
						placeholder='Join Room'	
					/>
						
						<SubmitButton type="submit">
							<MdMeetingRoom />
						</SubmitButton>

				</Form>

				<UserData>
					<UserID>
						Your room ID: 34adraer_2323adjas	
					</UserID>

					<div style={{ width: '100%', display: 'flex', justifyContent:'center'}}>
						<CreateRoom>
							Create room
							<AiOutlineSend style={{ marginLeft: '10px'}} />
						</CreateRoom>
					</div>
				</UserData>
			</PrincipalPanel>
		</Container>
  );
};
