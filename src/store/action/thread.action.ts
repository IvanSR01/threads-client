import { createAsyncThunk } from '@reduxjs/toolkit'
import ThreadService from '@/services/thread/Thread.service'
import { useToastyError } from '@/hook'

export const toggleLike = createAsyncThunk(
	'thread/toggleLike',
	async (threadId: string, thunkAPI) => {
		try {
			const { data } = await ThreadService.toggleLikeThread(threadId)
			return data
		} catch (error) {
			useToastyError(error)
			thunkAPI.rejectWithValue(error)
		}
	}
)
