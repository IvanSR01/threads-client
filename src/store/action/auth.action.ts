import { useError, useToastyError } from '@/hook'
import AuthService from '@/services/auth/Auth.service'
import { ILogin, IRegister } from '@/shared/interface/Auth.interface'
import { IUser } from '@/shared/interface/User.interface'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import { removeTokens } from '@/api/tokens.api'
export const login = createAsyncThunk<IUser | undefined, ILogin>(
	'auth/login',
	async ({ login, password }: ILogin, thunkAPI) => {
		try {
			const res = await AuthService.login({ login, password })
			toast.success('Completed successfully')
			console.log(res)
			return res
		} catch (error) {
			useToastyError(error)
			thunkAPI.rejectWithValue(error)
		}
	}
)

export const register = createAsyncThunk<IUser | undefined, IRegister>(
	'auth/register',
	async ({ email, fullName, userName, password }: IRegister, thunkAPI) => {
		try {
			const res = await AuthService.register({
				email,
				fullName,
				userName,
				password
			})
			toast.success('Completed successfully')
			return res
		} catch (error) {
			useToastyError(error)
			thunkAPI.rejectWithValue(error)
		}
	}
)

export const logout = createAsyncThunk<void>('auth/logout', async () => {
	removeTokens()
})

export const checkAuth = createAsyncThunk<IUser>(
	'auth/checkAuth',
	async (_, thunkAPI) => {
		try {
			const res = await AuthService.getNewTokens()
			return res
		} catch (error) {
			if (useError(error) === 'jwt expired') {
				useToastyError(error)
				thunkAPI.dispatch(logout)
			}
			return thunkAPI.rejectWithValue(error)
		}
	}
)
