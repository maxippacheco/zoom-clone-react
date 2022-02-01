import Webcam from 'react-webcam';
import styled from 'styled-components';
import './App.css';

export const ZoomApp = () => {
  return (
    <Container>

      <Main>

          {
            (true)
            ?
            <>
              <WithoutCamera />
              <WithoutCamera />
            </>

            :
            <>
              <VideoItem></VideoItem>
              <VideoItem></VideoItem>
            </>

          }
      </Main>

      <Navbar>

      </Navbar>

      <Footer>
        
      </Footer>
    </Container>
  );
};

export default ZoomApp;


const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-columns: repeat(3, 1fr) 0.8fr;
  grid-template-rows: repeat(3, 1fr) 0.3fr;
  grid-template-areas: 
                      "main main main navbar"
                      "main main main navbar"
                      "main main main navbar"
                      "footer footer footer footer"
  ;


  @media only screen and ( max-width: 1160px ){
    grid-template-columns: 1fr;
    grid-template-rows: 0.9fr 0.1fr;
    grid-template-areas: 
      "main" "footer"
    ;
    gap: 0
  }
`;


const Main = styled.main`
  grid-area: main;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-color:#1b1b25;

`;

const VideoItem = styled(Webcam)`
  min-width: 50%;
  max-height: 55%;
  padding-left: 10;

`;

const WithoutCamera = styled.div`
  width: 45%;
  height: 55%;
  background-color: red;
  margin: 10px;

  @media only screen and ( max-width: 770px ){
    flex-direction: row;
    width: 70%;
    height: 40%;
  }

`;


const Navbar = styled.nav`
  grid-area: navbar; 
  background-color: yellow;
`;

const Footer = styled.footer`
  grid-area: footer; 
  background-color:  #232333;
`;