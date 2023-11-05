import { FC } from 'react'
import { toast } from 'react-toastify'
import Layout from '@/components/Layout/Layout'
import styles from './Home.module.scss'
import Thread from '@/components/thread/Thread'
import { useAuth, useError, useToastyError } from '@/hook'
import { useQuery } from '@tanstack/react-query'
import ThreadService from '@/services/thread/Thread.service'
import { IThread } from '@/shared/interface/Thread.interface'
import { IHome } from '@/shared/interface/Page.interface'


const Home: FC<IHome> = ({ threads }) => {
	return (
		<Layout title={'Threads | Home'} description=''>
				<div className={styles.content}>
						{threads ? (
							<div className={styles.items}>
								{threads.map((item, i: number) => (
									<Thread {...item} key={i} />
								))}
							</div>
						) : (
							<div className={styles.center}>
								Threads not length
							</div>
						)}
				</div>

		</Layout>
	)
}
export default Home
