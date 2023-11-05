import { FC } from 'react'
import styles from './Activity.module.scss'
import Layout from '@/components/Layout/Layout'
import { useAction, useAuth } from '@/hook'
import AlertItem from '@/screens/Activity/AlertItem/AlertItem'
import { deleteAll, deleteById } from '@/store/action/alert.action'
import { AiOutlineDelete } from 'react-icons/ai'
import { toast } from 'react-toastify'

const Activity: FC = () => {
	const { user } = useAuth()
	const { useAppDispatch } = useAction()
	const dispatch = useAppDispatch()
	const onClickDelete = (alertId: string) => {
		dispatch(deleteById({ alertId }))
	}
	const onClickDeleteAll = () => {
		dispatch(deleteAll())
	}
	return (
		<Layout title='Threads | Activity' description=''>
			<div className={styles.wrapper}>
				<div className={styles.center} onClick={() => onClickDeleteAll()}>
					<span>Delete All</span>
					<AiOutlineDelete />
				</div>
				<div className={styles.items}>
					{user?.alert ? <>	{user?.alert.map((item, i) => (
						<AlertItem
							{...item}
							key={i}
							onClick={() => onClickDelete(item?._id)}
						/>
					))}</> : <></>}
				</div>
			</div>
		</Layout>
	)
}
export default Activity
