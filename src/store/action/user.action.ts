import { createAsyncThunk } from '@reduxjs/toolkit'
import UserService from '@/services/user/User.service'
import { useToastyError } from '@/hook'
import { IUpdate } from '@/shared/interface/Auth.interface'
import { toast } from 'react-toastify'

export const updateUser = createAsyncThunk(
	'user/setUser',
	async (props: IUpdate, thunkAPI)=> {
		try {
			const { data } = await UserService.setProfile(props)
			toast.success('Update success')
			return data
		} catch (e){
			useToastyError(e)
			thunkAPI.rejectWithValue(e)
		}
	}
)
export const toggleSubscription = createAsyncThunk(
	'user/toggleSubscription',
	async ({ subId }: { subId: string | undefined}, thunkAPI) => {
		try {
			const { data } = await UserService.setSubscription(subId)
			return data
		} catch (e) {
			useToastyError(e)
			return thunkAPI.rejectWithValue(e)
		}
	}
)

