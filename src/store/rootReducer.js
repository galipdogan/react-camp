//tüm stateleri topladığım yer

import { combineReducers } from "redux";
import carReducer from "./reducers/cartReducer";

const rootReducer=combineReducers({
    cart:carReducer
})

export default rootReducer;