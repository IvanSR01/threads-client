import Home from '@/screens/Home/Home'
import type { GetStaticProps, NextPage } from 'next'
import ThreadService from '@/services/thread/Thread.service'
import { useToastyError } from '@/hook'
import { IHome } from '@/shared/interface/Page.interface'

const index: NextPage<IHome> = ({ threads }) => {
	return <Home threads={threads} />
}
export const getStaticProps: GetStaticProps = async () => {
	try {
		const { data: threads } = await ThreadService.getAllThread()
		return {
			props: {
				threads
			},
			revalidate: 10
		}
	} catch (e) {
		useToastyError(e)
		return {
			props: {
				threads: []
			},
			revalidate: 10
		}
	}
}

export default index
