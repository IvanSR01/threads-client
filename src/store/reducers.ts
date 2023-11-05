import { combineReducers } from '@reduxjs/toolkit'
import userSlice from './slice/user.slice'
const reducers = {
	user: userSlice
}

const reducer = combineReducers(reducers)

export default reducer