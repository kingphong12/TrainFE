import { combineReducers } from "redux"
import countryReducer from "./coutryReducer"
import userReducer from "./user"
const rootReducer = combineReducers({
  user: userReducer,
  country: countryReducer
})

export default rootReducer
