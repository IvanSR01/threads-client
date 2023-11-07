import { FC } from 'react'
import Layout from '@/components/Layout/Layout'
import { IFullThread } from '@/shared/interface/Page.interface'
import styles from './FullThread.module.scss'
import Thread from '@/components/thread/Thread'
import Comment from '@/components/Comment/Comment'

const FullThread: FC<IFullThread> = ({ thread }) => {
	return (
		<Layout title={'Thread'} description={''}>
			<div className={styles.content}>
				<div className={styles.item}>
					<Thread {...thread} />
				</div>
				<h2 className={styles.h2}>
					Comments:
				</h2>
				<div className={styles.item}>
					{thread?.comment?.map((item, i) => <Comment {...item}/>)}
				</div>
			</div>
		</Layout>
	)
}

export default FullThread