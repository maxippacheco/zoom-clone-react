import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { errorsReducer } from "./errorsReducer";
import { socketReducer } from "./socketReducer";


export const rootReducer = combineReducers({
   auth: authReducer,
   ui: errorsReducer,
   socket: socketReducer
})