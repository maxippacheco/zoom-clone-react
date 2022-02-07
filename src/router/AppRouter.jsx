import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/home/HomePage";
import { RoomPage } from "../pages/room/RoomPage";
import { AuthRouter } from "./AuthRouter";

export const AppRouter = () => {
  return(
		<BrowserRouter>
			<Routes>
				<Route path="/room/:room_id" element={<RoomPage />} />	
				<Route path="/" element={<HomePage />} />	
				<Route path="/auth/*" element={<AuthRouter /> } />	
				<Route path="/*" element={<Navigate to='/' />}  />	
			</Routes>	
		</BrowserRouter>
  );
};
