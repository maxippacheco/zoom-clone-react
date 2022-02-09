import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { errorsReducer } from "./errorsReducer";


export const rootReducer = combineReducers({
   auth: authReducer,
   ui: errorsReducer
})