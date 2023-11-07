import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import FullThread from '@/screens/Threads/FullThread/FullThread'
import { IFullThread } from '@/shared/interface/Page.interface'
import ThreadService from '@/services/thread/Thread.service'


export const getStaticProps: GetStaticProps = async ({ params }) => {
	try {
		const { data: thread } = await ThreadService.getThreadsById(params?.id?.toString())
		return {
			props: {
				thread
			},
			revalidate: 10
		}
	} catch (e) {
		return {
			props: {
				thread: {}
			},
			revalidate: 10
		}
	}
}

export const getStaticPaths: GetStaticPaths = async () => {
	try {
		const { data: users } = await ThreadService.getAllThread()
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

const FullThreadPage: NextPage<IFullThread> = ({thread}) => {
	return (
		<FullThread thread={thread}/>
	)
}

export default FullThreadPage