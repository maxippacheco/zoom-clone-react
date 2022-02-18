import Webcam from 'react-webcam';

import { BsCameraVideo, BsCameraVideoOff, BsChat, BsMic, BsMicMute } from 'react-icons/bs';
import { colors } from '../../theme/app-theme';

import { Container, Main, WithoutCamera, Navbar, Footer, LogOut, CustomInput } from './RoomPageStyles';
import { useCameraSettings } from '../../hooks/useCameraSettings';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

export const RoomPage = () => {

  const { audio, camera, switchAudio, switchCamera } = useCameraSettings(); 
  
  const { user  } = useSelector( state => state.auth);
  const { socketIO  } = useSelector( state => state.socket);

  // const { roomId  } = useSelector( state => state.room);
  
  // const { room_id } = useParams();
  
  // const dispatch = useDispatch();

  useEffect(() => {
    
    socketIO.emit('user-connected-in-room', { user, roomId: user._id });


  }, [socketIO]);

  
  useEffect(() => {
  
    socketIO.on('user-list', (payload) => {
      console.log(payload);

    })

  }, [socketIO])
  



  return (
    <Container>

      <Main>
            <>
              <WithoutCamera style={{ backgroundColor: colors.dark_less}}>
                {
                  camera && user
                    &&  <Webcam height="100%" width="100%" audio={audio} /> 
                }
              </WithoutCamera>
              {/* 
              <WithoutCamera style={{ backgroundColor: colors.dark_less}}>
                {
                  camera && user
                    &&  <Webcam height="100%" width="100%" audio={audio} /> 
                }
              </WithoutCamera> */}
            </>

      </Main>

      <Navbar>
        <form style={{width: '100%',display: 'flex', justifyContent: 'center'}}>
          <CustomInput type="text" />
        </form>

      </Navbar>

      <Footer>
          
          <div>

            {
              camera
              ? <BsCameraVideo style={{ width: 40, height: 40, color: colors.gray, paddingRight: 10}} onClick={switchCamera} />
              : <BsCameraVideoOff style={{ width: 40, height: 40, color: 'red', paddingRight: 10}}    onClick={switchCamera} />
            }
             
            {
              (audio)
                ? <BsMic style={{ width: 40, height: 40, color: colors.gray, cursor: 'pointer'}} onClick={switchAudio} />
                : <BsMicMute style={{ width: 40, height: 40, color: 'red', cursor: 'pointer'}} onClick={switchAudio} />
              
            }
          </div>

          <div>
            <BsChat style={{ width: 40, height: 40, color: colors.gray}} />
          </div>

          <div>
            <LogOut>
              Leave Meating
            </LogOut>
          </div>

      </Footer>
    </Container>
  )
};
