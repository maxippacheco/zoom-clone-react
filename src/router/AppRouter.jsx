import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/home/HomePage";
import { RoomPage } from "../pages/room/RoomPage";
import { AuthRouter } from "./AuthRouter";
import {createBrowserHistory} from 'history';
import {unstable_HistoryRouter as HistoryRouter} from 'react-router-dom';
import { useSelector } from "react-redux";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import { useDispatch } from "react-redux";
import { connectSocket } from "../actions/socket";

// This history is created with this implementation because react router dom v6 doesnt have one, this was the way I've found to connect it with external components
export let history = createBrowserHistory();


export const AppRouter = () => {

	const dispatch = useDispatch();
	const auth = useSelector( state => state.auth );

	if (auth.authenticated) {
		dispatch(connectSocket('http://localhost:8080/'))		
	}
	
	return(
		<HistoryRouter history={history}>
			<Routes>
				<Route path="/room/:room_id" element={
					<PrivateRoute isAuthenticated={ auth.authenticated }>
						<RoomPage />
					</PrivateRoute>
				
				}/>

				<Route path="/" element={
					<PrivateRoute isAuthenticated={ auth.authenticated }>
						<HomePage /> 
					</PrivateRoute>

				}/>	
				<Route path="/auth/*" element={
					<PublicRoute isAuthenticated={ auth.authenticated }>
						<AuthRouter /> 

					</PublicRoute>
				}/>	
				<Route path="/*" element={<Navigate to='/' />}  />	
			</Routes>	
		</HistoryRouter>
  );
};
