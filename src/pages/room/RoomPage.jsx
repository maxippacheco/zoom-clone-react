import React, { useState } from 'react';
import Webcam from 'react-webcam';

import { BsCameraVideo, BsCameraVideoOff, BsChat, BsMic, BsMicMute } from 'react-icons/bs';
import { colors } from '../../theme/app-theme';

import { Container, Main, WithoutCamera, Navbar, Footer, LogOut, CustomInput } from './RoomPageStyles';
import { useCameraSettings } from '../../hooks/useCameraSettings';

export const RoomPage = () => {

  const { audio, camera, switchAudio, switchCamera } = useCameraSettings(); 

  return (
    <Container>

      <Main>
            <>
              <WithoutCamera style={{ backgroundColor: colors.dark_less}}>
                {
                  camera
                    &&  <Webcam height="100%" width="100%" audio={audio} /> 
                }
              </WithoutCamera>

              <WithoutCamera style={{ backgroundColor: colors.dark_less}}>
                {
                  camera
                    &&  <Webcam height="100%" width="100%" audio={audio} /> 
                }
              </WithoutCamera>
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
