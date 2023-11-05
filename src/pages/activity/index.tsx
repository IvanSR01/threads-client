import Activity from '@/screens/Activity/Activity'
import type { NextPageAuth } from '@/shared/types/auth.types'

const ActivePage: NextPageAuth = () => {
	return (
			 <Activity/>
		)
}

ActivePage.isOnlyUser = true
export default ActivePage