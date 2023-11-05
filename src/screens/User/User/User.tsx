import { FC, useState } from 'react'
import styles from '../User.module.scss'
import Layout from '@/components/Layout/Layout'
import { IUserPage } from '@/shared/interface/Page.interface'
import { useAction, useActiveState, useGetImgUrl, useToastyError, useUserRedirect } from '@/hook'
import Thread from '@/components/thread/Thread'
import UserHeader from '@/screens/User/UserHeader'
import { toggleSubscription } from '@/store/action/user.action'

const User: FC<IUserPage> = ({ user, threads }) => {
	useUserRedirect(user)
	const url = useGetImgUrl(user?.img)
	const activeState = useActiveState({ ids: user?._id, type: 'sub' })
	const { useAppDispatch } = useAction()
	const dispatch = useAppDispatch()
	const onClickSub = () => {
		if(user) {
			return dispatch(toggleSubscription({subId: user?._id}))
		}
		useToastyError('Please sing in')
	}
	return (
		<Layout title={'Threads | User'} description={''}>
			<div className={styles.wrapper}>
				<div className={styles.content}>
					<div className={styles.user}>
						<UserHeader active={activeState} onClick={() => onClickSub()} url={url} user={user} button={activeState ? 'Unsubscribe user' : 'Following user'}/>
						<main className={styles.main}>
							<div className={styles.items}>
								{threads.map((item, i) => (
									<Thread {...item} key={i}/>
								))}
							</div>
						</main>
					</div>
				</div>
			</div>
		</Layout>
	)
}
export default User