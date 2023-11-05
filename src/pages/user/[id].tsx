import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { IUserPage } from '@/shared/interface/Page.interface'
import User from '@/screens/User/User/User'
import UserService from '@/services/user/User.service'
import NotFound from '@/screens/Not Found/NotFound'
import ThreadService from '@/services/thread/Thread.service'

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const { data: user } = await UserService.getUserById(String(params?.id))
	const { data: threads } = await ThreadService.getByAuthor(String(params?.id))
	return {
		props: {
			user, threads
		},
		revalidate: 60
	}
}
export const getStaticPaths: GetStaticPaths = async () => {
	try {
		const { data: users } = await UserService.getAllUser()
		const paths = users.map((item) => ({
			params: { id: item._id },
		}))

		return {
			paths,
			fallback: true
		}
	} catch (e) {
		return {
			paths: [],
			fallback: 'blocking'
		}
	}
}

const UserPage: NextPage<IUserPage> = ({ user, threads }) => {
	return user ? <User user={user} threads={threads} /> : <NotFound />
}
export default UserPage