import { IUserInitialState } from '@/shared/interface/User.interface'
import { createSlice } from '@reduxjs/toolkit'
import { login, register, logout, checkAuth } from '../action/auth.action'
import { toggleLike } from '@/store/action/thread.action'
import { toggleSubscription } from '@/store/action/user.action'
import { deleteAll, deleteById } from '@/store/action/alert.action'
import { updateUser } from '@/store/action/user.action'

const initialState: IUserInitialState = {
	user: null,
	isLoading: false
}

const UserSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser: (state, { payload }) => {
			state.user = payload
		}
	},
	extraReducers: builder => {
		builder
			.addCase(register.pending, state => {
				state.isLoading = true
			})
			.addCase(register.fulfilled, (state, { payload }) => {
				state.isLoading = false
				state.user = payload ? payload : null
			})
			.addCase(register.rejected, state => {
				state.isLoading = false
				state.user = null
			})
			.addCase(login.pending, state => {
				state.isLoading = true
			})
			.addCase(login.fulfilled, (state, { payload }) => {
				state.isLoading = false
				state.user = payload ? payload : null
			})
			.addCase(login.rejected, state => {
				state.isLoading = false
				state.user = null
			})
			.addCase(updateUser.fulfilled, (state, {payload}) => {
				state.user = payload ? payload : null
			})
			.addCase(logout.fulfilled, state => {
				state.isLoading = false
				state.user = null
			})
			.addCase(checkAuth.fulfilled, (state, { payload }) => {
				state.user = payload ? payload : null
			})
			.addCase(toggleLike.fulfilled, (state, { payload }) => {
				state.user = payload ? payload : null
			})
			.addCase(toggleSubscription.fulfilled, (state, {payload}) => {
				state.user = payload ? payload : null
			})
			.addCase(deleteById.pending, (state, { payload }) =>  {
				state.isLoading = true
			})
			.addCase(deleteById.fulfilled, (state, { payload }) => {
				state.isLoading = false
				state.user = payload ? payload : null
			})
			.addCase(deleteAll.fulfilled, (state, { payload }) => {
				state.user = payload ? payload : null
			})
	}
})

export default UserSlice.reducer

export const { setUser } = UserSlice.actions
