import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/home/HomePage";
import { RoomPage } from "../pages/room/RoomPage";
import { AuthRouter } from "./AuthRouter";
import {createBrowserHistory} from 'history';
import {unstable_HistoryRouter as HistoryRouter} from 'react-router-dom';

// This history is created with this implementation because react router dom v6 doesnt have one, this was the way I've found to connect it with external components
export let history = createBrowserHistory();


export const AppRouter = () => {
  return(
		<HistoryRouter history={history}>
			<Routes>
				<Route path="/room/:room_id" element={<RoomPage />} />	
				<Route path="/" element={<HomePage />} />	
				<Route path="/auth/*" element={<AuthRouter /> } />	
				<Route path="/*" element={<Navigate to='/' />}  />	
			</Routes>	
		</HistoryRouter>
  );
};
