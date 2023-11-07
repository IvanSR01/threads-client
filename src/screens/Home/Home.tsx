import Layout from '@/components/Layout/Layout'
import Thread from '@/components/thread/Thread'
import { IHome } from '@/shared/interface/Page.interface'
import { FC } from 'react'
import styles from './Home.module.scss'


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
