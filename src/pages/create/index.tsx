import { NextPageAuth } from '@/shared/types/auth.types'
import Add from '@/screens/Threads/Add/Add'


const CreatePage: NextPageAuth = () => {
	return (
		<Add/>
	)
}
CreatePage.isOnlyUser = true
export  default  CreatePage