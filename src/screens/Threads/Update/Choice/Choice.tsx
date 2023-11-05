import { FC } from 'react'
import Layout from '@/components/Layout/Layout'
import styles from './Chocie.module.scss'
import { useQuery } from '@tanstack/react-query'
import ThreadService from '@/services/thread/Thread.service'
import Thread from '@/components/thread/Thread'
import { useRouter } from 'next/router'

const Choice: FC = () => {
	const { data } = useQuery(['thre'], () => ThreadService.getMeThread())
	const { push } = useRouter()
	const onClickPush = (_id: string) => {
		push(`/update/${_id}`)
	}
	return (
		<Layout title={'Thread | Update'} description={''}>
				<div className={styles.content}>
					{data?.map((item, i) => (
							<Thread {...item} key={i} onClick={() => onClickPush(item._id)} className={styles.item}/>
					))}
				</div>
		</Layout>
	)
}
export default Choice