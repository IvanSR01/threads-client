import { GetStaticProps, NextPage } from 'next'
import Search from '@/screens/Search/Search'
import { ISearchPage } from '@/shared/interface/Page.interface'
import UserService from '@/services/user/User.service'
import ThreadService from '@/services/thread/Thread.service'


export const getStaticProps: GetStaticProps = async () => {
	const { data: users } = await UserService.getAllUser()
	const { data: threads } = await ThreadService.getAllThread()
	return {
		props: {
			users, threads
		}
	}
}
const SearchPage: NextPage<ISearchPage> = ({ users, threads }) => {
	return (
		<Search users={users} threads={threads}/>
	)
}
export default SearchPage