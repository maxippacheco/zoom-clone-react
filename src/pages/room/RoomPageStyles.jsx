import styled from 'styled-components';
import { colors } from '../../theme/app-theme';


export const Container = styled.div`
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


export const Main = styled.main`
  grid-area: main;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-color:#1b1b25;

`;


export const WithoutCamera = styled.div`
  width: 45%;
  height: 55%;
  background-color: ${colors.dark_less};
  margin: 10px;
  border-radius: 10px;

  @media only screen and ( max-width: 771px ){
    flex-direction: row;
    width: 60%;
    height: 40%;
  }

`;


export const Navbar = styled.nav`
  grid-area: navbar; 
  background-color: ${colors.dark_less};
  display: flex;
  align-items: flex-end;
`;

export const Footer = styled.footer`
  grid-area: footer; 
  background-color:  ${colors.dark_less};
  display: flex;
  justify-content: space-around;
  align-items: center;

`;

export const LogOut = styled.p`
   
  font-size: 17px; 
  color: red; 
  font-weight: normal;

  
  @media only screen and ( max-width: 660px ){
    font-size: 16px;
  } 
`;

export const CustomInput = styled.input`

  width: 90%;
  margin-bottom: 15px;
  border: none;
  background-color: ${colors.dark_less};
  border-bottom: 2px solid ${colors.gray};
  color: white;
  font-size: 20px;
  padding: 8px;

  &:focus{
    outline: none;
  }

  @media only screen and ( max-width: 1160px ){
    display: none;
  }
`;