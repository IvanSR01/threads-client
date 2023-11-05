import { createAsyncThunk } from '@reduxjs/toolkit'
import AlertService from '@/services/alert/Alert.service'
import { useToastyError } from '@/hook'

type TypeDeleteId = {
	alertId: string
}
export const deleteById = createAsyncThunk(
	'alert/DeleteById',
	async ({ alertId }: TypeDeleteId, thunkAPI) => {
		try {
			const { data } = await AlertService.deleteById(alertId)
			return data
		} catch (e) {
			useToastyError(e)
			thunkAPI.rejectWithValue(e)
		}
	}
)
export const deleteAll = createAsyncThunk(
	'alert/DeleteAll',
	async (_, thunkAPI) => {
		try {
			const { data } = await AlertService.deleteAllAlerts()
			return data
		} catch (e) {
			useToastyError(e)
			thunkAPI.rejectWithValue(e)
		}
	}
)