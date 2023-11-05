import Profile from '@/screens/User/Profile/Profile'
import { NextPageAuth } from '@/shared/types/auth.types'
import { IProfile } from '@/shared/interface/Page.interface'

const ProfilePage: NextPageAuth<IProfile> = () => {
	return <Profile  />
}


ProfilePage.isOnlyUser = true
export default ProfilePage